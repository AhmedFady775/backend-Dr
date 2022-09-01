import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    date: { type: String, required: true },
    image: { type: String, required: true },
    images: [String],
    videos: [String],
    description: { type: String, required: true },
    subject: { type: String, required: true },
    status: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);
export default Post;
