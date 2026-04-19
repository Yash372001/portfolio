import { useEffect, useRef } from 'react';
import './Hero.css';

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const shapes = heroRef.current.querySelectorAll('.floating-shape');
    shapes.forEach((shape, index) => {
      shape.style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero section" ref={heroRef}>
      <div className="hero-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-label brutal-box">
            <span className="label-dot"></span>
            <span>Available for work</span>
          </div>

          <h1 className="hero-title">
            <span className="title-line">YASH</span>
            <span className="title-line text-accent-1">PAWAR</span>
          </h1>

          <div className="hero-subtitle-container">
            <div className="subtitle-box brutal-box">
              <h2 className="hero-subtitle">
                Creative Developer
                <span className="subtitle-accent"> & </span>
                Designer
              </h2>
            </div>
          </div>

          <p className="hero-description">
            Crafting digital experiences that merge innovative design with robust functionality. 
            Specialized in building exceptional web applications that stand out.
          </p>

          <div className="hero-stats">
            <div className="stat-item brutal-box">
              <span className="stat-number text-accent-1">1+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item brutal-box">
              <span className="stat-number text-accent-2">10+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-item brutal-box">
              <span className="stat-number text-accent-3">5+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </div>

          <div className="hero-actions">
            <button className="brutal-btn bg-accent-1" onClick={scrollToContact}>
              Let's Talk
            </button>
            <button className="brutal-btn bg-accent-2" onClick={scrollToProjects}>
              View Work
            </button>
          </div>

          <div className="hero-social">
            <a href="https://github.com/Yash372001" target="_blank" rel="noopener noreferrer" className="social-link brutal-box">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="http://www.linkedin.com/in/yash-pawar-94951a251" target="_blank" rel="noopener noreferrer" className="social-link brutal-box">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link brutal-box">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="social-link brutal-box">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm7.635 8.65c1.041 1.479 1.671 3.281 1.696 5.229-.276-.058-3.035-.615-5.813-.267-.058-.141-.115-.282-.193-.424-.198-.459-.417-.927-.646-1.385 2.938-1.198 4.159-2.932 4.156-2.953 0-.001.001-.001.001-.001zM12 2.271c2.104 0 4.021.813 5.459 2.136-.031.031-1.125 1.604-4.021 2.667-1.583-2.906-3.344-5.281-3.573-5.615.688-.135 1.396-.188 2.135-.188zM7.521 3.104c.219.323 1.959 2.698 3.552 5.563-4.479 1.198-8.427 1.177-8.854 1.177.594-3.042 2.844-5.521 5.302-6.74zm-5.25 8.906c0-.063.01-.125.01-.188 0 0 .427.01 4.668-.625 1.458 2.521 2.063 4.563 2.26 5.313-3.698 1.615-6.938 5.969-6.938 5.969V12.01zm8.729 9.625c-1.76 0-3.396-.542-4.76-1.458 0 0 2.833-3.927 6.823-5.417.031-.01.073-.031.104-.042.792 2.052 1.115 3.792 1.219 4.281-1.042.427-2.177.636-3.386.636zm5.448-1.729c-.063-.417-.354-1.99-1.094-4.01 2.521-.406 4.74.26 5.021.344-.344 2.24-1.594 4.177-3.927 5.666z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span className="scroll-text">SCROLL</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
