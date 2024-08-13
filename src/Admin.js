import React, { useState } from 'react';
import './Admin.css';
import adminLoginImage from './admin.png'; 
import { Link } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    console.log('Admin Username:', username);
    console.log('Admin Password:', password);
  };

  return (
    <div className="admin-login-page-container">
      <div className="admin-image-container">
        <img src={adminLoginImage} alt="Admin Login" className="admin-login-image" />
      </div>
      <div className="admin-login-container">
        <div className="admin-login-box">
          <h2>Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className="admin-input-group">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="admin-input-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="admin-login-button">Login</button>
          </form>
          <div className="admin-signup-link">
            Not an admin? <Link to='/login'>Login as User</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
