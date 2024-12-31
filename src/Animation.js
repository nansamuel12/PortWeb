import React, { useState, useEffect } from 'react';

const Animation = () => {
  const [text, setText] = useState('');
  const fullText1 = 'Frontend Developer';
  const fullText2 = 'UI/UX Designer';
  const fullText3 = 'QA';

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (text === fullText1) {
        clearInterval(intervalId);
        setTimeout(() => {
          setText(''); 
          setTimeout(() => {
            setText(fullText2); 
          }, 500); 
        }, 500); 
      } else if (text === fullText2) {
        clearInterval(intervalId);
        setTimeout(() => {
          setText(''); 
          setTimeout(() => {
            setText(fullText3); 
          }, 500); 
        }, 500); 
      } else if (text === fullText3) {
        clearInterval(intervalId);
      } else {
        setText(text + fullText1[text.length]); 
      }
    }, 100); // Adjust interval for typing speed

    return () => clearInterval(intervalId); 
  }, [text]);

  return (
    <span>{text}</span> 
  );
};

export default Animation;