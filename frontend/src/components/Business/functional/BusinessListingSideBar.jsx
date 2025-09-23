//

// Your main component
import MarketingSidebarCard from "../cards/MarketingSidebarCard";

const BusinessListingSideBar = () => {
  return (
    <div className="sticky-top" style={{ top: "100px" }}>
      {/* Premium Featured Spot */}
      <MarketingSidebarCard
        badgeText="Premium"
        badgeColor="warning"
        badgeIcon="🔥"
        positionText="Limited Spot"
        title="Featured Business Spotlight"
        description="Top position • Maximum visibility • Premium branding"
        price={199}
        note="minimum 1-year commitment"
        borderColor="warning"
        bgColor="bg-gradient-to-right text-white"
      />

      {/* Sponsored Listing */}
      <MarketingSidebarCard
        badgeText="Sponsored"
        badgeColor="primary"
        badgeIcon="⭐"
        positionText="#2 Position"
        title="Sponsored Listing"
        description="Enhanced visibility • Priority placement"
        price={169}
        note="monthly billing available"
        borderColor="primary"
        bgColor="bg-primary bg-opacity-10"
      />

      {/* Urgent Care Special */}
      <MarketingSidebarCard
        badgeText="Limited Time"
        badgeColor="warning"
        badgeIcon="⏰"
        positionText="Special Offer"
        title="Urgent Care Priority Listing"
        description="Perfect for urgent care centers • High patient traffic"
        price={149}
        note="second year 50% off"
        borderColor="warning"
        bgColor="bg-warning bg-opacity-10"
      />

      {/* New Business Deal */}
      <MarketingSidebarCard
        badgeText="New Business"
        badgeColor="success"
        badgeIcon="🌱"
        positionText="Starter Plan"
        title="New Practice Special"
        description="Build your online presence • Perfect for new clinics"
        price={99}
        note="1-year plan required"
        borderColor="success"
        bgColor="bg-success bg-opacity-10"
      />

      {/* Dental Specialty Spot */}
      <MarketingSidebarCard
        badgeText="Dental Special"
        badgeColor="info"
        badgeIcon="🦷"
        positionText="Category Exclusive"
        title="Dental Practice Spotlight"
        description="Target dental patients • Category leadership"
        price={179}
        note="Only 2 spots available"
        borderColor="info"
        bgColor="bg-info bg-opacity-10"
      />

      {/* Budget Option */}
      <MarketingSidebarCard
        badgeText="Budget"
        badgeColor="secondary"
        badgeIcon="💸"
        positionText="Entry Level"
        title="Basic Sponsored Listing"
        description="Get started • Minimal commitment"
        price={79}
        note="1-year billing"
        borderColor="secondary"
        bgColor="bg-light"
      />
    </div>
  );
};

export default BusinessListingSideBar;
