import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import "./MainLayout.css";

// Không cần truyền `modules` vào đây nữa
const MainLayout: React.FC = () => {
  return (
    // Bỏ thẻ <Sidebar />
    <div className="main-layout-no-sidebar">
      <div className="main-content-wrapper">
        <Header />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
