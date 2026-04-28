import { REPOSITORY_URL } from "@/app/common/const";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";
import ProjectCard from "./ProjectCard";
import "./index.css";
import { Project } from "@sanity/types";

type ShowcaseSectionProps = {
  refCallback: any;
  projectList: Project[];
};

const getProjectsSchema = (projectList: Project[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projectList.map(
      ({ title, desc, liveLink, repoLink }, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: title,
          description: desc,
          applicationCategory: "DeveloperApplication",
          url: liveLink ?? repoLink,
          author: {
            "@type": "Person",
            name: "Pratik Goswami",
          },
        },
      }),
    ),
  };
};

const ShowcaseSection = ({
  refCallback,
  projectList,
}: ShowcaseSectionProps): ReactElement => {
  return (
    <section id="showcase-section" className="pages" ref={refCallback}>
      <div className="section-content">
        <h2 className="section-title">Projects</h2>

        <ul className="projects-container">
          {projectList.map((project) => (
            <li key={project.title} style={{ listStyle: "none" }}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>

        <div className="repo-container">
          <a
            href={REPOSITORY_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View all projects on GitHub"
          >
            <div className="repo-button">
              <p>
                Go To Repository <FontAwesomeIcon icon={faAnglesRight} />
              </p>
            </div>
          </a>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getProjectsSchema(projectList)),
        }}
      />
    </section>
  );
};

export default ShowcaseSection;
