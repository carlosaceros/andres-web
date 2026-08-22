// GA4 & Google Ads Event Tracking Helper

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = 'G-C6CGECM6ED';
export const GOOGLE_ADS_ID = 'AW-18045573652';

export function trackEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      window.gtag('event', eventName, {
        ...params,
        send_to: GA_MEASUREMENT_ID,
      });
      window.gtag('event', eventName, params);
    } catch (err) {
      console.error('Error tracking GA event:', err);
    }
  }
}
