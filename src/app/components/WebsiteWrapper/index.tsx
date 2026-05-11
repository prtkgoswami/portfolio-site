"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { SiteConfig } from "@/sanity/types";
import "./index.css";

type WebsiteWrapperProps = {
  site: SiteConfig;
  children: ReactNode;
};

function WebsiteWrapper({ site, children }: WebsiteWrapperProps) {
  const [isMobile, setIsMobile] = useState(false);

  // Create a function to update the screen width
  const updateScreenWidth = () => {
    const isMobileMode = window.innerWidth <= 599;
    setIsMobile(isMobileMode);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);
    updateScreenWidth();

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        overflowY: "auto",
        height: "100%",
      }}
    >
      <div className="pages-wrapper">
        <Header isMobile={isMobile} logo={site.logo} />
        <div id="site-content">{children}</div>
        <Footer footerText={site.footerText} />
      </div>
    </div>
  );
}

export default WebsiteWrapper;
