import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BusinessCard from "../Business/cards/BusinessCard";

import HeroInfoBox from "../Layout/hero/HeroInfoBox";
import Layout from "../Layout/Layout";
import BusinessListingSideBar from "../Business/functional/BusinessListingSideBar";
import heroIMGmedical2 from "../../assets/images/medical-femal-doctor.jpg";
import Footer from "../Layout/Footer";
import SearchSideBar from "./SearchSidebar";
import HeroSearch from "../Layout/hero/HeroSearch";

const SearchResults = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [reviews, setReviews] = useState({}); // { businessId: [reviews] }
  const [loading, setLoading] = useState(false);

  // Parse ?query= from URL
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  useEffect(() => {
    if (!query) return;

    const fetchResults = async () => {
      setLoading(true);
      try {
        // Fetch search results
        const res = await fetch(
          `/api/businesses/search?query=${encodeURIComponent(query)}`
        );
        const data = await res.json();
        setResults(data);

        // Fetch reviews for these businesses
        if (data.length > 0) {
          const businessIds = data.map((b) => b._id);
          const revRes = await fetch("/api/reviews/by-businesses", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ businessIds }),
          });
          const reviewsData = await revRes.json();

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
        console.error("Error fetching search results or reviews:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <>
      <div className="mt-5 pt-5">
        <HeroSearch />
      </div>
      <Layout sidebar={<SearchSideBar />}>
        <hr
          className="mx-auto " // centers horizontally and adds vertical spacing
          style={{
            width: "50%", // half the container width
            borderTop: "4px solid #007bff", // thickness and color
            borderRadius: "2px", // slightly rounded edges
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
