import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { ReactElement, useState } from "react";
import "./index.css";

const NavItems = [
  {
    label: "about",
    route: "#about-section",
  },
  {
    label: "experience",
    route: "#experience-section",
  },
  {
    label: "showcase",
    route: "#showcase-section",
  },
  {
    label: "contact",
    route: "#contact-section",
  },
];

type NavProps = {
  handleNavClick: (route: string) => void;
};

const Nav = ({ handleNavClick }: NavProps): ReactElement => {
  const [isMobleMenuExpanded, setIsMobileMenuExpanded] = useState(false);

  return (
    <nav>
      <div id="nav-landscape">
        {NavItems.map((item, index) => (
          <div
            className="nav-item"
            key={`nav-item-${item.label}`}
            onClick={() => {
              handleNavClick(item.route);
            }}
          >
            {item.label}
          </div>
        ))}
      </div>

      <div id="nav-mobile">
        <div
          id="nav-expand-button"
          className={`${isMobleMenuExpanded ? "close" : ""}`}
          onClick={() => setIsMobileMenuExpanded(!isMobleMenuExpanded)}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>

        {isMobleMenuExpanded && (
          <div id="mobile-nav-container">
            <div id="mobile-nav-wrapper">
              <div id="mobile-nav-header">
                <div
                  id="mobile-nav-header-logo-container"
                  onClick={() => {
                    handleNavClick("#intro-section");
                    setIsMobileMenuExpanded(false);
                  }}
                >
                  <Image
                    src="/imgs/web_logo.png"
                    height={50}
                    width={50}
                    alt="logo"
                  />
                </div>

                <div
                  id="mobile-nav-header-close-button"
                  onClick={() => setIsMobileMenuExpanded(false)}
                >
                  <FontAwesomeIcon icon={faXmark} />
                </div>
              </div>
              <div id="mobile-nav-body">
                {NavItems.map((item, index) => (
                  <div
                    className="nav-item"
                    key={`nav-item-${item.label}`}
                    onClick={() => {
                      handleNavClick(item.route);
                      setIsMobileMenuExpanded(false);
                    }}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
