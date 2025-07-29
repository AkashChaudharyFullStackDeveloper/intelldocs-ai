const express = require('express');
const router = express.Router();
const Document = require('../models/Document');

// Simple analytics endpoint
router.get('/analytics', async (req, res) => {
  const totalDocs = await Document.countDocuments();
  const pending = await Document.countDocuments({ status: 'pending' });
  const approved = await Document.countDocuments({ status: 'approved' });
  res.json({ totalDocs, pending, approved });
});

module.exports = router;
