import Image from "next/image";

export const metadata = {
  title: "Möbelmontage Hannover | MTM Möbel Transport Montage",
  description:
    "Fachgerechte Möbelmontage in Hannover – schnell, sauber & zuverlässig. MTM montiert Küchen, Schränke, Büroeinrichtungen & mehr.",
  keywords: [
    "Möbelmontage Hannover",
    "Montage Hannover",
    "Küchenmontage Hannover",
    "Möbelaufbau Hannover",
  ],
};

export default function MontagePage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Header-Bild wie bei Leistungen */}
      <section className="relative h-[300px] md:h-[400px]">
        <Image
          src="/header-services.svg"
          alt="MTM Leistungen"
          fill
          priority
          className="object-cover object-center brightness-75"
        />
      </section>

      {/* Content-Bereich mit H1, Text links + Bild rechts */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* Überschrift */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-red-600 mb-10 text-center md:text-left">
          Möbelmontage in Hannover – fachgerecht, schnell und zuverlässig mit MTM
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div>
            <p className="text-lg text-gray-700 mb-8">
              Die fachgerechte Montage von Möbeln erfordert Erfahrung,
              Präzision und das richtige Werkzeug.{" "}
              <strong>MTM Möbel Transport Montage aus Hannover</strong> ist Ihr
              verlässlicher Partner für den professionellen Auf- und Abbau von
              Möbeln aller Art – ob privat, im Büro oder in gewerblichen Räumen.
              Mit uns sparen Sie Zeit, vermeiden Stress und können sicher sein,
              dass Ihre Möbel stabil und einsatzbereit stehen.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Was uns besonders macht</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Erfahrene Monteure:</strong> Unser Team kennt die Systeme
                aller gängigen Möbelhersteller (IKEA, Höffner, Poco,
                Mömax u. v. m.).
              </li>
              <li>
                <strong>Professionelles Werkzeug:</strong> Präzise Montage mit
                modernem Equipment.
              </li>
              <li>
                <strong>Flexibilität:</strong> Von einzelnen Möbelstücken bis hin zu
                kompletten Büroeinrichtungen.
              </li>
              <li>
                <strong>Schnelligkeit & Effizienz:</strong> Wir sparen Ihnen Zeit
                und liefern sofort nutzbare Ergebnisse.
              </li>
              <li>
                <strong>Sorgfalt & Sauberkeit:</strong> Wir arbeiten ordentlich
                und hinterlassen Räume einziehfertig.
              </li>
            </ul>
          </div>

          {/* Bild rechts */}
          <div className="relative w-full h-80 md:h-[500px]">
            <Image
              src="/services/montage2.png"
              alt="MTM Möbelmontage"
              fill
              priority
              className="object-cover object-center rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Unsere Montageservices im Überblick
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Privathaushalte:</strong> Aufbau von Betten, Schränken,
            Regalen oder kompletten Möbelsets.
          </li>
          <li>
            <strong>Büros & Unternehmen:</strong> Montage von Schreibtischen,
            Schränken, Konferenzmöbeln und mehr.
          </li>
          <li>
            <strong>Küchenmontage:</strong> Exakte Anpassung, inklusive
            Anschlussarbeiten in Kooperation mit Fachbetrieben.
          </li>
          <li>
            <strong>Abbau & Wiederaufbau:</strong> Perfekt für Umzüge – sicherer
            Abbau, Transport und erneute Montage am Zielort.
          </li>
          <li>
            <strong>Sonderlösungen:</strong> Maßanfertigungen oder Anpassungen
            für besondere Anforderungen.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">Warum MTM wählen?</h2>
        <p className="text-gray-700 mb-6">
          Viele Dienstleister bieten Möbelmontage oder Transport an –{" "}
          <strong>bei MTM bekommen Sie beides aus einer Hand</strong>. Das spart
          Zeit, Kosten und Nerven. Unsere Kunden schätzen besonders unsere
          Termintreue, Zuverlässigkeit und die saubere, präzise Arbeit unseres
          Teams.
        </p>

        {/* CTA */}
        <div className="bg-red-600 text-white text-center py-10 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4">
            Benötigen Sie Unterstützung bei einer Möbelmontage in Hannover?
          </h3>
          <p className="mb-6">
            Kontaktieren Sie uns jetzt – unser Team übernimmt den fachgerechten
            Aufbau und sorgt dafür, dass Ihre Möbel perfekt stehen.
          </p>
          <a
            href="/contact"
            className="bg-white text-red-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Jetzt Kontakt aufnehmen
          </a>
        </div>
      </div>
    </main>
  );
}
