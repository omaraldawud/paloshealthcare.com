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

  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    if (!query) return;
    const fetchResults = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${API_BASE}/api/businesses/search?query=${encodeURIComponent(query)}`
        );
        const data = await res.json();
        setResults(data);
      } catch (err) {
        console.error("Error fetching search results:", err);
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
