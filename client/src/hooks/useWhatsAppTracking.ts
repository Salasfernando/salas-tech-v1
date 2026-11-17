"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_DEFAULT_MESSAGE, WHATSAPP_PHONE } from "@/lib/contact";

export const SALAS_TECH_PHONE = WHATSAPP_PHONE;
export const DEFAULT_WHATSAPP_MESSAGE = WHATSAPP_DEFAULT_MESSAGE;

export function resolveLeadSource(
  search: string = "",
  referrer: string = "",
  storedSource: string | null = null,
): string {
  const urlParams = new URLSearchParams(search);
  const utmSource = urlParams.get("utm_source")?.toLowerCase();
  const gclid = urlParams.get("gclid");
  const normalizedReferrer = referrer.toLowerCase();

  // Identifica se veio do Google
  let source = "site";
  if (
    gclid ||
    utmSource === "google" ||
    utmSource === "google_ads" ||
    (normalizedReferrer.includes("google.") && !utmSource)
  ) {
    source = "google";
  } else if (
    utmSource === "instagram" ||
    utmSource === "facebook" ||
    utmSource === "meta"
  ) {
    source = "meta";
  }

  if (source === "site" && storedSource && storedSource !== "site") {
    return storedSource;
  }

  return source;
}

export function buildWhatsAppLink(
  phone: string,
  message: string,
  source: string = "site",
): string {
  const tag = source !== "site" ? ` [origem:${source}]` : "";
  return `https://wa.me/${phone}?text=${encodeURIComponent(message + tag)}`;
}

export function useWhatsAppTracking(
  phone: string = WHATSAPP_PHONE, // Telefone da Salas Tech
  defaultMsg: string = WHATSAPP_DEFAULT_MESSAGE,
) {
  const getInitialLink = () => {
    if (typeof window === "undefined") {
      return buildWhatsAppLink(phone, defaultMsg, "site");
    }

    const search = window.location.search;
    const referrer =
      typeof document !== "undefined" ? document.referrer || "" : "";
    let storedSource: string | null = null;
    try {
      storedSource = sessionStorage.getItem("st_lead_source");
    } catch {
      // sessionStorage pode ser inacessível em modo privado estrito
    }

    const source = resolveLeadSource(search, referrer, storedSource);

    try {
      if (source !== "site") {
        sessionStorage.setItem("st_lead_source", source);
      }
    } catch {
      // ignore
    }

    return buildWhatsAppLink(phone, defaultMsg, source);
  };

  const [waLink, setWaLink] = useState<string>(getInitialLink);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get("utm_source")?.toLowerCase();
    const gclid = urlParams.get("gclid");
    const referrer = document.referrer?.toLowerCase() || "";

    // Identifica se veio do Google
    let source = "site";
    if (
      gclid ||
      utmSource === "google" ||
      utmSource === "google_ads" ||
      (referrer.includes("google.") && !utmSource)
    ) {
      source = "google";
    } else if (
      utmSource === "instagram" ||
      utmSource === "facebook" ||
      utmSource === "meta"
    ) {
      source = "meta";
    }

    try {
      if (source !== "site") {
        sessionStorage.setItem("st_lead_source", source);
      } else {
        source = sessionStorage.getItem("st_lead_source") || "site";
      }
    } catch {
      // ignore
    }

    const tag = source !== "site" ? ` [origem:${source}]` : "";
    setWaLink(
      `https://wa.me/${phone}?text=${encodeURIComponent(defaultMsg + tag)}`,
    );
  }, [phone, defaultMsg]);

  return waLink;
}
