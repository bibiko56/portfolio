import React from 'react'
import { useEffect, useRef } from 'react';
import TiltedCard from '../components/TiltedCard.jsx';
import MyImage from '/img/485150347_977801797811132_7519280564660279552_n.jpg';
import FadeIn from '../components/FrameIn.jsx';
const About = () => {
    {
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, { threshold: 0.15 });

    const currentTarget = domRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, []);

  return (
   
    <section className="about-section hidden" ref={domRef}>
      
      
      <FadeIn>
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
            <p>I bridge the gap between aesthetic UI/UX andfunctional development.</p>
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
  overlayContent={
    <p className="tilted-card-demo-text">
    
    </p>
  }
/>
          </div>
        </div>
      </div>
      </FadeIn>

      <FadeIn>
      <div className='window wide'>
         <div className="window-header">
            <span className="window-title">about-me</span>
            <div className="window-controls">
              <span className="control-btn">—</span> 
              <span className="control-btn">☐</span> 
              <span className="control-btn">✕</span> 
            </div>
          </div>
      <div className='more-about'>
        <h2>A little more about me</h2>
        <p>I am a designer who prioritizes visual harmony, specializing in the creation of comprehensive design 
          systems in Figma that ensure every interface element feels intentional and unified.
        </p>
          <br />  
        <p>My collaborative process is rooted in UI/UX fundamentals, where I focus on crafting intuitive user journeys and 
          polished interactive elements that enhance digital engagement.</p>
          <br />
        <p>
          Beyond the screen, I am constantly studying the evolving landscape of design systems, focusing on how to create 
          components that are as technically efficient as they are visually stunning.
        </p>
      </div>
      </div>
      </FadeIn>
    </section>

    
  );
}
  
}

export default About