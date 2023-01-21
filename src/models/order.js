const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    product: [
      {
        productId: { type: String },
        quantity: { type: Number, default: 1 },
        address: { type: String, required: true },
        status: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.model("order", OrderSchema);
