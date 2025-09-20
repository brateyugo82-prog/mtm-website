"use client";
import Image from "next/image";
import Link from "next/link";
import {
  TruckIcon,
  WrenchIcon,
  HomeModernIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

export default function ServicesPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Header-Bild */}
      <section className="relative h-[400px] md:h-[500px]">
        <Image
          src="/header-services.svg" // eigenes Bild im public-Ordner
          alt="MTM Leistungen"
          fill
          priority
          className="object-cover object-center brightness-75"
        />
      </section>

      {/* Überschrift */}
      <div className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600">
          Unsere Leistungen
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Von Möbeltransport bis Entrümpelung – MTM bietet Ihnen
          zuverlässige, professionelle und faire Lösungen rund um Umzüge,
          Transport und Montage.
        </p>
      </div>

      {/* Leistungen Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Transport */}
          <Link
            href="/services/transport"
            className="bg-gray-50 rounded-2xl shadow-md p-10 hover:shadow-2xl hover:bg-red-50 transition block"
          >
            <TruckIcon className="h-12 w-12 text-red-600 mb-6" />
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Transport
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Wir sorgen für schnellen und sicheren Möbeltransport – in ganz
              Norddeutschland. Ihre Möbel und Objekte werden von uns mit
              höchster Sorgfalt behandelt und termingerecht geliefert.
            </p>
          </Link>

          {/* Montage */}
          <Link
            href="/services/montage"
            className="bg-gray-50 rounded-2xl shadow-md p-10 hover:shadow-2xl hover:bg-red-50 transition block"
          >
            <WrenchIcon className="h-12 w-12 text-red-600 mb-6" />
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Montage
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Fachgerechter Auf- und Abbau von Möbeln aller Art. Ob
              Privatwohnung oder Büro – wir übernehmen die Montage effizient
              und zuverlässig, inklusive professionellem Werkzeug.
            </p>
          </Link>

          {/* Umzüge */}
          <Link
            href="/services/umzuege"
            className="bg-gray-50 rounded-2xl shadow-md p-10 hover:shadow-2xl hover:bg-red-50 transition block"
          >
            <HomeModernIcon className="h-12 w-12 text-red-600 mb-6" />
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Umzüge
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Komplettlösungen für Privat- und Firmenumzüge. Von der Planung
              über Verpackung bis zum Transport – wir übernehmen alles,
              damit Ihr Umzug stressfrei und reibungslos verläuft.
            </p>
          </Link>

          {/* Entrümpelung & Entsorgung */}
          <Link
            href="/services/entruempelung"
            className="bg-gray-50 rounded-2xl shadow-md p-10 hover:shadow-2xl hover:bg-red-50 transition block"
          >
            <TrashIcon className="h-12 w-12 text-red-600 mb-6" />
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Entrümpelung & Entsorgung
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Wir übernehmen Entrümpelungen und kümmern uns um die
              fachgerechte, umweltfreundliche Entsorgung. Sauber,
              effizient und ohne Aufwand für Sie.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
