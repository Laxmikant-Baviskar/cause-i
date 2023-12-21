// ========= Below code is with otp boxes ===================

import React, { useState } from 'react';
import './LoginPage.css'; // Make sure this path matches where your CSS file is located

const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']); // An array to store individual digits of OTP

  const toggleSignup = () => {
    setIsSignup(!isSignup);
  };

  const sendOtp = () => {
    // Send OTP to the user's phone number
    setIsOtpSent(true);
  };

  const verifyOtp = () => {
    // Verify the OTP entered by the user
    // If the OTP is valid, log the user in
  };

  const handleOtpChange = (index, value) => {
    // Update the individual digit of OTP in the array
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);
  };

  return (
    <div className="container">
      <div className="left"></div>
      <div className="right">
        <div className="form-container">
          <img src="https://github.com/Laxmikant-Baviskar/Google-Map-API/blob/main/Layer%203.png?raw=true" alt="" />
          <form action="#">
            <h2 className="form-heading">{isSignup ? 'Sign Up' : 'Welcome Back!'}</h2>
            <div className="input-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="+91 1234567890" required />
            </div>
            {isSignup && (
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" required />
              </div>
            )}
            {!isOtpSent && <button type="button" className="btn btn-primary" onClick={sendOtp}>Send OTP</button>}
            {isOtpSent && (
              <div className="otp-input-group">
                <label htmlFor="otp"></label>
                <div className="otp-inputs">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      id={`otp-${index}`}
                      name={`otp-${index}`}
                      placeholder="0"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      maxLength="1"
                    />
                  ))}
                </div>
              </div>
            )}
            {isOtpSent && <button type="submit" className="btn btn-primary" onClick={verifyOtp}>Verify OTP</button>}
            {/* <a href="#" className="forgot-password">Forgot Password?</a> */}
            <p className="create-account">
              {isSignup ? 'Already have an account?' : "Don't have an account?"} <a href="#" onClick={toggleSignup}> <br /> {isSignup ? 'Login' : 'Sign up'}</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
