export type AnalyticsPayload = Record<
  string,
  string | number | boolean | undefined
>;

declare global {
  interface Window {
    umami?: { track: (name: string, payload?: AnalyticsPayload) => void };
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID =
  (typeof import.meta !== "undefined" &&
    import.meta.env?.VITE_GA_MEASUREMENT_ID) ||
  "G-TPGLL2KVKF";

let gaInitialized = false;

export function initGoogleAnalytics(measurementId: string = GA_MEASUREMENT_ID) {
  if (typeof window === "undefined" || !measurementId || gaInitialized) {
    return;
  }

  // Inicializa dataLayer e função gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer?.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    send_page_view: false, // SPA envia page_view a cada troca de rota
  });

  // Carrega a biblioteca gtag.js do Google
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  gaInitialized = true;
}

export function trackPageView(path: string, title?: string) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      page_path: path,
      page_title: title || document.title,
      page_location: window.location.href,
    });
  }
}

export function trackEvent(name: string, payload?: AnalyticsPayload) {
  if (typeof window === "undefined") return;

  // Umami (caso configurado)
  window.umami?.track(name, payload);

  // Google Analytics 4
  if (typeof window.gtag === "function") {
    window.gtag("event", name, payload);

    // Mapeia eventos de contato/WhatsApp como conversão padrão de lead do GA4
    if (
      name === "whatsapp_clicked" ||
      name === "quote_route_redirected_to_whatsapp" ||
      name === "service_contact_clicked" ||
      name === "service_footer_contact_clicked" ||
      name === "process_cta_clicked"
    ) {
      let storedSource = "direct";
      try {
        storedSource = sessionStorage.getItem("st_lead_source") || "direct";
      } catch {
        // ignore
      }

      window.gtag("event", "generate_lead", {
        event_category: "lead",
        lead_source: payload?.source ? String(payload.source) : name,
        lead_channel: storedSource,
        ...payload,
      });
    }
  }
}
