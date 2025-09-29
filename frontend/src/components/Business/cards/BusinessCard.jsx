import { languageCodes } from "../../../utils/languageCodes";
import { getMedTypeIcon } from "../../../utils/getMedTypeIcon";
import ReviewCard from "../../reviews/cards/ReviewCard";
import { getCurrentOpenStatus } from "../../../utils/getCurrentOpenStatus";
import { amenityIcons } from "../../../utils/getAmentiesIcons";

// css + ui
import Divider from "../../UI/Divider";
import "../css/business.css";
// utils
import renderRatingStars from "../../../utils/renderRatingStars";
import SampleReviews from "../../reviews/SampleReviews";

//
const BusinessCard = ({ business, reviews = [] }) => {
  const status = getCurrentOpenStatus(business.hours);

  return (
    <div className="card h-100 shadow-lg border-0 rounded-4 hover-shadow glass-morphism smooth-transition">
      <div className="row g-0 h-100">
        {/* Main Content Column - 80% */}

        <div className="col-md-8 d-flex flex-column border-end card-body ">
          <div className=" d-flex flex-column h-100  ">
            {/* Row 1: Contact Icons & Social Media */}
            <div className="mb-4 bg-light p-2">
              <div className="d-flex justify-content-between align-items-center">
                {/* Social Media - Left side */}
                {business.socialMedia && (
                  <div className="d-flex gap-3">
                    {business.socialMedia.facebook && (
                      <a
                        href={business.socialMedia.facebook}
                        title="Facebook"
                        className="social-hover text-decoration-none"
                        style={{ color: "#1877F2" }}
                      >
                        <i className="bi bi-facebook fs-5"></i>
                      </a>
                    )}
                    {business.socialMedia.instagram && (
                      <a
                        href={business.socialMedia.instagram}
                        title="Instagram"
                        className="social-hover text-decoration-none"
                        style={{ color: "#E4405F" }}
                      >
                        <i className="bi bi-instagram fs-5"></i>
                      </a>
                    )}
                    {business.socialMedia.linkedin && (
                      <a
                        href={business.socialMedia.linkedin}
                        title="LinkedIn"
                        className="social-hover text-decoration-none"
                        style={{ color: "#0A66C2" }}
                      >
                        <i className="bi bi-linkedin fs-5"></i>
                      </a>
                    )}
                  </div>
                )}

                {/* Awards */}
                {business.awards?.length > 0 && (
                  <div className="d-flex gap-2">
                    {business.awards.slice(0, 2).map((award, i) => (
                      <span
                        key={i}
                        className="badge badge-enhanced bg-warning text-dark px-3 py-2 small d-flex align-items-center gap-1"
                      >
                        <i className="bi bi-award-fill"></i>
                        {award}
                      </span>
                    ))}
                  </div>
                )}

                {/* Phone & Website - Right side */}
                <div className="d-flex gap-4">
                  {business.phone && (
                    <a
                      href={`tel:${business.phone}`}
                      className="social-hover text-decoration-none"
                      title="Call"
                    >
                      <i className="bi bi-telephone-fill text-primary fs-5"></i>
                    </a>
                  )}
                  {business.website && (
                    <a
                      href={business.website}
                      target="_blank"
                      rel="noreferrer"
                      className="social-hover text-decoration-none"
                      title="Website"
                    >
                      <i className="bi bi-globe text-primary fs-5"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Row 2: Business Image */}
            <div className="mb-4 text-center">
              <div className="position-relative d-inline-block">
                <img
                  src={business.image}
                  alt={business.name}
                  className="img-fluid rounded-4 smooth-transition"
                  style={{
                    maxHeight: "220px",
                    width: "auto",
                    maxWidth: "100%",
                    objectFit: "cover",
                    border: "4px solid transparent",
                    background:
                      "linear-gradient(45deg, #667eea, #764ba2, #f093fb) border-box",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                    padding: "3px",
                  }}
                />
                {business.featured && (
                  <span className="position-absolute top-0 start-0 m-2 badge bg-success px-3 py-2">
                    ⭐ Featured
                  </span>
                )}
              </div>
            </div>

            {/* Row 3: Business Details */}
            <div className="flex-grow-1">
              {/* Name */}
              <h3 className="card-title fw-bold text-dark mb-3 gradient-text">
                {business.name}
              </h3>

              {/* Rating & Reviews */}
              <div className="mb-3 d-flex align-items-center gap-4 flex-wrap">
                {renderRatingStars(
                  business.rating,
                  business.reviewCount,
                  reviews.length
                )}
                <div className="d-flex align-items-center gap-2 px-3 py-2 bg-light rounded-3">
                  <i
                    className={`bi ${getMedTypeIcon(
                      business.type
                    )} text-primary fs-5`}
                  ></i>
                  <span className="small fw-bold text-capitalize text-dark">
                    {business.type}
                  </span>
                  {business.isWalkin ? "Walk-ins are welcome" : ""}
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {business.specialties?.map((spec, i) => (
                    <span
                      key={i}
                      className="badge badge-enhanced bg-primary bg-opacity-10 text-primary border px-3 py-2 small"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Address & Status */}
              <div className="mb-4">
                <div className="d-flex align-items-center gap-3 flex-wrap">
                  <span className="text-muted small d-flex align-items-center gap-2 bg-light px-3 py-2 rounded-3">
                    <i className="bi bi-geo-alt-fill text-primary"></i>
                    {business.address}
                  </span>
                  <span
                    className={`badge badge-enhanced px-3 py-2 small ${
                      status.isOpen
                        ? "bg-success text-white"
                        : "bg-danger text-white"
                    }`}
                  >
                    <i
                      className={`bi bi-${
                        status.isOpen ? "check-circle" : "x-circle"
                      } me-1`}
                    ></i>
                    {status.text}
                  </span>
                </div>
              </div>

              {/* Description with Read More */}
              <div>
                <p
                  className="text-muted line-clamp-3 lead"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    lineHeight: "1.6",
                  }}
                >
                  {business.description ||
                    business.sponsoredDescription ||
                    "Leading healthcare provider offering comprehensive medical services with experienced professionals."}

                  <a
                    href={`/business/${business._id}`}
                    className="btn btn-outline-primary  btn-sm rounded-pill   smooth-transition"
                  >
                    Read More <i className="bi bi-arrow-right ms-1"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - 20% */}
        <div className="col-md-4 d-flex flex-column">
          <div className="card-body d-flex flex-column h-100 px-2">
            {/* Amenities  */}
            <div className="mb-4">
              <div className="d-flex flex-wrap gap-3 bg-light p-2">
                {business.amenities?.slice(0, 6).map((amenity, i) => (
                  <i
                    key={`amenity-${i}`}
                    className={`bi ${
                      amenityIcons[amenity] || "bi-check-circle"
                    } fs-5 text-primary smooth-transition`}
                    title={amenity}
                    style={{ cursor: "help" }}
                  ></i>
                ))}
              </div>
            </div>

            {/* Languages */}
            {business.languagesSpoken?.length > 0 && (
              <div className="mb-3">
                <div className="d-flex flex-wrap align-items-center gap-1">
                  {business.languagesSpoken.slice(0, 6).map((lang, i) => {
                    const langData = languageCodes.find((item) => item[lang]);
                    const countryCode = langData
                      ? langData[lang]
                      : lang.substring(0, 2).toLowerCase();
                    const flagClass = langData
                      ? langData.fiClass
                      : `fi fi-${lang.substring(0, 2).toLowerCase()}`;

                    return (
                      <span
                        key={i}
                        className="badge bg-white text-dark border small d-flex align-items-center gap-1 px-2"
                        title={lang}
                      >
                        <span className={flagClass}></span>
                        <span className="fw-medium">{countryCode}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            )}
            {/* Insurance */}
            {business.insuranceProviders?.length > 0 && (
              <div className="mb-3">
                <div className="d-flex flex-wrap align-items-center gap-1">
                  {business.insuranceProviders
                    .slice(0, 2)
                    .map((insurance, i) => (
                      <span
                        key={i}
                        className="badge bg-info bg-opacity-25 text-dark border-0 small px-2"
                      >
                        {insurance}
                      </span>
                    ))}
                  {business.insuranceProviders.length > 2 && (
                    <span className="small text-muted ms-1">
                      +{business.insuranceProviders.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Doctors & Affiliations */}
            <Divider />
            {(business.doctors?.length > 0 ||
              business.affilationHostpitals?.length > 0) && (
              <div className="mb-4">
                {/* Affiliated Hospitals */}
                {business.affilationHostpitals?.length > 0 && (
                  <div className="my-3">
                    <h6 className="small fw-bold mb-3 text-uppercase text-muted">
                      <i className="bi bi-building me-2"></i>
                      Affiliated Hospitals
                    </h6>
                    <div className="d-flex flex-column gap-2">
                      {business.affilationHostpitals.map((hospital, i) => (
                        <a
                          key={i}
                          href={hospital.affilationLink}
                          target="_blank"
                          rel="noreferrer"
                          className="badge badge-enhanced bg-info bg-opacity-10 text-info border-0 text-decoration-none small p-3 text-start smooth-transition"
                        >
                          <i className="bi bi-building me-2"></i>
                          {hospital.affilationName}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                {/* Doctors */}

                {business.doctors?.length > 0 && (
                  <div className="my-4">
                    <h6 className="small fw-bold mb-3 text-uppercase text-muted">
                      <i className="bi bi-person-vcard me-2"></i>
                      Our Doctors
                    </h6>
                    <div className="d-flex flex-column gap-2">
                      {business.doctors.map((doctor, i) => (
                        <a
                          key={i}
                          href={doctor.drLink}
                          target="_blank"
                          rel="noreferrer"
                          className="badge badge-enhanced bg-primary bg-opacity-10 text-primary border-0 text-decoration-none small p-3 text-start smooth-transition"
                        >
                          <div className="fw-medium">
                            <i className="bi bi-person-badge me-2"></i>
                            {doctor.drName}
                          </div>
                          <div>
                            <div className="text-muted small mt-2">
                              {doctor.drTitle}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Logo  */}
                <div className="d-flex ">
                  <img src={business.logoLink} style={{ maxWidth: "180px" }} />
                </div>
              </div>
            )}

            {/* Dynamic CTA */}
            <div className="d-flex flex-column justify-content-end h-100">
              <hr />

              {business.isClaimed && business.appointmentLink ? (
                <a
                  href={business.appointmentLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn px-0 btn-warning fw-bold w-100 rounded-4"
                >
                  <i className="bi bi-calendar-check text-white me-2"></i>
                  Book Appointment
                </a>
              ) : (
                <button className="btn btn-warning   fw-bold w-100 rounded-4  smooth-transition">
                  <i className="bi bi-star-fill me-2"></i>
                  Claim Your Business
                </button>
              )}
              <hr />
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      {reviews.length ? (
        <div className="mt-4 pt-4 border-top">
          <div className="d-flex justify-content-between align-items-center mb-4 px-4">
            <h5 className="mb-0 text-dark fw-bold">
              <i className="bi bi-chat-square-quote-fill text-primary me-2"></i>
              Customer Reviews
            </h5>
            <span className="badge bg-primary text-white px-3 py-2">
              {reviews.length} {reviews.length === 1 ? "Review" : "Reviews"}
            </span>
          </div>

          {reviews.length > 0 ? (
            <div className="row g-4 px-4 pb-4">
              {reviews.slice(0, 3).map((r) => (
                <div key={r._id} className="col-md-4 d-flex">
                  <ReviewCard review={r} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-5 bg-gradient-light rounded-3 mx-4 mb-4">
              <i className="bi bi-chat-square-text display-4 text-muted mb-3"></i>
              <p className="text-muted mb-2 fs-5">No reviews yet.</p>
              <small className="text-muted">
                Be the first to share your experience!
              </small>
            </div>
          )}
        </div>
      ) : (
        <SampleReviews />
      )}
    </div>
  );
};

export default BusinessCard;
