
import {
  ArrowUpRight,
  Github,
  Database,
  BarChart3,
  FileSpreadsheet,
  Code2,
} from "lucide-react";

import { projects } from "../data/projects";

const Projects = () => {
  const getProjectIcon = (icon: string) => {
    switch (icon) {
      case "excel":
        return <FileSpreadsheet size={32} />;

      case "sql":
        return <Database size={32} />;

      case "python":
        return <Code2 size={32} />;

      case "powerbi":
        return <BarChart3 size={32} />;

      default:
        return <Database size={32} />;
    }
  };

  return (
    <section className="projects section" id="projects">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-subtitle">
            MY RECENT WORK
          </span>

          <h2>Featured <span>Projects</span></h2>

          <p>
            Practical data analytics projects showcasing my
            technical skills and problem-solving approach.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className={`project-preview preview-${project.icon}`}>
                <div className="preview-top">
                  <span>DATA ANALYTICS</span>
                  <span>0{project.id}</span>
                </div>

                <div className="preview-main">
                  <div className="preview-icon">
                    {getProjectIcon(project.icon)}
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.category}</p>
                </div>

                <div className="preview-bottom">
                  <span>ANALYSIS & INSIGHTS</span>
                  <ArrowUpRight size={20} />
                </div>
              </div>

              <div className="project-content">
                <div className="project-category">
                  {project.category}
                </div>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tools">
                  {project.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={17} />
                    GitHub
                  </a>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                      <ArrowUpRight size={17} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-footer">
          <p>More projects and case studies coming soon.</p>

          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
            className="all-projects-btn"
          >
            View GitHub Profile
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
