import React from "react";
import { LuSparkles } from "react-icons/lu"; // Import một icon đẹp
import "./HomePage.css"; // Import file CSS cho trang chủ

const HomePage: React.FC = () => {
  return (
    <div className="home-page-container">
      <LuSparkles size={64} className="home-page-icon" />
      <h1 className="home-page-title">Chào mừng đến với Super Tool</h1>
      <p className="home-page-subtitle">
        Bộ công cụ tất cả trong một, được thiết kế để tăng tốc công việc của
        bạn.
      </p>
      <p className="home-page-instruction">
        ← Hãy chọn một công cụ từ thanh bên trái để bắt đầu.
      </p>
    </div>
  );
};

export default HomePage;
