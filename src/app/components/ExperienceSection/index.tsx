import { EXPERIENCE_LIST } from "@/app/common/const";
import Image from "next/image";
import { useState } from "react";
import "./index.css";

type ExperienceSectionProps = {
  refCallback: any;
};

const ExperienceSection = ({
  refCallback,
}: ExperienceSectionProps): React.ReactElement => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleExpClick = (index: number) => {
    const isExpanded = index === expandedIndex;

    if (isExpanded) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div id="experience-section" className="pages" ref={refCallback}>
      <div className="page-title">Experience</div>
      <div className="section-body">
        {EXPERIENCE_LIST.map((experience, expIndex) => (
          <div
            key={`exp-${expIndex}`}
            className="exp-block"
            onClick={() => {
              handleExpClick(expIndex);
            }}
          >
            <div className="exp-banner">
              <div
                className="exp-banner-img-wrapper"
                style={{ backgroundColor: `${experience.bannerColor}` }}
              >
                <div className="exp-banner-img">
                  <Image
                    src={experience.imgSrc}
                    fill
                    alt="Experience Logo"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="exp-banner-text-wrapper">
                <div className="exp-banner-title">
                  <div>{experience.orgName}</div>
                  <div>{experience.role}</div>
                </div>
                <div className="exp-banner-duration">
                  <div>From: {experience.startYear}</div>
                  {experience.endYear !== "Present" && (
                    <div>To: {experience.endYear}</div>
                  )}
                </div>
              </div>
              <div className="exp-banner-expand-btn">
                <div
                  className={`exp-banner-expand-icon ${
                    expandedIndex === expIndex ? "minus-icon" : "plus-icon"
                  }`}
                >
                  <div className="h-bar">
                    <div className="v-bar"></div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="exp-item-content"
              style={
                expandedIndex === expIndex
                  ? { maxHeight: "1000px" }
                  : { maxHeight: "0" }
              }
            >
              <div className="exp-item-desc">
                <ul className="exp-item-responsibilities">
                  {experience.responsibilities.map(
                    (responsibility, respIndex) => (
                      <li key={`exp-responsibility-${respIndex}`}>
                        {responsibility}
                      </li>
                    )
                  )}
                </ul>
                <ul className="exp-item-achievements">
                  {experience.responsibilities.map((achievement, achIndex) => (
                    <li key={`exp-achievement-${achIndex}`}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
