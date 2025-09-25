const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./config/db");
const businessRoutes = require("./routes/businessRoutes");
const userRoutes = require("./routes/userRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const cors = require("cors");
const path = require("path");

connectDB();

const app = express();

app.use(cors());
app.use(express.json()); // parse JSON
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// Routes
app.use("/api/businesses", businessRoutes);
app.use("/api/users", userRoutes);
app.use("/api/reviews", reviewRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
