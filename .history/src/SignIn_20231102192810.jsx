// SignIn.jsx
import React, { useState } from "react";
import "./styles/SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = () => {
    // Handle sign-in logic here, e.g., send data to the server
  };

  return (
    <div className="sign-in">
      <div className="div">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="text-wrapper">Sign In</div>
          <div className="frame">
            <div className="div-wrapper">
              <div className="text-wrapper-2">Email</div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="frame-2" />
          <div className="frame-3">
            <div className="text-wrapper-3">Password</div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="action-button" onClick={handleSignin}>
            Sign In
          </button>
          <div className="overlap">
            <img
              className="rectangle-4"
              alt="Rectangle"
              src="rectangle-90.svg"
            />
            <img className="ellipse" alt="Ellipse" src="ellipse-1.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
