import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import carouselRouter from "./routes/carouselRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import path from "path";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// test
app.use("/api/seed", seedRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/carousel", carouselRouter);
app.use("/api/orders", orderRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"))
);

const port = process.env.Port || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
