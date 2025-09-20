"use client";

import { useEffect, useRef } from "react";

const SECTIONS = [
    "intro-section",
    "about-section",
    "experience-section",
    "showcase-section",
    "contact-section"
];

export default function SectionTracker({ measurementId }: { measurementId: string }) {
    const activeSection = useRef<string | null>(null);
    const enterTime = useRef<number | null>(null);

    useEffect(() => {
        if (!measurementId) return;

        const gtag = (window as any).gtag;

        const sendSectionView = (sectionId: string) => {
            gtag?.("event", "section_view", {
                section: sectionId,
            });
        };

        const sendTimeSpent = (sectionId: string, duration: number) => {
            gtag?.("event", "section_time_spent", {
                section: sectionId,
                duration_seconds: Math.round(duration / 1000),
            });
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const sectionId = entry.target.id;

                    if (entry.isIntersecting) {
                        // User entered a section
                        activeSection.current = sectionId;
                        enterTime.current = Date.now();
                        sendSectionView(sectionId);
                    } else if (activeSection.current === sectionId && enterTime.current) {
                        // User left the section → calculate time spent
                        const duration = Date.now() - enterTime.current;
                        sendTimeSpent(sectionId, duration);
                        activeSection.current = null;
                        enterTime.current = null;
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of a section is visible
        );

        SECTIONS.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        // Cleanup
        return () => observer.disconnect();
    }, [measurementId]);

    return null;
}
