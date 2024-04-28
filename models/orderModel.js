import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.ObjectId,
        ref: "Products",
      },
    ],
    paymentstatus: {
      type: mongoose.ObjectId,
      ref: "Payment", // Reference to the Payment model
    },
    buyer: {
      type: mongoose.ObjectId,
      ref: "users",
    },
    totalcost: {
      type: String,
    },
    status: {
      type: String,
      default: "Not Process",
    },
    mplan: {
      type: String,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
