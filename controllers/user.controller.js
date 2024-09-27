
const User = require('../models/user.model'); 

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    res.status(200).json(users); // Return the users in JSON format
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

module.exports = {
  getAllUsers
};
