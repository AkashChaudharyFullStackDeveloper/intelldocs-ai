
// Routes for notification-related endpoints
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const notificationController = require('../controllers/notificationController');


// Create a notification (admin or user)
router.post('/create', auth(['admin', 'user']), notificationController.createNotification);

// Get all notifications for the current user (admin or user)
router.get('/', auth(['admin', 'user']), notificationController.getNotifications);

module.exports = router;
