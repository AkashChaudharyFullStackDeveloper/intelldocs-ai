
// Mongoose model for Notification records
const mongoose = require('mongoose');


/**
 * NotificationSchema defines the structure for notifications:
 * - userId: user to whom the notification is sent
 * - message: notification content
 * - read: whether the notification has been read
 * - createdAt: timestamp
 */
const NotificationSchema = new mongoose.Schema({
  userId: String,
  message: String,
  read: { type: Boolean, default: false },
  createdAt: Date
});

module.exports = mongoose.model('Notification', NotificationSchema);
