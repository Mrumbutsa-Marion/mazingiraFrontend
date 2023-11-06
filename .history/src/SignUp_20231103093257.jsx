// SignUp.jsx
import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    // Handle signup logic here
  };

  const navigateToSignIn = () => {
    // You can use React Router or other navigation methods here
    // For simulation, you can redirect to the Sign-In page URL
    window.location.href = "/signin"; // Replace with your Sign-In page URL
  };

  return (
    <div className="centered-container">
      <div className="registration-form">
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
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
        <button onClick={handleSignup}>Sign Up</button>
        <button onClick={navigateToSignIn}>Sign In</button> {/* Add Sign In button */}
      </div>
    </div>
  );
};

export default SignUp;
