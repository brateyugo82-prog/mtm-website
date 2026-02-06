// lib/metaPixel.ts

export const META_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID || null;

/**
 * 🔥 Sicherstellen, dass fbq existiert
 */
const isFbqReady = () => {
  if (typeof window === "undefined") return false;
  if (!window.fbq) return false;
  return true;
};

/**
 * 📄 PageView Event
 * Wird NUR nach Consent aufgerufen
 */
export const trackPageView = () => {
  if (!isFbqReady()) return;

  window.fbq("track", "PageView");
  console.log("📄 Meta PageView gesendet");
};

/**
 * 🎯 Lead Event (z. B. Kontaktformular)
 */
export const trackLead = (data: Record<string, any> = {}) => {
  if (!isFbqReady()) return;

  window.fbq("track", "Lead", data);
  console.log("🎯 Meta Lead gesendet", data);
};