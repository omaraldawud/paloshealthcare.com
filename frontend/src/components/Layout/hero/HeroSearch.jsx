import React, { useState } from "react";
import "../../../assets/css/heroSearch.css";
import HeroCategories from "./HeroCategory";

//

const HeroSearch = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (searchTerm = null) => {
    const term = searchTerm || query;
    if (term.trim()) {
      setQuery(term);
      console.log("Searching for:", term);
      // TODO: navigate(/search?query=${encodeURIComponent(term)});
    }
  };

  return (
    <section className="hero-search bg-white rounded-4 shadow">
      <div className="container text-center">
        {/* Search Box Wrapper with background/shadow */}
        <div className="row justify-content-center mb-4">
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

        {/* Category Badges with Icons */}
        <HeroCategories onCategoryClick={handleSearch} />
      </div>
    </section>
  );
};

export default HeroSearch;
