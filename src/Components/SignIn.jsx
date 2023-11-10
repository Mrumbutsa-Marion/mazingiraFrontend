import './SignIn.css';
import React, { useState } from 'react';

function SignIn() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleLogin = async () => {
    const response = await fetch('https://mazingira-organizationapi.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      setRole(data.role);
      setEmail(data.email);
      
      window.location.href = '/';
    } else {
      console.error(data.message);
    }
  };

  return (
    <div className="loginin-page">
      <div className="form-login">
        <form className="loginin-form">
          <input
            id="username"
            className="input-field"
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            id="email"
            className="input-field"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            id="password"
            className="input-field"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            id="role"
            className="input-field"
            type="text"
            placeholder="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <button onClick={handleLogin}>login</button>
          <p className="message">Not registered? <a href="#">Create an account</a></p>
        </form>
      </div>
      {role && <p>Logged in as {email} with role {role}</p>}
    </div>
  );
}

export default SignIn;