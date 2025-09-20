"use client";
import HeroSection from "../components/HeroSection";
import TestimonialsSection from "../components/TestimonialsSection";
import { TruckIcon, WrenchIcon, HomeModernIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-gray-50">
      {/* HeroSection nur EINMAL */}
      <HeroSection />

      {/* Leistungen Section */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-900">
          Unsere Leistungen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {/* Transport */}
          <Link
            href="/services/transport"
            className="bg-gray-50 rounded-2xl shadow-md p-10 hover:shadow-2xl hover:bg-red-50 transition block"
          >
            <TruckIcon className="h-12 w-12 mx-auto text-red-600 mb-6" />
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Transport</h3>
            <p className="text-gray-600">
              Schneller, sicherer Möbeltransport – effizient und zuverlässig in Norddeutschland.
            </p>
          </Link>

          {/* Montage */}
          <Link
            href="/services/montage"
            className="bg-gray-50 rounded-2xl shadow-md p-10 hover:shadow-2xl hover:bg-red-50 transition block"
          >
            <WrenchIcon className="h-12 w-12 mx-auto text-red-600 mb-6" />
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Montage</h3>
            <p className="text-gray-600">
              Fachgerechter Auf- und Abbau von Möbeln aller Art – vom Privatumzug bis zum Büro.
            </p>
          </Link>

          {/* Umzüge */}
          <Link
            href="/services/umzuege"
            className="bg-gray-50 rounded-2xl shadow-md p-10 hover:shadow-2xl hover:bg-red-50 transition block"
          >
            <HomeModernIcon className="h-12 w-12 mx-auto text-red-600 mb-6" />
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Umzüge</h3>
            <p className="text-gray-600">
              Komplettlösungen für Privat und Gewerbe – stressfrei & professionell organisiert.
            </p>
          </Link>
        </div>
      </section>

      {/* Kundenstimmen Section */}
      <TestimonialsSection />

      {/* Call-to-Action Section */}
      <section className="bg-red-600 text-white text-center py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Bereit für Ihren nächsten Umzug?
        </h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Kontaktieren Sie uns jetzt und erhalten Sie ein individuelles Angebot
          für Ihren Möbeltransport oder Umzug.
        </p>
        <Link
          href="/contact"
          className="bg-white text-red-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Jetzt Kontakt aufnehmen
        </Link>
      </section>
    </main>
  );
}
