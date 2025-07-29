
// Controller for handling document-related operations
const Document = require('../models/Document');


/**
 * Upload a new document and save its metadata to MongoDB.
 * Expects: file in req.file, user info in req.user
 * Sets status to 'pending' by default.
 */
exports.uploadDocument = async (req, res) => {
  // Save document metadata to MongoDB
  const doc = new Document({
    filename: req.file.filename,
    originalname: req.file.originalname,
    uploadedBy: req.user.id,
    status: 'pending',
    createdAt: new Date()
  });
  await doc.save();
  res.json({ message: 'Document uploaded', docId: doc._id });
};


/**
 * Get all documents for dashboard analytics or listing.
 */
exports.getDocuments = async (req, res) => {
  // Return all documents for dashboard analytics
  const docs = await Document.find();
  res.json(docs);
};
