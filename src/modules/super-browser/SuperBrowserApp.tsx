// File: src/modules/super-browser/SuperBrowserApp.tsx
// PHIÊN BẢN TRÌNH DUYỆT TỐI GIẢN

import React from "react";
import "./SuperBrowserApp.css";

// Một URL mặc định để hiển thị
const DEFAULT_URL = "https://www.google.com/webhp?igu=1";

const SuperBrowserApp: React.FC = () => {
  return (
    <div className="super-browser-container">
      {/* Chúng ta đã loại bỏ tất cả các thanh điều khiển và logic phức tạp.
        Component này bây giờ chỉ là một iframe để hiển thị trang web.
      */}
      <iframe
        src={DEFAULT_URL}
        className="web-iframe"
        title="Super Browser View"
        // Thêm sandbox để tăng bảo mật một chút, vì không còn can thiệp nữa
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      />
    </div>
  );
};

export default SuperBrowserApp;
