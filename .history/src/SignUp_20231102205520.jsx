import React, { useState } from "react";
import "./SignUp.css"; 

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    // Handle sign-up logic here, e.g., send data to the server
  };

  return (
    <div className="sign-up">
      <div className="div">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="text-wrapper">Sign Up</div>
          <div className="frame">
            <div className="div-wrapper">
              <div className="text-wrapper-2">Full Name</div>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          </div>
          <div className="frame-2" />
          <div className="frame-3">
            <div className="text-wrapper-3">Email</div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="frame-wrapper">
            <div className="frame-4">
              <div className="text-wrapper-4">Password</div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button className="action-button" onClick={handleSignup}>
            Sign Up
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

export default SignUp;
