import { PROJECT_DETAILS, REPOSITORY_URL } from "@/app/common/const";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";
import ProjectCard from "./ProjectCard";
import "./index.css";

type ShowcaseSectionProps = {
  refCallback: any;
};

const ShowcaseSection = ({
  refCallback,
}: ShowcaseSectionProps): ReactElement => {
  return (
    <section id="showcase-section" className="pages" ref={refCallback}>
      <div className="section-content">
        <div className="section-title">projects</div>
        <div className="projects-container">
          {PROJECT_DETAILS.map((project, index) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
        <div className="repo-container">
          <a href={REPOSITORY_URL} target="_blank">
            <div className="repo-button">
              <p>
                Go To Repository <FontAwesomeIcon icon={faAnglesRight} />
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
