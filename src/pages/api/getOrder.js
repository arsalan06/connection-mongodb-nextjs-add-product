// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import OrderSchema from "@/models/order";
import connectDB from "@/middleware/mongoos";
const handler = async (req, res) => {
  let allOrder = await OrderSchema.find();
  res.status(200).json(allOrder);
};
export default connectDB(handler);
