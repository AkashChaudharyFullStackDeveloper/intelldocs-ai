
// Controller for handling notification-related operations
const Notification = require('../models/Notification');


/**
 * Create and send a notification to a user.
 * Expects: userId, message in req.body
 */
exports.createNotification = async (req, res) => {
  const notification = new Notification({
    userId: req.body.userId,
    message: req.body.message,
    createdAt: new Date()
  });
  await notification.save();
  res.json({ message: 'Notification sent', notification });
};


/**
 * Get all notifications for the current user.
 * Uses req.user.id to filter notifications.
 */
exports.getNotifications = async (req, res) => {
  const notifications = await Notification.find({ userId: req.user.id });
  res.json(notifications);
};
