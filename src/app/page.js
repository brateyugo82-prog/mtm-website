import HeroSection from "../components/HeroSection";
import TestimonialsSection from "../components/TestimonialsSection";
import { TruckIcon, WrenchIcon, HomeModernIcon, TrashIcon, PhoneIcon, UserIcon, DocumentTextIcon, CalendarDaysIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const metadata = {
  title: "MTM Möbel Transport Montage Hannover | Umzüge, Transport & Montage",
  description:
    "MTM Hannover – Ihre Profis für Möbeltransporte, Umzüge, Montage und Entrümpelungen. Schnell, zuverlässig und fair in Hannover & Norddeutschland.",
  keywords: [
    "Umzug Hannover",
    "Möbeltransport Hannover",
    "Möbelmontage Hannover",
    "Entrümpelung Hannover",
    "Umzugsfirma Hannover",
  ],
  openGraph: {
    title: "MTM Möbel Transport Montage Hannover",
    description:
      "Ihr zuverlässiger Partner für Umzüge, Möbeltransporte, Montage & Entrümpelungen in Hannover.",
    url: "https://mtm-service.de",
    siteName: "MTM Möbel Transport Montage",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MTM Möbel Transport Montage – Hannover",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MTM Möbel Transport Montage Hannover",
    description:
      "Umzüge, Möbeltransporte, Montage & Entrümpelungen in Hannover – fair, effizient & zuverlässig.",
    images: ["/og-image.jpg"],
  },
};

export default function HomePage() {
  return (
    <main className="bg-gray-50">
      {/* HeroSection */}
      <HeroSection />

      {/* Leistungen Section */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-900">
          Unsere Leistungen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">
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

          {/* Entrümpelungen */}
          <Link
            href="/services/entruempelung"
            className="bg-gray-50 rounded-2xl shadow-md p-10 hover:shadow-2xl hover:bg-red-50 transition block"
          >
            <TrashIcon className="h-12 w-12 mx-auto text-red-600 mb-6" />
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Entrümpelungen & Entsorgungen
            </h3>
            <p className="text-gray-600">
              Fachgerechte Entrümpelung und umweltbewusste Entsorgung – schnell, sauber und zuverlässig.
            </p>
          </Link>
        </div>
      </section>

      {/* Ablauf Teaser Section */}
      <section className="py-24 bg-gray-100 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-900">
          Unser Ablauf – Schritt für Schritt
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center">
            <PhoneIcon className="h-12 w-12 text-red-600 mb-4" />
            <p className="text-gray-700 font-semibold">1. Anruf</p>
          </div>
          <span className="text-red-600 text-3xl">➝</span>
          <div className="flex flex-col items-center">
            <UserIcon className="h-12 w-12 text-red-600 mb-4" />
            <p className="text-gray-700 font-semibold">2. Besichtigung</p>
          </div>
          <span className="text-red-600 text-3xl">➝</span>
          <div className="flex flex-col items-center">
            <DocumentTextIcon className="h-12 w-12 text-red-600 mb-4" />
            <p className="text-gray-700 font-semibold">3. Angebot</p>
          </div>
          <span className="text-red-600 text-3xl">➝</span>
          <div className="flex flex-col items-center">
            <CalendarDaysIcon className="h-12 w-12 text-red-600 mb-4" />
            <p className="text-gray-700 font-semibold">4. Termin</p>
          </div>
          <span className="text-red-600 text-3xl">➝</span>
          <div className="flex flex-col items-center">
            <CheckBadgeIcon className="h-12 w-12 text-red-600 mb-4" />
            <p className="text-gray-700 font-semibold">5. Durchführung</p>
          </div>
        </div>
        <div className="mt-10">
          <Link
            href="/ablauf"
            className="text-red-600 font-semibold hover:underline"
          >
            Mehr erfahren
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
