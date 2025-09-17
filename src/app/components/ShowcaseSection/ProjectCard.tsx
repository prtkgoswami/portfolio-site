import { urlFor } from "@/sanity/lib/image";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Project } from "@sanity/types";
import Image from "next/image";
import { ReactElement } from "react";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps): ReactElement => {
  const { title, desc, image, liveLink, repoLink, techStack, category } = project;
  return (
    <div className="project-card">
      <a href={liveLink} target="_blank">
        <div className="project-image">
          {image && <Image src={urlFor(image).url()} alt={image?.alt ?? "Project Screenshot"} fill />}
        </div>
      </a>
      <div className="project-details">
        <div className="project-name">{title}</div>
        <div className="project-desc">{desc}</div>
        <div className="project-tech-wrapper">
          <p>tech stack</p>
          <div className="project-tech-list">
            {techStack.map((item) => (
              <div className="project-tech-item" key={`tech-${item}`}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="project-footer">
          <div className="project-category">{category}</div>
          <div className="project-links">
            {repoLink && (
              <a href={repoLink} target="_blank">
                <div className="project-link-src">
                  <FontAwesomeIcon icon={faGithub} size="xl" />
                </div>
              </a>
            )}
            {liveLink && (
              <a href={liveLink} target="_blank">
                <div className="project-link-live">live</div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
