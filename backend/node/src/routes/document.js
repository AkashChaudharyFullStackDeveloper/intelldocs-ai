const express = require('express');
const router = express.Router();
const multer = require('multer');
const axios = require('axios');
const auth = require('../middleware/auth');
const documentController = require('../controllers/documentController');
const upload = multer({ dest: 'uploads/' });

// Upload document (protected, role: user or admin)
router.post('/upload', auth(['user', 'admin']), upload.single('file'), async (req, res) => {
  // Save metadata
  await documentController.uploadDocument(req, res);
  // Call Python OCR microservice
  const ocrRes = await axios.post('http://localhost:5001/ocr', { path: req.file.path });
  // Call Python GenAI microservice
  const genaiRes = await axios.post('http://localhost:5002/genai', { text: ocrRes.data.text });
  res.json({ summary: genaiRes.data.summary, insights: genaiRes.data.insights });
});

// Get all documents (protected, admin only)
router.get('/', auth('admin'), documentController.getDocuments);

module.exports = router;
