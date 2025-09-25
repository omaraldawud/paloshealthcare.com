import mongoose from "mongoose";

const BusinessContactSchema = new mongoose.Schema(
  {
    businessId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Business",
      required: true,
    },
    name: { type: String, required: true },
    role: String,
    email: { type: String, required: true },
    phone: String,
    isPrimary: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.BusinessContact ||
  mongoose.model("BusinessContact", BusinessContactSchema);
