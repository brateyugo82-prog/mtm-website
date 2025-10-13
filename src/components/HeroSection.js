"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <div className="relative w-full h-[85vh] md:h-[90vh]">
        <Image
          src="/assets/hero.jpg"
          alt="MTM Möbel Transport Montage Hannover"
          fill
          priority
          className="object-cover brightness-75"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-12">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          MTM Möbel Transport Montage
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          Ihr zuverlässiger Partner für Möbeltransporte, Umzüge und Montagearbeiten
          – professionell, effizient und fair.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
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

      {/* Bottom Fade Overlay for readability */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
    </section>
  );
}
