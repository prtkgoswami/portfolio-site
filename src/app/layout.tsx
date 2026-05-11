import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";
import SectionAnalyics from "./components/SectionAnalytics";
import Script from "next/script";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pratikgoswami.dev"),
  title: {
    default: "Pratik Goswami | Frontend Engineer | Ex-TikTok & Ex-IBM",
    template: "%s | Pratik Goswami",
  },
  description:
    "I am Pratik Goswami, a Frontend Software Engineer with 3+ years of experience specializing in React, Next, JavaScript, TypeScript, and high-performance system design. Passionate about UI architecture and product-led engineering.",
  keywords: [
    "Pratik Goswami",
    "Frontend Engineer",
    "React Developer",
    "TypeScript",
    "JavaScript",
    "Next.js Developer",
    "Software Engineer",
    "Software Engineer India",
  ],
  authors: [{ name: "Pratik Goswami" }],
  openGraph: {
    title: "Pratik Goswami | Frontend Engineer",
    description:
      "Professional portfolio of Pratik Goswami - Frontend Engineer specializing in scalable UI systems.",
    images: ["/page_screenshot.png"],
    url: "https://www.pratikgoswami.dev",
    siteName: "Pratik Goswami Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratik Goswami | Frontend Engineer",
    description:
      "Professional portfolio of Pratik Goswami - Frontend Engineer specializing in scalable UI systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        {children}

        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <GoogleAnalytics
              measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
            />
            <SectionAnalyics
            />
          </>
        )}

        <Script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Pratik Goswami",
              jobTitle: "Frontend Software Engineer",
              url: "https://www.pratikgoswami.dev",
              sameAs: [
                "https://www.linkedin.com/in/prtkgoswami",
                "https://github.com/prtkgoswami",
              ],
              worksFor: [
                {
                  "@type": "Organization",
                  name: "TikTok",
                  sameAs: "https://www.linkedin.com/company/tiktok/",
                },
                {
                  "@type": "Organization",
                  name: "IBM",
                  sameAs: "https://www.linkedin.com/company/ibm/",
                },
              ],
              description:
                "Frontend Engineer specializing in React, TypeScript, and scalable UI systems.",
            }),
          }}
        />
      </body>
    </html>
  );
}
