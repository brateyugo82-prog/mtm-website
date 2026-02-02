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
};

export default function HomePage() {
  return (
    // ❗ KEIN bg-gray hier
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <HeroSection />

      {/* Leistungen Section */}
      <section className="py-16 sm:py-20 bg-white text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-16">
          Unsere Leistungen
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 max-w-6xl mx-auto px-4 sm:px-6">
          {[
            {
              href: "/services/transport",
              icon: TruckIcon,
              title: "Transport",
              text:
                "Schneller, sicherer Möbeltransport – effizient und zuverlässig in Norddeutschland.",
            },
            {
              href: "/services/montage",
              icon: WrenchIcon,
              title: "Montage",
              text:
                "Fachgerechter Auf- und Abbau von Möbeln aller Art – vom Privatumzug bis zum Büro.",
            },
            {
              href: "/services/umzuege",
              icon: HomeModernIcon,
              title: "Umzüge",
              text:
                "Komplettlösungen für Privat und Gewerbe – stressfrei & professionell organisiert.",
            },
            {
              href: "/services/entruempelung",
              icon: TrashIcon,
              title: "Entrümpelung & Entsorgung",
              text:
                "Fachgerechte Entrümpelung und umweltbewusste Entsorgung – schnell, sauber und zuverlässig.",
            },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="bg-white rounded-2xl shadow-md p-6 sm:p-10 hover:shadow-xl hover:bg-red-50 transition block"
            >
              <item.icon className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-red-600 mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {item.text}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Ablauf Section */}
      <section className="py-16 sm:py-24 bg-gray-50 text-center">
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
            className="text-red-600 font-semibold hover:underline"
          >
            Mehr erfahren
          </Link>
        </div>
      </section>

      {/* Kundenstimmen */}
      <TestimonialsSection />

      {/* CTA */}
      <section className="bg-red-600 text-white text-center py-16 sm:py-20 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
          Bereit für Ihren nächsten Umzug?
        </h2>
        <p className="mb-6 sm:mb-8 text-base sm:text-lg max-w-2xl mx-auto">
          Kontaktieren Sie uns jetzt und erhalten Sie ein individuelles Angebot.
        </p>
        <Link
          href="/contact"
          className="bg-white text-red-600 font-semibold px-6 sm:px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          Jetzt Kontakt aufnehmen
        </Link>
      </section>
    </main>
  );
}
