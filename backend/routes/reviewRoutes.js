const express = require("express");
const router = express.Router();
const Review = require("../models/Review"); // your Mongoose model

// GET all reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().populate("userId businessId");
    res.json(reviews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET single review by ID
router.get("/:id", async (req, res) => {
  try {
    const review = await Review.findById(req.params.id).populate(
      "userId businessId"
    );
    if (!review) return res.status(404).json({ message: "Review not found" });
    res.json(review);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// POST create review
router.post("/", async (req, res) => {
  try {
    const newReview = new Review(req.body);
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Invalid data", error: err.message });
  }
});

// PUT update review
router.put("/:id", async (req, res) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedReview)
      return res.status(404).json({ message: "Review not found" });
    res.json(updatedReview);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Update failed", error: err.message });
  }
});

// DELETE review
router.delete("/:id", async (req, res) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    if (!deletedReview)
      return res.status(404).json({ message: "Review not found" });
    res.json({ message: "Review deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
