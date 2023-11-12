import Image from "next/image";
import "./index.css";

export type Experience = {
  orgName: string;
  startYear: string;
  endYear: string;
  role: string;
  responsibilities: string[];
  achievements: string[];
  imgSrc: string;
};

const EXPERIENCE_LIST: Experience[] = [
  {
    orgName: "IBM India",
    startYear: "2016",
    endYear: "2019",
    role: "Application Developer",
    responsibilities: [
      "Developed and maintained scalable web applications using modern technologies such as React and Node.js.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions within tight deadlines.",
      "Participated in code reviews, providing constructive feedback and ensuring code quality standards.",
      "Implemented new features and enhancements, contributing to a 20% increase in user engagement.",
      "Troubleshooted and resolved software defects, improving overall system stability.",
      "Mentored junior developers and facilitated knowledge sharing sessions within the team.",
    ],
    achievements: [
      "Led the successful migration of a legacy system to a microservices architecture, resulting in improved performance and maintainability.",
      "Received Employee of the Month award for outstanding contributions to a critical project.",
      "Implemented automated testing processes, reducing the number of bugs by 30%.",
    ],
    imgSrc: "/ibm_logo.svg",
  },
  {
    orgName: "University of Washington Bothell",
    startYear: "2019",
    endYear: "2022",
    role: "Masters Student",
    responsibilities: [
      "Developed and maintained scalable web applications using modern technologies such as React and Node.js.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions within tight deadlines.",
      "Participated in code reviews, providing constructive feedback and ensuring code quality standards.",
      "Implemented new features and enhancements, contributing to a 20% increase in user engagement.",
      "Troubleshooted and resolved software defects, improving overall system stability.",
      "Mentored junior developers and facilitated knowledge sharing sessions within the team.",
    ],
    achievements: [
      "Led the successful migration of a legacy system to a microservices architecture, resulting in improved performance and maintainability.",
      "Received Employee of the Month award for outstanding contributions to a critical project.",
      "Implemented automated testing processes, reducing the number of bugs by 30%.",
    ],
    imgSrc: "/uw_logo.png",
  },
  {
    orgName: "TikTok",
    startYear: "2022",
    endYear: "Present",
    role: "Software Engineer",
    responsibilities: [
      "Developed and maintained scalable web applications using modern technologies such as React and Node.js.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions within tight deadlines.",
      "Participated in code reviews, providing constructive feedback and ensuring code quality standards.",
      "Implemented new features and enhancements, contributing to a 20% increase in user engagement.",
      "Troubleshooted and resolved software defects, improving overall system stability.",
      "Mentored junior developers and facilitated knowledge sharing sessions within the team.",
    ],
    achievements: [
      "Led the successful migration of a legacy system to a microservices architecture, resulting in improved performance and maintainability.",
      "Received Employee of the Month award for outstanding contributions to a critical project.",
      "Implemented automated testing processes, reducing the number of bugs by 30%.",
    ],
    imgSrc: "/tiktok_logo.jpg",
  },
];

type ExperienceSectionProps = {};

const ExperienceSection = ({}: ExperienceSectionProps): React.ReactElement => {
  return (
    <div id="experience-section" className="pages">
      <div className="section-body">
        {EXPERIENCE_LIST.map((experience, expIndex) => (
          <div key={`exp-${expIndex}`} className="exp-block">
            <div className="exp-item-img">
              <Image
                src={experience.imgSrc}
                fill
                alt="Experience Logo"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="exp-item-content">
              <div className="exp-item-title-wrapper">
                <div className="exp-item-title">
                  <div className="exp-item-org">{experience.orgName}</div>
                  <div className="exp-item-role">{experience.role}</div>
                </div>
                <div className="exp-item-duration">{`${experience.startYear} - ${experience.endYear}`}</div>
              </div>
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
