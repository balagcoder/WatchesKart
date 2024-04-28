import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    // payment: {},
    paymentstatus: {
      type: String,
      default: "No",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);
