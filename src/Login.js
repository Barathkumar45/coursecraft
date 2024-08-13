import React, { useState } from 'react';
import './Login.css';
// import loginImage from './Loginpic.png'; 
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); 

    if (username === '' || password === '') {
      setError('Please enter both username and password.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/users/login', { username, password });

      
      if (username === "barath" && password === "barath") {
        navigate('/admin/admin/dash');
      } else {
        console.log('Login Successful', response.data);
        navigate('/loginbtn');
      }
    } catch (error) {
      console.error('There was an error', error);
      setError('Incorrect username or password. Please try again.'); 
    }
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-form-container">
        <div className="login-card">
          <h2>Login</h2>
          {error && <div className="error-message">{error}</div>} {/* Display error message */}
          <form onSubmit={handleLogin}>
            <div className="form-group">
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
            <div className="form-group">
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
            <button type="submit">Login</button>
          </form>
          <div className="register-link">
            Don't have an account? <Link to='/signuplink'>Create an account</Link>
          </div>
        </div>
      </div>
      {/* <img src={loginImage} alt="Login" className="login-photo" /> */}
    </div>
  );
};

export default Login;
