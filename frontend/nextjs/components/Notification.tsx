
// Notification component for displaying user notifications
import { useEffect, useState } from 'react';


/**
 * Notification fetches and displays notifications for the current user.
 * Requires a valid JWT token for authentication.
 */
export default function Notification({ token }: { token: string }) {
  const [notifications, setNotifications] = useState<any[]>([]);

  // Fetch notifications on mount or when token changes
  useEffect(() => {
    fetch('http://localhost:4000/api/notifications', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(setNotifications);
  }, [token]);

  return (
    <div>
      <h3>Notifications</h3>
      <ul>
        {notifications.map((n, i) => (
          <li key={i}>{n.message} {n.read ? '' : '(new)'}</li>
        ))}
      </ul>
    </div>
  );
}
