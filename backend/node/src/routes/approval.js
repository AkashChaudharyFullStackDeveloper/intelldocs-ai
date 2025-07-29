const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const approvalController = require('../controllers/approvalController');

router.post('/request', auth(['user', 'admin']), approvalController.requestApproval);
router.post('/update', auth(['admin']), approvalController.updateApproval);
router.get('/', auth(['admin', 'user']), approvalController.getApprovals);

module.exports = router;
