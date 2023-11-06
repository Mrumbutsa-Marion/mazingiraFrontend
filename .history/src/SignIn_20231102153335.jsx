import React from "react";
import "./Signin.css"; // Relative path to the CSS file in the same directory
// ...
const Signin = () => {
  return (
    <div className="sign-in">
      <div className="div">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="text-wrapper">Sign In</div>
          <div className="frame">
            <div className="div-wrapper">
              <div className="text-wrapper-2">Email</div>
            </div>
          </div>
          <div className="frame-2" />
          <div className="frame-3">
            <div className="text-wrapper-3">Password</div>
          </div>
          <div className="frame-wrapper">
            <div className="frame-4">
              <div className="text-wrapper-4">Forgot Password?</div>
            </div>
          </div>
          <button className="action-button">Sign Up</button>
          <div className="overlap">
            <img className="rectangle-4" alt="Rectangle" src="rectangle-90.svg" />
            <img className="ellipse" alt="Ellipse" src="ellipse-1.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
