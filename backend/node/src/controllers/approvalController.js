const Approval = require('../models/Approval');

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

exports.updateApproval = async (req, res) => {
  const { approvalId, status, comment } = req.body;
  const approval = await Approval.findByIdAndUpdate(
    approvalId,
    { status, comment, updatedAt: new Date() },
    { new: true }
  );
  res.json({ message: 'Approval updated', approval });
};

exports.getApprovals = async (req, res) => {
  const approvals = await Approval.find({ approverId: req.user.id });
  res.json(approvals);
};
