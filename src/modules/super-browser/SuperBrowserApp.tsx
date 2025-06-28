// Ghi đè file: src/modules/super-browser/SuperBrowserApp.tsx

import React, { useState, useRef, KeyboardEvent, useEffect } from "react";
import { invoke } from "@tauri-apps/api/core";
import { useHeaderStore } from "@/store/headerStore";
import {
  LuArrowLeft,
  LuArrowRight,
  LuRefreshCw,
  LuLoader,
  LuZap,
  LuEraser,
  LuScan, // Thêm icon mới
} from "react-icons/lu";
import "./SuperBrowserApp.css";

const DEFAULT_URL = "https://audience.ahaslides.com/d7loturvdk";

// Component chứa các nút điều khiển sẽ được hiển thị trên Header
const SuperBrowserHeaderControls: React.FC<{
  onEnableButtons: () => void;
  onResetAndRevote: () => void;
  onInspectOnclicks: () => void; // Thêm prop mới
}> = ({ onEnableButtons, onResetAndRevote, onInspectOnclicks }) => {
  return (
    <>
      {/* Nút mới để quét sự kiện */}
      <button
        onClick={onInspectOnclicks}
        className="header-action-button"
        title="Inspect all onclick listeners on the page"
      >
        <LuScan size={18} />
        <span>Inspect Onclicks</span>
      </button>

      {/* Các nút cũ */}
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
  const { setControls, clearControls } = useHeaderStore();

  const [urlInput, setUrlInput] = useState<string>(DEFAULT_URL);
  const [activeUrl, setActiveUrl] = useState<string>(DEFAULT_URL);
  const [history, setHistory] = useState<string[]>([DEFAULT_URL]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // --- LOGIC CỦA TRÌNH DUYỆT (Không thay đổi) ---
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

  // --- LOGIC CHO CÁC NÚT ĐIỀU KHIỂN ---
  const handleEnableAllButtons = async () => {
    const scriptToExecute = `
      (function() {
        const disabledElements = document.querySelectorAll('button:disabled, input:disabled');
        disabledElements.forEach(el => {
          el.disabled = false;
          el.style.opacity = '1';
          el.style.cursor = 'pointer';
        });
        console.log(\`[Super Browser] Enabled \${disabledElements.length} elements.\`);
      })();
    `;
    try {
      await invoke("execute_javascript", { script: scriptToExecute });
    } catch (error) {
      console.error("Failed to invoke Tauri command:", error);
    }
  };

  const handleResetAndRevote = async () => {
    try {
      setIsLoading(true);
      console.log("Invoking 'clear_cookies' command...");
      await invoke("clear_cookies");
      console.log("Cookies cleared successfully. Reloading page...");
    } catch (error) {
      console.error("Failed to clear cookies:", error);
      alert("Lỗi: Không thể xóa cookie. Xem Console để biết chi tiết.");
      setIsLoading(false);
    }
  };

  // --- HÀM MỚI ĐỂ GỌI LỆNH INSPECT ---
  const handleInspectOnclicks = async () => {
    console.log("Invoking 'inspect_onclick_listeners'...");
    try {
      const listeners: string[] = await invoke("inspect_onclick_listeners");
      console.groupCollapsed(
        `[Super Browser] Found ${listeners.length} onclick listeners`
      );
      if (listeners.length === 0) {
        console.log("No direct onclick listeners found on the page.");
      } else {
        listeners.forEach((listener) => console.log(listener));
      }
      console.groupEnd();
      alert(
        `Inspection complete! Found ${listeners.length} onclick listener(s).\n\nCheck the main console (press F12 or Option+Command+I) to see the details.`
      );
    } catch (error) {
      console.error("Failed to inspect listeners:", error);
      alert("An error occurred during inspection. Check the console.");
    }
  };

  // --- GỬI CÁC NÚT ĐIỀU KHIỂN LÊN HEADER ---
  useEffect(() => {
    setControls(
      <SuperBrowserHeaderControls
        onEnableButtons={handleEnableAllButtons}
        onResetAndRevote={handleResetAndRevote}
        onInspectOnclicks={handleInspectOnclicks} // Truyền hàm mới
      />
    );

    return () => {
      clearControls();
    };
  }, [setControls, clearControls]);

  return (
    <div className="super-browser-container">
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
