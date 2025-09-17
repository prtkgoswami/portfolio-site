import Image from "next/image";
import { ReactElement, useState } from "react";
import Nav from "./Nav";
import "./index.css";
import { SanityImage } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";

type HeaderProps = {
  isTransparent: boolean;
  isMobile: boolean;
  logo?: SanityImage;
};

const Header = ({
  isTransparent = false,
  isMobile,
  logo
}: HeaderProps): ReactElement => {
  const [isLightMode, setIsLightMode] = useState(false);

  const handleLightModeClick = () => {
    setIsLightMode(!isLightMode);
  };

  const handleNavClick = (route: string): void => {
    const target = document.querySelector(route);
    if (!target) return;

    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition =
      elementPosition + window.scrollY - (isMobile ? 80 : 0);

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    return;
  };

  return (
    <header className={`${isTransparent ? "transparent" : ""}`}>
      {logo ?
        <div
          id="header-logo-container"
          onClick={() => handleNavClick("#intro-section")}
        >
          <Image src={urlFor(logo).url()} height={50} width={50} alt={logo.alt ?? ''} />
        </div> :
        <div></div>}
      <div id="header-actions">
        <Nav handleNavClick={handleNavClick} />
      </div>
    </header>
  );
};

export default Header;
