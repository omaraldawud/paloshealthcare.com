import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//css
import "../../../assets/css/heroSearch.css";
//components
import HeroCategoriesDropdown from "./HeroCategoryDropDown";
import categories from "../../../assets/data/categories_services.json";

//function
const HeroSearch = () => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate(); // <-- initialize navigate

  const handleSearch = (searchTerm = null) => {
    const term = searchTerm || query;
    if (term.trim()) {
      setQuery(term);
      console.log("Searching for:", term);
      navigate(`/search?query=${encodeURIComponent(term)}`);
    }
  };

  const handleCategoryClick = (categoryName) => {
    const categoryObj = categories.categories.find(
      (cat) => cat.name === categoryName
    );
    setSelectedCategory(categoryName);

    // Optional: set query to first service
    if (categoryObj && categoryObj.services.length > 0) {
      const firstService = categoryObj.services[0];
      setQuery(firstService);
      handleSearch(firstService); // automatically navigate
    } else {
      setQuery("");
    }

    console.log("Category selected:", categoryName);
  };

  const categoryObj = categories.categories.find(
    (cat) => cat.name === selectedCategory
  );

  return (
    <section className="hero-search bg-white rounded-4 shadow">
      <div className="container text-center">
        {/* Search Box */}
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="p-4 bg-white rounded-4 shadow-sm">
              <div className="d-flex flex-column flex-md-row align-items-center">
                <div className="position-relative flex-grow-1 w-100">
                  <i
                    className="bi bi-search position-absolute text-primary"
                    style={{
                      top: "50%",
                      left: "1rem",
                      transform: "translateY(-50%)",
                      pointerEvents: "none",
                    }}
                  ></i>

                  <input
                    type="text"
                    className="form-control form-control-lg ps-5 rounded-pill"
                    placeholder="Search doctors, clinics, or services..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
                <button
                  className="btn btn-primary btn-lg rounded-pill px-4 mt-3 mt-md-0 ms-md-3"
                  type="button"
                  onClick={() => handleSearch()}
                >
                  <i className="bi bi-search me-2"></i> Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Category Dropdown */}
        <HeroCategoriesDropdown onCategoryClick={handleCategoryClick} />

        {/* Services list */}
        <div id="heroServices" className="mt-3">
          {categoryObj ? (
            <>
              <h6 className="fw-bold text-primary">
                {categoryObj.name} Services
              </h6>
              <ul className="list-unstyled d-flex flex-wrap justify-content-center mt-2">
                {categoryObj.services.map((service, idx) => (
                  <li
                    key={idx}
                    className="badge bg-light text-dark border m-1 px-3 py-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleSearch(service)} // badge click navigates
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="text-muted">
              Select a category to view its services.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSearch;
