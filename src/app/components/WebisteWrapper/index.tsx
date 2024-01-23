import { useWindowSize } from "@/app/common/hooks/useWindowResize";
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
  const updateDimensions = () => {
    const titlePage = document.querySelector("#title-section");

    if (titlePage) {
      (titlePage as HTMLElement).style.minHeight = window.innerHeight + "px";
    }
  };

  useEffect(() => {
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
          <ShowcaseSection isMobile={isMobile} />
          <ContactSection />
        </div>
        <FooterSection isMobile={isMobile} />
      </div>
    </>
  );
};

export default WebsiteWrapper;
