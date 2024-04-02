import {
  faMobileScreenButton,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import CustomBackground from "../CustomBackground";
import MailForm from "./MailForm";
import SocialMediaSection from "./SocialMediaSection";
import "./index.css";

type ContactSectionProps = {
  refCallback: any;
};

const ContactSection = ({
  refCallback,
}: ContactSectionProps): React.ReactElement => {
  return (
    <div id="contact-section" className="pages" ref={refCallback}>
      <div className="section-content">
        <div className="section-title">Let&apos;s Connect</div>
        <div className="contacts-wrapper">
          <SocialMediaSection />
          <MailForm />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
