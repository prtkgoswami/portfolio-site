"use client";
import Script from "next/script";
import { useReportWebVitals } from "next/web-vitals";

export default function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  // Requirement 1: Track Core Web Vitals (FCP, LCP)
  useReportWebVitals((metric) => {
    const { name, value, id } = metric;
    if (name === "FCP" || name === "LCP") {
      window.gtag?.("event", name, {
        value: Math.round(value),
        event_label: id,
        non_interaction: true, // Doesn't affect bounce rate
      });
    }
  });

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
          });

          // Requirement 1: Global Error Tracking
          window.onerror = function(message, source, lineno, colno, error) {
            gtag('event', 'exception', {
              'description': message + ' at ' + source + ':' + lineno,
              'fatal': false
            });
          };
        `}
      </Script>
    </>
  );
}