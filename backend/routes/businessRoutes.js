// routes/businesses.js
const express = require("express");
const router = express.Router();
const Business = require("../models/Business"); // make sure your model exists

// GET all businesses
router.get("/", async (req, res) => {
  try {
    const businesses = await Business.find();
    res.json(businesses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET featured businesses
router.get("/featured", async (req, res) => {
  //This defines a GET endpoint at /api/businesses/featured.
  try {
    const featured = await Business.find({ featured: true });
    res.json(featured);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET /api/businesses/search?query=...
router.get("/search", async (req, res) => {
  const { query } = req.query;
  if (!query || !query.trim()) return res.json([]);

  try {
    const regex = new RegExp(query, "i"); // case-insensitive partial match

    const results = await Business.find({
      $or: [
        { name: regex },
        { description: regex },
        { doctors: { $elemMatch: { $regex: regex } } }, // if doctors is array
        { specialties: { $elemMatch: { $regex: regex } } }, // if specialties is array
        { affilationHostpitals: regex },
      ],
    }).limit(50);

    res.json(results);
  } catch (err) {
    console.error("Search error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Single Business by ID
// GET single business by ID
router.get("/:id", async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);

    if (!business) {
      return res.status(404).json({ message: "Business not found" });
    }

    res.json(business);
  } catch (err) {
    console.error(err);

    // Handle invalid ObjectId format
    if (err.name === "CastError") {
      return res.status(400).json({ message: "Invalid business ID format" });
    }

    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
