import MailForm from "./MailForm";
import SocialMediaSection from "./SocialMediaSection";
import {Social} from "@/sanity/types";
import "./index.css";

type ContactSectionProps = {
  refCallback: any;
  socialData: Social[];
};

const ContactSection = ({
  refCallback,
  socialData
}: ContactSectionProps): React.ReactElement => {
  return (
    <div id="contact-section" className="pages" ref={refCallback}>
      <div className="section-content">
        <div className="section-title">Let&apos;s Connect</div>
        <div className="contacts-wrapper">
          <SocialMediaSection socialData={socialData} />
          <div style={{marginBottom: '10px'}}></div>
          <MailForm />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
