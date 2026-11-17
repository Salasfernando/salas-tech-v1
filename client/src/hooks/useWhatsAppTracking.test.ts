import { describe, expect, it } from "vitest";
import {
  buildWhatsAppLink,
  resolveLeadSource,
  SALAS_TECH_PHONE,
  DEFAULT_WHATSAPP_MESSAGE,
} from "./useWhatsAppTracking";

describe("useWhatsAppTracking", () => {
  describe("default constants", () => {
    it("has the official Salas Tech phone number", () => {
      expect(SALAS_TECH_PHONE).toBe("5561981033420");
    });

    it("has the default message defined", () => {
      expect(DEFAULT_WHATSAPP_MESSAGE).toBe(
        "Olá! Gostaria de saber mais sobre as soluções da Salas Tech.",
      );
    });
  });

  describe("resolveLeadSource", () => {
    it("returns 'site' when there are no UTMs, gclid or referrer", () => {
      expect(resolveLeadSource("", "")).toBe("site");
    });

    it("identifies google via gclid", () => {
      expect(resolveLeadSource("?gclid=test12345", "")).toBe("google");
    });

    it("identifies google via utm_source=google", () => {
      expect(resolveLeadSource("?utm_source=google", "")).toBe("google");
    });

    it("identifies google via utm_source=google_ads", () => {
      expect(resolveLeadSource("?utm_source=google_ads", "")).toBe("google");
    });

    it("identifies google via referrer containing google.", () => {
      expect(resolveLeadSource("", "https://www.google.com/")).toBe("google");
    });

    it("does not override custom utm_source with google referrer", () => {
      expect(
        resolveLeadSource("?utm_source=custom", "https://www.google.com/"),
      ).toBe("site");
    });

    it("identifies meta via utm_source=instagram", () => {
      expect(resolveLeadSource("?utm_source=instagram", "")).toBe("meta");
    });

    it("identifies meta via utm_source=facebook", () => {
      expect(resolveLeadSource("?utm_source=facebook", "")).toBe("meta");
    });

    it("identifies meta via utm_source=meta", () => {
      expect(resolveLeadSource("?utm_source=meta", "")).toBe("meta");
    });

    it("recovers previous source from sessionStorage when available", () => {
      expect(resolveLeadSource("", "", "google")).toBe("google");
      expect(resolveLeadSource("", "", "meta")).toBe("meta");
    });

    it("prioritizes new campaign source over stored source", () => {
      expect(resolveLeadSource("?utm_source=meta", "", "google")).toBe("meta");
    });
  });

  describe("buildWhatsAppLink", () => {
    it("builds link without tag when source is site", () => {
      const link = buildWhatsAppLink(SALAS_TECH_PHONE, "Olá mundo", "site");
      expect(link).toBe(
        `https://wa.me/5561981033420?text=${encodeURIComponent("Olá mundo")}`,
      );
      expect(link).not.toContain("origem");
    });

    it("appends [origem:google] when source is google", () => {
      const link = buildWhatsAppLink(SALAS_TECH_PHONE, "Olá mundo", "google");
      expect(link).toBe(
        `https://wa.me/5561981033420?text=${encodeURIComponent("Olá mundo [origem:google]")}`,
      );
    });

    it("appends [origem:meta] when source is meta", () => {
      const link = buildWhatsAppLink(SALAS_TECH_PHONE, "Olá mundo", "meta");
      expect(link).toBe(
        `https://wa.me/5561981033420?text=${encodeURIComponent("Olá mundo [origem:meta]")}`,
      );
    });
  });
});
