const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs").promises;

// Helper to load JSON
const loadJSON = async (filePath) => {
  const data = await fs.readFile(filePath, "utf8");
  return JSON.parse(data);
};

// POST /api/reviews/by-businesses
router.post("/by-businesses", async (req, res) => {
  const { businessIds } = req.body;
  if (!businessIds || !Array.isArray(businessIds)) {
    return res.status(400).json({ message: "businessIds is required" });
  }

  try {
    const reviews = await loadJSON(
      path.join(__dirname, "../data/sampleMedReviews.json")
    );

    // Map reviews to businesses by type (simple mapping for JSON-only)
    const mappedReviews = reviews
      .map((r) => {
        let businessId = null;
        if (r.businessType === "clinic")
          businessId = 1; // map to Palos Healthcare
        else if (r.businessType === "doctor") businessId = 2; // map to Orland Advanced Dentistry
        return { ...r, businessId };
      })
      .filter((r) => businessIds.includes(r.businessId));

    res.json(mappedReviews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
