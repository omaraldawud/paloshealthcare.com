import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BusinessCard from "../Business/cards/BusinessCard";

import HeroSearch from "../Layout/hero/HeroSearch";
import Layout from "../Layout/Layout";
import SearchSideBar from "./SearchSidebar";
import Footer from "../Layout/Footer";

const SearchResults = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [reviews, setReviews] = useState({}); // { businessId: [reviews] }
  const [loading, setLoading] = useState(false);

  // Parse ?query= from URL
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  const API_BASE =
    import.meta.env.VITE_USE_MONGO === "true"
      ? import.meta.env.VITE_API_BASE_URL
      : "http://localhost:5173";

  console.log("API_BASE :", API_BASE);
  useEffect(() => {
    if (!query) return;

    const fetchResults = async () => {
      setLoading(true);
      try {
        // 1️⃣ Fetch businesses
        const res = await fetch(
          `${API_BASE}/api/businesses/search?query=${encodeURIComponent(query)}`
        );
        const data = await res.json();
        setResults(data);

        // 2️⃣ Fetch reviews if we have any businesses
        if (data.length) {
          const resReviews = await fetch(
            `${API_BASE}/api/reviews/by-businesses`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ businessIds: data.map((b) => b._id) }),
            }
          );
          const reviewsData = await resReviews.json();

          // Transform into { businessId: [reviews] }
          const reviewMap = {};
          reviewsData.forEach((r) => {
            const id = r.businessId._id;
            if (!reviewMap[id]) reviewMap[id] = [];
            reviewMap[id].push(r);
          });
          setReviews(reviewMap);
        }
      } catch (err) {
        console.error("Error fetching search results:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query, API_BASE]);

  return (
    <>
      <div className="mt-5 pt-5">
        <HeroSearch />
      </div>

      <Layout sidebar={<SearchSideBar />}>
        <hr
          className="mx-auto"
          style={{
            width: "50%",
            borderTop: "4px solid #007bff",
            borderRadius: "2px",
          }}
        />

        <div className="container">
          <h2 className="fw-bold mb-4">Search Results for "{query}"</h2>

          {loading && <p>Loading...</p>}

          {!loading && results.length === 0 && (
            <p>No results found for "{query}".</p>
          )}

          {!loading && results.length > 0 && (
            <div className="row g-4">
              {results.map((b) => (
                <div key={b._id} className="col-12">
                  <BusinessCard business={b} reviews={reviews[b._id] || []} />
                </div>
              ))}
            </div>
          )}
        </div>
      </Layout>

      <Footer />
    </>
  );
};

export default SearchResults;
