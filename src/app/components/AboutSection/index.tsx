import { WELCOME_STR } from "@common/const";
import { Skill } from "@sanity/types";
import { client as sanityClient } from "@sanity/lib/client";
import { SKILLS_QUERY } from "@/sanity/queries";
import "./index.css";

type AboutSectionProps = {
  aboutText: string;
};

async function AboutSection({ aboutText }: AboutSectionProps) {
  const skillList: Skill[] = await sanityClient.fetch(SKILLS_QUERY);

  return (
    <section id="about-section" className="pages">
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
}

export default AboutSection;
