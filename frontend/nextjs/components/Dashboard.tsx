import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [analytics, setAnalytics] = useState<any>(null);

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
