import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomBackground from "../CustomBackground";
import { SiteConfig } from "@sanity/types";
import { urlForFile } from "@sanity/lib/file";
import "./index.css";

type HeroSectionProps = {
  isMobile: boolean;
  siteData: SiteConfig;
};

function HeroSection({ siteData, isMobile }: HeroSectionProps) {
  const cvUrl = siteData.cv ? urlForFile(siteData.cv) : null;

  return (
    <section id="hero-section">
      <CustomBackground />
      <div className="section-content">
        <div id="details-wrapper">
          {siteData.title ? <h1>{siteData.title}</h1> : <h1>Pratik Goswami</h1>}
          {siteData.subTitle ? (
            <h2>{siteData.subTitle}</h2>
          ) : (
            <h2>
              Frontend Software Engineering | Ex-TikTok | React.js, Next.js,
              TypeScript, JavaScript
            </h2>
          )}
        </div>

        {cvUrl && (
          <a href={cvUrl} target="_blank" rel="noopener noreferrer">
            <div id="resume-button">
              <p>Curriculam Vitae</p>
              <FontAwesomeIcon icon={faDownload} />
            </div>
          </a>
        )}
      </div>
    </section>
  );
}

export default HeroSection;
