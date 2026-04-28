import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {
  faCodepen,
  faFacebook,
  faGithub,
  faInstagram,
  faItchIo,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Social } from "@/sanity/types";
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
};

const SocialMediaSection = ({
  socialData,
}: SocialMediaSectionProps): React.ReactElement => {
  return (
    <ul id="social-icon-container" style={{ listStyle: "none", padding: 0 }}>
      {socialData.map((item, idx) => (
        <li key={`social-${idx}`}>
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
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaSection;
