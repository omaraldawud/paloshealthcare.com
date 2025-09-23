// src/components/business/FeaturedBusinesses.jsx
import businesses from "../data/businesses.json";
import BusinessCard from "../cards/BusinessCard.jsx";

const FeaturedBusinesses = () => {
  // filter featured businesses
  const featured = businesses.filter((b) => b.featured);

  return (
    <div className="container ">
      <div className="featured-section">
        {/* Main Title with Decorative HR */}
        <div className="text-center mb-5">
          <div className="d-flex align-items-center justify-content-center mb-3">
            <hr className="flex-grow-1 border-gradient" />
            <span className="mx-3 text-success">Featured</span>
            <hr className="flex-grow-1 border-gradient" />
          </div>
          <h2 className="fw-bold display-5 text-dark ">
            Featured Healthcare Providers
          </h2>
          <p className="text-muted lead">
            Discover trusted medical businesses in our directory
          </p>
        </div>
        <div className="row g-4">
          {featured.map((business) => (
            <div className="col-md-12" key={business.id}>
              <BusinessCard business={business} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBusinesses;
