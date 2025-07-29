const Notification = require('../models/Notification');

exports.createNotification = async (req, res) => {
  const notification = new Notification({
    userId: req.body.userId,
    message: req.body.message,
    createdAt: new Date()
  });
  await notification.save();
  res.json({ message: 'Notification sent', notification });
};

exports.getNotifications = async (req, res) => {
  const notifications = await Notification.find({ userId: req.user.id });
  res.json(notifications);
};
