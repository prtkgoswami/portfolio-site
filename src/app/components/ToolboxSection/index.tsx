import { SKILL_LIST, Skill } from "@/app/common/const";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "./index.css";

type ToolboxSectionProps = {};

const ToolboxSection = ({}: ToolboxSectionProps): React.ReactElement => {
  const bodyRef = useRef(null);
  const [skillsList, setSkillsList] = useState<Skill[][]>([]);

  const updateSkillLayout = () => {
    const windowWidth = window.innerWidth;
    const usableWidth =
      windowWidth < 600
        ? bodyRef.current.offsetWidth - 60
        : bodyRef.current.offsetWidth - 96;
    // const usableWidth = bodyRef.current.offsetWidth - 60;
    const maxElems =
      windowWidth < 600
        ? Math.floor(usableWidth / 80)
        : Math.floor(usableWidth / 180);
    // const maxElems = Math.floor(usableWidth / 80);
    const skills: Skill[][] = [];
    let temp: Skill[] = [];
    let count = 0;

    SKILL_LIST.forEach((skill, index) => {
      temp.push(skill);
      count += 1;
      if (
        (skills.length % 2 === 0 && count === maxElems - 1) ||
        (skills.length % 2 === 1 && count === maxElems)
      ) {
        skills.push(temp);
        temp = [];
        count = 0;
      }
    });
    skills.push(temp);

    setSkillsList(skills);
  };

  useEffect(() => {
    if (bodyRef.current) {
      updateSkillLayout();
    }
  }, [bodyRef.current]);

  useEffect(() => {
    window.addEventListener("resize", updateSkillLayout);
    return () => {
      window.removeEventListener("resize", updateSkillLayout);
    };
  }, []);

  return (
    <div id="toolbox-section" className="pages">
      <div className="page-title">What I Know...</div>
      <div className="section-body" ref={bodyRef}>
        {skillsList.map((skillRow, skillRowIdx) => (
          <div className="hex-row" key={`skill-row-${skillRowIdx}`}>
            {skillRow.map(({ name, icon }, skillIdx) => (
              <div className="hex-wrapper" key={`skill-${skillIdx}`}>
                <div className="circle">
                  <div className="circle-icon-wrapper">
                    <Image
                      src={icon}
                      fill
                      alt="Experience Logo"
                      style={{ objectFit: "contain" }}
                    />
                  </div>

                  <div className="circle-text">{name}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolboxSection;
