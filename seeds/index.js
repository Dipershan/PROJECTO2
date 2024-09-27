require("dotenv").config(); // Load environment variables
const mongoose = require("mongoose");
const userController = require("../controllers/user.controller");
const fs = require("fs");
const path = require("path");

// Load the user data from the JSON file (fake.json)
const dataPath = path.join(__dirname, "fake.json");
const users = JSON.parse(fs.readFileSync(dataPath, "utf8"));

// Define the setup object for seeding
const setup = {
  initialize: async () => {
    try {
      console.log("Start user seeding...");

      // Verify that DB_URL is defined
      if (!process.env.DB_URL) {
        throw new Error("DB_URL is not defined in .env file");
      }

      // Connect to MongoDB
      await mongoose.connect(process.env.DB_URL);
      console.log("Connected to MongoDB successfully!");

      // Loop through users and insert them into the database
      for (const user of users) {
        const userData = {
          name: user.name,
          email: user.email,
          password: user.password,
        };

        // Use the userController to create the user in MongoDB
        try {
          const createdUser = await userController.create(userData);
          console.log(`User ${createdUser.name} added successfully!`);
        } catch (error) {
          console.log(`Error creating user ${user.name}:`, error.message);
        }
      }

      console.log("All users seeded successfully!");

      // Close MongoDB connection
      await mongoose.disconnect();
      console.log("Disconnected from MongoDB.");
    } catch (e) {
      console.error("Error during user seeding:", e.message); // Log only the message
      await mongoose.disconnect(); // Ensure you disconnect in case of error
    }
  },
};

// Run the seeding process
setup.initialize();
