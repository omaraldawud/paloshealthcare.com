// src/Layout/Layout.jsx
import React from "react";
import Header from "./Header";

export default function Layout({ children, sidebar }) {
  return (
    <div className="app mt-5">
      <Header />
      <main className="container">
        <div className="row">
          {/* Main content */}
          <div className={sidebar ? "col-lg-8" : "col-12"}>{children}</div>

          {/* Sidebar, if provided */}
          {sidebar && <div className="col-lg-4">{sidebar}</div>}
        </div>
      </main>
    </div>
  );
}
