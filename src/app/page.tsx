"use client";
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
import WebsiteWrapper from "./components/WebsiteWrapper";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  // Create a function to update the screen width
  const updateScreenWidth = () => {
    const isMobileMode = window.innerWidth <= 599;
    setIsMobile(isMobileMode);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);
    updateScreenWidth();

    // Clean up the event listener when the component unmounts
    // Cleanup: Disconnect the observer when the component unmounts
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  return (
    <main className={montserrat.variable}>
      <WebsiteWrapper isMobile={isMobile} />
    </main>
  );
}
