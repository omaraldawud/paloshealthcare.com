import { useState, useEffect } from "react";
import BusinessCard from "../cards/BusinessCard.jsx";
import businessesJSON from "../data/businesses.json";

const FeaturedBusinesses = () => {
  const [featured, setFeatured] = useState([]);
  const [reviews, setReviews] = useState({}); // { businessId: [reviews] }
  const useMongo = import.meta.env.VITE_USE_MONGO === "true";

  useEffect(() => {
    if (useMongo) {
      fetch(
        "https://paloshealthcarecom-production.up.railway.app/api/businesses?featured=true"
      )
        .then((res) => res.json())
        .then(async (data) => {
          setFeatured(data);

          const businessIds = data.map((b) => b._id);
          if (businessIds.length) {
            const res = await fetch(
              "https://paloshealthcarecom-production.up.railway.app/api/reviews/by-businesses",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ businessIds }),
              }
            );
            const reviewsData = await res.json();

            // Transform into { businessId: [reviews] }
            const reviewMap = {};
            reviewsData.forEach((r) => {
              const id = r.businessId._id;
              if (!reviewMap[id]) reviewMap[id] = [];
              reviewMap[id].push(r);
            });
            setReviews(reviewMap);
          }
        })
        .catch((err) => {
          console.error("Mongo fetch failed, using JSON fallback:", err);
          setFeatured(businessesJSON.filter((b) => b.featured));
        });
    } else {
      setFeatured(businessesJSON.filter((b) => b.featured));
    }
  }, [useMongo]);

  return (
    <div className="container">
      <div className="row g-4">
        {featured.map((b) => (
          <div key={b._id} className="col-md-12">
            {console.log("reviews:", reviews)}
            <BusinessCard business={b} reviews={reviews[b._id] || []} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBusinesses;
