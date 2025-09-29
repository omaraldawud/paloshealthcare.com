const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String },
    featured: { type: Boolean, default: false },
    isSponsored: { type: Boolean, default: false },
    isWalkIn: { type: Boolean, default: false },
    isClaimed: { type: Boolean, default: false },
    logoLink: { type: String },
    appointmentLink: { type: String },
    specialties: [{ type: String }],
    address: { type: String },
    phone: { type: String },
    website: { type: String },
    appointmentLink: { type: String },
    image: { type: String },
    logoLink: { type: String },
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
    description: { type: String },
    yearEstablished: { type: Number },
    employees: { type: String },
    insuranceProviders: [{ type: String }],
    languagesSpoken: [{ type: String }],
    amenities: [{ type: String }],
    awards: [{ type: String }],
    socialMedia: {
      facebook: { type: String },
      instagram: { type: String },
      linkedin: { type: String },
    },
    doctors: [
      {
        drName: { type: String },
        drTitle: { type: String },
        drLink: { type: String },
      },
    ],
    affilationHostpitals: [
      {
        affilationName: { type: String },
        affilationLink: { type: String },
        affilationLogo: { type: String },
      },
    ],
  },
  { timestamps: true }
);

businessSchema.index({
  name: "text",

  type: "text",
  description: "text",
  // doctors: "text",
  // affilationHostpitals: "text",
  //   specialties: "text",
});

module.exports = mongoose.model("Business", businessSchema);
