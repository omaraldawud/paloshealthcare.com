import React, { useState } from "react";
import "../../assets/css/topBar.css";

//
import NotifyForm from "../Layout/forms/NotifyForm";

const TopBar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const menuItems = [
    { name: "Home", icon: "bi-house-door", link: "/" },
    // { name: "Browse Categories", icon: "bi-grid", link: "/medical-businesses" },
    { name: "Resources", icon: "bi-journal", link: "#resources" },
    { name: "Contact Us", icon: "bi-telephone", link: "#contact" },
  ];

  return (
    <div className="topbar-container ">
      {/* Logo */}
      <div className="logo">
        <i className="bi bi-heart-pulse me-2"></i>
        Palos<span>Healthcare</span>
      </div>

      {/* Form justified */}
      <div className="flex-grow-1 d-flex justify-content-end">
        <div
          className="pt-2 px-3 rounded-4"
          style={{ maxWidth: "500px", width: "100%" }}
        >
          <NotifyForm form_location="topbar" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="topbar-nav">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className={`nav-item text-light ${
              activeItem === item.name ? "active" : ""
            }`}
            onClick={() => setActiveItem(item.name)}
          >
            <i className={`bi ${item.icon} text-warning`}></i>
            <span>{item.name}</span>
          </a>
        ))}
      </nav>

      {/* Actions */}
      <div className="topbar-actions">
        <button className="btn-primary">
          <i className="bi bi-plus-circle text-warning"></i>
          <span>Add Listing</span>
        </button>
        <button className="btn-login bg-danger">
          <i className="bi bi-person text-warning"></i>
          <span>Login</span>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
