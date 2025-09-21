import Image from "next/image";

export const metadata = {
  title: "Entrümpelung & Entsorgung Hannover | MTM Möbel Transport Montage",
  description:
    "Entrümpelung & Entsorgung in Hannover – schnell, diskret & umweltgerecht. MTM übernimmt Haushaltsauflösungen, Kellerentrümpelungen & Gewerberäume.",
  keywords: [
    "Entrümpelung Hannover",
    "Haushaltsauflösung Hannover",
    "Entsorgung Hannover",
    "Wohnungsauflösung Hannover",
  ],
};

export default function EntruempelungPage() {
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
          Entrümpelung & Entsorgung in Hannover – schnell, gründlich & diskret mit MTM
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div>
            <p className="text-lg text-gray-700 mb-8">
              Eine Entrümpelung ist mehr als nur Aufräumen – sie bedeutet Platz
              für Neues zu schaffen und Altes loszulassen.{" "}
              <strong>MTM Möbel Transport Montage aus Hannover</strong> ist Ihr
              Partner für fachgerechte Entrümpelung und umweltgerechte
              Entsorgung. Ob Keller, Dachboden, Wohnung, Haus oder Gewerberäume –
              wir arbeiten <strong>schnell, sauber und diskret</strong>, damit
              Sie sich um nichts kümmern müssen.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Was uns besonders macht</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Diskretion & Sensibilität:</strong> Respektvoll und
                zuverlässig, auch bei Haushaltsauflösungen.
              </li>
              <li>
                <strong>Sauberkeit & Effizienz:</strong> Besenreine Übergabe und
                schnelle Abwicklung.
              </li>
              <li>
                <strong>Fachgerechte Entsorgung:</strong> Recycling und
                Mülltrennung nach gesetzlichen Vorgaben.
              </li>
              <li>
                <strong>Komplettservice:</strong> Von Demontage über Abtransport
                bis zur Entsorgung alles aus einer Hand.
              </li>
              <li>
                <strong>Flexibilität:</strong> Von kleinen Kellern bis zu
                kompletten Häusern oder Firmengebäuden.
              </li>
            </ul>
          </div>

          {/* Bild rechts */}
          <div className="relative w-full h-80 md:h-[500px]">
            <Image
              src="/services/entruempelung-hannover.png"
              alt="MTM Mitarbeiter bei Entrümpelung"
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
          Unsere Leistungen im Bereich Entrümpelung & Entsorgung
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Haushaltsauflösungen:</strong> Wohnungen, Häuser und
            Nachlässe – diskret und gründlich.
          </li>
          <li>
            <strong>Keller & Dachböden:</strong> Schaffung von Platz in lange
            ungenutzten Bereichen.
          </li>
          <li>
            <strong>Büro- & Gewerberäume:</strong> Schnelle Entrümpelung für die
            sofortige Weiternutzung.
          </li>
          <li>
            <strong>Sperrmüll & Sonderabfälle:</strong> Fachgerechter Abtransport
            und Entsorgung.
          </li>
          <li>
            <strong>Umweltgerechte Entsorgung:</strong> Recycling im Fokus für
            nachhaltige Lösungen.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          Warum MTM die richtige Wahl ist
        </h2>
        <p className="text-gray-700 mb-6">
          Unsere Kunden vertrauen auf unsere{" "}
          <strong>Zuverlässigkeit, Diskretion und saubere Arbeitsweise</strong>.
          Mit MTM haben Sie einen Partner, der Entrümpelung und Entsorgung{" "}
          <strong>professionell, transparent und fair</strong> durchführt – ohne
          versteckte Kosten, aber mit einem klaren Ablaufplan.
        </p>

        {/* CTA */}
        <div className="bg-red-600 text-white text-center py-10 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4">
            Sie benötigen eine Entrümpelung oder Entsorgung in Hannover?
          </h3>
          <p className="mb-6">
            Kontaktieren Sie uns jetzt – wir beraten Sie kostenlos und erstellen
            ein individuelles Angebot.
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
