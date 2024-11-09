// routes/UserRoutes.js

const express = require('express');
const router = express.Router();
const { submitApplication } = require('../controllers/UserController');
const { validateUser } = require('../middlewares/userMiddlewares');
const {checkIfUserExists}= require('../controllers/checkController.js');

// Define the POST route for submitting the user application
router.post('/Application', validateUser, submitApplication);
router.post('/Check', checkIfUserExists);

module.exports = router;
