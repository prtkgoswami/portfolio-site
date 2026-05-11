import MailForm from "./MailForm";
import SocialMediaSection from "./SocialMediaSection";
import { Social } from "@/sanity/types";
import { client as sanityClient } from "@sanity/lib/client";
import { CONTACTS_QUERY } from "@/sanity/queries";
import "./index.css";

const getContactsSchema = (socialData: Social[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "Person",
      name: "Pratik Goswami",
      jobTitle: "Frontend Software Engineer",
      url: "https://www.pratikgoswami.dev/",
      sameAs: socialData.map(({ url }) => url),
    },
  };
};

async function ContactSection() {
  const socialData: Social[] = await sanityClient.fetch(CONTACTS_QUERY);

  return (
    <section id="contact-section" className="pages">
      <div className="section-content">
        <h2 className="section-title">Let&apos;s Connect</h2>
        <div className="contacts-wrapper">
          <SocialMediaSection socialData={socialData} />
          <MailForm />
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getContactsSchema(socialData)),
        }}
      />
    </section>
  );
}

export default ContactSection;
