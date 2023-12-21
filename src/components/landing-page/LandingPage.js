// import React from 'react';
// import TypingAnimation from '../TypingAnimation'; // Assuming TypingAnimation is in the same directory
// import './LandingPage.css';

// const LandingPage = () => {
//   return (
//     <div className="landing-page">
//       <div className="navbar">
//         <div className="logo">
//           <img src="./Layer 3.png" alt="" />
//           Logo
//         </div>
//         <img src="./OtherComponent/Layer 3.png" alt="" />
//         <div className="nav-links">
//           <a href="#home">Home</a>
//           <a href="#profile">Profile</a>
//         </div>
//       </div>
//       <div className="center-content">
//         <TypingAnimation text="DATA. IMMERSION. ACTION." />
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

// ======================

import React from 'react';
import TypingAnimation from './TypingAnimation'; // Assuming TypingAnimation is in the same directory
import './LandingPage.css';



const LandingPage = () => {
  return (



      <div className="landing-page">

        <div className="logo-container">
          <img src= "https://github.com/Laxmikant-Baviskar/Google-Map-API/blob/main/Layer%203.png?raw=true" alt="Logo" />
        </div>
        <div className="center-content">
          <TypingAnimation text="DATA. IMMERSION. ACTION." />
        </div>

      </div>
  );
};

export default LandingPage;
