import { SKILL_LIST, Skill } from "@/app/common/const";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "./index.css";

type ToolboxSectionProps = {
  refCallback: any;
};

const ToolboxSection = ({
  refCallback,
}: ToolboxSectionProps): React.ReactElement => {
  const bodyRef = useRef(null);
  const [skillsList, setSkillsList] = useState<Skill[][]>([]);

  const updateSkillLayout = () => {
    if (bodyRef.current) {
      const windowWidth = window.innerWidth;
      const usableWidth =
        windowWidth < 600
          ? (bodyRef.current as HTMLElement).offsetWidth - 60
          : (bodyRef.current as HTMLElement).offsetWidth - 96;
      const maxElems =
        windowWidth < 600
          ? Math.floor(usableWidth / 80)
          : Math.floor(usableWidth / 180);
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
    }
  };

  useEffect(() => {
    updateSkillLayout();
  }, [bodyRef.current]);

  useEffect(() => {
    window.addEventListener("resize", updateSkillLayout);
    return () => {
      window.removeEventListener("resize", updateSkillLayout);
    };
  }, []);

  return (
    <div id="toolbox-section" className="pages" ref={refCallback}>
      <div className="page-title">What I Know...</div>
      <div className="section-body" ref={bodyRef}>
        {skillsList.map((skillRow, skillRowIdx) => (
          <div className="hex-row" key={`skill-row-${skillRowIdx}`}>
            {skillRow.map(({ name, icon }, skillIdx) => (
              <div className="hex-wrapper" key={`skill-${skillIdx}`}>
                <div
                  className="circle"
                  style={{ animationDelay: `${Math.random() * 3}s` }}
                >
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
