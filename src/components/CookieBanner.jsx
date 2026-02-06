"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { trackPageView } from "@/lib/metaPixel";

export default function CookieBanner() {
  const [visible, setVisible] = useState(null);

  useEffect(() => {
    const consent = Cookies.get("cookie-consent");

    if (!consent) {
      setVisible(true);
    } else {
      setVisible(false);

      if (consent === "accepted") {
        trackPageView(); // ✅ Reload
      }
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set("cookie-consent", "accepted", { expires: 365 });
    setVisible(false);
    trackPageView(); // ✅ EINMAL
  };

  const declineCookies = () => {
    Cookies.set("cookie-consent", "declined", { expires: 365 });
    setVisible(false);
  };

  if (visible !== true) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white px-6 py-4 z-[9999]">
      <p className="text-sm mb-2">
        Diese Website verwendet Cookies.{" "}
        <a href="/datenschutz" className="underline text-red-400">
          Datenschutzerklärung
        </a>
      </p>

      <div className="flex gap-2">
        <button onClick={declineCookies} className="bg-gray-600 px-4 py-2 rounded">
          Ablehnen
        </button>
        <button onClick={acceptCookies} className="bg-red-600 px-4 py-2 rounded">
          Akzeptieren
        </button>
      </div>
    </div>
  );
}