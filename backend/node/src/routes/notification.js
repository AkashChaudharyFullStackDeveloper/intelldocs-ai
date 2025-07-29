const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const notificationController = require('../controllers/notificationController');

router.post('/create', auth(['admin', 'user']), notificationController.createNotification);
router.get('/', auth(['admin', 'user']), notificationController.getNotifications);

module.exports = router;
