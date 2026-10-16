export type AnalyticsPayload = Record<
  string,
  string | number | boolean | undefined
>;

export function trackEvent(name: string, payload?: AnalyticsPayload) {
  if (typeof window === "undefined") return;
  window.umami?.track(name, payload);
}

declare global {
  interface Window {
    umami?: { track: (name: string, payload?: AnalyticsPayload) => void };
  }
}
