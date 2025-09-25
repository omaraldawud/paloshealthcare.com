const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const fs = require("fs");
const path = require("path");
const Business = require("../models/Business");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected for seeding"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

const businessesFilePath = path.join(
  __dirname,
  "../../frontend/src/components/Business/data/businesses.json"
);
const businessesData = JSON.parse(fs.readFileSync(businessesFilePath, "utf-8"));

const seedBusinesses = async () => {
  try {
    await Business.deleteMany();
    const created = await Business.insertMany(businessesData);
    console.log(`${created.length} businesses added!`);
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedBusinesses();
