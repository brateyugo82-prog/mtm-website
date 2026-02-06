"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { pageview } from "@/lib/metaPixel";

export default function CookieBanner() {
  const [visible, setVisible] = useState(null);

  useEffect(() => {
    const consent = Cookies.get("cookie-consent");

    if (!consent) {
      setVisible(true);
    } else {
      setVisible(false);
      if (consent === "accepted") {
        pageview(); // 🔥 PageView bei Reload
      }
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set("cookie-consent", "accepted", { expires: 365 });
    setVisible(false);
    pageview(); // 🔥 EINZIGER Event-Call
  };

  const declineCookies = () => {
    Cookies.set("cookie-consent", "declined", { expires: 365 });
    setVisible(false);
  };

  if (visible === null || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white px-6 py-4 flex flex-col sm:flex-row justify-between items-center z-[9999] shadow-lg">
      <p className="mb-2 sm:mb-0 text-sm">
        Diese Website verwendet Cookies, um Ihr Erlebnis zu verbessern.
        Mehr dazu in unserer{" "}
        <a href="/datenschutz" className="underline text-red-400">
          Datenschutzerklärung
        </a>.
      </p>

      <div className="flex gap-2">
        <button
          onClick={declineCookies}
          className="px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-700 text-sm"
        >
          Ablehnen
        </button>

        <button
          onClick={acceptCookies}
          className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 text-sm"
        >
          Akzeptieren
        </button>
      </div>
    </div>
  );
}