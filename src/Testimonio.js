import React, { useState } from 'react';
import certificateImage from './Certeficate/Rectangle 8.png'; // Replace with the actual image path

const Testimonio = () => {
  const [currentIconSet, setCurrentIconSet] = useState(0); // Index for the current icon set

  const handleNext = () => {
    setCurrentIconSet((prevIndex) => (prevIndex + 1) % 3); // Cycle through 3 sets of icons
  };

  const handlePrev = () => {
    setCurrentIconSet((prevIndex) => (prevIndex - 1 + 3) % 3); // Cycle through 3 sets of icons
  };

  const iconSets = [
    [
      { color: '#FF6347' },
      { color: '#4CAF50' },
      { color: '#333' }
    ],
    [
      { color: '#FFC0CB' },
      { color: '#9400D3' },
      { color: '#00BFFF' }
    ],
    [
      { color: '#FFD700' },
      { color: '#008000' },
      { color: '#800080' }
    ]
  ];

  return (
    <section id="certificates">
      <h2>My Certificates</h2>
      <div className="certificate-container">
        <div className="image-container">
          <button className="prev-btn" onClick={handlePrev}>&#10094;</button>
          <img src={certificateImage} alt="Certificates" />
          <button className="next-btn" onClick={handleNext}>&#10095;</button>
        </div>
        <div className="icons-container">
          {iconSets[currentIconSet].map((icon, index) => (
            <div key={index} className="certificate-icon" style={{ backgroundColor: icon.color }}></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonio;