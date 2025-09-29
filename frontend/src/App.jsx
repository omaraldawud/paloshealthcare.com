import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./assets/css/App.css";
// import BusinessListingPage from "./components/Business/BusinessListingPage";
import SearchResults from "./components/search/SearchResults";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/medical-businesses" element={<BusinessListingPage />} /> */}

        {/* needs work */}
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}
