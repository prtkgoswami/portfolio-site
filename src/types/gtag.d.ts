// types/gtag.d.ts
export {};

declare global {
  interface Window {
    gtag: (
      command: 'event' | 'config' | 'js',
      targetId: string,
      config?: ControlParams | EventParams | CustomParams
    ) => void;
    dataLayer: any[];
  }
}