// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import OrderSchema from "@/models/order";
import ProductSchema from "@/models/Product";
import connectDB from "@/middleware/mongoos";
const handler = async (req, res) => {
  let allProduct = await ProductSchema.find();
  res.status(200).json(allProduct);
};
export default connectDB(handler);
