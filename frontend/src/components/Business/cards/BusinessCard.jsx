// src/components/business/BusinessCard.jsx
import React from "react";

const BusinessCard = ({ business }) => {
  const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="d-flex align-items-center mb-1">
        {[...Array(5)].map((_, i) => (
          <i
            key={i}
            className={`bi ${
              i < fullStars
                ? "bi-star-fill text-warning"
                : i === fullStars && hasHalfStar
                ? "bi-star-half text-warning"
                : "bi-star text-warning"
            } me-1`}
          />
        ))}
        <span className="ms-1 small fw-medium">{rating}</span>
      </div>
    );
  };

  return (
    <div className="card h-100 shadow-sm border rounded-5 hover-shadow transition-all">
      <div className="row g-0">
        {/* Left image */}
        <div className="col-md-4 d-flex align-items-center">
          <img
            src={business.image}
            alt={business.name}
            className="img-fluid rounded-start-5 p-2"
            style={{ objectFit: "contain", maxHeight: "200px", width: "100%" }}
          />
        </div>

        {/* Right content */}
        <div className="col-md-8">
          <div className="card-body d-flex flex-column h-100 p-3">
            {/* Top badges */}
            <div className="d-flex gap-2 flex-wrap mb-2">
              <span className="badge bg-primary bg-opacity-90 text-white px-2 py-1">
                {business.type}
              </span>

              {business.isSponsored && (
                <span className="badge bg-warning text-dark px-2 py-1">
                  Sponsored
                </span>
              )}

              {business.featured && (
                <span className="badge bg-success text-white px-2 py-1">
                  Featured
                </span>
              )}
            </div>

            {/* Descriptions */}
            <div className="mb-2">
              {business.isSponsored && business.sponsoredDescription && (
                <p className="mb-1 small text-muted">
                  {business.sponsoredDescription}
                </p>
              )}
              {business.featured && business.featuredDescription && (
                <p className="mb-1 small text-muted">
                  {business.featuredDescription}
                </p>
              )}
            </div>

            {/* Title and rating */}
            <h5 className="card-title mb-1 text-dark fw-bold">
              {business.name}
            </h5>
            {renderRatingStars(business.rating)}

            {/* Specialties */}
            <div className="mb-2 mt-2">
              <div className="d-flex flex-wrap gap-1">
                {business.specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="badge bg-light text-dark border px-2 py-1 small"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div className="mb-3 mt-auto">
              <div className="d-flex align-items-center mb-1 small text-muted">
                <i className="bi bi-geo-alt me-2 text-primary"></i>
                <span>{business.address}</span>
              </div>
              <div className="d-flex align-items-center mb-1 small text-muted">
                <i className="bi bi-clock me-2 text-primary"></i>
                <span>{business.hours}</span>
              </div>
              {business.phone && (
                <div className="d-flex align-items-center mb-1 small text-muted">
                  <i className="bi bi-telephone me-2 text-primary"></i>
                  <span>{business.phone}</span>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="mt-auto d-flex gap-2">
              <a
                href={business.website}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary btn-sm d-flex align-items-center justify-content-center"
                title="Contact This Business"
                style={{ width: "44px" }}
              >
                <i className="bi bi-globe"></i>
              </a>
              {business.phone && (
                <a
                  href={`tel:${business.phone}`}
                  className="btn btn-outline-primary btn-sm d-flex align-items-center justify-content-center"
                  style={{ width: "44px" }}
                >
                  <i className="bi bi-telephone"></i>
                </a>
              )}
              {business.email && (
                <a
                  href={`mailto:${business.email}`}
                  className="btn btn-outline-primary btn-sm d-flex align-items-center justify-content-center"
                  style={{ width: "44px" }}
                >
                  <i className="bi bi-envelope"></i>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
