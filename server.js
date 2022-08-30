import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import userRouter from "./routes/userRoutes.js";
import postRouter from "./routes/postRoutes.js";
import uploadRouter from "./routes/uploadRoutes.js";

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
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// test
app.use("/api/seed", seedRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/upload", uploadRouter);

const port = process.env.Port || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
