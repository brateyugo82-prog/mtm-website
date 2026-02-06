// src/lib/metaPixel.js

export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || null;

/**
 * Prüfen, ob fbq verfügbar ist
 */
const isFbqReady = () => {
  if (typeof window === "undefined") return false;
  if (typeof window.fbq !== "function") return false;
  return true;
};

/**
 * 🔥 PageView Event
 * Wird NUR nach Cookie-Consent aufgerufen
 */
export const pageview = () => {
  if (!isFbqReady()) return;

  window.fbq("track", "PageView");
  console.log("🔥 Meta PageView gesendet");
};

/**
 * 🎯 Lead Event (z. B. Kontaktformular)
 */
export const trackLead = (data = {}) => {
  if (!isFbqReady()) return;

  window.fbq("track", "Lead", data);
  console.log("🎯 Meta Lead gesendet", data);
};