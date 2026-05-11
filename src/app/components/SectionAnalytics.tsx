"use client";
import { useEffect, useRef } from "react";
import { trackEvent } from "../../lib/gtag";

const SECTIONS = [
  "intro",
  "about",
  "experience",
  "projects",
  "articles",
  "contact",
];

export default function SectionAnalytics() {
  const sectionTimes = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    // Helper to calculate and send time
    const sendTimeSpent = (id: string) => {
      const startTime = sectionTimes.current.get(id);
      if (startTime) {
        const duration = Math.round((Date.now() - startTime) / 1000);
        if (duration > 0) {
          trackEvent("section_dwell", {
            event_category: "engagement",
            event_label: id.replace("-section", ""), // Clean name for reports
            value: duration,
          });
        }
        sectionTimes.current.delete(id);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;

          if (entry.isIntersecting) {
            sectionTimes.current.set(id, Date.now());

            // Requirement 1: Track "Scrolled to End"
            if (id === "contact-section") {
              trackEvent("scroll_to_end", {
                event_category: "engagement",
                event_label: "Footer Reached",
              });
            }
          } else {
            // User left the section
            sendTimeSpent(id);
          }
        });
      },
      { threshold: 0.3 },
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(`${id}-section`);
      if (el) observer.observe(el);
    });

    // Handle Tab Close / Navigation away
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        sectionTimes.current.forEach((_, id) => sendTimeSpent(id));
      }
    };

    window.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null;
}
