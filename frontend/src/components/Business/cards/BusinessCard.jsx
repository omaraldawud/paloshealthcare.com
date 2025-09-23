import React from "react";

const BusinessCard = ({ business }) => {
  const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="d-flex align-items-center mb-2">
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
    <div className="card h-100 shadow-sm border-0 rounded-4 hover-shadow">
      <div className="row g-0 h-100">
        {/* Left content - 8 columns */}
        <div className="col-md-8 d-flex flex-column">
          <div className="card-body d-flex flex-column h-100 p-4">
            {/* Header with badges */}
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-primary bg-opacity-90 text-white px-3 py-2">
                  {business.type}
                </span>
                {business.isSponsored && (
                  <span className="badge bg-warning text-dark px-3 py-2">
                    ⭐ Sponsored
                  </span>
                )}
                {business.featured && (
                  <span className="badge bg-success text-white px-3 py-2">
                    Featured
                  </span>
                )}
              </div>

              {/* Action buttons */}
              <div className="d-flex gap-2">
                {business.website && (
                  <a
                    href={business.website}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-primary btn-sm"
                    title="Visit website"
                  >
                    <i className="bi bi-globe"></i>
                  </a>
                )}
                {business.phone && (
                  <a
                    href={`tel:${business.phone}`}
                    className="btn btn-outline-primary btn-sm"
                  >
                    <i className="bi bi-telephone"></i>
                  </a>
                )}
              </div>
            </div>

            {/* Business name and rating */}
            <h4 className="card-title fw-bold text-dark mb-2">
              {business.name}
            </h4>
            {renderRatingStars(business.rating)}

            {/* Sponsored/Featured descriptions */}
            <div className="mb-3">
              {business.isSponsored && business.sponsoredDescription && (
                <p className="text-muted small mb-2 fst-italic">
                  {business.sponsoredDescription}
                </p>
              )}
              {business.featured && business.featuredDescription && (
                <p className="text-muted small mb-2 fst-italic">
                  {business.featuredDescription}
                </p>
              )}
            </div>

            {/* Specialties */}
            <div className="mb-3">
              <h6 className="fw-semibold mb-2">Specialties:</h6>
              <div className="d-flex flex-wrap gap-2">
                {business.specialties.map((spec, i) => (
                  <span
                    key={i}
                    className="badge bg-light text-dark border px-3 py-2"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div className="mt-auto">
              <div className="row g-2 text-muted small">
                <div className="col-12 d-flex align-items-center">
                  <i className="bi bi-geo-alt text-primary me-2"></i>
                  <span>{business.address}</span>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <i className="bi bi-clock text-primary me-2"></i>
                  <span>{business.hours}</span>
                </div>
                {business.phone && (
                  <div className="col-12 d-flex align-items-center">
                    <i className="bi bi-telephone text-primary me-2"></i>
                    <span>{business.phone}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right image - 4 columns */}
        <div className="col-md-4 bg-light rounded-end-4">
          <div className="d-flex flex-column align-items-center justify-content-center h-100 p-4">
            {/* Image */}
            <div className="mb-4 text-center">
              <img
                src={business.image}
                alt={business.name}
                className="img-fluid rounded-3 shadow-sm"
                style={{
                  maxHeight: "180px",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* CTA Button */}
            <button className="btn btn-warning btn-lg fw-bold w-100 py-2 rounded-3">
              Claim Your Listing
            </button>

            {/* Additional info */}
            <div className="text-center mt-3">
              <small className="text-muted">
                Free listing • Increase visibility • Get more patients
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
