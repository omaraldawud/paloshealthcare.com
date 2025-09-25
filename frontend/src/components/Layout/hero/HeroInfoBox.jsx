import React from "react";
import { useLocation } from "react-router-dom";
import HeroSearch from "./HeroSearch";
import HeroStats from "./HeroStats";

import heroIMGmedical from "../../../assets/images/local-medical-business.jpg";
import heroBG from "../../../assets/images/value-based-healthcare.png";
import heroBG2 from "../../../assets/images/doctor-with-stethoscope.jpg";

export default function HeroInfoBox({
  title = "Claim & Manage Your Free Medical Listing",
  heroIMG = heroIMGmedical,
  subtitle = "Keep your practice visible and trusted online.",
  desc = "Update your business details, showcase your services, and ensure patients can easily find, trust, and connect with your practice.",
  cta_text = "Claim Your Free Listing Today",
}) {
  const location = useLocation();
  const isHome = location.pathname === "/"; // only show HeroSearch on home

  return (
    <section
      className="hero-info py-5 my-5"
      id="claim-listing"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url(${heroBG})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "repeat-x",
      }}
    >
      <div className="container">
        <div
          className="row align-items-stretch rounded-4 shadow p-4"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(${heroBG2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Left content */}
          <div
            className="col-lg-6 mb-4 mb-lg-0 d-flex flex-column justify-content-between text-center text-lg-start"
            style={{ minHeight: "500px" }}
          >
            <div>
              <h2
                className="fw-bold text-uppercase mb-3 position-relative d-inline-block"
                style={{
                  WebkitTextStroke: "1px currentColor",
                  paintOrder: "stroke fill",
                  letterSpacing: "4px",
                }}
              >
                {title}
              </h2>
              {/* Thick Line below header */}
              <span
                className="d-block bg-info"
                style={{ height: "6px", marginTop: "6px", borderRadius: "3px" }}
              ></span>
              <h5 className="text-secondary fw-semibold my-3">{subtitle}</h5>
              <p className="text-muted my-5">{desc}</p>
              <HeroStats />
            </div>
          </div>

          {/* Right image */}
          <div className="col-lg-6 text-center">
            <img
              src={heroIMG}
              alt="Manage your listing illustration"
              className="img-fluid rounded-3"
              style={{ minHeight: "500px" }}
            />
            {/* CTA buttons */}
            <div className="d-flex justify-content-center w-100 mt-3">
              <a
                href="#claim-now"
                className="btn btn-outline-primary btn-lg rounded-4 px-4 shadow-sm"
              >
                {cta_text}
                <i className="bi bi-chevron-double-down ms-2"></i>
              </a>
            </div>
          </div>

          {/* Only show HeroSearch on home page */}

          <div>
            <h2 className="fw-bold text-primary ">
              Search Healthcare Providers
            </h2>
            <p className="text-muted">
              Find every medical center in your area quickly and easily.
            </p>
            <HeroSearch />
          </div>
        </div>
      </div>
    </section>
  );
}
