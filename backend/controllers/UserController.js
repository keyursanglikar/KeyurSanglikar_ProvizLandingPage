// controllers/UserController.js

const User = require('../models/User');

// Controller for submitting user application
exports.submitApplication = async (req, res) => {
    try {
        const { name, phoneno, email, statement } = req.body;
        const user = new User({ name, phoneno, email, statement });
        await user.save();
        res.status(201).json({ message: 'Form submitted successfully' });
    } catch (err) {
        res.status(400).json({ message: 'Error submitting form', error: err.message });
    }
};

