import {
  faCodepen,
  faFacebook,
  faGithub,
  faInstagram,
  faItchIo,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

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

export const SKILLS_LIST = {
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.JS",
    "Next.JS",
    "Tailwind CSS",
    "Redux",
  ],
  backend: ["Node.JS", "Express.JS", "Django", "MySQL"],
  programming: ["C++", "Python", "C#"],
  "cloud services": ["Vercel", "Heroku"],
  tools: [
    "Git",
    "Visual Studio",
    "Visual Studio Code",
    "Trello",
    "Jira",
    "Postman",
    "Soap UI",
    "Unity",
  ],
};

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

export const EXPERIENCE_LIST: Experience[] = [
  {
    orgName: "TikTok",
    startYear: "2022",
    endYear: "Present",
    role: "Software Engineer",
    responsibilities: [
      "Develop and maintain scalable web applications using modern technologies such as React.js, Redux and Node.js",
      "Collaborate with cross-functional teams to deliver high-quality software solutions within tight deadlines",
      "Participate in code reviews, providing constructive feedback and ensuring code quality standards",
      "Troubleshoot and resolve software defects, improving overall system stability adn performance",
    ],
    achievements: [],
    imgSrc: "/tiktok_logo.jpg",
    bannerColor: "#ffffff",
  },
  {
    orgName: "IBM",
    startYear: "2016",
    endYear: "2019",
    role: "Application Developer",
    responsibilities: [
      "Developed & maintained over 15 integrations pertaining to SIM activation and customer reward functionality.",
      "Spearheaded the development of a solution to Automate Builds and Deploy executables using Jenkins, Soap UI, Apache Ant Scripts & Bash Scripts to improve deployment time by approximately 30 minutes.",
      "Oversaw the migration of over 30 integrations for Phase 1 of Production Server Version Upgrade.",
    ],
    achievements: [
      "Led the successful migration of a legacy system to a new Server Version, resulting in improved performance and maintainability.",
      "Received recognition from other teams for my Automation Solution to Build and Deploy deliverables",
      "Implemented automated build and deployment pipeline, reducing the deployment time by 30 mins",
    ],
    imgSrc: "/ibm_logo.svg",
    bannerColor: "#000000",
  },
];

export const EDUCATION_LIST: Experience[] = [
  {
    orgName: "University of Washington Bothell",
    startYear: "2019",
    endYear: "2022",
    role: "Masters Student",
    responsibilities: [
      "Developed a Virtual Reality based Vision Therapy application for individuals with Strabismus",
      "Collaborated with the therapists at the EYE See Clinic to learn the current therapy concepts and translate it to the digital environment",
      "Collaborated with Clinicians and used Patient Feedback to improve and add features to the application",
      "Created operation manuals and conducted workshops to train the therapists on the operation of the application",
      "Conducted a study to test the efficacy of the application to be used as a therapy device for patients with Strabismus",
      "Participated in code reviews, providing constructive feedback and ensuring code quality standards.",
    ],
    achievements: [
      "Successfully presented the study using the VR application to the UW IRB board and received the approval to conduct the study",
    ],
    imgSrc: "/uw_logo.png",
    bannerColor: "#4b2d83",
  },
  {
    orgName: "Techno India, Saltlake",
    startYear: "2012",
    endYear: "2016",
    role: "Bachelors Student",
    responsibilities: [
      "Organized Coding and Web Development workshops to educate classmates and juniors",
      "Conducted Web Development competitions as part of the technical college fest",
    ],
    achievements: [
      "Selected as the Microsoft Student Partner from my university",
      "Participated and won the Web Development competitions at college fests in Kolkata",
    ],
    imgSrc: "",
    bannerColor: "",
  },
];

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

export const PROJECT_DETAILS: Project[] = [
  {
    name: "Tesla Clone",
    title: "A Front-end Clone of the Tesla Homepage",
    liveUrl: "https://tesla-clone-prtkgoswami.vercel.app/",
    sourceUrl: "https://github.com/prtkgoswami/tesla-clone",
    imgSrc: {
      desktop: "/imgs/screenshot-tesla-clone-desktop.png",
      mobile: "/imgs/screenshot-tesla-clone-mobile.png",
    },
    fit: "object-fill",
    desc: "Explore a meticulously crafted replica of Tesla's sleek and modern website, brought to life using cutting-edge technologies.",
    tech: ["Next JS", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    name: "Netflix Clone",
    title: "A Front-end Clone of the Netflix Homepage",
    liveUrl: "https://netflix-clone-98ee0.web.app/",
    sourceUrl: "https://github.com/prtkgoswami/react-nextflix-clone",
    imgSrc: {
      desktop: "/imgs/screenshot-netflix-clone-desktop.png",
      mobile: "",
    },
    fit: "object-fill",
    desc: "Step into the world of entertainment with my Netflix Landing Page Clone, a captivating recreation of the popular streaming platform's homepage.",
    tech: ["React JS", "JavaScript", "CSS", "Firebase"],
  },
  {
    name: "Senku Cola",
    title: "A Product Page for a Fictional Soda",
    liveUrl: "https://senku-cola.vercel.app/",
    sourceUrl: "https://github.com/prtkgoswami/senku-cola",
    imgSrc: {
      desktop: "/imgs/screenshot-senku-cola-desktop.png",
      mobile: "/imgs/screenshot-senku-cola-mobile.png",
    },
    fit: "object-fill",
    desc: "Embark on a journey into the world of anime with my Cola Product Page, inspired by the iconic beverage featured in Doctor Stone. This project represents a fusion of my passion for anime, frontend development expertise, and creative design.",
    tech: ["Next JS", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    name: "Pixel",
    title: "A canvas for your pixel creations",
    liveUrl: "https://pixel-art-canvas.vercel.app/",
    sourceUrl: "https://github.com/prtkgoswami/pixel-art-canvas",
    imgSrc: {
      desktop: "/imgs/screenshot-pixel-art-canvas-desktop.png",
      mobile: "",
    },
    fit: "object-fill",
    desc: "Unleash your creativity with the Pixel Art Canvas, a dynamic web application designed to empower users to create mesmerizing pixel artworks.",
    tech: ["Next JS", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    name: "Roshambo",
    title: "Where quick decisions meet endless fun",
    liveUrl: "https://roshambo-prtkg.vercel.app/",
    sourceUrl: "https://github.com/prtkgoswami/roshambo",
    imgSrc: {
      desktop: "/imgs/screenshot-roshambo-desktop.png",
      mobile: "/imgs/screenshot-roshambo-mobile.png",
    },
    fit: "object-fill",
    desc: "Experience the classic game of Rock, Paper, Scissors like never before with my web app that adds a touch of geeky fun inspired by The Big Bang Theory.",
    tech: ["Next JS", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    name: "Space Explorer",
    title: "Explore the vastness of the Solar System",
    liveUrl: "https://prtkgoswami.itch.io/space-explorer",
    sourceUrl: "https://github.com/prtkgoswami/space-explorer",
    imgSrc: {
      desktop: "/imgs/screenshot-space-explorer.png",
      mobile: "",
    },
    fit: "object-fill",
    desc: "Experience the classic game of Rock, Paper, Scissors like never before with my web app that adds a touch of geeky fun inspired by The Big Bang Theory.",
    tech: ["Unity", "C#"],
  },
  {
    name: "Space Rescue",
    title: "Deliver resources to ensure survival",
    liveUrl: "https://prtkgoswami.itch.io/space-rescue",
    sourceUrl: "https://github.com/prtkgoswami/Space-Rescue",
    imgSrc: {
      desktop: "/imgs/screenshot-space-rescue.png",
      mobile: "",
    },
    fit: "object-fill",
    desc: "Experience the classic game of Rock, Paper, Scissors like never before with my web app that adds a touch of geeky fun inspired by The Big Bang Theory.",
    tech: ["Unity", "C#"],
  },
  {
    name: "Infiltration VR",
    title: "Fulfil dreams of being a spy",
    liveUrl: "https://prtkgoswami.itch.io/infiltration",
    sourceUrl: undefined,
    imgSrc: {
      desktop: "/imgs/screenshot-infiltration-vr.jpg",
      mobile: "",
    },
    fit: "object-fill",
    desc: "Experience the classic game of Rock, Paper, Scissors like never before with my web app that adds a touch of geeky fun inspired by The Big Bang Theory.",
    tech: ["Unity", "C#", "Unity VR"],
  },
];

export const REPOSITORY_URL = "https://prtk-repo.vercel.app/";

export const SOCIAL_LINKS = [
  {
    name: "Github",
    url: "https://github.com/prtkgoswami",
    icon: faGithub,
    background: "",
  },
  {
    name: "CodePen",
    url: "https://codepen.io/prtkgoswami",
    icon: faCodepen,
    background: "",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/prtkgoswami",
    icon: faLinkedinIn,
    background: "",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/prtkgoswami8/",
    icon: faInstagram,
    background: "",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/prtkgoswami",
    icon: faFacebook,
    background: "",
  },
  {
    name: "Itch IO",
    url: "https://prtkgoswami.itch.io/",
    icon: faItchIo,
    background: "",
  },
];
