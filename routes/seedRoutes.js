import express from "express";
// import Camera from "../models/products/cameraModel.js";
import data from "../data.js";
import User from "../models/users/userModel.js";
// import Device from "../models/products/deviceModel.js";
// import Wire from "../models/products/wireModel.js";
import Product from "../models/products/productModel.js";
import Carousel from "../models/carouselModel.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  await Carousel.deleteMany({});
  const createdCarouselImages = await Carousel.insertMany(data.carousel);
  await Product.deleteMany({});
  const createdProducts = await Product.insertMany(data.products);
  await User.deleteMany({});
  const createdUsers = await User.insertMany(data.users);
  res.send({
    createdUsers,
    createdProducts,
    createdCarouselImages,
  });
});
export default seedRouter;
