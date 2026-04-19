import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      color: "accent-1",
      skills: [
        { name: "React", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Responsive Design", level: 75 },
      ],
    },
    {
      title: "Backend",
      color: "accent-2",
      skills: [
        { name: "FastAPI", level: 90 },
        { name: "Flask", level: 85 },
        { name: "Python", level: 80 },
        { name: "MySql", level: 85 },
        { name: "Java", level: 80 },
        { name: "REST APIs", level: 90 },
      ],
    },
    {
      title: "Tools & Others",
      color: "accent-3",
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "GCP", level: 90 },
        { name: "Google ADK", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Hugging Face", level: 80 },
        { name: "LangChain", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number text-accent-2">[02]</span>
            WHAT I DO
          </h2>
        </div>

        <div className="skills-intro brutal-box">
          <p>
            My toolkit is constantly evolving, but here are the technologies
            I've mastered and use regularly to bring ideas to life. Each skill
            has been battle-tested across real-world projects.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category brutal-box">
              <div className={`category-header bg-${category.color}`}>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className={`skill-progress bg-${category.color}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-stack">
          <h3 className="stack-title">Currently Exploring</h3>
          <div className="stack-tags">
            <span className="tag brutal-box">Web3</span>
            <span className="tag brutal-box">AI/ML</span>
            <span className="tag brutal-box">Three.js</span>
            <span className="tag brutal-box">LangGraph</span>
            <span className="tag brutal-box">GraphQL</span>
            <span className="tag brutal-box">Machine Learning</span>
            <span className="tag brutal-box">Kubernetes</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
