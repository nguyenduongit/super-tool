import React, { useState, useEffect } from "react";
import { useHeaderStore } from "@/store/headerStore"; // 1. Import store
import { FaRobot } from "react-icons/fa"; // Import một icon cho đẹp
import AhaSlidesBot from "./plugin/AhaSlidesBot";
import "./index.css";

const SuperBrowser: React.FC = () => {
  const [url, setUrl] = useState("https://audience.ahaslides.com/d7loturvdk");
  const [currentUrl, setCurrentUrl] = useState(
    "https://audience.ahaslides.com/d7loturvdk"
  );
  const [showBot, setShowBot] = useState(false);

  // 2. Lấy các hàm từ header store
  const { setControls, clearControls } = useHeaderStore();

  // 3. Sử dụng useEffect để quản lý vòng đời của các nút trên header
  useEffect(() => {
    // Khi component được mount, tạo và đăng ký nút điều khiển mới
    const newControls = (
      <button
        className={`header-action-button ${showBot ? "active" : ""}`}
        onClick={() => setShowBot((prev) => !prev)}
      >
        <FaRobot />
        <span>AhaSlides Bot</span>
      </button>
    );

    setControls(newControls);

    // Rất quan trọng: Khi component bị unmount (người dùng chuyển sang module khác),
    // hãy dọn dẹp các nút đã đăng ký.
    return () => {
      clearControls();
    };
  }, [showBot, setControls, clearControls]); // Phụ thuộc vào `showBot` để cập nhật class 'active'

  const handleGo = () => {
    if (!url.startsWith("http")) {
      setCurrentUrl("https://" + url);
    } else {
      setCurrentUrl(url);
    }
  };

  return (
    // XÓA BỎ HEADER CŨ VÀ THAY BẰNG BỐ CỤC MỚI
    <div className="super-browser-container">
      <div className="browser-panel">
        <div className="browser-controls">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleGo()}
            placeholder="Nhập URL và nhấn Enter..."
          />
          <button onClick={handleGo}>Go</button>
        </div>
        <iframe
          src={currentUrl}
          title="Super Browser"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          className="browser-iframe"
        />
      </div>

      {showBot && (
        <>
          <div className="panel-separator" />
          <div className="bot-panel">
            {/* Component AhaSlidesBot không thay đổi */}
            <AhaSlidesBot />
          </div>
        </>
      )}
    </div>
  );
};

export default SuperBrowser;
