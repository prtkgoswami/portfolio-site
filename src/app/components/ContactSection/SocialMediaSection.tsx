import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {
  faCodepen,
  faDev,
  faFacebook,
  faGithub,
  faInstagram,
  faItchIo,
  faLinkedinIn,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons";
import { Social } from "@/sanity/types";
import { Tracker } from "../Tracker";
import "./index.css";

type SocialMediaSectionProps = {
  socialData: Social[];
};

const SOCIAL_MAP: Record<string, IconDefinition> = {
  facebook: faFacebook,
  instagram: faInstagram,
  linkedin: faLinkedinIn,
  github: faGithub,
  codepen: faCodepen,
  "itch.io": faItchIo,
  "dev.to": faDev,
  medium: faMediumM,
};

const SocialMediaSection = ({
  socialData,
}: SocialMediaSectionProps): React.ReactElement => {
  return (
    <ul id="social-icon-container" style={{ listStyle: "none", padding: 0 }}>
      {socialData.map((item, idx) => (
        <li key={`social-${idx}`}>
          <Tracker
            action="social_click"
            params={{
              event_category: "social_media",
              event_label: item.title,
            }}
          >
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer me"
              aria-label={`Visit Pratik Goswami's ${item.title} profile`}
            >
              <div className="social-block">
                <FontAwesomeIcon icon={SOCIAL_MAP[item.title.toLowerCase()]} />
                <span className="social-title">{item.title}</span>
              </div>
            </a>
          </Tracker>
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaSection;
