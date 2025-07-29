
// Dashboard page combines analytics and notifications
import Dashboard from '../components/Dashboard';
import Notification from '../components/Notification';


/**
 * DashboardPage renders the analytics dashboard and user notifications.
 * Retrieves JWT token from localStorage for notifications.
 */
export default function DashboardPage() {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  return (
    <div>
      <Dashboard />
      {token && <Notification token={token} />}
    </div>
  );
}
