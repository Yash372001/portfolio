import './Experience.css';

function Experience() {
  const experiences = [
    {
      company: 'Tata Consultancy Services Pvt. Ltd.',
      role: 'AI Engineer',
      period: '2026 - Present',
      description: 'Leading development of enterprise web applications, mentoring junior developers, and implementing best practices across the team.',
      achievements: [
        'Engineered production-grade AI-powered backend systems using Python and FastAPI, improving average API response times by 35% and enabling horizontal scalability for high-traffic workloads.',
        'Designed asynchronous multi-agent Large Language Models (LLMs) pipelines with LangChain and Google Gemini, decoupling services and improving distributed system reliability by 40%.',
        'Implemented CI/CD pipeline reducing deployment time by 80%'
      ],
      color: 'accent-1'
    },
    {
      company: 'Java Intern',
      role: 'Full Stack Developer',
      period: '2024 - 2023',
      description: 'Certainly! As a Java Intern at R3 Systems India Private Limited, I underwent comprehensive training in both fundamental and concepts of Java programming language.',
      achievements: [
        'Delivered successful projects',
        'Increased code coverage from 40% to 85%',
        'Designed dynamic web application using JSP and Servlets'
      ],
      color: 'accent-2'
    }
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number text-accent-4">[04]</span>
            WHERE I'VE WORKED
          </h2>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className={`timeline-marker bg-${exp.color}`}>
                <span className="marker-dot"></span>
              </div>
              <div className="timeline-content brutal-box">
                <div className={`timeline-header bg-${exp.color}`}>
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <p className="timeline-company">{exp.company}</p>
                  </div>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <div className="timeline-body">
                  <p className="timeline-description">{exp.description}</p>
                  <div className="achievements">
                    <h4 className="achievements-title">Key Achievements:</h4>
                    <ul className="achievements-list">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="achievement-item">
                          <span className="achievement-bullet">▸</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="certifications brutal-box">
          <h3 className="cert-title">Certifications & Education</h3>
          <div className="cert-grid">
            <div className="cert-item">
              <div className="cert-icon">🎓</div>
              <div className="cert-info">
                <h4>B.Tech Computer Science</h4>
                <p>DBATU University • 2020-2024</p>
              </div>
            </div>
            <div className="cert-item">
              <div className="cert-icon">📜</div>
              <div className="cert-info">
                <h4>AWS Certified Developer</h4>
                <p>Amazon Web Services • 2025</p>
              </div>
            </div>
            <div className="cert-item">
              <div className="cert-icon">🏆</div>
              <div className="cert-info">
                <h4>GenAI Certification</h4>
                <p>Udemy • 2025</p>
              </div>
            </div>
            <div className="cert-item">
              <div className="cert-icon">⭐</div>
              <div className="cert-info">
                <h4>Amazon Bedrock Certification</h4>
                <p>Udemy • 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
