
// Dashboard component for displaying document analytics
import { useEffect, useState } from 'react';


/**
 * Dashboard fetches analytics data from the backend and displays document stats.
 * Shows total, pending, and approved document counts.
 */
export default function Dashboard() {
  const [analytics, setAnalytics] = useState<any>(null);

  // Fetch analytics data on component mount
  useEffect(() => {
    fetch('http://localhost:4000/api/dashboard/analytics')
      .then(res => res.json())
      .then(setAnalytics);
  }, []);

  if (!analytics) return <div>Loading analytics...</div>;

  return (
    <div>
      <h2>Analytics Dashboard</h2>
      <ul>
        <li>Total Documents: {analytics.totalDocs}</li>
        <li>Pending: {analytics.pending}</li>
        <li>Approved: {analytics.approved}</li>
      </ul>
    </div>
  );
}
