import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";
import CustomBackground from "../CustomBackground";
import { SiteConfig } from "@sanity/types";
import { urlForFile } from "@sanity/lib/file";
import "./index.css";

type IntroSectionProps = {
  isMobile: boolean;
  siteData: SiteConfig;
}

const IntroSection = ({ isMobile, siteData }: IntroSectionProps): ReactElement => {
  const cvUrl = siteData.cv ? urlForFile(siteData.cv) : null;

  return (
    <section id="intro-section">
      <CustomBackground isInteractive={isMobile} icon="ring" fontSize={16} />
      <div className="section-content">
        {siteData.title ?
          <div id="name">
            {siteData.title.split(' ').map((part, i) => <p key={`web-title-${i}`}>{part}</p>)}
          </div> :
          <div id="name">
            <p>Pratik</p>
            <p>Goswami</p>
          </div>
        }

        {cvUrl &&
          <a href={cvUrl} target="_blank">
            <div id="resume-button">
              <p>Curriculam Vitae</p>
              <FontAwesomeIcon icon={faDownload} />
            </div>
          </a>
        }
      </div>
    </section>
  );
};

export default IntroSection;
