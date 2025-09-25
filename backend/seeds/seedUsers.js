// backend/seeder/seedUsers.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("../models/User");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected for seeding users"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

const usersData = [
  {
    name: "Alice Visitor",
    email: "alice@example.com",
    role: "visitor",
  },
  {
    name: "Bob Visitor",
    email: "bob@example.com",
    role: "visitor",
  },
  {
    name: "Charlie Admin",
    email: "charlie@example.com",
    role: "admin",
  },
  {
    name: "Dana Business Owner",
    email: "dana@example.com",
    role: "business_owner",
  },
];

const seedUsers = async () => {
  try {
    await User.deleteMany(); // remove old users
    const created = await User.insertMany(usersData);
    console.log(`${created.length} users added!`);
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedUsers();
