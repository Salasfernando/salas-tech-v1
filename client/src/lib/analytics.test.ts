import { describe, expect, it, beforeEach, vi, afterEach } from "vitest";
import { initGoogleAnalytics, trackEvent, trackPageView } from "./analytics";

describe("analytics (GA4 & Lead Tracking)", () => {
  let originalWindow: unknown;
  let originalDocument: unknown;

  beforeEach(() => {
    originalWindow = (globalThis as any).window;
    originalDocument = (globalThis as any).document;

    const mockScripts: any[] = [];
    (globalThis as any).document = {
      title: "Salas Tech",
      head: {
        appendChild: (el: any) => mockScripts.push(el),
        querySelector: (sel: string) =>
          mockScripts.find((s) => `script[src="${s.src}"]` === sel) || null,
        querySelectorAll: () => mockScripts,
      },
      createElement: () => ({ src: "", async: false }),
    };

    (globalThis as any).window = {
      location: { href: "https://www.salastech.com.br/" },
    };
  });

  afterEach(() => {
    (globalThis as any).window = originalWindow;
    (globalThis as any).document = originalDocument;
  });

  it("safely ignores calls when window is undefined", () => {
    (globalThis as any).window = undefined;
    expect(() => trackEvent("test")).not.toThrow();
    expect(() => trackPageView("/")).not.toThrow();
    expect(() => initGoogleAnalytics("G-TEST")).not.toThrow();
  });

  it("initializes Google Analytics by creating gtag and injecting script", () => {
    initGoogleAnalytics("G-TEST123456");

    expect(typeof (globalThis as any).window.gtag).toBe("function");
    expect(Array.isArray((globalThis as any).window.dataLayer)).toBe(true);

    const script = (globalThis as any).document.head.querySelector(
      'script[src="https://www.googletagmanager.com/gtag/js?id=G-TEST123456"]',
    );
    expect(script).not.toBeNull();
  });

  it("does not inject script if measurement ID is empty", () => {
    initGoogleAnalytics("");
    expect((globalThis as any).document.head.querySelectorAll()).toHaveLength(
      0,
    );
  });

  it("dispatches custom events to gtag", () => {
    const gtagMock = vi.fn();
    (globalThis as any).window.gtag = gtagMock;

    trackEvent("custom_button_click", { button_id: "test" });

    expect(gtagMock).toHaveBeenCalledWith("event", "custom_button_click", {
      button_id: "test",
    });
  });

  it("dispatches both custom event and generate_lead conversion for whatsapp_clicked", () => {
    const gtagMock = vi.fn();
    (globalThis as any).window.gtag = gtagMock;

    trackEvent("whatsapp_clicked", { source: "floating_button" });

    // Custom event
    expect(gtagMock).toHaveBeenCalledWith("event", "whatsapp_clicked", {
      source: "floating_button",
    });

    // Standard GA4 conversion event
    expect(gtagMock).toHaveBeenCalledWith("event", "generate_lead", {
      event_category: "lead",
      lead_channel: "direct",
      lead_source: "floating_button",
      source: "floating_button",
    });
  });

  it("dispatches generate_lead conversion for quote route redirection", () => {
    const gtagMock = vi.fn();
    (globalThis as any).window.gtag = gtagMock;

    trackEvent("quote_route_redirected_to_whatsapp");

    expect(gtagMock).toHaveBeenCalledWith(
      "event",
      "quote_route_redirected_to_whatsapp",
      undefined,
    );
    expect(gtagMock).toHaveBeenCalledWith("event", "generate_lead", {
      event_category: "lead",
      lead_channel: "direct",
      lead_source: "quote_route_redirected_to_whatsapp",
    });
  });

  it("dispatches page_view in trackPageView", () => {
    const gtagMock = vi.fn();
    (globalThis as any).window.gtag = gtagMock;

    trackPageView("/orcamento", "Contato — Salas Tech");

    expect(gtagMock).toHaveBeenCalledWith("event", "page_view", {
      page_path: "/orcamento",
      page_title: "Contato — Salas Tech",
      page_location: "https://www.salastech.com.br/",
    });
  });
});
