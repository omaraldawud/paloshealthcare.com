const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String },
    featured: { type: Boolean, default: false },
    isSponsored: { type: Boolean, default: false },
    specialties: [{ type: String }],
    address: { type: String }, // <-- add this
    phone: { type: String }, // <-- add this
    website: { type: String }, // <-- add this
    hours: [
      {
        day: { type: String },
        open: { type: String },
        close: { type: String },
      },
    ],
    rating: { type: Number },
    sponsoredDescription: { type: String },
    featuredDescription: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Business", businessSchema);
