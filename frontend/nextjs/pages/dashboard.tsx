import Dashboard from '../components/Dashboard';
import Notification from '../components/Notification';

export default function DashboardPage() {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  return (
    <div>
      <Dashboard />
      {token && <Notification token={token} />}
    </div>
  );
}
