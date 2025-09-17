import { Montserrat } from "next/font/google";
import WebsiteWrapper from "./components/WebsiteWrapper";
import {client as sanityClient} from '@sanity/lib/client'
import { CONTACTS_QUERY, EXPERIENCE_QUERY, PROJECTS_QUERY, SITE_QUERY, SKILLS_QUERY } from "@/sanity/queries";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const revalidate = 3600;

export default async function Home() {
  const [site, projects, experiences, skills, socials] = await Promise.all([
    sanityClient.fetch(SITE_QUERY),
    sanityClient.fetch(PROJECTS_QUERY),
    sanityClient.fetch(EXPERIENCE_QUERY),
    sanityClient.fetch(SKILLS_QUERY),
    sanityClient.fetch(CONTACTS_QUERY),
  ]);

  return (
    <main className={montserrat.variable}>
      <WebsiteWrapper site={site} projects={projects} experiences={experiences} skills={skills} socials={socials} />
    </main>
  );
}
