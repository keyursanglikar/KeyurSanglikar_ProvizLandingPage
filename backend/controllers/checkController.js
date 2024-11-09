const User = require('../models/User');



const checkIfUserExists = async (req, res) => {
    const { email, phoneno } = req.body; // Get email or phone number from the request body
  
    try {
      // Check if a user with the same email or phone number exists
      const existingUser = await User.findOne({ $or: [{ email }, { phoneno }] });
  
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists with this email or phone number.' });
      }
  
      res.status(200).json({ message: 'User is available for registration.' });
    } catch (error) {
      res.status(500).json({ message: 'Server error, please try again later.' });
    }
  };

  module.exports = { checkIfUserExists };