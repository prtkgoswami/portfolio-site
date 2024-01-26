import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import MailForm from "./MailForm";
import SocialMediaSection from "./SocialMediaSection";
import "./index.css";

type ContactSectionProps = {
  refCallback: any;
};

const ContactSection = ({
  refCallback,
}: ContactSectionProps): React.ReactElement => {
  const pageRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  return (
    <div id="contact-section" className="pages" ref={refCallback}>
      <div className="page-title">
        Let&#8217;s connect...
        <FontAwesomeIcon icon={faMobileScreenButton} className="mobile-icon" />
      </div>
      <div className="section-body">
        <SocialMediaSection />
        {false && <MailForm />}
      </div>
    </div>
  );
};

export default ContactSection;
