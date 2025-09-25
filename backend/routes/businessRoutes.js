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
  if (!query) return res.json([]);

  try {
    const results = await Business.find(
      { $text: { $search: query } },
      { score: { $meta: "textScore" } }
    ).sort({ score: { $meta: "textScore" } });

    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
