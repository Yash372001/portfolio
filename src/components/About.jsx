import './About.css';

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number text-accent-1">[01]</span>
            ABOUT ME
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-content">
            <div className="about-text brutal-box">
              <h3 className="about-heading">
                Building the web, one pixel at a time
              </h3>
              <p>
                Hey there! I'm Yash Pawar, a passionate developer and designer with a love for creating 
                memorable digital experiences. My journey in tech started over 5 years ago, and I haven't 
                looked back since.
              </p>
              <p>
                I specialize in transforming complex problems into simple, beautiful, and intuitive designs. 
                Whether it's a sleek landing page or a full-scale web application, I approach every project 
                with the same level of dedication and creativity.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, contributing to open-source 
                projects, or grabbing a coffee while sketching out my next big idea.
              </p>
            </div>

            <div className="about-approach">
              <div className="approach-item brutal-box">
                <div className="approach-icon bg-accent-1">💡</div>
                <h4>Innovation First</h4>
                <p>Always pushing boundaries with cutting-edge technologies and creative solutions.</p>
              </div>
              <div className="approach-item brutal-box">
                <div className="approach-icon bg-accent-2">🎯</div>
                <h4>User-Centered</h4>
                <p>Every decision is made with the end user's experience and satisfaction in mind.</p>
              </div>
              <div className="approach-item brutal-box">
                <div className="approach-icon bg-accent-3">⚡</div>
                <h4>Performance Driven</h4>
                <p>Optimized code and fast load times are non-negotiable in all my projects.</p>
              </div>
              <div className="approach-item brutal-box">
                <div className="approach-icon bg-accent-4">🚀</div>
                <h4>Scalable Solutions</h4>
                <p>Building with growth in mind, ensuring your project can evolve with your needs.</p>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="visual-card brutal-box">
              <div className="card-header bg-accent-1">
                <span className="card-title">PROFILE.JSON</span>
              </div>
              <div className="card-body">
                <div className="code-line">
                  <span className="code-key">"name":</span>
                  <span className="code-value">"Yash Pawar"</span>
                </div>
                <div className="code-line">
                  <span className="code-key">"role":</span>
                  <span className="code-value">"AI Engineer"</span>
                </div>
                <div className="code-line">
                  <span className="code-key">"location":</span>
                  <span className="code-value">"Pune"</span>
                </div>
                <div className="code-line">
                  <span className="code-key">"experience":</span>
                  <span className="code-value">"1+ years"</span>
                </div>
                <div className="code-line">
                  <span className="code-key">"passion":</span>
                  <span className="code-value">"Building awesome stuff"</span>
                </div>
                <div className="code-line">
                  <span className="code-key">"status":</span>
                  <span className="code-value code-available">"Available"</span>
                </div>
              </div>
            </div>

            <div className="facts-grid">
              <div className="fact-item brutal-box bg-accent-1">
                <span className="fact-label">Coffee Consumed</span>
                <span className="fact-value">∞</span>
              </div>
              <div className="fact-item brutal-box bg-accent-2">
                <span className="fact-label">Code Commits</span>
                <span className="fact-value">10K+</span>
              </div>
              <div className="fact-item brutal-box bg-accent-3">
                <span className="fact-label">Late Nights</span>
                <span className="fact-value">Many</span>
              </div>
              <div className="fact-item brutal-box bg-accent-4">
                <span className="fact-label">Lines of Code</span>
                <span className="fact-value">500K+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
