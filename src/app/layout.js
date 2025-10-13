"use client";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const metadata = {
  title: "MTM Möbel Transport Montage | Umzüge & Möbeltransporte Hannover",
  description:
    "Professionelle Möbeltransporte, Umzüge, Montage & Entrümpelung in Hannover. MTM – zuverlässig, effizient und fair.",
  keywords: [
    "Umzug Hannover",
    "Möbeltransport Hannover",
    "Möbel Montage",
    "Entrümpelung Hannover",
    "MTM Service",
    "Umzugsfirma Hannover",
  ],
  openGraph: {
    title: "MTM Möbel Transport Montage | Umzüge & Möbeltransporte Hannover",
    description:
      "Ihr zuverlässiger Partner für Möbeltransporte, Umzüge und Montagearbeiten in Hannover.",
    url: "https://mtm-service.de",
    siteName: "MTM Möbel Transport Montage",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MTM Möbel Transport Montage – Umzug in Hannover",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MTM Möbel Transport Montage",
    description:
      "Professionelle Möbeltransporte & Umzüge in Hannover – fair, effizient & zuverlässig.",
    images: ["/og-image.jpg"],
  },
  other: {
    "tiktok-developers-site-verification":
      "oyClOiKaBmrDRLVbZ1QHyC7I9aJLgci1",
  },
};

export default function RootLayout({ children }) {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <html lang="de">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        {/* ✅ Header je nach Gerät */}
        {!isMobile ? (
          <Header />
        ) : (
          <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
              <Link href="/" className="flex items-center space-x-2">
                <img
                  src="/assets/logo.png"
                  alt="MTM Logo"
                  className="h-10 w-auto"
                />
                <span className="text-lg font-bold text-gray-800">MTM</span>
              </Link>

              <button
                className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menü öffnen oder schließen"
              >
                {menuOpen ? (
                  <X className="h-6 w-6 text-gray-800" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-800" />
                )}
              </button>
            </div>

            {menuOpen && (
              <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
                <nav className="flex flex-col space-y-4 px-6 py-4 text-lg font-medium">
                  <Link href="/about" onClick={() => setMenuOpen(false)}>
                    Über uns
                  </Link>
                  <Link href="/services" onClick={() => setMenuOpen(false)}>
                    Leistungen
                  </Link>
                  <Link href="/ablauf" onClick={() => setMenuOpen(false)}>
                    Ablauf
                  </Link>
                  <Link href="/blog" onClick={() => setMenuOpen(false)}>
                    Blog
                  </Link>
                  <Link href="/contact" onClick={() => setMenuOpen(false)}>
                    Kontakt
                  </Link>
                </nav>
              </div>
            )}
          </header>
        )}

        {/* Hauptinhalt */}
        <main className="flex-grow mt-[72px] md:mt-0">{children}</main>

        {/* Footer + Cookies */}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
