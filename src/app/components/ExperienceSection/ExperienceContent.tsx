"use client";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Experience } from "@sanity/types";

type ExperienceContentProps = {
  workExpList: Experience[];
  educationList: Experience[];
};

function ExperienceContent({
  workExpList,
  educationList,
}: ExperienceContentProps) {
  const [activeCategory, setActiveCategory] = useState("work");

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <section id="experience-section" className="pages">
      <div className="section-content">
        <h2 className="section-title">Experience & Education</h2>

        <button
          type="button"
          className={`section-switch-btn btn-left ${activeCategory === "work" ? "hide" : ""}`}
          onClick={() => handleCategoryChange("work")}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <button
          type="button"
          className={`section-switch-btn btn-right ${activeCategory === "edu" ? "hide" : ""}`}
          onClick={() => handleCategoryChange("edu")}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>

        <div
          id="content-wrapper"
          style={{
            transform: `translateX(${activeCategory === "work" ? "0" : "-21rem"})`,
          }}
        >
          {[
            ["Experience", workExpList],
            ["Education", educationList],
          ].map(([label, contentList]) => (
            <div key={`${label}`} className="content-container">
              <h3>{label as string}</h3>
              {(contentList as Experience[]).map((content, contentIndex) => (
                /* SEO FIX: Wrap each entry in an <article> for semantic correctness */
                <article
                  key={`content-${content.organization}-${content.position}`}
                  className="content-block"
                >
                  {/* SEO FIX: Use <header> to define the entity being described */}
                  <header className="content-banner">
                    <div className="content-banner-text-wrapper">
                      <div className="content-banner-title">
                        <h3>{content.organization}</h3>
                        <p>{content.position}</p>
                      </div>
                      <div className="content-banner-duration">
                        <time dateTime={new Date(content.from).toISOString()}>
                          <span className="duration-label">FROM:</span>
                          {new Date(content.from).getFullYear()}
                        </time>
                        <time
                          dateTime={
                            content.isCurrent
                              ? new Date().toISOString()
                              : content.to
                                ? new Date(content.to).toISOString()
                                : ""
                          }
                        >
                          <span className="duration-label">TO:</span>
                          {content.isCurrent
                            ? "Present"
                            : content.to
                              ? new Date(content.to).getFullYear()
                              : ""}
                        </time>
                      </div>
                    </div>
                  </header>

                  <div className="content-item-content">
                    <div className="content-item-desc">
                      <ul className="content-item-responsibilities">
                        {content.desc &&
                          content.desc.map((responsibility, respIndex) => (
                            <li key={`content-responsibility-${respIndex}`}>
                              <p>
                                <FontAwesomeIcon icon={faChevronRight} />
                              </p>
                              <p>{responsibility}</p>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                  {contentIndex < contentList.length - 1 && (
                    <div className="content-block-seperator"></div>
                  )}
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceContent;
