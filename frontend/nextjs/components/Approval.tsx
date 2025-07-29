import { useState } from 'react';

export default function Approval({ docId, onApproved }: { docId: string, onApproved: () => void }) {
  const [status, setStatus] = useState('pending');
  const [comment, setComment] = useState('');

  const handleApprove = async () => {
    // Call backend to approve
    await fetch('http://localhost:4000/api/approvals/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ approvalId: docId, status: 'approved', comment })
    });
    setStatus('approved');
    onApproved();
  };

  const handleReject = async () => {
    await fetch('http://localhost:4000/api/approvals/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ approvalId: docId, status: 'rejected', comment })
    });
    setStatus('rejected');
    onApproved();
  };

  return (
    <div>
      <h3>Approval</h3>
      <textarea value={comment} onChange={e => setComment(e.target.value)} placeholder="Comment" />
      <button onClick={handleApprove} disabled={status !== 'pending'}>Approve</button>
      <button onClick={handleReject} disabled={status !== 'pending'}>Reject</button>
      <div>Status: {status}</div>
    </div>
  );
}
