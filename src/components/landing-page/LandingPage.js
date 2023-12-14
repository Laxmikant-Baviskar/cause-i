import React from 'react';
import TypingAnimation from '../TypingAnimation'; // Assuming TypingAnimation is in the same directory
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="navbar">
        <div className="logo">Logo</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#profile">Profile</a>
        </div>
      </div>
      <div className="center-content">
        <TypingAnimation text="DATA. IMMERSION. ACTION." />
      </div>
    </div>
  );
};

export default LandingPage;
