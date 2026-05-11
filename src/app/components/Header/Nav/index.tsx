"use client";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement, useEffect, useState } from "react";
import "./index.css";

const NavItems = [
  { label: "about", route: "#about-section" },
  { label: "experience", route: "#experience-section" },
  { label: "showcase", route: "#showcase-section" },
  { label: "articles", route: "#article-section" },
  { label: "contact", route: "#contact-section" },
];

type NavProps = {
  handleNavClick: (e: React.MouseEvent, route: string) => void;
};

const Nav = ({ handleNavClick }: NavProps): ReactElement => {
  const [isMobileMenuExpanded, setIsMobileMenuExpanded] = useState(false);

  useEffect(() => {
    if (isMobileMenuExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup: very important if the user navigates away while the menu is open
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuExpanded]);

  return (
    <nav aria-label="Main Navigation">
      {/* Desktop Navigation */}
      <ul id="nav-landscape" style={{ listStyle: "none" }}>
        {NavItems.map((item) => (
          <li key={`nav-item-${item.label}`}>
            <a
              href={item.route}
              className="nav-item"
              onClick={(e) => handleNavClick(e, item.route)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div id="nav-mobile">
        <button
          id="nav-expand-button"
          aria-expanded={isMobileMenuExpanded}
          aria-controls="mobile-nav-container"
          aria-label="Toggle menu"
          className={`${isMobileMenuExpanded ? "close" : ""}`}
          onClick={() => setIsMobileMenuExpanded((prev) => !prev)}
        >
          <FontAwesomeIcon icon={isMobileMenuExpanded ? faXmark : faBars} />
        </button>

        {isMobileMenuExpanded && (
          <div id="mobile-nav-container" role="dialog" aria-modal="true">
            <div id="mobile-nav-wrapper">
              <div id="mobile-nav-header">
                <button
                  id="mobile-nav-close-button"
                  aria-controls="mobile-nav-container"
                  aria-label="Close menu"
                  onClick={() => setIsMobileMenuExpanded(false)}
                >
                  <FontAwesomeIcon icon={faXmark}/>
                </button>
              </div>
              <div id="mobile-nav-body">
                <ul style={{ listStyle: "none" }}>
                  {NavItems.map((item) => (
                    <li key={`mobile-nav-item-${item.label}`}>
                      <a
                        href={item.route}
                        className="nav-item"
                        onClick={(e) => {
                          handleNavClick(e, item.route);
                          setIsMobileMenuExpanded(false);
                        }}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
