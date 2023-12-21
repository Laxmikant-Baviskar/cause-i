// import React, { useState, useEffect } from 'react';
// import './TypingAnimation.css';

// const TypingAnimation = ({ text, typingSpeed = 150, delay = 2000 }) => {
//   const [displayedText, setDisplayedText] = useState('');
  
//   useEffect(() => {
//     let index = 0;  
//     let timerId;

//     const type = () => {
//       if (index < text.length) {
//         setDisplayedText((value) => value + text.charAt(index));
//         console.log(displayedText);
//         index++;
//       } else {
//         // Wait for a delay at the end before resetting
//         clearInterval(timerId);
//         setTimeout(() => {
//           setDisplayedText('');
//           index = -1;
//           // Start the animation again
//           timerId = setInterval(type, typingSpeed);
//         }, delay);
//       }
//     };

//     // Start the initial animation
//     timerId = setInterval(type, typingSpeed);

//     // Cleanup on component unmount
//     return () => clearInterval(timerId);
//   }, [text, typingSpeed, delay]);

//   return (
//     <div className={`typing-animation d-flex justify-content-start align-items-center`}>
//       <span>{displayedText}</span>
//       <span className="cursor"></span>
//     </div>
//   );
// };

// export default TypingAnimation;



import React, { useState, useEffect } from 'react';
import './TypingAnimation.css';


const TypingAnimation = ({ text, typingSpeed = 150, delay = 2000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  useEffect(() => {
    let index = 0;
    let timerId;

    const type = () => {
      if (index < text.length) {
        setDisplayedText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timerId);
        setIsTyping(false);
        setTimeout(() => {
          setDisplayedText('');
          index = 0;
          setIsTyping(true);
          // Start the animation again
          timerId = setInterval(type, typingSpeed);
        }, delay);
      }
    };

    setIsTyping(true);
    // Start the initial animation
    timerId = setInterval(type, typingSpeed);

    // Cleanup on component unmount
    return () => clearInterval(timerId);
  }, [text, typingSpeed, delay]);

  return (
    <div className={`typing-animation d-flex justify-content-start align-items-center`}>
      <span>{displayedText}</span>
      {isTyping && <span className="cursor"></span>}
    </div>
  );
};

export default TypingAnimation;
