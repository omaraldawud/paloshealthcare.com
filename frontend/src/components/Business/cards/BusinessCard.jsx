import { getMedTypeIcon } from "../../../utils/getMedTypeIcon";
import "../css/business.css";

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
    <div className="card h-100 shadow-sm border-0 rounded-4 hover-shadow glass-morphism">
      <div className="row g-0 h-100">
        {/* Left Container - 75% width */}
        <div className="col-md-9 d-flex flex-column">
          <div className="card-body d-flex flex-column h-100 p-4">
            {/* Header with action buttons in top-right corner */}

            {/* Row 1: Business name and rating */}
            <div className="mb-3">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h4 className="card-title fw-bold text-dark mb-2">
                    {business.name}
                  </h4>
                  {renderRatingStars(business.rating)}
                </div>
                <div className="d-flex gap-2">
                  {business.website && (
                    <a
                      href={business.website}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-light btn-sm"
                      title="Visit website"
                    >
                      <i className="bi bi-globe text-primary"></i>
                    </a>
                  )}
                  {business.phone && (
                    <a
                      href={`tel:${business.phone}`}
                      className="btn btn-light btn-sm"
                    >
                      <i className="bi bi-telephone text-primary"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Row 2: Specialties */}
            <div className="mb-2">
              <div className="d-flex flex-wrap gap-2">
                <h6>
                  <span className="me-3">Specialties:</span>
                  {business.specialties.map((spec, i) => (
                    <span
                      key={i}
                      className="badge bg-light text-dark border px-2 py-1 small"
                    >
                      {spec}
                    </span>
                  ))}
                </h6>
              </div>
            </div>

            {/* Row 3: Description */}
            <div className="mb-3 flex-grow-1">
              <p className="text-muted small mb-0">
                {business.sponsoredDescription ||
                  "Leading healthcare provider offering comprehensive medical services with experienced professionals."}
              </p>
              <p>
                {business.featuredDescription ||
                  "Featured Listing: Trusted clinic providing comprehensive care in your area."}
              </p>
            </div>

            {/* Row 4: Contact info */}
            <div className="mt-auto">
              <div className="row g-1 text-muted small">
                <div className="col-12">
                  <i className="bi bi-geo-alt text-primary me-2"></i>
                  <span className="fw-bolder">{business.address}</span>
                </div>
                <div className="col-12">
                  <i className="bi bi-telephone text-primary me-2"></i>
                  <span className="fw-bolder me-3">{business.phone}</span>
                  <i className="bi bi-clock  text-primary me-2"></i>
                  <span className="fw-bolder">{business.hours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Container - 25% width */}
        <div className="col-md-3 bg-white rounded-end-4">
          <div className="d-flex flex-column h-100 p-3">
            {/* Top Row: Badges */}
            <div className="mb-3 text-center">
              <div className="d-flex flex-column gap-2">
                <span className="badge bg-primary bg-opacity-90 text-white px-2 py-1 small">
                  <i className={`bi ${getMedTypeIcon(business.type)} me-1`}></i>
                  {business.type}
                </span>
                {business.featured && (
                  <span className="badge bg-success text-white px-2 py-1 small">
                    ⭐ Featured
                  </span>
                )}
              </div>
            </div>

            {/* Row 2: Image */}
            <div className="mb-3 text-center flex-grow-1 d-flex align-items-center justify-content-center">
              <img
                src={business.image}
                alt={business.name}
                className="img-fluid rounded-3 shadow-sm"
                style={{
                  maxHeight: "200px",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Row 3: Claim button and text */}
            <div className="text-center">
              <button className="btn btn-warning btn-sm fw-bold w-60 py-2 rounded-3 mb-2">
                Claim Your Listing
              </button>
              <small className="text-muted">
                free listing • increase visibility • get more patients
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
