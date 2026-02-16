import React from "react";
import ProjectsData from "../../shared/opensource/projects.json";
import "./ProjectsSection.css";

const GRADIENTS = [
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "linear-gradient(135deg, #007aff 0%, #0051d5 100%)",
  "linear-gradient(135deg, #34c759 0%, #30b350 100%)",
  "linear-gradient(135deg, #ff9500 0%, #ff6b00 100%)",
  "linear-gradient(135deg, #5856d6 0%, #3634a3 100%)",
  "linear-gradient(135deg, #00c7be 0%, #00a39e 100%)",
];

const ProjectsSection = () => {
  const projects = (ProjectsData.data || []).map((repo, index) => ({
    id: repo.id,
    title: repo.name,
    description: repo.description || "A project built with modern technologies.",
    tags: (repo.languages || []).map((l) => l.name),
    gradient: GRADIENTS[index % GRADIENTS.length],
    icon: "🚀",
    url: repo.url,
  }));

  return (
    <section id="projects" className="section section-projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">A selection of my recent work</p>

        <div className="projects-grid">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <div
                className="project-image"
                style={{ background: project.gradient }}
              >
                <span className="project-icon">{project.icon}</span>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.tags.slice(0, 5).map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
