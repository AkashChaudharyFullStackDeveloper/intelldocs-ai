
// Approval component for approving or rejecting a document
import { useState } from 'react';


/**
 * Approval allows a user to approve or reject a document with an optional comment.
 * Calls backend API to update approval status.
 */
export default function Approval({ docId, onApproved }: { docId: string, onApproved: () => void }) {
  const [status, setStatus] = useState('pending');
  const [comment, setComment] = useState('');

  // Approve the document
  const handleApprove = async () => {
    await fetch('http://localhost:4000/api/approvals/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ approvalId: docId, status: 'approved', comment })
    });
    setStatus('approved');
    onApproved();
  };

  // Reject the document
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
