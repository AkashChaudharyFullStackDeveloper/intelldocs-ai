
// Home page for document upload, login, and dashboard
import { useState } from 'react';
import Dashboard from '../components/Dashboard';
import Approval from '../components/Approval';
import Notification from '../components/Notification';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setAuth, logout } from '../store/slices/authSlice';

/**
 * Home page allows users to login, upload documents, and view analytics.
 * Handles authentication, file upload, and displays dashboard/notifications.
 */
export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);
  const role = useSelector((state: RootState) => state.auth.role);

  // Handle user login
  const handleLogin = async () => {
    try {
      const res = await fetch('http://localhost:4000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
      });
      const data = await res.json();
      if (data.token) {
        dispatch(setAuth({ token: data.token, role: data.role }));
      } else {
        alert('Login failed');
      }
    } catch (err) {
      alert('Login error');
    }
  };

  // Handle document upload
  const handleUpload = async () => {
    if (!file || !token) return;
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await fetch('http://localhost:4000/api/documents/upload', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      if (!res.ok) throw new Error('Upload failed');
      setResult(await res.json());
    } catch (err) {
      alert('Upload error');
    }
  };

  return (
    <div>
      <h1>Enterprise AI Document Intelligence</h1>
      {!token ? (
        <div>
          <input
            type="text"
            placeholder="Username"
            value={loginData.username}
            onChange={e => setLoginData({ ...loginData, username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={loginData.password}
            onChange={e => setLoginData({ ...loginData, password: e.target.value })}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <>
          <div>Logged in as <b>{role}</b> <button onClick={() => dispatch(logout())}>Logout</button></div>
          <input type="file" onChange={e => setFile(e.target.files?.[0] || null)} />
          <button onClick={handleUpload}>Upload & Analyze</button>
          {result && (
            <div>
              <h2>Summary</h2>
              <p>{result.summary}</p>
              <h2>Insights</h2>
              <pre>{JSON.stringify(result.insights, null, 2)}</pre>
              {/* Example: Approval flow for admin */}
              {role === 'admin' && result.docId && (
                <Approval docId={result.docId} onApproved={() => alert('Approval updated!')} />
              )}
            </div>
          )}
          <Dashboard />
          <Notification token={token} />
        </>
      )}
    </div>
  );
}
