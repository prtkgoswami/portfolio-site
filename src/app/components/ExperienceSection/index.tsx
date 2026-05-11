import { client as sanityClient } from "@sanity/lib/client";
import { Experience } from "@sanity/types";
import { EXPERIENCE_QUERY } from "@/sanity/queries";
import ExperienceContent from "./ExperienceContent";
import "./index.css";

async function ExperienceSection() {
  const experiences: Experience[] = await sanityClient.fetch(EXPERIENCE_QUERY);
  const workExpList = experiences.filter((exp) => exp.type === "experience");
  const eduExpList = experiences.filter((exp) => exp.type === "education");

  return (
    <ExperienceContent workExpList={workExpList} educationList={eduExpList} />
  );
}

export default ExperienceSection;
