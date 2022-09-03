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
    images: req.body.images,
    videos: req.body.images,
    description: req.body.description,
    subject: req.body.subject,
    status: false,
  });
  const post = await newPost.save();
  res.send({ message: "Post Created", post });
});

postRouter.delete("/delete/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post) {
    await post.remove();
    res.send({ message: "Post Deleted" });
  } else {
    res.status(404).send({ message: "Post Not Found" });
  }
});

postRouter.put("/update/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post) {
    post.name = req.body.name;
    post.date = req.body.date;
    post.image = req.body.image;
    post.images = req.body.images;
    post.videos = req.body.images;
    post.description = req.body.description;
    post.subject = req.body.subject;
    post.status = req.body.status;
    await post.save();
    res.send({ message: "Post Updated" });
  } else {
    res.status(404).send({ message: "Post Not Found" });
  }
});

export default postRouter;
