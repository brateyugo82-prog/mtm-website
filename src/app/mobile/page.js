"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export const metadata = {
  title: "MTM Mobile – Möbel, Transport, Montage Hannover",
  description:
    "Dein Umzug in sicheren Händen – MTM Hannover. Schnell, sauber & zuverlässig.",
};

export default function MTMMobilePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="flex flex-col items-center bg-[#0a0a0a] text-gray-100 min-h-screen relative overflow-hidden">
      {/* Navigation */}
      <nav className="w-full flex items-center justify-between px-6 py-4 bg-[#111827] shadow-lg fixed top-0 z-50">
        <Image
          src="/assets/logo(1).png"
          alt="MTM Logo"
          width={110}
          height={50}
          className="h-auto"
        />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-200 focus:outline-none"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menü Overlay */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-16 left-0 w-full bg-[#111827] text-gray-100 py-6 flex flex-col items-center gap-4 z-40"
        >
          <Link
            href="/#leistungen"
            onClick={() => setMenuOpen(false)}
            className="hover:text-red-500 transition"
          >
            Leistungen
          </Link>
          <Link
            href="/#ablauf"
            onClick={() => setMenuOpen(false)}
            className="hover:text-red-500 transition"
          >
            Ablauf
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-red-500 transition"
          >
            Kontakt
          </Link>
          <Link
            href="/legal"
            onClick={() => setMenuOpen(false)}
            className="hover:text-red-500 transition"
          >
            Impressum
          </Link>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="pt-24 px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold leading-snug">
            Umzug leicht gemacht 🚛
          </h1>
          <p className="text-gray-300 mt-4 text-base max-w-xs mx-auto">
            MTM Möbel-Transport-Montage – zuverlässig, sauber & fair.
            Wir bringen Ihr Zuhause sicher ans Ziel.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-10"
        >
          <Image
            src="/assets/flotte.png"
            alt="MTM Flotte"
            width={320}
            height={160}
            className="rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Label / Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="italic text-gray-400 mt-6 max-w-xs"
        >
          „Mehr Zeit für Neues – wir kümmern uns um den Rest.“
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col items-center gap-4 mt-10 w-full"
        >
          <Link
            href="tel:+495111234567"
            className="bg-red-600 text-white w-full max-w-xs py-3 rounded-xl text-lg font-semibold shadow-lg hover:bg-red-700 transition"
          >
            📞 Jetzt anrufen
          </Link>
          <Link
            href="/contact"
            className="bg-white text-red-600 w-full max-w-xs py-3 rounded-xl text-lg font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            ✉️ Kontaktformular
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-xs text-gray-500 pb-8">
        <p>© {new Date().getFullYear()} MTM Möbel-Transport-Montage</p>
        <Link href="/legal" className="underline hover:text-gray-300">
          Impressum & Datenschutz
        </Link>
      </footer>
    </main>
  );
}
