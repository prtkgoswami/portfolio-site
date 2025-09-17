import { SKILLS_LIST, WELCOME_STR } from "@common/const";
import { ReactElement } from "react";
import {Skill} from '@sanity/types'
import "./index.css";

type AboutSectionProps = {
  refCallback: any;
  aboutText: string;
  skillList: Skill[];
};

const AboutSection = ({ refCallback, aboutText, skillList }: AboutSectionProps): ReactElement => {
  return (
    <section id="about-section" className="pages" ref={refCallback}>
      <div className="section-content">
        <div id="welcome-wrapper">
          <p id="welcome">
            {aboutText ?
              aboutText.split("\n\n").map((paragraph, i) => (
                <span key={i}>
                  {paragraph}
                  <br />
                  <br />
                </span>
              )) :
              WELCOME_STR
            }
          </p>
        </div>

        <section id="skills-section">
          <div className="skills-section-title">Skills</div>
          <div>
            {skillList.map(({title, skills}) => (
              <div className="skill-container" key={title}>
                <div className="skill-title">{title}</div>
                <div className="skill-item-container">
                  {skills && skills.map((skill, index) => (
                    <div className="skill-item" key={`${title}-${index}`}>
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
