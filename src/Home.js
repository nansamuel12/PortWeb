import Animation from "./Animation";
    const Home = () => {
        return (
          <div className="home-container"> 
            <div className="content">
              <h3>Hello, it is me</h3>
              <h1>Hanna Samuel</h1>
               <Animation />
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
             <div className="social-media">
  <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
    <img src="/asset/github.png" alt="GitHub" />
  </a>
  <a href="https://www.telegram.com/" target="_blank" rel="noopener noreferrer">
    <img src="/asset/telegram.png" alt="Telegram" />
  </a>
  <a href="https://www.instagram.com/" targbashet="_blank" rel="noopener noreferrer">
    <img src="/asset/instagram.png" alt="Instagram" />
  </a>
  <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
    <img src="/asset/whatsapp.png" alt="WhatsApp" />
  </a>
</div>
              <button className="download-btn">Download CV</button>
            </div>
            <div className="image-container"> 
             <img src="/asset/person.png"  alt="Instagram"/>
            </div>
          </div>
        );
      };
      
      export default Home;

