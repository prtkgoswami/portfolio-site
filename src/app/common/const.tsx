import {
  faCodepen,
  faFacebook,
  faFacebookF,
  faGithub,
  faInstagram,
  faItchIo,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { ReactElement } from "react";

export const SOCIAL_LINKS = [
  {
    name: "Github",
    url: "",
    icon: faGithub,
    background: "",
  },
  {
    name: "CodePen",
    url: "",
    icon: faCodepen,
    background: "",
  },
  {
    name: "LinkedIn",
    url: "",
    icon: faLinkedinIn,
    background: "",
  },
  {
    name: "Instagram",
    url: "",
    icon: faInstagram,
    background: "",
  },
  {
    name: "Facebook",
    url: "",
    icon: faFacebook,
    background: "",
  },
  {
    name: "Itch IO",
    url: "",
    icon: faItchIo,
    background: "",
  },
];

export type Skill = {
  name: string;
  icon: string;
};

export const SKILL_LIST: Skill[] = [
  { name: "HTML", icon: "/skill_logo_html.svg" },
  { name: "CSS", icon: "/skill_logo_css.svg" },
  { name: "JavaScript", icon: "/skill_logo_javascript.svg" },
  { name: "TypeScript", icon: "/skill_logo_typescript.svg" },
  { name: "React.js", icon: "/skill_logo_reactjs.svg" },
  { name: "Next.js", icon: "/skill_logo_nextjs.svg" },
  { name: "Node.js", icon: "/skill_logo_nodejs.svg" },
  { name: "Django", icon: "/skill_logo_django.svg" },
  { name: "MySQL", icon: "/skill_logo_mysql.svg" },
  { name: "C++", icon: "/skill_logo_cpp.svg" },
  { name: "Python", icon: "/skill_logo_python.svg" },
  { name: "C#", icon: "/skill_logo_csharp.svg" },
  { name: "Visual Studio", icon: "/skill_logo_vs.svg" },
  { name: "Visual Studio Code", icon: "/skill_logo_vsc.svg" },
  { name: "Adobe Photoshop", icon: "/skill_logo_photoshop.svg" },
  { name: "Figma", icon: "/skill_logo_figma.svg" },
  { name: "Trello", icon: "/skill_logo_trello.svg" },
  { name: "Jira", icon: "/skill_logo_jira.svg" },
  { name: "Postman", icon: "/skill_logo_postman.svg" },
  { name: "Git", icon: "/skill_logo_git.svg" },
  { name: "Windows", icon: "/skill_logo_windows.svg" },
  { name: "Linux", icon: "/skill_logo_linux.svg" },
];

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
  {
    orgName: "University of Washington Bothell",
    startYear: "2019",
    endYear: "2022",
    role: "Masters Student",
    responsibilities: [
      "Developed and maintained scalable web applications using modern technologies such as React and Node.js.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions within tight deadlines.",
      "Participated in code reviews, providing constructive feedback and ensuring code quality standards.",
      "Implemented new features and enhancements, contributing to a 20% increase in user engagement.",
      "Troubleshooted and resolved software defects, improving overall system stability.",
      "Mentored junior developers and facilitated knowledge sharing sessions within the team.",
    ],
    achievements: [
      "Led the successful migration of a legacy system to a microservices architecture, resulting in improved performance and maintainability.",
      "Received Employee of the Month award for outstanding contributions to a critical project.",
      "Implemented automated testing processes, reducing the number of bugs by 30%.",
    ],
    imgSrc: "/uw_logo.png",
    bannerColor: "#4b2d83",
  },
  {
    orgName: "TikTok",
    startYear: "2022",
    endYear: "Present",
    role: "Software Engineer",
    responsibilities: [
      "Developed and maintained scalable web applications using modern technologies such as React and Node.js.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions within tight deadlines.",
      "Participated in code reviews, providing constructive feedback and ensuring code quality standards.",
      "Implemented new features and enhancements, contributing to a 20% increase in user engagement.",
      "Troubleshooted and resolved software defects, improving overall system stability.",
      "Mentored junior developers and facilitated knowledge sharing sessions within the team.",
    ],
    achievements: [
      "Led the successful migration of a legacy system to a microservices architecture, resulting in improved performance and maintainability.",
      "Received Employee of the Month award for outstanding contributions to a critical project.",
      "Implemented automated testing processes, reducing the number of bugs by 30%.",
    ],
    imgSrc: "/tiktok_logo.jpg",
    bannerColor: "#ffffff",
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
      desktop: "/screenshot-tesla-clone-desktop.png",
      mobile: "/screenshot-tesla-clone-mobile.png",
    },
    fit: "object-fill",
    desc: "Explore a meticulously crafted replica of Tesla's sleek and modern website, brought to life using cutting-edge technologies. This project showcases my expertise in frontend development, utilizing NextJS for a seamless and performant user experience, TypeScript for enhanced code quality and maintainability, and Tailwind CSS for a responsive and visually stunning design.",
    tech: ["Next JS", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    name: "Netflix Clone",
    title: "A Front-end Clone of the Netflix Homepage",
    liveUrl: "https://netflix-clone-98ee0.web.app/",
    sourceUrl: "https://github.com/prtkgoswami/react-nextflix-clone",
    imgSrc: { desktop: "/screenshot-netflix-clone-desktop.png", mobile: "" },
    fit: "object-fill",
    desc: "Step into the world of entertainment with my Netflix Landing Page Clone, a captivating recreation of the popular streaming platform's homepage. This project showcases my proficiency in frontend development, employing ReactJS for a dynamic and interactive user interface, JavaScript for functionality, and CSS for a polished and responsive design.",
    tech: ["React JS", "JavaScript", "CSS", "Firebase"],
  },
  {
    name: "Senku Cola",
    title: "A Product Page for a Fictional Soda",
    liveUrl: "https://senku-cola.vercel.app/",
    sourceUrl: "https://github.com/prtkgoswami/senku-cola",
    imgSrc: {
      desktop: "/screenshot-senku-cola-desktop.png",
      mobile: "/screenshot-senku-cola-mobile.png",
    },
    fit: "object-fill",
    desc: "Embark on a journey into the world of anime with my Cola Product Page, inspired by the iconic beverage featured in Doctor Stone. This project represents a fusion of my passion for anime, frontend development expertise, and creative design. Crafted with NextJS, TypeScript, and Tailwind CSS, the product page offers a visually immersive and technically sophisticated experience.",
    tech: ["Next JS", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    name: "Pixel",
    title: "A canvas for your pixel creations",
    liveUrl: "https://pixel-art-canvas.vercel.app/",
    sourceUrl: "https://github.com/prtkgoswami/pixel-art-canvas",
    imgSrc: { desktop: "/screenshot-pixel-art-canvas-desktop.png", mobile: "" },
    fit: "object-fill",
    desc: "Unleash your creativity with the Pixel Art Canvas, a dynamic web application designed to empower users to create mesmerizing pixel artworks. Developed using NextJS, TypeScript, and Tailwind CSS, this project combines cutting-edge technology with a user-friendly interface to provide a unique and immersive canvas for digital artistry.",
    tech: ["Next JS", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    name: "Roshambo",
    title: "Where quick decisions meet endless fun",
    liveUrl: "https://roshambo-prtkg.vercel.app/",
    sourceUrl: "https://github.com/prtkgoswami/roshambo",
    imgSrc: {
      desktop: "/screenshot-roshambo-desktop.png",
      mobile: "/screenshot-roshambo-mobile.png",
    },
    fit: "object-fill",
    desc: "Experience the classic game of Rock, Paper, Scissors like never before with my web app that adds a touch of geeky fun inspired by The Big Bang Theory. Developed using NextJS, TypeScript, and Tailwind CSS, this project invites users to engage in a playful battle of wits, with a hidden surprise inspired by the beloved sitcom.",
    tech: ["Next JS", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    name: "Repository",
    title: "Online Repository",
    liveUrl: "https://prtk-repo.vercel.app/",
    sourceUrl: undefined,
    imgSrc: {
      desktop: "/screenshot-prtk-repo-desktop.png",
      mobile: "/screenshot-prtk-repo-mobile.png",
    },
    fit: "object-fill",
    desc: "Explore a curated collection of my diverse projects gathered in one centralized hub - the Project Showcase. This web repository, built using Next JS, TypeScript, and Tailwind CSS, serves as a comprehensive gallery, providing an in-depth look at my varied works and achievements.",
    tech: ["Next JS", "TypeScript", "Tailwind CSS", "Vercel"],
  },
];
