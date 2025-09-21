import Image from "next/image";

export const metadata = {
  title: "Möbeltransport Hannover & Norddeutschland | MTM Service",
  description:
    "Professioneller Möbeltransport in Hannover & Norddeutschland – sicher, schnell & zuverlässig mit MTM Möbel Transport Montage.",
  keywords: [
    "Möbeltransport Hannover",
    "Transport Hannover",
    "Umzugsfirma Hannover",
    "Möbelspedition Hannover",
  ],
};

export default function TransportPage() {
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
          Möbeltransport in Hannover & Norddeutschland – schnell, sicher und zuverlässig mit MTM
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div>
            <p className="text-lg text-gray-700 mb-8">
              Ein Möbeltransport ist Vertrauenssache – schließlich möchten Sie
              sicher sein, dass Ihre wertvollen Stücke unbeschadet und pünktlich
              an ihrem Ziel ankommen.{" "}
              <strong>MTM Möbel Transport Montage aus Hannover</strong> ist Ihr
              zuverlässiger Partner, wenn es um professionelle Transporte von
              Möbeln, Hausrat oder sperrigen Objekten geht. Ob innerhalb
              Hannovers oder in der Region – wir sorgen für eine
              reibungslose, sichere und faire Durchführung Ihres Transports.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Was uns besonders macht</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Zuverlässigkeit & Termintreue:</strong> Wir halten unsere
                Zusagen ein.
              </li>
              <li>
                <strong>Sorgfalt & Sicherheit:</strong> Ihre Möbel werden geschützt
                und schonend transportiert.
              </li>
              <li>
                <strong>Moderne Ausstattung:</strong> Spezialisierte Fahrzeuge &
                Verpackungsmaterial für maximale Sicherheit.
              </li>
              <li>
                <strong>Erfahrung & Kompetenz:</strong> Geschulte Mitarbeiter
                meistern jede Herausforderung.
              </li>
              <li>
                <strong>Faire Preise:</strong> Transparente Kalkulation ohne
                versteckte Kosten.
              </li>
            </ul>
          </div>

          {/* Bild rechts */}
          <div className="relative w-full h-80 md:h-[500px]">
            <Image
              src="/services/transport2.png"
              alt="MTM Möbeltransport"
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
          Unsere Leistungen im Bereich Möbeltransport
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Privater Möbeltransport:</strong> Einzelne Möbelstücke,
            Küchen oder ganze Haushalte.
          </li>
          <li>
            <strong>Firmen- & Büroumzüge:</strong> Büroeinrichtungen, Technik und
            Arbeitsplätze.
          </li>
          <li>
            <strong>Spezialtransporte:</strong> Sperrige oder empfindliche Objekte
            wie Antiquitäten oder Glas.
          </li>
          <li>
            <strong>Regionale Transporte:</strong> Hannover &
            Norddeutschland 
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">Warum MTM wählen?</h2>
        <p className="text-gray-700 mb-6">
          Unsere Kunden schätzen besonders die persönliche Beratung, unser
          eingespieltes Team und unsere Hands-on-Mentalität. Bei uns bekommen Sie
          nicht nur einen Transport, sondern einen{" "}
          <strong>rundum sorglosen Service</strong>, der auf Ihre individuellen
          Bedürfnisse zugeschnitten ist.
        </p>

        {/* CTA */}
        <div className="bg-red-600 text-white text-center py-10 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4">
            Planen Sie einen Transport in Hannover oder Umgebung?
          </h3>
          <p className="mb-6">
            Kontaktieren Sie uns jetzt unverbindlich – wir beraten Sie persönlich
            und erstellen Ihnen ein individuelles Angebot.
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
