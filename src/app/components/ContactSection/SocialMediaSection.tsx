import { SOCIAL_LINKS } from "@/app/common/const";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

type SocialMediaSectionProps = {};

const SocialMediaSection =
  ({}: SocialMediaSectionProps): React.ReactElement => {
    return (
      <div id="social-icon-container">
        {SOCIAL_LINKS.map((item, idx) => (
          <a key={`social-${idx}`} href={item.url} target="_blank">
            {/* <div className="social-title">{item.name}</div> */}
            <div className="social-block">
              <FontAwesomeIcon icon={item.icon} />
              <div className="social-title">{item.name}</div>
            </div>
          </a>
        ))}
      </div>
    );
  };

export default SocialMediaSection;
