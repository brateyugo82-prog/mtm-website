import Image from "next/image";
import Link from "next/link";
import {
  TruckIcon,
  WrenchIcon,
  HomeModernIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Leistungen – MTM Möbel Transport Montage Hannover",
  description:
    "Unsere Leistungen: Möbeltransport, Umzüge, Montage sowie Entrümpelung & Entsorgung in Hannover. Professionell, zuverlässig & fair.",
  keywords: [
    "Umzug Hannover",
    "Möbeltransport Hannover",
    "Montage Hannover",
    "Entrümpelung Hannover",
    "Möbelaufbau Hannover",
  ],
  openGraph: {
    title: "Unsere Leistungen – MTM Möbel Transport Montage Hannover",
    description:
      "Von Möbeltransport bis Entrümpelung – MTM Hannover bietet professionelle Leistungen rund um Transport, Montage & Umzug.",
    url: "https://mtm-service.de/services",
    siteName: "MTM Möbel Transport Montage",
    locale: "de_DE",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Header-Bild */}
      <section className="relative h-[400px] md:h-[500px]">
        <Image
          src="/header-services.svg"
          alt="MTM Leistungen"
          fill
          priority
          className="object-cover object-center brightness-75"
        />
      </section>

      {/* Überschrift */}
      <div className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Unsere Leistungen
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Von Möbeltransport bis Entrümpelung – MTM bietet Ihnen
          zuverlässige, professionelle und faire Lösungen rund um Umzüge,
          Transport und Montage.
        </p>
      </div>

      {/* Leistungen Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-20">
        {/* Transport */}
        <Link
          href="/services/transport"
          className="grid md:grid-cols-2 items-center gap-10 bg-gray-50 rounded-2xl shadow-md p-10 hover:shadow-2xl hover:bg-red-50 transition"
        >
          <div>
            <TruckIcon className="h-12 w-12 text-red-600 mb-6" />
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Transport
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Sicherer Möbeltransport in Hannover & Norddeutschland. Mit
              moderner Ausstattung, erfahrenem Team und höchster Sorgfalt
              bringen wir Ihre Möbel termingerecht ans Ziel.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-80">
            <Image
              src="/services/transport-team.png"
              alt="Möbeltransport Hannover"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </Link>

        {/* Montage */}
        <Link
          href="/services/montage"
          className="grid md:grid-cols-2 items-center gap-10 bg-gray-50 rounded-2xl shadow-md p-10 hover:shadow-2xl hover:bg-red-50 transition"
        >
          <div>
            <WrenchIcon className="h-12 w-12 text-red-600 mb-6" />
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Montage
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Fachgerechter Auf- und Abbau von Möbeln aller Hersteller. MTM
              sorgt für präzise, schnelle und saubere Möbelmontage – ob Küche,
              Schlafzimmer oder Büroeinrichtung.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-80">
            <Image
              src="/services/montage-hannover.png"
              alt="Möbelmontage Hannover"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </Link>

        {/* Umzüge */}
        <Link
          href="/services/umzuege"
          className="grid md:grid-cols-2 items-center gap-10 bg-gray-50 rounded-2xl shadow-md p-10 hover:shadow-2xl hover:bg-red-50 transition"
        >
          <div>
            <HomeModernIcon className="h-12 w-12 text-red-600 mb-6" />
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Umzüge
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Stressfreie Umzüge in Hannover: Von Planung über Verpackung
              bis Transport – MTM übernimmt alles für Privat- und
              Firmenumzüge, zuverlässig und termingerecht.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-80">
            <Image
              src="/services/umzuege-hannover.png"
              alt="Umzüge Hannover"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </Link>

        {/* Entrümpelung */}
        <Link
          href="/services/entruempelung"
          className="grid md:grid-cols-2 items-center gap-10 bg-gray-50 rounded-2xl shadow-md p-10 hover:shadow-2xl hover:bg-red-50 transition"
        >
          <div>
            <TrashIcon className="h-12 w-12 text-red-600 mb-6" />
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Entrümpelung & Entsorgung
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Gründliche Entrümpelung & umweltgerechte Entsorgung in Hannover.
              Diskret, effizient und besenrein – vom Keller bis zur
              kompletten Haushaltsauflösung.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-80">
            <Image
              src="/services/entruempelung-mitarbeiter.png"
              alt="Entrümpelung Hannover"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </Link>
      </section>
    </main>
  );
}
