import React from "react";
import "./Projects.scss";
import { projects } from "../../data";
import TechList from "../common/TechList/TechList";

const getProjectActions = (project) =>
  [
    project.giturl && {
      href: project.giturl,
      label: "Source",
      ariaLabel: `View ${project.title} source code`,
    },
    project.url && {
      href: project.url,
      label: "View",
      ariaLabel: `Open ${project.title}`,
    },
  ].filter(Boolean);

function ProjectCard({ project }) {
  const actions = getProjectActions(project);

  return (
    <article className="projects__card">
      <div className="projects__card-head">
        <i className="far fa-folder-open fa-3x" aria-hidden="true"></i>
      </div>
      <div className="projects__card-body">
        <h3 className="projects__card-title">{project.title}</h3>
        <p className="projects__card-copy">{project.content}</p>
      </div>
      <div className="projects__card-footer">
        <TechList items={project.tile} className="projects__tech-list" />
        {actions.length > 0 && (
          <div className="projects__actions">
            {actions.map((action) => (
              <a
                href={action.href}
                target="_blank"
                rel="noreferrer"
                aria-label={action.ariaLabel}
                key={action.label}
              >
                {action.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section className="projects" id="projects" aria-labelledby="projects-title">
      <div className="projects__header">
        <span className="projects__eyebrow">Selected work</span>
        <h2 className="projects__title" id="projects-title">Selected projects</h2>
        <p className="projects__subtitle">
          A mix of production-minded applications, data tools, and experiments
          that show how I approach product problems end to end.
        </p>
      </div>
        <div className="projects__grid">
          {projects.map((proj) => (
            <ProjectCard project={proj} key={proj.title} />
          ))}
        </div>
    </section>
  );
}

export default Projects;
