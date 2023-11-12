import React, { ReactElement, useEffect, useState } from "react";
import ContactSection from "../ContactSection";
import ExperienceSection from "../ExperienceSection";
import FooterSection from "../FooterSection";
import ShowcaseSection from "../ShowcaseSection";
import SideNav from "../SideNav";
import TitleSection from "../TitleSection";
import ToolboxSection from "../ToolboxSection";
import BGParticles from "./BGParticles";
import "./index.css";

type WebsiteWrapperProps = {
  isMobile: boolean;
};

const WebsiteWrapper = ({ isMobile }: WebsiteWrapperProps): ReactElement => {
  // const [isMobileVisit, setIsMobileVisit] = useState(false);

  const updateDimensions = () => {
    const titlePage = document.querySelector("#title-section");
    // pages.forEach((page) => {
    //   page.style.minHeight = window.innerHeight + "px";
    // });
    if (titlePage) {
      (titlePage as HTMLElement).style.minHeight = window.innerHeight + "px";
    }
  };

  useEffect(() => {
    // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    // if (isMobile) {
    //   setIsMobileVisit(true);
    // }

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <>
      <div className="pages-wrapper">
        <div id="bg-particles">
          <BGParticles />
        </div>
        <div id="content">
          <TitleSection />
          <ToolboxSection />
          <ExperienceSection />
          <ShowcaseSection />
          <ContactSection />
          <FooterSection isMobile={isMobile} />
        </div>
      </div>
    </>
  );
};

export default WebsiteWrapper;
