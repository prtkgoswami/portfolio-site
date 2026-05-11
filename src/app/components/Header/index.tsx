import Image from "next/image";
import { useState } from "react";
import Nav from "./Nav";
import { SanityImage } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import "./index.css";

type HeaderProps = {
  isMobile: boolean;
  logo?: SanityImage;
};

function Header({ isMobile, logo }: HeaderProps) {
  const [isLightMode, setIsLightMode] = useState(false);

  const handleLightModeClick = () => {
    setIsLightMode(!isLightMode);
  };

  const handleNavClick = (e: React.MouseEvent, route: string): void => {
    e.preventDefault();
    const target = document.querySelector(route);
    if (!target) return;

    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition =
      elementPosition + window.scrollY - (isMobile ? 80 : 0);

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    window.history.pushState(null, "", route);
  };

  return (
    <header id="page-header" role="banner">
      {logo && (
        <a
          href="#intro-section"
          id="header-logo-container"
          aria-label="Back to home"
          onClick={(e) => handleNavClick(e, "#intro-section")}
        >
          <Image
            src={urlFor(logo).url()}
            height={50}
            width={50}
            alt="Pratik Goswami Logo"
            priority
          />
        </a>
      )}
      <div id="header-actions">
        <Nav handleNavClick={handleNavClick} />
      </div>
    </header>
  );
}

export default Header;
