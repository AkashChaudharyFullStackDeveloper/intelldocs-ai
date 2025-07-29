const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  filename: String,
  originalname: String,
  uploadedBy: String,
  status: String,
  createdAt: Date
});

module.exports = mongoose.model('Document', DocumentSchema);
