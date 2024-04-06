import { EDUCATION_LIST, EXPERIENCE_LIST } from "@/app/common/const";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement, useEffect, useState } from "react";
import "./index.css";

type ExperienceSectionProps = {
  refCallback: any;
};

const ExperienceSection = ({
  refCallback,
}: ExperienceSectionProps): ReactElement => {
  const [activeCategory, setActiveCategory] = useState("work");
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const [contentList, setContentList] = useState(EXPERIENCE_LIST);

  const handleExpClick = (event: any, index: number) => {
    const isExpanded = index === expandedIndex;

    if (isExpanded) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  const handleCategoryChange = (category: string) => {
    if (expandedIndex > -1) {
      setExpandedIndex(-1);
      setTimeout(() => {
        setActiveCategory(category);
      }, 400);
    } else {
      setActiveCategory(category);
    }
  };

  useEffect(() => {
    if (activeCategory === "work") {
      setContentList(EXPERIENCE_LIST);
    } else {
      setContentList(EDUCATION_LIST);
    }
  }, [activeCategory]);

  return (
    <section id="experience-section" className="pages" ref={refCallback}>
      <div className="section-content">
        <div className="section-title">
          <p
            className={`${activeCategory === "work" ? "" : "inactive"}`}
            onClick={() => handleCategoryChange("work")}
          >
            experience
          </p>
          <div className="seperator" />
          <p
            className={`${activeCategory === "edu" ? "" : "inactive"}`}
            onClick={() => handleCategoryChange("edu")}
          >
            education
          </p>
        </div>

        <div id="content-wrapper">
          <div id="content-container">
            {contentList.map((content, contentIndex) => (
              <div
                key={`content-${contentIndex}`}
                className="content-block"
                onClick={(event) => {
                  handleExpClick(event, contentIndex);
                }}
              >
                <div className="content-banner">
                  <div className="content-banner-text-wrapper">
                    <div className="content-banner-title">
                      <div>{content.orgName}</div>
                      <div>{content.role}</div>
                    </div>
                    <div className="content-banner-duration">
                      <div>From: {content.startYear}</div>
                      <div>To: {content.endYear}</div>
                    </div>
                  </div>
                  <div className="content-banner-expand-btn">
                    <div
                      className={`content-banner-expand-icon ${
                        expandedIndex === contentIndex
                          ? "minus-icon"
                          : "plus-icon"
                      }`}
                    >
                      <div className="h-bar">
                        <div className="v-bar"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="content-banner-mobile-expand-btn">
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`${
                      expandedIndex === contentIndex
                        ? "content-banner-mobile-minimize-icon"
                        : "content-banner-mobile-maximize-icon"
                    }`}
                  />
                </div>

                <div
                  className="content-item-content"
                  style={
                    expandedIndex === contentIndex
                      ? { maxHeight: "2000px" }
                      : { maxHeight: "0" }
                  }
                >
                  <div className="content-item-desc">
                    <ul className="content-item-responsibilities">
                      {content.responsibilities.map(
                        (responsibility, respIndex) => (
                          <li key={`content-responsibility-${respIndex}`}>
                            <p>
                              <FontAwesomeIcon icon={faChevronRight} />
                            </p>
                            <p>{responsibility}</p>
                          </li>
                        )
                      )}
                    </ul>
                    <ul className="content-item-achievements">
                      {content.achievements.map((achievement, achIndex) => (
                        <li key={`content-achievement-${achIndex}`}>
                          <p>
                            <FontAwesomeIcon icon={faChevronRight} />
                          </p>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
