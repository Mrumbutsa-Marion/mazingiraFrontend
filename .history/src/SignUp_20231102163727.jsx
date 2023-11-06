import React from 'react';
import './Signup.css'; // Import your CSS file

function SignUp() {
  return (
    <div className="sign-up">
      <div className="div">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="text-wrapper">Sign Up</div>
          <div className="frame">
            <div className="div-wrapper">
              <div className="text-wrapper-2">Full Name</div>
            </div>
          </div>
          <div className="frame-2" />
          <div className="frame-3">
            <div className="text-wrapper-3">Email</div>
          </div>
          <div className="frame-wrapper">
            <div className="frame-4">
              <div className="text-wrapper-4">Password</div>
            </div>
          </div>
          <div className="i-agree-with-to-the-wrapper">
            <p className="i-agree-with-to-the">
              <span className="span">I agree with the </span>
              <span className="text-wrapper-5">Terms of Use</span>
            </p>
          </div>
          <img className="img" alt="Rectangle" src="rectangle-91.svg" />
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="text-wrapper-6">Sign Up</div>
          <div className="text-wrapper-7">Sign In</div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
