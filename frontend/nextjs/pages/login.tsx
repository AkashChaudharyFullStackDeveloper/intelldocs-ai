
// Login page for user authentication
import { useState } from 'react';
import { useRouter } from 'next/router';


/**
 * Login page allows users to authenticate and stores JWT token in localStorage.
 * Redirects to home page on successful login.
 */
export default function Login() {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const router = useRouter();

  // Handle user login
  const handleLogin = async () => {
    const res = await fetch('http://localhost:4000/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginData)
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role);
      router.push('/');
    } else {
      alert('Login failed');
    }
  };

  return (
    <div>
      <h1>Login</h1>
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
  );
}
