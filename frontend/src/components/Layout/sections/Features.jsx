//

//
import React from "react";

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <h2>Why List With Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-search"></i>
            </div>
            <h3>Enhanced Visibility</h3>
            <p>
              Get discovered by patients actively searching for healthcare
              services in your area.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-star"></i>
            </div>
            <h3>Review System</h3>
            <p>
              Build trust with potential patients through our verified review
              system.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>SEO Optimization</h3>
            <p>
              Our platform is designed to help you rank higher in search
              results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
