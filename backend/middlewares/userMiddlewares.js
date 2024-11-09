// middleware/UserMiddleware.js

const { body, validationResult } = require('express-validator');

// Middleware for validating user input
exports.validateUser = [
    body('name').notEmpty().withMessage('Name is required'),
    body('phoneno').notEmpty().withMessage('Phone number is required').isNumeric().withMessage('Phone number must be numeric'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('statement').notEmpty().withMessage('Statement is required'),
    
    // Check validation result
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
