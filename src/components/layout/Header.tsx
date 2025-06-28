import React from "react";
import { useHeaderStore } from "@/store/headerStore"; // Import store mới
import "./Header.css";

const Header: React.FC = () => {
  // Lấy các component điều khiển từ store
  const { controls } = useHeaderStore();

  return (
    <header className="header">
      {/* Một vùng trống bên trái để căn chỉnh */}
      <div className="header-left"></div>

      {/* Vùng giữa có thể dùng để hiển thị tiêu đề trang sau này */}
      <div className="header-center"></div>

      {/* Vùng bên phải để hiển thị các nút điều khiển của module */}
      <div className="header-right">{controls}</div>
    </header>
  );
};

export default Header;
