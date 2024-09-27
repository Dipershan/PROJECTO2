// userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller"); // Import the controller

// Define the route to get all users
router.get("/", async (req, res) => {
  try {
    const users = await userController.getAllUsers(); // Fetch users from MongoDB
    res.status(200).json(users); // Send users as JSON response
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
