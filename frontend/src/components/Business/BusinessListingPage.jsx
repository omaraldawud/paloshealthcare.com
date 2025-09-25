import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import Footer from "../Layout/Footer";

// SEO
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
import localBusinesses from "./data/businesses.json"; // fallback JSON
import heroIMGmedical2 from "../../assets/images/doctor-and-patient-primary-care.png";

import { sortBusinesses } from "../../utils/sortedBusinesses";
import { getMedTypeIcon } from "../../utils/getMedTypeIcon";

const BusinessListingPage = () => {
  const [businesses, setBusinesses] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchBusinesses = async () => {
      if (import.meta.env.VITE_USE_MONGO === "true") {
        try {
          const res = await fetch("http://localhost:5000/api/businesses");
          const data = await res.json();
          setBusinesses(data);
        } catch (err) {
          console.error("Error fetching businesses:", err);
          setBusinesses(localBusinesses); // fallback if API fails
        }
      } else {
        setBusinesses(localBusinesses);
      }
    };
    fetchBusinesses();
  }, []);

  // filter businesses
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

  // sort
  const sortedBusinesses = sortBusinesses(filteredBusinesses);

  return (
    <>
      <div>
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
        {/* Search + Filters... (same as your code) */}
      </div>

      <Layout sidebar={<BusinessListingSideBar />}>
        <div className="container">
          <div className="row">
            <div>
              {sortedBusinesses.length ? (
                sortedBusinesses.map((b) => (
                  <div key={b._id || b.id} className="mb-4">
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

      <Footer />
    </>
  );
};

export default BusinessListingPage;
