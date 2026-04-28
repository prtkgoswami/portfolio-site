import { WELCOME_STR } from "@common/const";
import { ReactElement } from "react";
import { Skill } from "@sanity/types";
import "./index.css";

type AboutSectionProps = {
  refCallback: any;
  aboutText: string;
  skillList: Skill[];
};

const AboutSection = ({
  refCallback,
  aboutText,
  skillList,
}: AboutSectionProps): ReactElement => {
  return (
    <section id="about-section" className="pages" ref={refCallback}>
      <div className="section-content">
        <div id="welcome-wrapper">
          <h2 id="about-section-title">About Pratik</h2>

          <div id="welcome">
            {aboutText ? (
              aboutText
                .split("\n\n")
                .map((paragraph, i) => <p key={i}>{paragraph}</p>)
            ) : (
              <p>{WELCOME_STR}</p>
            )}
          </div>
        </div>

        <section id="skills-section" aria-label="Skills">
          <h2 className="skills-section-title">Technical Skills</h2>

          <div className="skills-grid">
            {skillList.map(({ title, skills }) => (
              <article className="skill-container" key={title}>
                <h3 className="skill-title">{title}</h3>

                <ul className="skill-item-container">
                  {skills &&
                    skills.map((skill, index) => (
                      <li className="skill-item" key={`${title}-${index}`}>
                        {skill}
                      </li>
                    ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutSection;
