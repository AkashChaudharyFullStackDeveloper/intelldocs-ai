
// Routes for dashboard analytics endpoints
const express = require('express');
const router = express.Router();
const Document = require('../models/Document');


/**
 * Analytics endpoint for dashboard.
 * Returns total, pending, and approved document counts.
 */
router.get('/analytics', async (req, res) => {
  const totalDocs = await Document.countDocuments();
  const pending = await Document.countDocuments({ status: 'pending' });
  const approved = await Document.countDocuments({ status: 'approved' });
  res.json({ totalDocs, pending, approved });
});

module.exports = router;
