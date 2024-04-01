import React, { useState } from 'react';

const LoginForm = ({ toggleForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      alert('Please enter username and password.');
      return;
    }
    // Implement login logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
      <button type="submit">Login</button><br />
      <button type="button" onClick={toggleForm}>Switch to Signup</button>
    </form>
  );
};

export default LoginForm;
