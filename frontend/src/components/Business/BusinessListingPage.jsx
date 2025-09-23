import React, { useState } from "react";
import Layout from "../Layout/Layout";
import HeroInfoBox from "../Layout/hero/HeroInfoBox";
import BusinessCard from "./cards/BusinessCard";
import BusinessListingSideBar from "./functional/BusinessListingSideBar";
import businesses from "./data/businesses.json";
import heroIMGmedical2 from "../../assets/images/doctor-and-patient-primary-care.png";

// util functions
import { sortBusinesses } from "../../util/sortedBusinesses";

const BusinessListingPage = () => {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  // Filter businesses based on search & filter
  const filteredBusinesses = businesses.filter((b) => {
    if (filter === "featured" && !b.featured) return false;
    if (
      filter !== "all" &&
      filter !== "featured" &&
      b.type.toLowerCase() !== filter
    )
      return false;
    if (search && !b.name.toLowerCase().includes(search.toLowerCase()))
      return false;
    return true;
  });

  // Sort so sponsored always appear on top
  const sortedBusinesses = sortBusinesses(filteredBusinesses);

  return (
    <Layout>
      <HeroInfoBox
        title="Find & Manage Your Free Medical Listing"
        heroIMG={heroIMGmedical2}
        subtitle="Keep your practice visible and trusted online."
        desc="Update your business details, showcase your services, and ensure patients can easily find, trust, and connect with your practice."
        cta_text="Claim Your Free Listing Today"
      />

      <div className="container py-5">
        <h1 className="mb-4">Medical Businesses Directory</h1>

        {/* Filters */}
        <div className="mb-4 d-flex gap-2 flex-wrap">
          {["all", "featured", "clinic", "hospital", "urgentcare"].map((f) => (
            <button
              key={f}
              className={`btn ${
                filter === f ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="mb-4 d-flex justify-content-center">
          <div className="input-group" style={{ maxWidth: "700px" }}>
            <input
              type="text"
              className="form-control form-control-lg rounded-start-pill shadow-sm border-primary"
              placeholder="🔍 Search by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="btn btn-primary btn-lg rounded-end-pill shadow-sm"
              type="button"
              onClick={() => console.log("🔍 Search clicked:", search)}
            >
              🔍 Search
            </button>
          </div>
        </div>

        {/* Main listing + sidebar */}
        <div className="row">
          {/* Main listings: 8 cols */}
          <div className="col-lg-8">
            {sortedBusinesses.length ? (
              sortedBusinesses.map((b) => (
                <div key={b.id} className="col-12 mb-4">
                  <BusinessCard business={b} />
                </div>
              ))
            ) : (
              <p className="text-muted">No businesses found.</p>
            )}
          </div>

          {/* Sidebar: 4 cols */}
          <div className="col-lg-4">
            <BusinessListingSideBar />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BusinessListingPage;
