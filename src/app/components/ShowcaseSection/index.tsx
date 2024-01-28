import { PROJECT_DETAILS, Project } from "@/app/common/const";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "./index.css";

type ShowcaseSectionProps = { isMobile: boolean; refCallback: any };

type ProjectList = {
  desktop: Project[];
  mobile: Project[];
};

const ShowcaseSection = ({
  isMobile,
  refCallback,
}: ShowcaseSectionProps): React.ReactElement => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerIndicatorRef = useRef<HTMLDivElement>(null);
  const [timeLeft, setTimeLeft] = useState(5);
  const [projectList, setProjectList] = useState<ProjectList>({
    desktop: PROJECT_DETAILS,
    mobile: PROJECT_DETAILS.filter(
      (project) => project.imgSrc.mobile.length !== 0
    ),
  });

  const handleNavClick = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedIndex(index);
    }, 500);
    setTimeout(() => {
      setIsTransitioning(false);
      if (timerIndicatorRef.current)
        timerIndicatorRef.current.style.visibility = "visible";
      setTimeLeft(5);
    }, 1000);
  };

  useEffect(() => {
    const timerRef = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 0.01);
      }
    }, 10);

    if (timeLeft <= 0) {
      const projectNum = isMobile
        ? projectList.mobile.length
        : projectList.desktop.length;

      if (timerIndicatorRef.current) {
        timerIndicatorRef.current.style.visibility = "hidden";
      }
      handleNavClick((selectedIndex + 1) % projectNum);
    }

    return () => clearInterval(timerRef);
  }, [timeLeft]);

  return (
    <div id="showcase-section" className="pages" ref={refCallback}>
      <div className="page-title">Showcase</div>
      {isMobile ? (
        <div className="section-body">
          {/* <a href={projectList.mobile[selectedIndex].liveUrl} target="_blank"> */}
          <div className="project-preview">
            <a href={projectList.mobile[selectedIndex].liveUrl} target="_blank">
              <Image src="/phoneOverlay.png" alt="Phone Overlay" fill />
              <div className="preview-overlay">
                <Image
                  src={projectList.mobile[selectedIndex].imgSrc.mobile ?? ""}
                  alt="Project Preview"
                  fill
                  style={isTransitioning ? { opacity: 0 } : { opacity: 1 }}
                />
              </div>
            </a>
          </div>
          {/* </a> */}

          <div className="project-nav-wrapper">
            <div
              className="time-indicator"
              style={{ transform: `scaleY(${timeLeft / 5})` }}
            ></div>
            <div className="project-nav">
              {projectList.mobile.map((projectDetails, projectIndex) => (
                <div
                  key={`project-nav-item-${projectIndex}`}
                  className={`project-nav-item
                   ${
                     projectIndex === selectedIndex
                       ? "project-nav-item-active"
                       : ""
                   }`}
                  onClick={() => {
                    setTimeLeft(5);
                    handleNavClick(projectIndex);
                  }}
                >
                  {projectDetails.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="section-body">
          <div className="project-nav-wrapper">
            <div className="project-nav">
              {projectList.desktop.map((projectDetails, projectIndex) => (
                <div
                  key={`project-nav-item-${projectIndex}`}
                  className={`project-nav-item ${
                    projectIndex === selectedIndex
                      ? "project-nav-item-active"
                      : ""
                  }`}
                  onClick={() => {
                    setTimeLeft(5);
                    handleNavClick(projectIndex);
                  }}
                >
                  {projectDetails.name}
                </div>
              ))}
            </div>
            <div
              className="time-indicator"
              ref={timerIndicatorRef}
              style={{ transform: `scaleX(${timeLeft / 5})` }}
            ></div>
          </div>
          <div className="project-content">
            <a
              href={projectList.desktop[selectedIndex].liveUrl}
              target="_blank"
            >
              <div className="project-preview">
                <Image src="/laptopOverlay.png" alt="Laptop Overlay" fill />
                <div className="preview-overlay">
                  <Image
                    src={
                      projectList.desktop[selectedIndex].imgSrc.desktop ?? ""
                    }
                    alt="Project Preview"
                    fill
                    style={isTransitioning ? { opacity: 0 } : { opacity: 1 }}
                  />
                </div>
              </div>
            </a>
            <div className="project-details">
              <div className="project-details-name">
                {projectList.desktop[selectedIndex].name}
              </div>
              <div className="project-details-title">
                {projectList.desktop[selectedIndex].title}
              </div>
              <div className="project-details-desc">
                {projectList.desktop[selectedIndex].desc}
              </div>
              <div className="project-details-tech">
                {projectList.desktop[selectedIndex].tech.map(
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
