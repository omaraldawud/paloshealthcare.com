// backend/seeds/seedBusinesses.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const Business = require("../models/Business");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected for seeding businesses"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

const seedBusinesses = async () => {
  try {
    const filePath = path.join(
      __dirname,
      "../../frontend/src/components/Business/data/businesses.json"
    );
    let businessesData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    // ❌ Remove numeric "id" field to prevent CastError
    businessesData = businessesData.map(({ id, ...rest }) => rest);

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
