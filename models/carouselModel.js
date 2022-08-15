import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    codeName: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

const Carousel = mongoose.model("Carousel", userSchema);
export default Carousel;
