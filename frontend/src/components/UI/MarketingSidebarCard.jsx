// MarketingSidebarCard.jsx

const MarketingSidebarCard = ({
  badgeText,
  badgeColor = "primary",
  badgeIcon = "⭐",
  positionText,
  title,
  description,
  price,
  billingPeriod = "/year",
  note,
  borderColor = "primary",
  bgColor = "bg-primary bg-opacity-10",
}) => {
  return (
    <div
      className={`mb-4 p-4 rounded-4 shadow-sm border-0 ${bgColor} border-start border-${borderColor} border-4`}
    >
      {/* Header with badge and position */}
      <div className="d-flex justify-content-between align-items-center mb-2">
        <span className={`badge bg-${badgeColor} text-white`}>
          {badgeIcon} {badgeText}
        </span>
        {positionText && <small className="{text-dark}">{positionText}</small>}
      </div>

      {/* Title and description */}
      <h6 className="fw-bold text-dark mb-1">{title}</h6>
      <p className="small text-muted mb-3">{description} </p>

      {/* Pricing */}
      <div className="text-center">
        <span className="h5 fw-bold text-${borderColor}">${price}</span>
        <span className="text-dark">{billingPeriod}</span>
        {note && <small className="d-block text-muted">{note}</small>}
      </div>
    </div>
  );
};

export default MarketingSidebarCard;
