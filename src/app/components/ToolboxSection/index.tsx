import { SKILL_LIST } from "@/app/common/const";
import "./index.css";

type ToolboxSectionProps = {};

const ToolboxSection = ({}: ToolboxSectionProps): React.ReactElement => {
  return (
    <div id="toolbox-section" className="pages">
      <div className="section-body">
        <div className="skill-category-wrapper">
          <div className="skill-block">
            <div className="skill-category">Web Development</div>
            <div className="skill-list">
              {SKILL_LIST.web.map((skillName, index) => (
                <div key={`skill-web-${index}`}>{skillName}</div>
              ))}
            </div>
          </div>
          <div className="skill-block">
            <div className="skill-category">Programming</div>
            <div className="skill-list">
              {SKILL_LIST.programming.map((skillName, index) => (
                <div key={`skill-web-${index}`}>{skillName}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="skill-category-wrapper">
          <div className="skill-block">
            <div className="skill-category">Miscellaneous</div>
            <div className="skill-list">
              {SKILL_LIST.misc.map((skillName, index) => (
                <div key={`skill-web-${index}`}>{skillName}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolboxSection;
