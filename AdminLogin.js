import React, { useState } from 'react';
import AdminDashboard from './AdminDashboard';

function AdminLogin({ addNGO }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
      alert('Login successful!');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="admin-login">
      <h2>Admin Login</h2>
      {isLoggedIn ? (
        <AdminDashboard addNGO={addNGO} />
      ) : (
        <form onSubmit={handleLogin}>
          <div>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default AdminLogin;
