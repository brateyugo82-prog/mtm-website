// src/lib/metaPixel.js

export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || null;

const isFbqReady = () => {
  if (typeof window === "undefined") return false;
  if (!window.fbq) return false;
  return true;
};

export const trackPageView = () => {
  if (!isFbqReady()) return;

  window.fbq("track", "PageView");
  console.log("📄 Meta PageView gesendet");
};

export const trackLead = (data = {}) => {
  if (!isFbqReady()) return;

  window.fbq("track", "Lead", data);
  console.log("🎯 Meta Lead gesendet", data);
};