import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { ModuleMeta } from "@/routes/types";
import "./MainLayout.css";

interface MainLayoutProps {
  modules: ModuleMeta[];
}

const MainLayout: React.FC<MainLayoutProps> = ({ modules }) => {
  return (
    <div className="main-layout">
      <Sidebar modules={modules} />
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
