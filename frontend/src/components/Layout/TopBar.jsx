import React, { useState } from "react";
import "../../assets/css/topBar.css";

const TopBar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const menuItems = [
    { name: "Home", icon: "bi-house-door", link: "/" },
    { name: "Browse Categories", icon: "bi-grid", link: "/medical-businesses" },
    { name: "For Businesses", icon: "bi-briefcase", link: "#businesses" },
    { name: "Resources", icon: "bi-journal", link: "#resources" },
    { name: "Contact Us", icon: "bi-telephone", link: "#contact" },
  ];

  return (
    <div className="topbar-container">
      {/* Logo section - you can replace with your actual logo */}

      <div className="logo">
        <i className="bi bi-heart-pulse me-2"></i>
        Palos<span>Healthcare</span>
      </div>

      {/* Navigation menu */}
      <nav className="topbar-nav ">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className={`nav-item  text-light ${
              activeItem === item.name ? "active" : ""
            }`}
            onClick={() => setActiveItem(item.name)}
          >
            <i className={`bi ${item.icon}  text-warning`}></i>
            <span>{item.name}</span>
          </a>
        ))}
      </nav>

      {/* User actions */}
      <div className="topbar-actions">
        <button className="btn-login">
          <i className="bi bi-person text-warning"></i>
          <span>Login</span>
        </button>
        <button className="btn-primary">
          <i className="bi bi-plus-circle text-warning"></i>
          <span>Add Listing</span>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
