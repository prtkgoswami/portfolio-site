import React from "react";
import { Montserrat } from "next/font/google";
import WebsiteWrapper from "./components/WebsiteWrapper";
import { client as sanityClient } from "@sanity/lib/client";
import { SITE_QUERY } from "@/sanity/queries";
import { SiteConfig } from "@/sanity/types";
import dynamic from "next/dynamic";

import HeroSection from "./components/HeroSection";
const AboutSection = dynamic(() => import("./components/AboutSection"), {
  loading: () => <p>Loading Skills...</p>,
});
const ExperienceSection = dynamic(() => import("./components/ExperienceSection"), {
  loading: () => <p>Loading Experience...</p>,
});
const ShowcaseSection = dynamic(() => import("./components/ShowcaseSection"), {
  loading: () => <p>Loading Projects...</p>,
});
const ArticleSection = dynamic(() => import("./components/ArticleSection"), {
  loading: () => <p>Loading Articles...</p>,
});
const ContactSection = dynamic(() => import("./components/ContactSection"), {
  loading: () => <p>Loading Socials...</p>,
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const revalidate = 3600;

export default async function Home() {
  const site: SiteConfig = await sanityClient.fetch(SITE_QUERY);

  return (
    <main className={montserrat.variable}>
      <WebsiteWrapper site={site}>
        <HeroSection isMobile={false} siteData={site} />
        <AboutSection aboutText={site.about?.text ?? ""} />
        <ExperienceSection />
        <ShowcaseSection />
        <ArticleSection />
        <div id="end-section">
          <ContactSection />
        </div>
      </WebsiteWrapper>
    </main>
  );
}
