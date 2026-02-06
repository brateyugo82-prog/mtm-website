export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export const pageview = () => {
  if (!window.fbq) return;
  window.fbq("track", "PageView");
};

export const trackLead = (data = {}) => {
  if (!window.fbq) return;
  window.fbq("track", "Lead", data);
};