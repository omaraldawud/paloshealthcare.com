//

// Your main component
import Divider from "../../UI/Divider";
import MarketingSidebarCard from "../../UI/MarketingSidebarCard";

const BusinessListingSideBar = () => {
  return (
    <div>
      <Divider />
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
        note="billed yearly"
        borderColor="primary"
        bgColor="bg-primary bg-opacity-10"
      />
    </div>
  );
};

export default BusinessListingSideBar;
