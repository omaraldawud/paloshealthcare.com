const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: {
      type: String,
      enum: ["admin", "business_owner", "visitor"],
      default: "visitor",
    },
    claimedBusinesses: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Business" },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
