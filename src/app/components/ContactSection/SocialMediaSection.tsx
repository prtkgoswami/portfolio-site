import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faCodepen, faFacebook, faGithub, faInstagram, faItchIo, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Social } from "@/sanity/types";
import "./index.css";

type SocialMediaSectionProps = {
  socialData: Social[];
};

const SOCIAL_MAP: Record<string, IconDefinition> = {
  "facebook": faFacebook,
  "instagram": faInstagram,
  "linkedin": faLinkedinIn,
  "github": faGithub,
  "codepen": faCodepen,
  "itch.io": faItchIo
}

const SocialMediaSection =
  ({ socialData }: SocialMediaSectionProps): React.ReactElement => {
    return (
      <div id="social-icon-container">
        {socialData.map((item, idx) => (
          <a
            key={`social-${idx}`}
            href={item.url}
            target="_blank"
            aria-label={item.title}
          >
            <div className="social-block">
              <FontAwesomeIcon icon={SOCIAL_MAP[item.title.toLowerCase()]} />
              <div className="social-title">{item.title}</div>
            </div>
          </a>
        ))}
      </div>
    );
  };

export default SocialMediaSection;
