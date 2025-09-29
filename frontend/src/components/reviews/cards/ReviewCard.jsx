const ReviewCard = ({ review }) => {
  if (!review || !review.user) {
    // Render fallback if review or user is missing
    return (
      <div className="card h-100 border-0 shadow-sm rounded-3 p-3">
        <p className="text-muted small mb-0">No review data available.</p>
      </div>
    );
  }

  const { user } = review;

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
                {user.name?.charAt(0)?.toUpperCase() || "A"}
              </span>
            </div>
            <div>
              <h6 className="card-title mb-0 fw-bold text-dark small">
                {user.name || "Anonymous"}
              </h6>
              <small className="text-muted">
                {review.time_created
                  ? new Date(review.time_created).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                  : ""}
              </small>
            </div>
          </div>

          {/* Rating badge */}
          <div className="badge bg-warning text-dark px-2 py-1">
            <span className="fw-bold">{review.rating || "-"}</span>
            <span className="ms-1">⭐</span>
          </div>
        </div>

        {/* Review comment */}
        <div className="flex-grow-1 mb-2">
          <p className="card-text text-dark small mb-0 lh-sm">
            {review.text || "No comment"}
          </p>
        </div>

        {/* Date at bottom */}
        <div className="mt-auto pt-2 border-top">
          <small className="text-muted">
            Reviewed on{" "}
            {review.time_created
              ? new Date(review.time_created).toLocaleDateString()
              : "-"}
          </small>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
