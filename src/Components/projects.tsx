import { useState } from "react";
import { projectsData } from "../Data/Projects";
import ProjectCard from "./ProjectCard";

function Projects() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextProject = () => {
        setActiveIndex((current) => (current + 1) % projectsData.length);
    };

    const prevProject = () => {
        setActiveIndex((current) => (current - 1 + projectsData.length) % projectsData.length);
    };

    return (
        <section className="Projects">
            <div className="Projects__header">
                <p>Seleção</p>
                <h2>Projetos</h2>
            </div>

            <div className="Projects__carousel">
                <button
                    type="button"
                    className="Projects__nav Projects__nav--prev"
                    onClick={prevProject}
                    aria-label="Projeto anterior"
                    disabled={projectsData.length <= 1}
                >
                    ←
                </button>

                <div className="Projects__viewport">
                    <div
                        className="Projects__track"
                        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                    >
                        {projectsData.map((project) => (
                            <div className="Projects__slide" key={project.title}>
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    type="button"
                    className="Projects__nav Projects__nav--next"
                    onClick={nextProject}
                    aria-label="Próximo projeto"
                    disabled={projectsData.length <= 1}
                >
                    →
                </button>
            </div>
        </section>
    );
}

export default Projects;