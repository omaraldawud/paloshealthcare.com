import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BusinessCard from "../Business/cards/BusinessCard";
import HeroSearch from "../Layout/hero/HeroSearch";
import Layout from "../Layout/Layout";
import SearchSideBar from "./SearchSidebar";
import Footer from "../Layout/Footer";
import { getApiBase } from "../../utils/apiBase";

const SearchResults = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [reviews, setReviews] = useState({});
  const [loading, setLoading] = useState(false);

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");
  const API_BASE = getApiBase();

  useEffect(() => {
    if (!query) return;

    const fetchResults = async () => {
      setLoading(true);
      try {
        // Fetch businesses
        const res = await fetch(
          `${API_BASE}/businesses/search?query=${encodeURIComponent(query)}`
        );
        const data = await res.json();
        setResults(data);

        // Fetch reviews for these businesses
        if (data.length) {
          const resReviews = await fetch(`${API_BASE}/reviews/by-businesses`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ businessIds: data.map((b) => b._id) }),
          });
          const reviewsData = await resReviews.json();

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
