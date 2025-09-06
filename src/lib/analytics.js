// src/lib/analytics.js
export function trackPageView(path) {
  const GA_ID = import.meta.env.VITE_GA_ID;
  if (!GA_ID) return;
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('config', GA_ID, {
    page_path: path,
  });
}

export function trackEvent(action, params = {}) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', action, params);
}