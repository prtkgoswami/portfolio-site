import { groq } from "next-sanity";

// Site settings
export const SITE_QUERY = groq`*[_type=="siteConfig"][0]{
    title,
    subTitle,
    logo,
    cv,
    about,
    footerText
  }
`;

// Projects
export const PROJECTS_QUERY = groq`
  *[_type=="project" && showOnPortfolio == true] | order(order asc, _createdAt desc) {
    title,
    slug,
    image,
    desc,
    techStack,
    liveLink,
    repoLink,
    category
  }
`;

// Experience
export const EXPERIENCE_QUERY = groq`
  *[_type=="experience"] | order(order asc, from desc) {
    organization,
    position,
    from,
    to,
    isCurrent,
    desc,
    logo,
    type
  }
`;

// Skills
export const SKILLS_QUERY = groq`
  *[_type=="skillCategory"] | order(order asc) {
    title,
    skills
  }
`;

// Contacts
export const CONTACTS_QUERY = groq`
  *[_type=="contact"] | order(order asc) {
    title,
    url
  }
`;
