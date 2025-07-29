
// Route for user authentication (login)
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


// User login endpoint
router.post('/login', userController.login);

module.exports = router;
