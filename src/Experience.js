import React from 'react';

const Experience = () => {
  return (
    <section id="experience">
      <h2>My Experience</h2>
      <div className="experience-container">
        <div className="experience-card">
        <img src="/asset/code-slash.png" alt="icon" />
          <h3>Web Development</h3>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.
          </p>
          <button className="read-more-btn">Read More</button>
        </div>

        <div className="experience-card">
        <img src="/asset/brush.png" alt="icon" />

          <h3>UI/UX Designer</h3>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.
          </p>
          <button className="read-more-btn">Read More</button>
        </div>

        <div className="experience-card">
        <img src="/asset/eyeglasses.png" alt="icon" />

          <h3>Quality Assurance</h3>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.
          </p>
          <button className="read-more-btn">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
