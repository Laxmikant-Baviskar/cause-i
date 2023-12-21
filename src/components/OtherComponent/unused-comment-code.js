// Below code is from LoginPage.js file 



// import React from 'react';
// import './LoginPage.css'; // Make sure this path matches where your CSS file is located

// import LoginPage from "../Login-Page/LoginPage"

// const LoginPage = () => {
//   return (
//     <div className="container">
//       <div className="left">
//         {/* <img src="./im" alt="Login background" /> */}
//         {/* <div className="overlay">
//           <h1>Humanity With Purpose</h1>
//         </div> */}
//       </div>
//       <div className="right">
//         <div className="form-container">
//           <form action="#">
//             <h2 className="form-heading">Welcome Back!</h2>
//             <div className="input-group">
//               <label htmlFor="phone">Phone Number</label>
//               <input type="tel" id="phone" name="phone" placeholder="+91 1234567890" required />
//             </div>
//             <div className="input-group">
//               <label htmlFor="password">Password</label>
//               <input type="password" id="password" name="password" placeholder="Enter your password" required />
//             </div>
//             <button type="submit" className="btn btn-primary">Login</button>
//             <a href="#" className="forgot-password">Forgot Password?</a>
//             <p className="create-account">Don't have an account? <a href="#">Sign up</a></p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;



// =======================



// import React, { useState } from 'react';
// import './LoginPage.css'; // Make sure this path matches where your CSS file is located

// const LoginPage = () => {
//   const [isSignup, setIsSignup] = useState(false);

//   const toggleSignup = () => {
//     setIsSignup(!isSignup);
//   };

//   return (
//     <div className="container">
//       <div className="left">
//         {/* <img src="./im" alt="Login background" /> */}
//         {/* <div className="overlay">
//           <h1>Humanity With Purpose</h1>
//         </div> */}
//       </div>
//       <div className="right">
//         <div className="form-container">
//           <form action="#">
//             <h2 className="form-heading">{isSignup ? 'Sign Up' : 'Welcome Back!'}</h2>
//             <div className="input-group">
//               <label htmlFor="phone">Phone Number</label>
//               <input type="tel" id="phone" name="phone" placeholder="+91 1234567890" required />
//             </div>
//             {isSignup && (
//               <div className="input-group">
//                 <label htmlFor="name">Name</label>
//                 <input type="text" id="name" name="name" placeholder="Enter your name" required />
//               </div>
//             )}
//             <div className="input-group">
//               <label htmlFor="password">{isSignup ? 'Password' : 'Enter your password'}</label>
//               <input type="password" id="password" name="password" placeholder="Enter your password" required />
//             </div>
//             <button type="submit" className="btn btn-primary">{isSignup ? 'Sign Up' : 'Login'}</button>
//             <a href="#" className="forgot-password">Forgot Password?</a>
//             <p className="create-account">
//               {isSignup ? 'Already have an account?' : "Don't have an account?"} <a href="#" onClick={toggleSignup}>{isSignup ? 'Login' : 'Sign up'}</a>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


// ===========================================================

// import React, { useState } from 'react';
// import './LoginPage.css'; // Make sure this path matches where your CSS file is located

// const LoginPage = () => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [otp, setOtp] = useState('');

//   const toggleSignup = () => {
//     setIsSignup(!isSignup);
//   };

//   const sendOtp = () => {
//     // Send OTP to the user's phone number
//     setIsOtpSent(true);
//   };

//   const verifyOtp = () => {
//     // Verify the OTP entered by the user
//     // If the OTP is valid, log the user in
//   };

//   return (
//     <div className="container">
//       <div className="left">
//         {/* <img src="./im" alt="Login background" /> */}
//         {/* <div className="overlay">
//           <h1>Humanity With Purpose</h1>
//         </div> */}
//       </div>
//       <div className="right">
//         <div className="form-container">
//             <img src="https://github.com/Laxmikant-Baviskar/Google-Map-API/blob/main/Layer%203.png?raw=true" alt="" />
//           <form action="#">
//             <h2 className="form-heading">{isSignup ? 'Sign Up' : 'Welcome Back!'}</h2>
//             <div className="input-group">
//               <label htmlFor="phone">Phone Number</label>
//               <input type="tel" id="phone" name="phone" placeholder="+91 1234567890" required />
//             </div>
//             {isSignup && (
//               <div className="input-group">
//                 <label htmlFor="name">Name</label>
//                 <input type="text" id="name" name="name" placeholder="Enter your name" required />
//               </div>
//             )}
//             {!isOtpSent && <button type="button" className="btn btn-primary" onClick={sendOtp}>Send OTP</button>}
//             {isOtpSent && (
//               <div className="input-group">
//                 <label htmlFor="otp">Enter OTP</label>
//                 <input type="text" id="otp" name="otp" placeholder="Enter the OTP sent to your phone" required />
//               </div>
//             )}
//             {isOtpSent && <button type="submit" className="btn btn-primary" onClick={verifyOtp}>Verify OTP</button>}
//             <a href="#" className="forgot-password">Forgot Password?</a>
//             <p className="create-account">
//               {isSignup ? 'Already have an account?' : "Don't have an account?"} <a href="#" onClick={toggleSignup}> <br /> {isSignup ? 'Login' : 'Sign up'}</a>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

