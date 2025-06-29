// src/modules/super-browser/SuperBrowser.tsx

import React, { useState } from "react";
import AhaSlidesBot from "./plugin/AhaSlidesBot";
import "./index.css"; // bạn tự tạo CSS cho bố cục

const SuperBrowser: React.FC = () => {
  const [url, setUrl] = useState("https://audience.ahaslides.com/d7loturvdk");
  const [currentUrl, setCurrentUrl] = useState(
    "https://audience.ahaslides.com/d7loturvdk"
  );
  const [showBot, setShowBot] = useState(false);

  const handleGo = () => {
    if (!url.startsWith("http")) {
      setCurrentUrl("https://" + url);
    } else {
      setCurrentUrl(url);
    }
  };

  return (
    <div className="simple-browser-container">
      <header className="browser-header">
        <button className="aha-bot-button" onClick={() => setShowBot(!showBot)}>
          {showBot ? "Ẩn AhaSlidesBot" : "AhaSlidesBot"}
        </button>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Nhập URL..."
        />
        <button onClick={handleGo}>Go</button>
      </header>

      <div className={`browser-content ${showBot ? "split-view" : ""}`}>
        <div className="browser-pane">
          <iframe
            src={currentUrl}
            title="Simple Browser"
            sandbox="allow-scripts allow-same-origin allow-forms"
            style={{ width: "100%", height: "100%", border: "none" }}
          />
        </div>

        {showBot && (
          <div className="bot-pane">
            <AhaSlidesBot />
          </div>
        )}
      </div>
    </div>
  );
};

export default SuperBrowser;
