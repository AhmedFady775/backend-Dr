import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    name: { type: String },
    date: { type: String },
    image: { type: String },
    images: [String],
    videos: [String],
    description: { type: String },
    subject: { type: String },
    status: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);
export default Post;
