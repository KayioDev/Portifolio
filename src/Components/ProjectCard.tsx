import { useState } from "react";
import type { ProjectCardProp } from "../Types/ProjectCardProps";

const MAX_DESCRIPTION_LENGTH = 180;

function ProjectCard({ project }: ProjectCardProp) {
  const [expanded, setExpanded] = useState(false);
  const isLongDescription = project.description.length > MAX_DESCRIPTION_LENGTH;
  const visibleText = expanded || !isLongDescription
    ? project.description
    : `${project.description.slice(0, MAX_DESCRIPTION_LENGTH).trim()}...`;

  return (
    <article className="ProjectCard">
      <div className="ProjectCard__header">
        <span className="ProjectCard__eyebrow">Projeto</span>
        <span className="ProjectCard__status">Open source</span>
      </div>

      <h3>{project.title}</h3>
      <p className={`ProjectCard__description ${expanded ? "is-expanded" : ""}`}>
        {visibleText}
      </p>

      {isLongDescription && (
        <button
          type="button"
          className="ProjectCard__toggle"
          onClick={() => setExpanded((current) => !current)}
        >
          {expanded ? "Mostrar menos" : "Mostrar mais"}
        </button>
      )}

      <div className="ProjectCard__tech">
        {project.technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <a href={project.githubUrl} target="_blank" rel="noreferrer">
        Ver projeto
      </a>
    </article>
  );
}

export default ProjectCard;