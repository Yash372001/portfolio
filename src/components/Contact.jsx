import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number text-accent-4">[06]</span>
            GET IN TOUCH
          </h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-box brutal-box">
              <h3 className="info-title">Let's Build Something Amazing!</h3>
              <p className="info-text">
                Have a project in mind? Want to collaborate? Or just want to say hi? 
                I'm always open to discussing new opportunities and interesting ideas.
              </p>

              <div className="contact-methods">
                <a href="mailto:nikhil@example.com" className="contact-method brutal-box">
                  <div className="method-icon bg-accent-1">
                    <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div className="method-info">
                    <h4>Email</h4>
                    <p>nikhilpawar075@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+1234567890" className="contact-method brutal-box">
                  <div className="method-icon bg-accent-2">
                    <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div className="method-info">
                    <h4>Phone</h4>
                    <p>+91 93709 36291</p>
                  </div>
                </a>

                <a href="#" className="contact-method brutal-box">
                  <div className="method-icon bg-accent-3">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div className="method-info">
                    <h4>Location</h4>
                    <p>Pune, India</p>
                  </div>
                </a>
              </div>

              <div className="availability-badge brutal-box bg-accent-4">
                <span className="availability-dot"></span>
                <span className="availability-text">Available for freelance work</span>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form brutal-box">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input brutal-box"
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input brutal-box"
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input brutal-box"
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="form-input brutal-box"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button 
                type="submit" 
                className="submit-btn brutal-btn bg-accent-1"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <div className="success-message brutal-box bg-accent-3">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-bracket">[</span>
              <span className="logo-text">YASH PAWAR</span>
              <span className="logo-bracket">]</span>
            </div>
            <p className="footer-text">
              Crafted with ❤️ and lots of ☕ • © 2026 Yash Pawar
            </p>
            <div className="footer-social">
              <a href="https://github.com/Yash372001" target="_blank" rel="noopener noreferrer" className="footer-link brutal-box">GitHub</a>
              <a href="http://www.linkedin.com/in/yash-pawar-94951a251" target="_blank" rel="noopener noreferrer" className="footer-link brutal-box">LinkedIn</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link brutal-box">Twitter</a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="footer-link brutal-box">Dribbble</a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
