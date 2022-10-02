import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import postRouter from "./routes/postRoutes.js";
import uploadRouter from "./routes/uploadRoutes.js";
import cors from "cors";
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
app.use(
  cors(
    {
      methods: ["PUT,POST,PATCH,DELETE,GET,OPTIONS"],
    },
    {
      origin:
        "Access-Control-Allow-Methods, *, Access-Control-Allow-Origin, Origin, X-Requested-with, Content_Type,Accept,Authorization",
    }
  )
);

// app.use((req, res, next) => {
//   if (req.method === "PUT,POST,PATCH,DELETE,GET,OPTIONS") {
//     res.header(
//       "Access-Control-Allow-Methods, *, Access-Control-Allow-Origin",
//       "Origin, X-Requested-with, Content_Type,Accept,Authorization"
//     );
//     return res.status(200).json({});
//   }
//   next();
// });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// test
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/upload", uploadRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
