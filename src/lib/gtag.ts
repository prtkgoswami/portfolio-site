export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

type EventParams = {
  event_category?: string;
  event_label?: string;
  value?: string | number;
  [key: string]: any; // Allows for custom dimensions like "platform"
};

// Reusable event tracker
export const trackEvent = (action: string, params?: EventParams) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, params);
  }
};