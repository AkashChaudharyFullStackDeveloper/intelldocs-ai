
// Controller for handling approval-related operations
const Approval = require('../models/Approval');


/**
 * Request approval for a document by a specific approver.
 * Expects: documentId, approverId in req.body
 * Sets status to 'pending' by default.
 */
exports.requestApproval = async (req, res) => {
  const approval = new Approval({
    documentId: req.body.documentId,
    approverId: req.body.approverId,
    status: 'pending',
    createdAt: new Date(),
    updatedAt: new Date()
  });
  await approval.save();
  res.json({ message: 'Approval requested', approval });
};


/**
 * Update the status or comment of an approval.
 * Expects: approvalId, status, comment in req.body
 */
exports.updateApproval = async (req, res) => {
  const { approvalId, status, comment } = req.body;
  const approval = await Approval.findByIdAndUpdate(
    approvalId,
    { status, comment, updatedAt: new Date() },
    { new: true }
  );
  res.json({ message: 'Approval updated', approval });
};


/**
 * Get all approvals assigned to the current user (approver).
 * Uses req.user.id to filter approvals.
 */
exports.getApprovals = async (req, res) => {
  const approvals = await Approval.find({ approverId: req.user.id });
  res.json(approvals);
};
