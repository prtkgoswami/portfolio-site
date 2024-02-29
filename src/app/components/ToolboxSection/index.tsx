import { SKILL_LIST } from "@/app/common/const";
import { ReactElement } from "react";
import "./index.css";

type ToolboxSectionProps = {
  refCallback: any;
};

const ToolboxSection = ({ refCallback }: ToolboxSectionProps): ReactElement => {
  var skills = Object.entries(SKILL_LIST);
  return (
    <div id="toolbox-section" className="pages" ref={refCallback}>
      <div className="page-title">What I Know...</div>
      <div className="section-body">
        <div className="skill-content">
          {skills.map(([category, skillItems], index) => (
            <div className="skill-section" key={category}>
              <div className="skill-section-title">{category}</div>
              <div className="skill-section-content">
                {skillItems.map((skillItem, itemIndex) => (
                  <div className="skill-content-item" key={skillItem}>
                    {skillItem}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolboxSection;
