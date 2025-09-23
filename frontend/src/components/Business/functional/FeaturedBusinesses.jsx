// src/components/business/FeaturedBusinesses.jsx
import React from "react";
import businesses from "../data/businesses.json";
import BusinessCard from "../cards/BusinessCard.jsx";

const FeaturedBusinesses = () => {
  // filter featured businesses
  const featured = businesses.filter((b) => b.featured);

  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold text-center">Featured Businesses</h2>
      <div className="row g-4">
        {featured.map((business) => (
          <div className="col-md-4" key={business.id}>
            <BusinessCard business={business} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBusinesses;
