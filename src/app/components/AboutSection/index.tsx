import { SKILLS_LIST, WELCOME_STR } from "@common/const";
import { ReactElement } from "react";
import "./index.css";

type AboutSectionProps = {
  refCallback: any;
};

const AboutSection = ({ refCallback }: AboutSectionProps): ReactElement => {
  return (
    <section id="about-section" className="pages" ref={refCallback}>
      <div className="section-content">
        <div id="welcome-wrapper">
          <div id="welcome">{WELCOME_STR}</div>
        </div>

        <section id="skills-section">
          <div className="skills-section-title">Skills</div>
          <div>
            {Object.entries(SKILLS_LIST).map(([category, skillList]) => (
              <div className="skill-container" key={category}>
                <div className="skill-title">{category}</div>
                <div className="skill-item-container">
                  {skillList.map((skill, index) => (
                    <div className="skill-item" key={`${category}-${index}`}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutSection;
