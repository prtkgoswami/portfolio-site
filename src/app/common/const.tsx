export const WELCOME_STR = (
  <>
    Welcome to my portfolio!
    <br />
    <br /> I&apos;m a dedicated Software Developer and tech enthusiast,
    specializing in Front-end Development. Here, you&apos;ll find a showcase of
    my projects and skills, aimed at seizing new opportunities in the
    ever-evolving tech landscape. Dive in to discover how I bring creativity and
    functionality together to craft seamless user experiences.
    <br />
    <br />
    Let&apos;s connect and explore the possibilities together.
  </>
);

export const REPOSITORY_URL = "https://repo.pratikgoswami.dev/";

export type Experience = {
  orgName: string;
  startYear: string;
  endYear: string;
  role: string;
  responsibilities: string[];
  achievements: string[];
  imgSrc: string;
  bannerColor: string;
};

export type Project = {
  name: string;
  title: string;
  liveUrl: string;
  sourceUrl: string | undefined;
  imgSrc: {
    desktop: string;
    mobile: string;
  };
  fit: "object-contain" | "object-cover" | "object-fill";
  desc: string;
  tech: string[];
};