"use client"
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React, {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import AboutSection from "../AboutSection";
import ContactSection from "../ContactSection";
import CustomBackground from "../CustomBackground";
import ExperienceSection from "../ExperienceSection";
import Footer from "../Footer";
import Header from "../Header";
import IntroSection from "../IntroSection";
import ShowcaseSection from "../ShowcaseSection";
import "./index.css";
import { Social, Experience, Project, SiteConfig, Skill } from "@/sanity/types";
import WelcomeLoader from "./WelcomeLoader";

type ContentData = {
  site: SiteConfig;
  projects: Project[];
  experiences: Experience[];
  skills: Skill[];
  socials: Social[];
}

type WebsiteContentProps = {
  isMobile: boolean;
} & ContentData;

type WebsiteWrapperProps = ContentData


const WebsiteContent = ({ isMobile, site, skills, projects, experiences, socials }: WebsiteContentProps): ReactElement => {
  const contentRef = useRef(null);
  const sectionsRef = useRef<any[]>([]);
  const [titleIntersectionRatio, setTitleIntersectionRatio] = useState(1);
  const [isTransparentHeader, setIsTransparentHeader] = useState(false);

  const updateDimensions = () => {
    const titlePage = document.querySelector("#intro-section");

    if (titlePage) {
      (titlePage as HTMLElement).style.minHeight = window.innerHeight + "px";
    }
  };

  const refCallback = useCallback((element: any) => {
    if (element) {
      sectionsRef.current.push(element);
    }
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    const observer = new IntersectionObserver(
      (entries) => {
        const sectionIds = sectionsRef.current.map((section: any) =>
          section.getAttribute("id")
        );
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("id");
            const sectionIndex = sectionIds.indexOf(sectionId);

            if (sectionId !== "intro-section") {
              if (sectionIndex % 2 === 0) {
                entry.target.classList.add("fadeInLeft");
              } else {
                entry.target.classList.add("fadeInRight");
              }
            } else {
              setTitleIntersectionRatio(entry.intersectionRatio);
            }
          }
        });
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
    );
    sectionsRef.current.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const workExpList = experiences.filter(exp => exp.type === "experience")
  const eduExpList = experiences.filter(exp => exp.type === "education")

  return (
    <>
      <div className="pages-wrapper">
        <Header isTransparent={isTransparentHeader} isMobile logo={site.logo} />
        <div id="site-content" ref={contentRef}>
          <IntroSection isMobile siteData={site} />
          <AboutSection refCallback={refCallback} aboutText={site.about?.text ?? ""} skillList={skills} />
          <ExperienceSection refCallback={refCallback} workExpList={workExpList} educationList={eduExpList} />
          <ShowcaseSection refCallback={refCallback} projectList={projects} />
        </div>
        <div id="end-section">

          <CustomBackground icon="plus" fontSize={18} isInteractive={false} />
          <ContactSection refCallback={refCallback} socialData={socials} />

          <Footer isMobile={isMobile} footerText={site.footerText} />
        </div>
      </div>
    </>
  );
}

const WebsiteWrapper = (props: WebsiteWrapperProps): ReactElement => {
  const [isMobile, setIsMobile] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  // Create a function to update the screen width
  const updateScreenWidth = () => {
    const isMobileMode = window.innerWidth <= 599;
    setIsMobile(isMobileMode);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);
    updateScreenWidth();

    // Clean up the event listener when the component unmounts
    // Cleanup: Disconnect the observer when the component unmounts
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);


  return (
    <div style={{ overflowY: showLoader ? 'hidden' : 'auto', height: showLoader ? '100vh' : '100%' }}>
      {showLoader && <WelcomeLoader onClose={() => setShowLoader(false)} />}
      <WebsiteContent isMobile={isMobile} {...props} />
    </div>
  )
};

export default WebsiteWrapper;
