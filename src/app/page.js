import HeroSection from "../components/HeroSection";
import TestimonialsSection from "../components/TestimonialsSection";
import {
  TruckIcon,
  WrenchIcon,
  HomeModernIcon,
  TrashIcon,
  PhoneIcon,
  UserIcon,
  DocumentTextIcon,
  CalendarDaysIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
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
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <HeroSection />

      {/* Leistungen Section */}
      <section className="py-16 sm:py-20 bg-white text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-16">
          Unsere Leistungen
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 max-w-6xl mx-auto px-4 sm:px-6">
          {/* Transport */}
          <Link
            href="/services/transport"
            className="bg-gray-50 rounded-2xl shadow-md p-6 sm:p-10 hover:shadow-xl hover:bg-red-50 transition block"
          >
            <TruckIcon className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-red-600 mb-4 sm:mb-6" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
              Transport
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Schneller, sicherer Möbeltransport – effizient und zuverlässig in Norddeutschland.
            </p>
          </Link>

          {/* Montage */}
          <Link
            href="/services/montage"
            className="bg-gray-50 rounded-2xl shadow-md p-6 sm:p-10 hover:shadow-xl hover:bg-red-50 transition block"
          >
            <WrenchIcon className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-red-600 mb-4 sm:mb-6" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
              Montage
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Fachgerechter Auf- und Abbau von Möbeln aller Art – vom Privatumzug bis zum Büro.
            </p>
          </Link>

          {/* Umzüge */}
          <Link
            href="/services/umzuege"
            className="bg-gray-50 rounded-2xl shadow-md p-6 sm:p-10 hover:shadow-xl hover:bg-red-50 transition block"
          >
            <HomeModernIcon className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-red-600 mb-4 sm:mb-6" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
              Umzüge
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Komplettlösungen für Privat und Gewerbe – stressfrei & professionell organisiert.
            </p>
          </Link>

          {/* Entrümpelungen */}
          <Link
            href="/services/entruempelung"
            className="bg-gray-50 rounded-2xl shadow-md p-6 sm:p-10 hover:shadow-xl hover:bg-red-50 transition block"
          >
            <TrashIcon className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-red-600 mb-4 sm:mb-6" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
              Entrümpelung & Entsorgung
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Fachgerechte Entrümpelung und umweltbewusste Entsorgung – schnell, sauber und zuverlässig.
            </p>
          </Link>
        </div>
      </section>

      {/* Ablauf Section */}
      <section className="py-16 sm:py-24 bg-gray-100 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-16">
          Unser Ablauf – Schritt für Schritt
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 max-w-6xl mx-auto px-4 sm:px-6">
          {[
            { icon: PhoneIcon, label: "1. Anruf" },
            { icon: UserIcon, label: "2. Besichtigung" },
            { icon: DocumentTextIcon, label: "3. Angebot" },
            { icon: CalendarDaysIcon, label: "4. Termin" },
            { icon: CheckBadgeIcon, label: "5. Durchführung" },
          ].map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <step.icon className="h-10 w-10 sm:h-12 sm:w-12 text-red-600 mb-3 sm:mb-4" />
              <p className="text-gray-700 font-medium text-sm sm:text-base">
                {step.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10">
          <Link
            href="/ablauf"
            className="text-red-600 font-semibold hover:underline text-sm sm:text-base"
          >
            Mehr erfahren
          </Link>
        </div>
      </section>

      {/* Kundenstimmen Section */}
      <TestimonialsSection />

      {/* Call-to-Action Section */}
      <section className="bg-red-600 text-white text-center py-16 sm:py-20 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
          Bereit für Ihren nächsten Umzug?
        </h2>
        <p className="mb-6 sm:mb-8 text-base sm:text-lg max-w-2xl mx-auto">
          Kontaktieren Sie uns jetzt und erhalten Sie ein individuelles Angebot
          für Ihren Möbeltransport oder Umzug.
        </p>
        <Link
          href="/contact"
          className="bg-white text-red-600 font-semibold px-6 sm:px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition text-sm sm:text-base"
        >
          Jetzt Kontakt aufnehmen
        </Link>
      </section>
    </main>
  );
}
