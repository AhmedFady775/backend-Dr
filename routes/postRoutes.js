import express from "express";
import Post from "../models/posts/postModel.js";

const postRouter = express.Router();

postRouter.get("/", async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
});

postRouter.get("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post) {
    res.send(post);
  } else {
    res.status(404).send({ message: "Post Not Found" });
  }
});

postRouter.post("/createPost", async (req, res) => {
  const newPost = new Post({
    name: req.body.name,
    date: req.body.date,
    image: req.body.image,
    description: req.body.description,
    subject: req.body.subject,
  });
  const post = await newPost.save();
  res.send({ message: "Post Created", post });
});

export default postRouter;
