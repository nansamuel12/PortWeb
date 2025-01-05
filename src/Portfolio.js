import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2> <span className='broncol'>My</span> Portfolio</h2>
      <div className="portfolio-container">
        <div className="portfolio-card">
        <img src="/asset/Rectangle 8.png" alt="icon" />
          <p>
            It is a long established fact that a reader will be distracted 
            by the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has a more-or-less 
            normal distribution of letters, as opposed to using.
          </p>
          <button className="view-project-btn">View Project</button>
        </div>

        <div className="portfolio-card">
        <img src="/asset/Rectangle 8.png" alt="icon" />
          <p>
            It is a long established fact that a reader will be distracted 
            by the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has a more-or-less 
            normal distribution of letters, as opposed to using.
          </p>
          <button className="view-project-btn">View Project</button>
        </div>

        <div className="portfolio-card">
        <img src="/asset/Rectangle 8.png" alt="icon" />
          <p>
            It is a long established fact that a reader will be distracted 
            by the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has a more-or-less 
            normal distribution of letters, as opposed to using.
          </p>
          <button className="view-project-btn">View Project</button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;