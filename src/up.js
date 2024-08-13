import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './up.css';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [signupSuccessful, setSignupSuccessful] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Password should be at least 8 characters long and contain at least one number and one special character
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const validatePhoneNumber = (phoneNumber) => {
    // Validate phone number (10 digits)
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    // Validate username
    if (username.length < 3) {
      alert('Username must be at least 3 characters long.');
      return;
    }

    // Validate email
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Validate password
    if (!validatePassword(password)) {
      alert('Password must be at least 8 characters long and contain at least one number and one special character.');
      return;
    }

    // Confirm passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Validate phone number
    if (!validatePhoneNumber(phoneNumber)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    try {
      await axios.post('http://localhost:8080/api/users/signup', {
        username,
        email,
        password,
        phoneNumber
      });
      setSignupSuccessful(true);
      console.log("Successful signup");
      navigate('/');
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-form-container">
        <div className="signup-form-box">
          <h2 className="signup-heading">Sign Up</h2>
          <form onSubmit={handleSignup}>
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
              <label htmlFor="email">Email ID</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                id="confirm-password"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="text"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="signup-button">Sign Up</button>
          </form>
          <div className="login-link-container">
            Already have an account? <Link to="/login" className="login-link">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
