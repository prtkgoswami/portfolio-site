import { trackEvent } from "@/lib/gtag";
import { urlFor } from "@/sanity/lib/image";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Project } from "@sanity/types";
import Image from "next/image";
import { ReactElement } from "react";
import { Tracker } from "../Tracker";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps): ReactElement => {
  const { title, desc, image, liveLink, repoLink, techStack, category } =
    project;

  return (
    <article className="project-card">
      <Tracker
        action="project_click"
        params={{
          event_category: "project",
          event_label: title,
          action_type: "view_live",
        }}
      >
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View live demo of ${title}`}
        >
          <div className="project-image">
            {image && (
              <Image
                src={urlFor(image).url()}
                alt={image?.alt ?? `Screenshot of ${title}`}
                fill
              />
            )}
          </div>
        </a>
      </Tracker>

      <div className="project-details">
        <h3 className="project-name">{title}</h3>
        <p className="project-desc">{desc}</p>

        <div className="project-tech-wrapper">
          <p>Tech Stack</p>
          <ul className="project-tech-list">
            {techStack.map((item) => (
              <li className="project-tech-item" key={`tech-${item}`}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <footer className="project-footer">
          <div className="project-category">{category}</div>
          <div className="project-links">
            {repoLink && (
              <Tracker
                action="project_click"
                params={{
                  event_category: "project",
                  event_label: title,
                  action_type: "view_repo",
                }}
              >
                <a
                  href={repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View source code of ${title} on GitHub`}
                >
                  <div className="project-link-src">
                    <FontAwesomeIcon icon={faGithub} size="xl" />
                  </div>
                </a>
              </Tracker>
            )}
            {liveLink && (
              <Tracker
                action="project_click"
                params={{
                  event_category: "project",
                  event_label: title,
                  action_type: "view_live",
                }}
              >
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live demo of ${title}`}
                >
                  <div className="project-link-live">live</div>
                </a>
              </Tracker>
            )}
          </div>
        </footer>
      </div>
    </article>
  );
};

export default ProjectCard;
