"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <div className="relative w-full h-[100vh] md:h-[100vh]">
        <Image
          src="/flotte.png"
          alt="MTM Flotte – Umzugsfahrzeuge Hannover"
          fill
          priority
          // 🔆 Bild leicht heller gemacht:
          className="object-cover brightness-90 contrast-105"
          sizes="100vw"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-end items-center text-center px-6 md:px-12 pb-[5vh] md:pb-[4vh] lg:pb-[3vh]">
        {/* Hellerer Verlauf */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        <motion.h1
          className="relative text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          MTM Möbel Transport Montage
        </motion.h1>

        <motion.p
          className="relative text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mb-8 leading-relaxed z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          Ihr zuverlässiger Partner für Möbeltransporte, Umzüge und Montagearbeiten –
          professionell, effizient und fair.
        </motion.p>

        <motion.div
          className="relative flex flex-col sm:flex-row gap-4 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="bg-red-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-red-700 transition text-center text-lg"
          >
            Jetzt Angebot anfordern
          </Link>
          <Link
            href="/services"
            className="bg-white text-red-600 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition text-center text-lg"
          >
            Leistungen ansehen
          </Link>
        </motion.div>
      </div>

      {/* Bottom Fade Overlay */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
    </section>
  );
}
