import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Dr.Mubarak",
      email: "admin@example.com",
      password: bcrypt.hashSync("Mj6{gQ2Gu5',sx9"),
      isAdmin: true,
    },
  ],
};

export default data;
