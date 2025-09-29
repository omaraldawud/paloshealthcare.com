export default function renderRatingStars(
  rating,
  reviewCount,
  reviewsLength = 0
) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="d-flex align-items-center">
      {[...Array(5)].map((_, i) => (
        <i
          key={i}
          className={`bi ${
            i < fullStars
              ? "bi-star-fill text-warning"
              : i === fullStars && hasHalfStar
              ? "bi-star-half text-warning"
              : "bi-star text-warning"
          } me-1 small`}
        />
      ))}
      <span className="ms-1 small fw-medium">{rating}</span>
      <span className="ms-1 small text-muted">
        ({reviewCount || reviewsLength} reviews)
      </span>
    </div>
  );
}
