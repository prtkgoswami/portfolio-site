import React, {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
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
  const contentRef = useRef(null);
  const sectionsRef = useRef<any[]>([]);
  const [titleIntersectionRatio, setTitleIntersectionRatio] = useState(1);

  const updateDimensions = () => {
    const titlePage = document.querySelector("#title-section");

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

            if (sectionId !== "title-section") {
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
      // { threshold: [0, 0.25, 0.5, 0.75, 1] }
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

  return (
    <>
      <div className="pages-wrapper">
        <div id="bg-particles">
          <BGParticles />
        </div>
        <div id="content" ref={contentRef}>
          <TitleSection
            refCallback={refCallback}
            intersectionRatio={titleIntersectionRatio}
          />
          <ToolboxSection refCallback={refCallback} />
          <ExperienceSection refCallback={refCallback} />
          <ShowcaseSection isMobile={isMobile} refCallback={refCallback} />
          <ContactSection refCallback={refCallback} />
        </div>
        <FooterSection isMobile={isMobile} />
      </div>
    </>
  );
};

export default WebsiteWrapper;
