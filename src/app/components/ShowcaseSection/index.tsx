import { PROJECT_DETAILS } from "@/app/common/const";
import Image from "next/image";
import { useState } from "react";
import "./index.css";

type ShowcaseSectionProps = { isMobile: boolean };

const ShowcaseSection = ({
  isMobile,
}: ShowcaseSectionProps): React.ReactElement => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div id="showcase-section" className="pages">
      {isMobile ? (
        <div className="section-body">
          {/* <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontSize: isMobile ? "1.5rem" : "3rem",
              color: "rgba(255,255,255, 0.4)",
              height: "300px",
              textTransform: "uppercase",
              wordBreak: "break-word",
              textAlign: "center",
            }}
          >
            <h1>Showcase Section</h1>
          </div> */}

          <div className="project-preview">
            <Image src="/phoneOverlay.png" alt="Phone Overlay" fill />
            <div className="preview-overlay">
              <Image
                src={PROJECT_DETAILS[selectedIndex].imgSrc.mobile ?? ""}
                alt="Project Preview"
                fill
              />
            </div>
          </div>

          <div className="project-nav">
            {PROJECT_DETAILS.map((projectDetails, projectIndex) => (
              <div
                key={`project-nav-item-${projectIndex}`}
                className={`project-nav-item ${
                  projectDetails.imgSrc.mobile.length === 0
                    ? "project-nav-item-hidden"
                    : ""
                }`}
                onClick={() => setSelectedIndex(projectIndex)}
              >
                {projectDetails.name}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="section-body">
          <div className="project-nav">
            {PROJECT_DETAILS.map((projectDetails, projectIndex) => (
              <div
                key={`project-nav-item-${projectIndex}`}
                className={`project-nav-item ${
                  projectIndex === selectedIndex
                    ? "project-nav-item-active"
                    : ""
                }`}
                onClick={() => setSelectedIndex(projectIndex)}
              >
                {projectDetails.name}
              </div>
            ))}
          </div>
          <div className="project-content">
            <a href={PROJECT_DETAILS[selectedIndex].liveUrl} target="_blank">
              <div className="project-preview">
                <Image src="/laptopOverlay.png" alt="Laptop Overlay" fill />
                <div className="preview-overlay">
                  <Image
                    src={PROJECT_DETAILS[selectedIndex].imgSrc.desktop ?? ""}
                    alt="Project Preview"
                    fill
                  />
                </div>
              </div>
            </a>
            <div className="project-details">
              <div className="project-details-name">
                {PROJECT_DETAILS[selectedIndex].name}
              </div>
              <div className="project-details-title">
                {PROJECT_DETAILS[selectedIndex].title}
              </div>
              <div className="project-details-desc">
                {PROJECT_DETAILS[selectedIndex].desc}
              </div>
              <div className="project-details-tech">
                {PROJECT_DETAILS[selectedIndex].tech.map(
                  (techItems, techIndex) => (
                    <div
                      key={`project-detail-tech-item-${techIndex}`}
                      className="project-details-tech-item"
                    >
                      {techItems}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowcaseSection;
