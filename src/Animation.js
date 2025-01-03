import React, { useState, useEffect } from 'react';

const Animation = () => {
  const [text, setText] = useState('');
  const fullTexts = ['Frontend Developer', 'UI/UX Designer', 'QUALITY ASSURANCE'];
  const [currentIndex, setCurrentIndex] = useState(0); 

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentText = fullTexts[currentIndex];

      if (text === currentText) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % fullTexts.length); 
        setText(''); 
      } else {
        setText(text + currentText[text.length]); 
      }
    }, 200); // Adjust interval for typing speed

    return () => clearInterval(intervalId); 
  }, [text, currentIndex]); 

  return (
    <> 
      <span className='andI'>And I am </span> 
      <span className='animate-text'>{text}</span> 
    </>
  );
};

export default Animation;