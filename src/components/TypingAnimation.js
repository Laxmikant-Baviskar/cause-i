import React, { useState, useEffect } from 'react';
import './TypingAnimation.css';

const TypingAnimation = ({ text, typingSpeed = 150, delay = 2000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let index = 0;
    let timerId;

    const type = () => {
      if (index < text.length) {
        setDisplayedText((value) => value + text.charAt(index));
        console.log(displayedText);
        index++;
      } else {
        // Wait for a delay at the end before resetting
        clearInterval(timerId);
        setTimeout(() => {
          setDisplayedText('');
          index = 0;
          // Start the animation again
          timerId = setInterval(type, typingSpeed);
        }, delay);
      }
    };

    // Start the initial animation
    timerId = setInterval(type, typingSpeed);

    // Cleanup on component unmount
    return () => clearInterval(timerId);
  }, [text, typingSpeed, delay]);

  return (
    <div className={`typing-animation d-flex justify-content-start align-items-center`}>
      <span>{displayedText}</span>
      <span className="cursor"></span>
    </div>
  );
};

export default TypingAnimation;
