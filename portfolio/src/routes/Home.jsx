import React, { useRef } from 'react'; 
import TextType from '../components/Textype.jsx';
import TiltedCard from '../components/TiltedCard.jsx'; 
import MyImage from '/img/485150347_977801797811132_7519280564660279552_n.jpg'; 
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import FadeIn from '../components/FrameIn.jsx';

const Home = () => {

  const domRef = useRef();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_p5goper', 
      'template_lzzoufq', 
      form.current, 
      'O3ygxYwJ62R6lStcX'
    )
    .then((result) => {
        alert("Message sent successfully!");
        e.target.reset(); 
    }, (error) => {
        alert("Failed to send message, please try again.");
    });
  };

  const logos = [
    { src: "/img/Blender_logo_no_text.svg.png", alt: "Blender", class: "icon-blender" },
    { src: "/img/Figma-logo.svg.png", alt: "Figma", class: "icon-figma" },
    { src: "/img/affinity-studio-icon.svg", alt: "Affinity" },
    { src: "/img/canva-icon.svg", alt: "Canva" },
    { src: "/img/adobe-illustrator-icon.svg", alt: "Illustrator" },
    { src: "/img/adobe-photoshop-icon.svg", alt: "Photoshop" },
    { src: "/img/DaVinci_Resolve_17_logo.svg.png", alt: "DaVinci", class: "icon-davinci" },
  ];

  return (
    <div className="home-wrapper">
      
     
      <div className="intro-container">
        <div id="name">
          <h1>
  hi i'm{" "}
  <span className="name-wrapper"> 
    <TextType 
      text="EMANUEL MOSQUEDA" 
      speed={150} 
      className="highlight" 
      delay={3000} 
    />
  </span>
  , a <br /> UI/UX designer
</h1>
        </div>

        <div className="scrolling_text">
          {[...Array(5)].map((_, i) => (
            <div className="text" key={i}>
              {logos.map((logo, index) => (
                <span key={`${i}-${index}`}>
                  <img src={logo.src} className={logo.class || ""} alt={logo.alt} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* --- ABOUT SECTION --- */}
      <FadeIn>
      <section className="about-section" ref={domRef}>
        <div className="about">
          <h1>ABOUT ME</h1>
        </div>
        
        <div className="about-container"> 
          <div className="window">
            <div className="window-header">
              <span className="window-title">about-me</span>
              <div className="window-controls">
                <span className="control-btn">—</span> 
                <span className="control-btn">☐</span> 
                <span className="control-btn">✕</span> 
              </div>
            </div>
            <div className="window-body">
              <div className="about-text">
              <h2 className="intro-name">Nice to meet you! I'm Emanuel...</h2>
              <p>A multidisciplinary designer and IT student based in Iloilo, Philippines.</p>
              <p>I bridge the gap between aesthetic UI/UX and functional development.</p>
              <p className="tagline">I don’t just build interfaces; <br />I engineer digital experiences.</p>
            </div>
            </div>
          </div>

          <div className="window portrait-window">
            <div className="window-header">
              <span className="window-title">me.jpg</span>
              <div className="window-controls">
                <span className="control-btn">—</span> 
                <span className="control-btn">☐</span> 
                <span className="control-btn">✕</span> 
              </div>
            </div>
            <div className="window-body">
              <TiltedCard
                imageSrc={MyImage}
                captionText="this is me"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip
                displayOverlayContent
                overlayContent={<p className="tilted-card-demo-text"></p>}
              />
            </div>
          </div>
        </div>
      </section>
      </FadeIn>


      <FadeIn>
      <section className="about-section hidden" ref={domRef}>
           <div className="project">
        <h1>PROJECTS</h1>
      </div>
      <div class="projects-container">
        <Link to="/projects#modeling-section" className="window-link">
    <div class="windows">
        <div class="window-header">
            <span class="window-title">3D MODELING</span>
        </div>
        <div class="window-body2">
            <img 
            src="/img/3d.png" 
            alt="3D Modeling Project" 
            className="project-img" 
        />
        </div>
    </div>
    </Link>

    <Link to="/projects#poster-section" className="window-link">
    <div class="windows">
        <div class="window-header">
            <span class="window-title">POSTER DESIGN</span>
        </div>
        <div class="window-body2">
            <img 
            src="/img/7.png" 
            alt="3D Modeling Project" 
            className="project-img" 
        />
        </div>
    </div>
    </Link>

    <Link to="/projects#web-section" className="window-link">
    <div class="windows">
        <div class="window-header">
            <span class="window-title">WEB DEVELOPMENT</span>
        </div>
        <div class="window-body2">
             <img 
            src="/img/6.png" 
            alt="3D Modeling Project" 
            className="project-img" 
        />
        </div>
    </div>
    </Link>
</div>
    </section>
    </FadeIn>


    <FadeIn>
    <section className="contact-section">
      <div className="project">
        <h1>CONTACT ME</h1>
      </div>
      <div className="contact-box-border">
        {/* CRITICAL: Add the 'ref' and 'name' attributes below */}
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="form-row">
            <div className="input-group">
              <label>Name</label>
              <input type="text" name="from_name" placeholder="Emanuel Mosqueda" required />
            </div>
            
            <div className="input-group">
              <label>Email Address</label>
              <input type="email" name="reply_to" placeholder="hello@example.com" required />
            </div>
          </div>
          
          <div className="input-group">
            <label>Message</label>
            <textarea name="message" rows="5" placeholder="Let's build something together..." required></textarea>
          </div>
          <button type="submit" className="send-btn">Send Message</button>
        </form>
      </div>
    </section>
    </FadeIn>

    </div> // End home-wrapper
  );
}

export default Home;