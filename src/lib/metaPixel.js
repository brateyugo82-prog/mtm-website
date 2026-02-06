export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

const isFbqReady = () => {
  return typeof window !== "undefined" && typeof window.fbq === "function";
};

export const trackPageView = () => {
  if (!isFbqReady()) return;
  window.fbq("track", "PageView");
};

export const trackLead = (data = {}) => {
  if (!isFbqReady()) return;
  window.fbq("track", "Lead", data);
};