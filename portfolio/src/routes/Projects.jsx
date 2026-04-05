import React from 'react'
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const Projects = () => {
  const domRef = useRef();
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Remove the '#' and find the element with that ID
      const targetId = hash.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        // Timeout ensures the DOM has fully rendered before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100); 
      }
    }
  }, [hash]);

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
    // 1. The Observer watches this main section
    <section className="about-section hidden" ref={domRef}>
           <div className="project">
        <h1>PROJECTS</h1>
      </div >

<div className='modeling' id="modeling-section">
    <h1 className="section-label">3D MODELING</h1>
    
    <div className="modeling-content-wrapper">
        <img 
            src="/img/3.png" 
            alt="Isometric Bedroom" 
            className="modeling-img"
        />
        
        <div className="modeling-text">
            <h2>ISOMETRIC BEDROOM</h2>
            <p>
                This 3D isometric bedroom is a masterclass in soft-minimalism, utilizing 
                a harmonious mint-and-peach color palette, rounded "clay-style" geometry, 
                and strategic ambient lighting to create a tranquil, biophilic retreat 
                within a compact diorama.
            </p>
        </div>
    </div>

    <br />

    <div className="modeling-content-wrapper">
        <img 
            src="/img/1.png" 
            alt="Isometric Bedroom" 
            className="modeling-img"
        />
        
        <div className="modeling-text">
            <h2>ISOMETRIC BAKERY</h2>
            <p>
                This 3D isometric bakery diorama employs a warm, "toasted" color palette and organized structural 
                layering to create an inviting retail space, blending clean Scandinavian-inspired minimalism with 
                charmingly simplified assets that prioritize a cozy, artisanal atmosphere.
            </p>
        </div>
    </div>

    <br />

    <div className="modeling-content-wrapper">
        <img 
            src="/img/4.png" 
            alt="Isometric Bedroom" 
            className="modeling-img"
        />
        
        <div className="modeling-text">
            <h2>3D ALPINE HOUSE</h2>
            <p>
              This 3D facade features a striking dual-gable silhouette that blends modern A-frame architecture with a warm 
              "creamsicle" palette, utilizing vertical glass ribbons and rhythmic timber accents to create a clean, 
              contemporary take on a mountain retreat.
            </p>
        </div>
    </div>
</div>

{/*POSTER DESIGN*/}
<div className='modeling' id="poster-section">
    <h1 className="section-label">POSTER DESIGN</h1>
    
    <div className="modeling-content-wrapper">
        <img 
            src="/img/sur.png" 
            alt="Isometric Bedroom" 
            className="modeling-img"
        />
        
        <div className="modeling-text">
            <h2>SURVIVAL</h2>
            <p>
                No.003 || SURVIVAL
                <br />
                A feathered heart, with purpose keen,
                Clutches silver in a twilight scene.
            </p>
        </div>
    </div>

    <br />

    <div className="modeling-content-wrapper">
        <img 
            src="/img/reb.png" 
            alt="Isometric Bedroom" 
            className="modeling-img"
        />
        
        <div className="modeling-text">
            <h2>REBIRTH</h2>
            <p>
                No.011 || REBIRTH
                <br />
                Before and after, cycles turn,
                As lessons learned, and spirits burn.
                A fresh beginning, pure and bright.
                Through transformations, grand and small,

            </p>
        </div>
    </div>

    <br />

    <div className="modeling-content-wrapper">
        <img 
            src="/img/cra.png" 
            alt="Isometric Bedroom" 
            className="modeling-img"
        />
        
        <div className="modeling-text">
            <h2>CRACKED</h2>
            <p>
              No.010 || CRACKED
              <br />
              A fragile shell, begins to fray,
              A profound vulnerability on display.
              A glimpse of honesty is seen.
              Picking up pieces, one by one,
            </p>
        </div>
    </div>
</div>

{/*WEB DEVELOPMENT*/}
<div className='modeling' id="web-section">
    <h1 className="section-label">WEB DEVELOPMENT</h1>
    
    <a href="https://www.figma.com/proto/6f84eTidHmfcYpnED6RjkJ/tradetime---Section2?node-id=613-1400&p=f&t=XGT043wfDaoBF7vN-1&scaling=min-zoom&content-scaling=fixed&page-id=548%3A2960&starting-point-node-id=613%3A1400" target="_blank" rel="noreferrer" className="project-card-link">
    <div className="modeling-content-wrapper">
        <img 
            src="/img/homepage.png" 
            alt="Isometric Bedroom" 
            className="modeling-img"
        />
        
        <div className="modeling-text">
            <h2>TRADETIME</h2>
            <p>
              TradeTime is a community-driven, local "TimeBank" platform designed to help neighbors exchange skills without 
              using traditional money, the application allows users to "earn" hours by helping others and then "spend" those 
              hours to receive help themselves.
            </p>
        </div>
    </div>
    </a>


    <a href="https://todoapp-by0z.onrender.com/" arget="_blank" rel="noreferrer" className="project-card-link">
    <div className="modeling-content-wrapper">
        <img 
            src="/img/todo.png" 
            alt="Isometric Bedroom" 
            className="modeling-img"
        />
        
        
        <div className="modeling-text">
            <h2>AWESOME TODOS</h2>
            <p>
              Awesome Todos is a digital checklist that helps you organize and track your daily tasks in real-time,a digital 
              checklist that allows you to instantly save, track, and permanently delete your daily tasks through a simple,
               interactive interface.
            </p>
        </div>
    </div>
    </a>

    <div className="modeling-content-wrapper">
        <img 
            src="/img/prod.png" 
            alt="Isometric Bedroom" 
            className="modeling-img"
        />
        
        
        <div className="modeling-text">
            <h2>PRODUCT SHOWCASE</h2>
            <p>
              Creating high-impact visual strategy that uses minimalist environments, dramatic lighting, and "hero" 
              3D perspectives to strip away distractions and elevate a product into a premium, functional piece of art.
            </p>
        </div>
    </div>
    
</div>



    </section>
    
   )
}

export default Projects