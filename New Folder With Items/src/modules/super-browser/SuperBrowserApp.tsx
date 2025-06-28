import React, { useState, useRef, KeyboardEvent, useEffect } from "react";
import { invoke } from "@tauri-apps/api/core";
import { useHeaderStore } from "@/store/headerStore"; // Import store của header
import {
  LuArrowLeft,
  LuArrowRight,
  LuRefreshCw,
  LuLoader,
  LuZap,
  LuEraser, // Icon cho nút xóa cookie
} from "react-icons/lu";
import "./SuperBrowserApp.css";

const DEFAULT_URL = "https://audience.ahaslides.com/d7loturvdk";

// Component chứa các nút điều khiển sẽ được hiển thị trên Header
const SuperBrowserHeaderControls: React.FC<{
  onEnableButtons: () => void;
  onResetAndRevote: () => void;
}> = ({ onEnableButtons, onResetAndRevote }) => {
  return (
    <>
      <button
        onClick={onEnableButtons}
        className="header-action-button"
        title="Enable All Disabled Buttons"
      >
        <LuZap size={18} />
        <span>Enable Buttons</span>
      </button>
      <button
        onClick={onResetAndRevote}
        className="header-action-button"
        title="Clear cookies and reload to vote again"
      >
        <LuEraser size={18} />
        <span>Reset & Revote</span>
      </button>
    </>
  );
};

const SuperBrowserApp: React.FC = () => {
  // Lấy các hàm từ store của header
  const { setControls, clearControls } = useHeaderStore();

  // Các state của trình duyệt
  const [urlInput, setUrlInput] = useState<string>(DEFAULT_URL);
  const [activeUrl, setActiveUrl] = useState<string>(DEFAULT_URL);
  const [history, setHistory] = useState<string[]>([DEFAULT_URL]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // --- LOGIC CỦA TRÌNH DUYỆT (Không thay đổi nhiều) ---
  const handleLoadUrl = (urlToLoad: string) => {
    let finalUrl = urlToLoad.trim();
    if (!finalUrl) return;
    if (!/^https?:\/\//i.test(finalUrl)) finalUrl = "https://" + finalUrl;
    setIsLoading(true);
    setActiveUrl(finalUrl);
    if (finalUrl !== history[currentIndex]) {
      const newHistory = history.slice(0, currentIndex + 1);
      newHistory.push(finalUrl);
      setHistory(newHistory);
      setCurrentIndex(newHistory.length - 1);
    }
    setUrlInput(finalUrl);
  };
  const handleGo = () => handleLoadUrl(urlInput);
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") handleGo();
  };
  const goBack = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setIsLoading(true);
      setActiveUrl(history[newIndex]);
      setUrlInput(history[newIndex]);
    }
  };
  const goForward = () => {
    if (currentIndex < history.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setIsLoading(true);
      setActiveUrl(history[newIndex]);
      setUrlInput(history[newIndex]);
    }
  };
  const handleReload = () => handleLoadUrl(activeUrl);
  const handleIframeLoad = () => setIsLoading(false);

  // --- LOGIC CHO CÁC NÚT ĐIỀU KHIỂN MỚI ---
  const handleEnableAllButtons = async () => {
    const scriptToExecute = `
      (function() { /* ... Script không đổi ... */ })();
    `;
    try {
      await invoke("execute_javascript", { script: scriptToExecute });
    } catch (error) {
      console.error("Failed to invoke Tauri command:", error);
    }
  };

  const handleResetAndRevote = async () => {
    try {
      console.log("Invoking 'clear_cookies' command...");
      await invoke("clear_cookies");
      console.log("Cookies cleared successfully. Reloading page...");
      // Sau khi xóa cookie thành công, tải lại trang
      handleReload();
      alert(
        "Đã xóa cookie! Trang sẽ được tải lại để bạn có thể bình chọn lần nữa."
      );
    } catch (error) {
      console.error("Failed to clear cookies:", error);
      alert("Lỗi: Không thể xóa cookie. Xem Console để biết chi tiết.");
    }
  };

  // --- GỬI CÁC NÚT ĐIỀU KHIỂN LÊN HEADER ---
  useEffect(() => {
    // Khi component này được hiển thị, hãy đặt các nút điều khiển vào header
    setControls(
      <SuperBrowserHeaderControls
        onEnableButtons={handleEnableAllButtons}
        onResetAndRevote={handleResetAndRevote}
      />
    );

    // Khi component này bị ẩn đi (ví dụ chuyển sang module khác),
    // hãy xóa các nút điều khiển khỏi header
    return () => {
      clearControls();
    };
  }, [setControls, clearControls]); // Phụ thuộc không đổi

  return (
    <div className="super-browser-container">
      {/* Thanh điều khiển địa chỉ đã được tinh gọn */}
      <div className="browser-controls">
        <button
          onClick={goBack}
          disabled={currentIndex === 0}
          className="nav-button"
        >
          <LuArrowLeft />
        </button>
        <button
          onClick={goForward}
          disabled={currentIndex === history.length - 1}
          className="nav-button"
        >
          <LuArrowRight />
        </button>
        <button
          onClick={handleReload}
          disabled={!activeUrl}
          className="nav-button"
        >
          {isLoading ? <LuLoader className="spinner" /> : <LuRefreshCw />}
        </button>
        <input
          type="text"
          className="address-bar"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter a URL and press Enter"
        />
        <button className="go-button" onClick={handleGo}>
          Go
        </button>
      </div>

      {/* Iframe không đổi */}
      <iframe
        ref={iframeRef}
        src={activeUrl}
        className="web-iframe"
        title="Super Browser View"
        onLoad={handleIframeLoad}
        onError={() => setIsLoading(false)}
      />
      {isLoading && (
        <div className="loading-overlay">
          <LuLoader className="spinner" size={48} />
        </div>
      )}
    </div>
  );
};

export default SuperBrowserApp;
