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

export const SKILL_LIST = {
  web: [
    "HTML & CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Django",
    "MySQL",
  ],
  programming: ["C++", "Python", "C#"],
  misc: [
    "Visual Studio",
    "Visual Studio Code",
    "Adobe Photoshop",
    "Figma",
    "Jenkins",
    "Trello",
    "Jira",
    "Postman",
    "Git",
    "Windows",
    "Linux",
  ],
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
    desc: "Description",
    tech: ["Tech"],
  },
  {
    name: "Netflix Clone",
    title: "A Front-end Clone of the Netflix Homepage",
    liveUrl: "https://netflix-clone-98ee0.web.app/",
    sourceUrl: "https://github.com/prtkgoswami/react-nextflix-clone",
    imgSrc: { desktop: "/screenshot-netflix-clone-desktop.png", mobile: "" },
    fit: "object-fill",
    desc: "Description",
    tech: ["Tech"],
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
    desc: "Description",
    tech: ["Tech"],
  },
  {
    name: "Pixel",
    title: "A canvas for your pixel creations",
    liveUrl: "https://pixel-art-canvas.vercel.app/",
    sourceUrl: "https://github.com/prtkgoswami/pixel-art-canvas",
    imgSrc: { desktop: "/screenshot-pixel-art-canvas-desktop.png", mobile: "" },
    fit: "object-fill",
    desc: "Description",
    tech: ["Tech"],
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
    desc: "Description",
    tech: ["Tech"],
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
    desc: "Description",
    tech: ["Tech"],
  },
];
