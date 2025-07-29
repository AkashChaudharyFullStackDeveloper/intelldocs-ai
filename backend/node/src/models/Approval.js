const mongoose = require('mongoose');

const ApprovalSchema = new mongoose.Schema({
  documentId: String,
  approverId: String,
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  comment: String,
  createdAt: Date,
  updatedAt: Date
});

module.exports = mongoose.model('Approval', ApprovalSchema);
