// src/lib/metaPixel.js

export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

const isFbqReady = () => {
  return typeof window !== "undefined" && typeof window.fbq === "function";
};

export const trackPageView = () => {
  if (!isFbqReady()) {
    console.warn("❌ fbq nicht bereit – PageView nicht gesendet");
    return;
  }

  window.fbq("track", "PageView");
  console.log("🔥 Meta PageView gesendet");
};

export const trackLead = (data = {}) => {
  if (!isFbqReady()) {
    console.warn("❌ fbq nicht bereit – Lead nicht gesendet");
    return;
  }

  window.fbq("track", "Lead", data);
  console.log("🎯 Meta Lead gesendet", data);
};