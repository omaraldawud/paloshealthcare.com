const ReviewCard = ({ review }) => {
  return (
    <div className="card h-100 border-0 shadow-sm rounded-3">
      <div className="card-body d-flex flex-column h-100 p-3">
        {/* Header with user info and rating */}
        <div className="d-flex justify-content-between align-items-start mb-2">
          <div className="d-flex align-items-center">
            <div
              className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-2"
              style={{ width: "35px", height: "35px" }}
            >
              <span className="text-primary fw-bold small">
                {review.userId?.name?.charAt(0)?.toUpperCase() || "A"}
              </span>
            </div>
            <div>
              <h6 className="card-title mb-0 fw-bold text-dark small">
                {review.userId?.name || "Anonymous"}
              </h6>
              <small className="text-muted">
                {new Date(review.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </small>
            </div>
          </div>

          {/* Rating badge */}
          <div className="badge bg-warning text-dark px-2 py-1">
            <span className="fw-bold">{review.rating}</span>
            <span className="ms-1">⭐</span>
          </div>
        </div>

        {/* Review comment with flex-grow to push date to bottom */}
        <div className="flex-grow-1 mb-2">
          <p className="card-text text-dark small mb-0 lh-sm">
            {review.comment}
          </p>
        </div>

        {/* Date at bottom */}
        <div className="mt-auto pt-2 border-top">
          <small className="text-muted">
            Reviewed on {new Date(review.createdAt).toLocaleDateString()}
          </small>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
