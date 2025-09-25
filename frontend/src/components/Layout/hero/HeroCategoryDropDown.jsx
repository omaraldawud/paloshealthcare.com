import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import categories from "../../../assets/data/categories_services.json";

const HeroCategoriesDropdown = ({ onCategoryClick }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Calculate items per column for 3 columns
  const itemsPerColumn = Math.ceil(categories.categories.length / 3);

  // Split categories into 3 columns
  const column1 = categories.categories.slice(0, itemsPerColumn);
  const column2 = categories.categories.slice(
    itemsPerColumn,
    itemsPerColumn * 2
  );
  const column3 = categories.categories.slice(itemsPerColumn * 2);

  // toggle dropdown
  const toggleDropdown = () => setOpen(!open);

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="dropdown dropend"
      ref={dropdownRef}
      data-bs-display="static"
    >
      <button
        className="btn btn-outline-primary dropdown-toggle rounded-pill px-3 py-1"
        type="button"
        onClick={toggleDropdown}
      >
        <i className="bi bi-list me-2"></i>
        Select Category
      </button>

      <div
        className={`dropdown-menu w-100 ${open ? "show" : ""}`}
        style={{
          position: "absolute",
          zIndex: 2000,
          minWidth: "600px",
        }}
      >
        <div className="dropdown-header text-muted fw-bold small px-3 py-2 border-bottom">
          Select a <em>healthcare category</em>
        </div>

        <div className="container-fluid p-0">
          <div className="row g-0">
            {/* Column 1 */}
            <div className="col-md-4">
              <div className="d-flex flex-column">
                {column1.map((category) => (
                  <button
                    key={category.name}
                    className="dropdown-item d-flex align-items-center py-2 px-3 text-start"
                    onClick={() => {
                      onCategoryClick(category.name);
                      setOpen(false);
                    }}
                  >
                    <i className={`${category.icon} me-2 text-danger`}></i>
                    <span className="text-truncate">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-md-4 border-start">
              <div className="d-flex flex-column">
                {column2.map((category) => (
                  <button
                    key={category.name}
                    className="dropdown-item d-flex align-items-center py-2 px-3 text-start"
                    onClick={() => {
                      onCategoryClick(category.name);
                      setOpen(false);
                    }}
                  >
                    <i className={`${category.icon} me-2 text-danger`}></i>
                    <span className="text-truncate">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Column 3 */}
            <div className="col-md-4 border-start">
              <div className="d-flex flex-column">
                {column3.map((category) => (
                  <button
                    key={category.name}
                    className="dropdown-item d-flex align-items-center py-2 px-3 text-start"
                    onClick={() => {
                      onCategoryClick(category.name);
                      setOpen(false);
                    }}
                  >
                    <i className={`${category.icon} me-2 text-danger`}></i>
                    <span className="text-truncate">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCategoriesDropdown;
