import { useEffect, useState } from "react";
import BusinessCard from "../cards/BusinessCard.jsx";

const FeaturedBusinesses = () => {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/businesses/featured"
        );
        const data = await res.json();
        setFeatured(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatured();
  }, []);

  if (loading) return <p>Loading featured businesses...</p>;

  return (
    <div className="container">
      <div className="featured-section">
        <div className="text-center mb-5">
          <div className="d-flex align-items-center justify-content-center mb-3">
            <hr className="flex-grow-1 border-gradient" />
            <span className="mx-3 text-success">Featured</span>
            <hr className="flex-grow-1 border-gradient" />
          </div>
          <h2 className="fw-bold display-5 text-dark">
            Featured Healthcare Providers
          </h2>
          <p className="text-muted lead">
            Discover trusted medical businesses in our directory
          </p>
        </div>
        <div className="row g-4">
          {featured.map((business) => (
            <div className="col-md-12" key={business._id}>
              <BusinessCard business={business} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBusinesses;
