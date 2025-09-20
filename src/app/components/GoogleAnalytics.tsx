"use client"

import Script from "next/script";

type GoogleAnalyticsProps = {
    measurementId: string;
}

const GoogleAnalytics = ({ measurementId }: GoogleAnalyticsProps) => {
    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
                strategy="afterInteractive"
            />
            <Script id="ga-setup" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${measurementId}', {
                        page_path: window.location.pathname,
                    });
                `}
            </Script>
        </>
    )
}

export default GoogleAnalytics;