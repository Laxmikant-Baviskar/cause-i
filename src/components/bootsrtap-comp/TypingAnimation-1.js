import React, { useState, useEffect } from 'react';
import './TypingAnimation-1.css';

const TypingAnimation1 = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let index = 0;
    const timeoutId = setInterval(() => {
      setDisplayedText((value) => value + text.charAt(index));
      index++;
      if (index === text.length) {
        clearInterval(timeoutId);
      }
    }, 150); // The speed of typing, adjust as needed.

    return () => clearInterval(timeoutId); // Cleanup interval on component unmount.
  }, [text]);

  return (
    <div className={`typing-animation d-flex justify-content-start align-items-center`}>
      <span>{displayedText}</span>
      <span className="cursor"></span>
    </div>
  );
};

export default TypingAnimation1;
