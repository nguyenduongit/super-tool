import React from "react";
import { Link } from "react-router-dom";
import { ModuleMeta } from "@/routes/types";
import "./HomePage.css";

// Component giờ sẽ nhận props là danh sách các module
interface HomePageProps {
  modules: ModuleMeta[];
}

const HomePage: React.FC<HomePageProps> = ({ modules }) => {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="home-title">Super Tool</h1>
        <p className="home-subtitle">Bộ công cụ tất cả trong một của bạn</p>
      </div>
      <div className="modules-grid">
        {modules.map((module) => (
          <Link to={module.path} key={module.path} className="module-card">
            <div className="module-card-icon-wrapper">
              <module.icon size={32} className="module-card-icon" />
            </div>
            <div className="module-card-content">
              <h2 className="module-card-name">{module.name}</h2>
              <p className="module-card-description">
                Truy cập công cụ {module.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
