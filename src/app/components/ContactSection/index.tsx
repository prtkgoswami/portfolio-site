import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import MailForm from "./MailForm";
import SocialMediaSection from "./SocialMediaSection";
import "./index.css";

type ContactSectionProps = {};

const ContactSection = ({}: ContactSectionProps): React.ReactElement => {
  const pageRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (pageRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            if (pageRef.current) {
              observer.unobserve(pageRef.current);
            }
          }
        },
        { rootMargin: "-300px" }
      );
      return () => {
        if (pageRef.current) {
          observer.observe(pageRef.current);
        }
      };
    }
  }, [pageRef.current]);

  return (
    <div
      id="contact-section"
      className={`pages ${isIntersecting && "fadeInRight"}`}
      ref={pageRef}
    >
      <div className="page-title">
        Let&#8217;s connect...
        <FontAwesomeIcon icon={faMobileScreenButton} className="mobile-icon" />
      </div>
      <div className="section-body">
        <SocialMediaSection />
        {/* <MailForm /> */}
      </div>
    </div>
  );
};

export default ContactSection;
