// src/components/reviews/YelpReviews.js
//currently not used
import ReviewCard from "./cards/ReviewCard";
import reviewsJSON from "./data/sampleMedReviews.json";

const SampleReviews = () => {
  return (
    <div className="mt-4 pt-4 border-top">
      <div className="d-flex justify-content-between align-items-center mb-4 px-4">
        <h5 className="mb-0 text-dark fw-bold">
          <i className="bi bi-chat-square-quote-fill text-primary me-2"></i>
          Customer Reviews
        </h5>
        <span className="badge bg-primary text-white px-3 py-2">
          {reviewsJSON.length} {reviewsJSON.length === 1 ? "Review" : "Reviews"}
        </span>
      </div>

      {reviewsJSON.length > 0 ? (
        <div className="row g-4 px-4 pb-4">
          {reviewsJSON.slice(0, 3).map((r) => (
            <div key={r.id} className="col-md-4 d-flex">
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
  );
};

export default SampleReviews;
