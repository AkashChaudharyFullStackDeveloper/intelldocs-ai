
// Mongoose model for Document records
const mongoose = require('mongoose');


/**
 * DocumentSchema defines the structure for uploaded documents:
 * - filename: stored file name
 * - originalname: original file name
 * - uploadedBy: user ID who uploaded
 * - status: document status (e.g., pending, approved)
 * - createdAt: upload timestamp
 */
const DocumentSchema = new mongoose.Schema({
  filename: String,
  originalname: String,
  uploadedBy: String,
  status: String,
  createdAt: Date
});

module.exports = mongoose.model('Document', DocumentSchema);
