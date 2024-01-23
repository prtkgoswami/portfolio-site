import MailForm from "./MailForm";
import SocialMediaSection from "./SocialMediaSection";

type ContactSectionProps = {};

const ContactSection = ({}: ContactSectionProps): React.ReactElement => {
  return (
    <div id="contact-section" className="pages">
      <div className="page-title">Let&#8217;s connect...</div>
      <div className="section-body">
        <SocialMediaSection />
        <MailForm />
      </div>
    </div>
  );
};

export default ContactSection;
