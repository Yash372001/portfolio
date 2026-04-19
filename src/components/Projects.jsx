import { useState } from 'react';
import './Projects.css';

function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Executive Co-Pilot — Multi-Agent System',
      category: 'web',
      description: 'AI-powered multi-agent executive assistant that automates scheduling, room booking, and presentation creation with intelligent intent routing.',
      tags: ['Agentic AI', 'LangGraph', 'React', 'Python', 'Flask', 'GenAI'],
      image: '🛒',
      color: 'accent-1',
      link: '#'
    },
    {
      id: 2,
      title: 'Personal Porfolio',
      category: 'app',
      description: 'Collaborative project management tool with real-time updates, team chat, and Kanban boards.',
      tags: ['React', 'css', 'Tailwind'],
      image: '📋',
      color: 'accent-2',
      link: '#'
    },
    {
      id: 3,
      title: 'RAG Policy Chatbot',
      category: 'web',
      description: 'AI-driven policy chatbot leveraging RAG for accurate, context-aware query resolution with transparent source-backed responses.',
      tags: ['GenAI', 'RAG', 'LLM', 'Gemini-Model', 'ChromaDB', 'Python', 'Flask'],
      image: '🎨',
      color: 'accent-3',
      link: '#'
    },
    {
      id: 4,
      title: 'RazorPay Clone UI Design',
      category: 'app',
      description: 'Razorpay clone UI Design is a payment gateway clone that allows users to make online payments.',
      tags: ['CSS', 'HTML', 'Tailwind CSS', 'JavaScript'],
      image: '💪',
      color: 'accent-4',
      link: '#'
    },
    {
      id: 5,
      title: 'AI Document Generation',
      category: 'app',
      description: 'AI-powered document generation system that creates structured, context-aware documents from user inputs with high accuracy.',
      tags: ['Python', 'FastAPI', 'Gemini-2.5-Flash', 'GenAI'],
      image: '📊',
      color: 'accent-1',
      link: '#'
    },
    {
      id: 6,
      title: 'Nexa AI — Resume Analyzer',
      category: 'web',
      description: 'AI-powered resume analysis platform that evaluates ATS compatibility, scores job fit, and identifies actionable skill gaps in real time.',
      tags: ['Python', 'FastAPI', 'Pydantic', 'Gemini-2.5-Flash'],
      image: '🌤️',
      color: 'accent-2',
      link: '#'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'AI Projects' },
    { id: 'app', label: 'Other Projects' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number text-accent-3">[03]</span>
            FEATURED WORK
          </h2>
        </div>

        <div className="project-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn brutal-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card brutal-box"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`project-image bg-${project.color}`}>
                <span className="project-emoji">{project.image}</span>
                <div className="project-overlay">
                  <a href={project.link} className="project-link">
                    View Project →
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag brutal-box">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p className="cta-text">Want to see more of my work?</p>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="brutal-btn bg-accent-1">
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
