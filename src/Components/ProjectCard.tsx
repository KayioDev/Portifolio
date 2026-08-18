import type { ProjectCardProp } from "../Types/ProjectCardProps";

function ProjectCard ({project}: ProjectCardProp) {
    return (
        <article className="ProjectCard">
            <div className="ProjectCard__header">
                <span className="ProjectCard__eyebrow">Projeto</span>
                <span className="ProjectCard__status">Open source</span>
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="ProjectCard__tech">
                {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                ))}
            </div>

            <a href={project.githubUrl} target="_blank" rel="noreferrer">
                Ver projeto
            </a>
        </article>
    )
}
export default ProjectCard;