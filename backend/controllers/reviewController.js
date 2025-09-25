const Review = require("../models/Review");

// @desc Get all reviews for a business
exports.getReviewsByBusiness = async (req, res) => {
  try {
    const reviews = await Review.find({ businessId: req.params.businessId })
      .populate("userId", "name") // only pull the user name
      .populate("businessId", "name"); // optional: include business name
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc Add a review
exports.addReview = async (req, res) => {
  try {
    const { businessId, userId, rating, comment } = req.body;
    const review = new Review({ businessId, userId, rating, comment });
    await review.save();
    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc Delete a review
exports.deleteReview = async (req, res) => {
  try {
    const deleted = await Review.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Review not found" });
    res.json({ message: "Review deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
