
// Route for user registration
const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');


// Register a new user
router.post('/', registerController.register);

module.exports = router;
