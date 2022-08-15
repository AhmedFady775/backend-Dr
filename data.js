import bcrypt from "bcryptjs";

const data = {
  products: [
    {
      name: "cam1",
      codeName: "cam-1",
      image: "/images/images6.jpg", // 679px × 829px
      brand: "x2",
      price: 220000,
      countInStock: 10,
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
      type: "camera",
      category: "moving-camera",
    },
    {
      name: "Cam2",
      codeName: "Cam-2",
      image: "/images/images6.jpg", // 679px × 829px
      brand: "canaon",
      price: 250,
      countInStock: 5,
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
      type: "camera",
      category: "moving-camera",
    },
    {
      name: "Cam3",
      codeName: "Cam-3",
      image: "/images/images6.jpg", // 679px × 829px
      price: 25,
      countInStock: 15,
      rating: 4.5,
      numReviews: 14,
      description: "high quality product",
      brand: "x2",
      type: "camera",
      category: "steady-camera",
    },
    {
      name: "Cam4",
      codeName: "Cam-4",
      image: "/images/images6.jpg", // 679px × 829px
      brand: "canaon",
      price: 250,
      countInStock: 5,
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
      type: "camera",
      category: "moving-camera",
    },
    {
      name: "Cam5",
      codeName: "Cam-5",
      image: "/images/images6.jpg", // 679px × 829px
      brand: "canaon",
      price: 250,
      countInStock: 5,
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
      type: "camera",
      category: "moving-camera",
    },
    {
      name: "wire1",
      codeName: "wire-1",
      image: "/images/images6.jpg", // 679px × 829px
      price: 120,
      countInStock: 10,
      rating: 4.5,
      numReviews: 10,
      avalibilty: "in stock",
      description: "high quality Cam",
      brand: "kodak",
      type: "wire",
      category: "steady-wire",
    },
    {
      name: "wire2",
      codeName: "wire-2",
      image: "/images/images6.jpg", // 679px × 829px
      price: 250,
      countInStock: 20,
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
      brand: "canaon",
      type: "wire",
      category: "steady-wire",
    },
    {
      name: "wire3",
      codeName: "wire-3",
      image: "/images/images6.jpg", // 679px × 829px
      price: 25,
      countInStock: 15,
      rating: 4.5,
      numReviews: 14,
      description: "high quality product",
      brand: "kodak",
      type: "wire",
      category: "moving-wire",
    },
    {
      name: "device1",
      codeName: "device-1",
      image: "/images/images6.jpg", // 679px × 829px
      price: 120,
      countInStock: 10,
      rating: 4.5,
      numReviews: 10,
      avalibilty: "in stock",
      description: "high quality Cam",
      brand: "canaon",
      type: "device",
      category: "steady-device",
    },
    {
      name: "device2",
      codeName: "device-2",
      image: "/images/images6.jpg", // 679px × 829px
      price: 250,
      countInStock: 20,
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
      brand: "canaon",
      type: "device",
      category: "moving-device",
    },
    {
      name: "device3",
      codeName: "device-3",
      image: "/images/images6.jpg", // 679px × 829px
      price: 25,
      countInStock: 15,
      rating: 4.5,
      numReviews: 14,
      description: "high quality product",
      brand: "kodak",
      type: "device",
      category: "steady-device",
    },
  ],
  users: [
    {
      name: "Ahmed",
      userName: "Ahmedx",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "John",
      userName: "Johnx",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
    {
      name: "pierre",
      userName: "pierrexxx",
      email: "pierre@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  carousel: [
    {
      codeName: "image1",
      image: "/images/1.png",
    },
    {
      codeName: "image2",
      image: "/images/2.png",
    },
    {
      codeName: "image3",
      image: "/images/3.png",
    },
    {
      codeName: "image4",
      image: "/images/4.png",
    },
  ],
};

export default data;
