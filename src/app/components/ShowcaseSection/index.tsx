import { PROJECT_DETAILS, REPOSITORY_URL } from "@/app/common/const";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";
import ProjectCard from "./ProjectCard";
import "./index.css";
import { Project } from "@sanity/types";

type ShowcaseSectionProps = {
  refCallback: any;
  projectList: Project[]
};

const ShowcaseSection = ({
  refCallback,
  projectList
}: ShowcaseSectionProps): ReactElement => {
  return (
    <section id="showcase-section" className="pages" ref={refCallback}>
      <div className="section-content">
        <div className="section-title">projects</div>
        <div className="projects-container">
          {projectList.map((project, index) => (
            <ProjectCard key={project.title} project={project} />
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
