import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement, useEffect, useRef, useState } from "react";
import CustomBackground from "../CustomBackground";
import "./index.css";

const IntroSection = ({ isMobile }: { isMobile: boolean }): ReactElement => {
  return (
    <section id="intro-section">
      <CustomBackground isInteractive={isMobile} dotIcon={faCircle} />
      <div className="section-content">
        <div id="name">
          <p>Pratik</p>
          <p>Goswami</p>
        </div>

        <a href="/docs/Pratik-Goswami-Resume.pdf" target="_blank">
          <div id="resume-button">
            <p>Curriculam Vitae</p>
            <FontAwesomeIcon icon={faDownload} />
          </div>
        </a>
      </div>
    </section>
  );
};

export default IntroSection;
