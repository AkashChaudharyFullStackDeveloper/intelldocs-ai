const Document = require('../models/Document');

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

exports.getDocuments = async (req, res) => {
  // Return all documents for dashboard analytics
  const docs = await Document.find();
  res.json(docs);
};
