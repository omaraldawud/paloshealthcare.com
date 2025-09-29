import { useState, useEffect } from "react";
import BusinessCard from "../cards/BusinessCard.jsx";
import businessesJSON from "../data/businesses.json";
import { getApiBase } from "../../../utils/apiBase.js";

const FeaturedBusinesses = () => {
  const [featured, setFeatured] = useState([]);
  const [reviews, setReviews] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE = getApiBase();
  const useLocal = import.meta.env.VITE_USE_LOCAL_API === "true"; // <-- define flag

  useEffect(() => {
    const loadFeaturedBusinesses = async () => {
      setLoading(true);
      setError(null);

      try {
        if (!useLocal) {
          console.log("----------- using MongoDB data structure -----------");
          const businessesResponse = await fetch(
            `${API_BASE}/businesses/featured`
          );
          const businessesData = await businessesResponse.json();
          setFeatured(businessesData);

          const businessIds = businessesData.map((b) => b._id);
          if (businessIds.length > 0) {
            const reviewsResponse = await fetch(
              `${API_BASE}/reviews/by-businesses`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ businessIds }),
              }
            );
            const reviewsData = await reviewsResponse.json();

            const reviewMap = {};
            reviewsData.forEach((r) => {
              const id = r.businessId._id;
              if (!reviewMap[id]) reviewMap[id] = [];
              reviewMap[id].push(r);
            });
            setReviews(reviewMap);
          }
        } else {
          console.log("----------- using local data structure -----------");
          setFeatured(businessesJSON.filter((b) => b.featured));
        }
      } catch (err) {
        console.error("Fetch failed, using JSON fallback:", err);
        setError("Failed to load featured businesses");
        setFeatured(businessesJSON.filter((b) => b.featured));
      } finally {
        setLoading(false);
      }
    };

    loadFeaturedBusinesses();
  }, [API_BASE, useLocal]);

  if (loading)
    return (
      <div className="text-center py-4">Loading featured businesses...</div>
    );
  if (error) return <div className="alert alert-warning">{error}</div>;
  if (!loading && featured.length === 0)
    return <div className="text-center py-4">No featured businesses found</div>;

  return (
    <div className="container">
      <div className="row g-4">
        {featured.map((b) => (
          <div key={b._id} className="col-md-12">
            <BusinessCard business={b} reviews={reviews[b._id] || []} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBusinesses;
