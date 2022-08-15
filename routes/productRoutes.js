import express from "express";
import Product from "../models/products/productModel.js";

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

productRouter.get("/codeName/:codeName", async (req, res) => {
  const product = await Product.findOne({ codeName: req.params.codeName });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

productRouter.get("/type/:type", async (req, res) => {
  const product = await Product.find({ type: req.params.type });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

productRouter.get("/type/:type/category/:category", async (req, res) => {
  const product = await Product.find({
    category: req.params.category,
    type: req.params.type,
  });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

productRouter.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

export default productRouter;
