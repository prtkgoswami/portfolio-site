import MailForm from "./MailForm";
import SocialMediaSection from "./SocialMediaSection";

type ContactSectionProps = {};

const ContactSection = ({}: ContactSectionProps): React.ReactElement => {
  return (
    <div id="contact-section" className="pages">
      <div className="section-body">
        <SocialMediaSection />
        <MailForm />
      </div>
    </div>
  );
};

export default ContactSection;
