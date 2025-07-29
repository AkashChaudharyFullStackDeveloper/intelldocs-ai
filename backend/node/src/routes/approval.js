
// Routes for approval-related endpoints
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const approvalController = require('../controllers/approvalController');


// Request approval for a document (user or admin)
router.post('/request', auth(['user', 'admin']), approvalController.requestApproval);

// Update approval status (admin only)
router.post('/update', auth(['admin']), approvalController.updateApproval);

// Get all approvals for the current user (user or admin)
router.get('/', auth(['admin', 'user']), approvalController.getApprovals);


module.exports = router;
