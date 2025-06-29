import React from "react";
import { Link } from "react-router-dom";
import { LuHouse } from "react-icons/lu";
import { useHeaderStore } from "@/store/headerStore";
import "./Header.css";

const Header: React.FC = () => {
  const { controls } = useHeaderStore();

  return (
    <header className="header">
      {/* THÊM NÚT HOME VÀO VÙNG BÊN TRÁI */}
      <div className="header-left">
        <Link to="/" className="home-button" title="Trang chủ">
          <LuHouse size={22} />
        </Link>
      </div>

      <div className="header-center"></div>
      <div className="header-right">{controls}</div>
    </header>
  );
};

export default Header;
