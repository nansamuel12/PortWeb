import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="image-container">
          <img src="/asset/person.png" alt="Profile Picture" />
        </div>
        <div className="text-container">
          <h2>About <span className='broncol'>Me</span></h2>
          <h3>Frontend Developer</h3>
          <p>
            I am a passionate and skilled Frontend Developer with a strong foundation in 
            HTML, CSS, and JavaScript. I am also proficient in UI/UX design principles 
            and have experience in creating user-friendly and visually appealing interfaces. 
            I am always eager to learn new technologies and improve my skills.
          </p>
          <button className="see-more-btn">See More</button>
        </div>
      </div>
    </section>
  );
};

export default About;