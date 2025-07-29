import { useEffect, useState } from 'react';

export default function Notification({ token }: { token: string }) {
  const [notifications, setNotifications] = useState<any[]>([]);

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
