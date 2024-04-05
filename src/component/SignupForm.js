import React, { useState } from 'react';

const SignupForm = ({ onSwitchToLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); 

  const handleSignup = (e) => {
    e.preventDefault();
  
    setMessage('');
  
    if (!username || !password || !confirmPassword || !email) {
      setMessage("All fields are required.");
      return;
    }
  
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
  
    const requestBody = { username, password, email };
  
    fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
    })
    .then(response => response.json())
    .then(data => {
      setMessage(data.message); 
      if (data.message === 'User registered successfully' || data.message === 'Username is already taken') {
        setUsername('');
        setPassword('');
        setConfirmPassword('');
        setEmail('');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      setMessage("An error occurred. Please try again.");
    });
  };

  return (
    <form onSubmit={handleSignup}>
      {message && <div style={{ color: 'red', marginBottom: '10px' }}>{message}</div>}
      <div>
        <label htmlFor="username">Username: </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Create a password"
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password: </label>
        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your password"
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
      <div>
        <button type="button" onClick={onSwitchToLogin}>
          Switch to Login
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
