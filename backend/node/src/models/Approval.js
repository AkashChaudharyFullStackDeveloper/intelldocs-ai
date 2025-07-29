
// Mongoose model for Approval documents
const mongoose = require('mongoose');


/**
 * ApprovalSchema defines the structure for approval records:
 * - documentId: ID of the document being approved
 * - approverId: ID of the user who approves/rejects
 * - status: approval status (pending/approved/rejected)
 * - comment: optional comment from approver
 * - createdAt, updatedAt: timestamps
 */
const ApprovalSchema = new mongoose.Schema({
  documentId: String,
  approverId: String,
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  comment: String,
  createdAt: Date,
  updatedAt: Date
});

module.exports = mongoose.model('Approval', ApprovalSchema);
