import React, { useState } from "react";
import "./Signin.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = () => {
    // Handle sign-in logic here
  };

  return (
    <div className="centered-container">
      <div className="login-form">
        <h2>Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="action-button" onClick={handleSignin}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Signin;
