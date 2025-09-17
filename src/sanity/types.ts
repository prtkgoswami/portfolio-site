export interface SanityImage {
  asset: {
    url: string;
  };
  alt?: string;
}

export interface SanityFile {
  _type: "file";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface SiteConfig {
  title: string;
  subTitle?: string | null;
  about?: {
    text: string;
  };
  logo?: SanityImage;
  cv?: SanityFile;
  footerText?: string;
}

export interface Project {
  _id: string;
  title: string;
  desc?: string;
  image?: SanityImage;
  liveLink?: string;
  repoLink?: string;
  techStack: string[];
  category?: string;
}

export interface Experience {
  _id: string;
  organization: string;
  position: string;
  type: "experience" | "education";
  from: string;
  to?: string;
  desc?: string[];
  isCurrent: boolean;
}

export interface Skill {
  title: string;      // e.g. "Frontend", "Backend"
  skills: string[];   // e.g. ["HTML", "CSS", "JavaScript"]
}


export interface Social {
  title: string; // e.g. "Github"
  url: string;   // external link
}

export interface Rule {
  required(): Rule;
  min(limit: number): Rule;
  max(limit: number): Rule;
  regex(pattern: RegExp, options?: { name?: string; invert?: boolean }): Rule;
  custom<T>(fn: (value: T) => true | string): Rule;
}

