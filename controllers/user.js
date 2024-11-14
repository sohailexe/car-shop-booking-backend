import User from "../models/user.js";

export function getAll(req, res) {
  User.find()
    .then((users) => {
      res.send(users);

      console.log(users); // Logs all users
    })

    .catch((err) => {
      console.error("Error retrieving users:", err);
    });
}

export const createUser = async (req, res) => {
  try {
    // Extract user data from the request body

    const { name, email, phone } = req.body;

    // Create a new user instance

    const newUser = new User({
      name,

      email,

      phone,
    });

    // Save the user to the database

    await newUser.save();

    // Send a response back to the client

    res.status(201).json({
      message: "User  created successfully",

      user: newUser,
    });
  } catch (error) {
    console.error("Error creating user:", error);

    res.status(400).json({
      message: "Error creating user",

      error: error.message,
    });
  }
};
