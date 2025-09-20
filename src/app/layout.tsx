import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";
import SectionAnalyics from "./components/SectionAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pratik Goswami",
  description: "Personal Portfolio Website for Pratik Goswami",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className={inter.className}>
        {children}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
            <SectionAnalyics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
          </>
        )}
      </body>
    </html>
  );
}
