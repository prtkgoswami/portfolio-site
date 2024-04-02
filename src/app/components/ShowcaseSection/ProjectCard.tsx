import { Project } from "@/app/common/const";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { ReactElement } from "react";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps): ReactElement => {
  const { name, imgSrc, desc, sourceUrl, liveUrl, tech } = project;
  return (
    <div className="project-card">
      <a href={liveUrl} target="_blank">
        <div className="project-image">
          <Image src={imgSrc.desktop} alt={name} fill />
        </div>
      </a>
      <div className="project-details">
        <div className="project-name">{name}</div>
        <div className="project-desc">{desc}</div>
        <div className="project-tech-wrapper">
          <p>tech stack</p>
          <div className="project-tech-list">
            {tech.map((item, index) => (
              <div className="project-tech-item" key={`tech-${item}`}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="project-links">
          {sourceUrl && (
            <a href={sourceUrl} target="_blank">
              <div className="project-link-src">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </div>
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank">
              <div className="project-link-live">live</div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
