"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Header from "./Header";

export default function ResponsiveHeader() {
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
    <>
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
    </>
  );
}
