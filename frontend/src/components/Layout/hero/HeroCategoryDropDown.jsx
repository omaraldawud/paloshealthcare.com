import React, { useState, useEffect, useRef } from "react";
import categories from "../../../assets/data/categories_services.json";

const HeroCategoriesDropdown = ({ onCategoryClick }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

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
    <div className="dropdown dropup" ref={dropdownRef}>
      <button
        className="btn btn-outline-primary dropdown-toggle rounded-pill px-4"
        type="button"
        onClick={toggleDropdown}
      >
        <i className="bi bi-list me-2"></i>
        Select Category
      </button>

      <ul className={`dropdown-menu w-100 ${open ? "show" : ""}`}>
        {/* Small muted hint */}
        <li className="dropdown-header text-muted fw-bold">
          Select a <em>healthcare category</em> to view services
        </li>

        {/* Categories grid */}
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-0  px-2">
          {categories.categories.map((category) => (
            <div className="col" key={category.name}>
              <button
                className="dropdown-item d-flex  align-items-center"
                onClick={() => {
                  onCategoryClick(category.name);
                  setOpen(false);
                }}
              >
                <i className={`${category.icon} me-2 text-danger`}></i>
                {category.name}
              </button>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default HeroCategoriesDropdown;
