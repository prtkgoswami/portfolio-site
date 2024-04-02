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

type WebsiteWrapperProps = {
  isMobile: boolean;
};

const WebsiteWrapper = ({ isMobile }: WebsiteWrapperProps): ReactElement => {
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

  return (
    <>
      <div className="pages-wrapper">
        <Header isTransparent={isTransparentHeader} isMobile />
        <div id="site-content" ref={contentRef}>
          <IntroSection isMobile />
          <AboutSection refCallback={refCallback} />
          <ExperienceSection refCallback={refCallback} />
          <ShowcaseSection refCallback={refCallback} />
        </div>
        <div id="end-section">
          <CustomBackground
            dotIcon={faPlus}
            dotSize="xs"
            isAlternateColoring={true}
          />
          <ContactSection refCallback={refCallback} />

          <Footer isMobile={isMobile} />
        </div>
      </div>
    </>
  );
};

export default WebsiteWrapper;
