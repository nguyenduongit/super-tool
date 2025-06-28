import React from "react";
import { NavLink } from "react-router-dom";
import { ModuleMeta } from "@/routes/types";
import { useSidebarStore } from "@/store/sidebarStore";
import { LuPanelLeft, LuPanelRight, LuLayoutDashboard } from "react-icons/lu";
import "./Sidebar.css";

interface SidebarProps {
  modules: ModuleMeta[];
}

const Sidebar: React.FC<SidebarProps> = ({ modules }) => {
  const { isExpanded, toggleSidebar } = useSidebarStore();

  return (
    <aside className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}>
      <div className="sidebar-header">
        {isExpanded && <h1 className="sidebar-logo">Super Tool</h1>}
        <button onClick={toggleSidebar} className="sidebar-toggle-btn">
          {isExpanded ? <LuPanelLeft /> : <LuPanelRight />}
        </button>
      </div>
      <nav className="sidebar-nav">
        <NavLink to="/" className="sidebar-link" end>
          <LuLayoutDashboard size={24} className="sidebar-icon" />
          {isExpanded && <span className="sidebar-text">Home</span>}
        </NavLink>
        {modules.map((module) => (
          <NavLink to={module.path} key={module.path} className="sidebar-link">
            <module.icon size={24} className="sidebar-icon" />
            {isExpanded && <span className="sidebar-text">{module.name}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
