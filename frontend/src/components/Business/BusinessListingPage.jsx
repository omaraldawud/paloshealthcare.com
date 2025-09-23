import React, { useState } from "react";
import Layout from "../Layout/Layout";
//JASON-LT Metas
import {
  SEOMeta,
  seoConfig,
  breadcrumbConfig,
  faqConfig,
  serviceConfig,
  BreadcrumbSchema,
  FAQSchema,
  ServiceSchema,
} from "../SEO";

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
    <>
      <div>
        {/* SEO Meta */}
        <SEOMeta {...seoConfig.home} />
        <BreadcrumbSchema items={breadcrumbConfig.home} />
        <FAQSchema questions={faqConfig.home} />
        <ServiceSchema services={serviceConfig.home} />
      </div>
      <HeroInfoBox
        title="Find & Manage Your Free Medical Listing"
        heroIMG={heroIMGmedical2}
        subtitle="Keep your practice visible and trusted online."
        desc="Update your business details, showcase your services, and ensure patients can easily find, trust, and connect with your practice."
        cta_text="Claim Your Free Listing Today"
      />
      <div className="mb-5">
        {/* Row 1: Title */}
        <div className="row justify-content-center text-center mb-4">
          <div className="col-12">
            <h1 className="display-5 fw-bold text-primary">
              Medical Businesses Directory
            </h1>
            <p className="lead text-muted">
              Find and connect with healthcare providers in your area
            </p>
          </div>
        </div>

        {/* Row 2: Search */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-5 col-md-8">
            <div className="input-group">
              <input
                type="text"
                className="form-control form-control-lg rounded-start-pill border-primary shadow-sm"
                placeholder="🔍 Search by name, specialty, or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={(e) =>
                  e.key === "Enter" && console.log("🔍 Search clicked:", search)
                }
              />
              <button
                className="btn btn-primary btn-lg rounded-end-pill shadow-sm px-4"
                type="button"
                onClick={() => console.log("🔍 Search clicked:", search)}
              >
                🔍 Search
              </button>
            </div>
          </div>
        </div>

        {/* Row 3: Filters */}
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="d-flex justify-content-center flex-wrap gap-3">
              {[
                "all",
                "featured",
                "clinic",
                "hospital",
                "urgentcare",
                "dentist",
              ].map((f) => (
                <button
                  key={f}
                  className={`btn btn-lg ${
                    filter === f ? "btn-warning" : "btn-outline-primary"
                  } rounded-pill px-4`}
                  onClick={() => setFilter(f)}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Layout sidebar={<BusinessListingSideBar />}>
        <div className="container ">
          {/* Main listing + sidebar */}
          <div className="row">
            {/* Main listings: 8 cols - One business card per row */}
            <div>
              {sortedBusinesses.length ? (
                sortedBusinesses.map((b) => (
                  <div key={b.id} className="mb-4">
                    <BusinessCard business={b} />
                  </div>
                ))
              ) : (
                <p className="text-muted">No businesses found.</p>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default BusinessListingPage;
