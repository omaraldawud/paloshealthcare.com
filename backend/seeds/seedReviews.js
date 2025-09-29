// backend/seeds/seedReviews.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

dotenv.config();

const Business = require("../models/Business");
const User = require("../models/User");
const Review = require("../models/Review");

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected for seeding reviews"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

// Load sample reviews JSON
const reviewsFilePath = path.join(
  __dirname,
  "../../frontend/src/components/Business/data/sampleMedReviews.json"
);
const sampleReviews = JSON.parse(fs.readFileSync(reviewsFilePath, "utf-8"));

const seedReviews = async () => {
  try {
    const businesses = await Business.find();
    const users = await User.find();

    if (!businesses.length || !users.length) {
      console.log("No businesses or users found. Seed them first.");
      process.exit();
    }

    // Map users by old JSON id (u1, u2, etc.) to real MongoDB _id
    const usersMap = {};
    users.forEach((user) => {
      usersMap[user.name] = user._id; // match by name, assuming names are unique in sample
    });

    // Remove existing reviews
    await Review.deleteMany();

    const reviewsToInsert = [];

    sampleReviews.forEach((review) => {
      // Pick a random business for this review
      const randomBusiness =
        businesses[Math.floor(Math.random() * businesses.length)];

      // Find corresponding user by name
      const userId = usersMap[review.user.name];
      if (!userId) return; // skip if user not found

      reviewsToInsert.push({
        businessId: randomBusiness._id,
        userId,
        rating: review.rating,
        comment: review.text,
        createdAt: review.time_created,
        updatedAt: review.time_created,
      });
    });

    const created = await Review.insertMany(reviewsToInsert);
    console.log(`${created.length} reviews added!`);
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedReviews();
