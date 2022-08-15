import express from "express";
import Carousel from "../models/carouselModel.js";

const carouselRouter = express.Router();

carouselRouter.get("/", async (req, res) => {
  const carousels = await carousel.find();
  res.send(carousels);
});

carouselRouter.get("/:codeName", async (req, res) => {
  const carousel = await Carousel.findOne({ codeName: req.params.codeName });
  if (carousel) {
    res.send(carousel);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

export default carouselRouter;
