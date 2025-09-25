// backend/seeds/seedReviews.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const Business = require("../models/Business");
const User = require("../models/User");
const Review = require("../models/Review");

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

const sampleComments = [
  "Excellent service, highly recommend!",
  "Very professional and friendly staff.",
  "Would not recommend, long wait times.",
  "Great experience, will come back.",
  "Affordable and reliable care.",
];

const seedReviews = async () => {
  try {
    const businesses = await Business.find();
    const users = await User.find();

    if (!businesses.length || !users.length) {
      console.log("No businesses or users found. Seed them first.");
      process.exit();
    }

    // Delete existing reviews
    await Review.deleteMany();

    const reviewsToInsert = [];

    businesses.forEach((business) => {
      // Randomly create 1-3 reviews per business
      const reviewCount = Math.floor(Math.random() * 3) + 1;

      for (let i = 0; i < reviewCount; i++) {
        const randomUser = users[Math.floor(Math.random() * users.length)];

        reviewsToInsert.push({
          businessId: business._id,
          userId: randomUser._id,
          rating: Math.floor(Math.random() * 5) + 1,
          comment:
            sampleComments[Math.floor(Math.random() * sampleComments.length)],
        });
      }
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
