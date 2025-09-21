import Image from "next/image";

export const metadata = {
  title: "Umzüge Hannover | MTM Möbel Transport Montage",
  description:
    "Stressfreie Umzüge in Hannover & Umgebung – MTM übernimmt Planung, Verpackung, Transport & Montage. Privat, Firmen & Seniorenumzüge.",
  keywords: [
    "Umzug Hannover",
    "Umzugsfirma Hannover",
    "Privatumzug Hannover",
    "Firmenumzug Hannover",
    "Seniorenumzug Hannover",
  ],
};

export default function UmzuegePage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Header-Bild */}
      <section className="relative h-[300px] md:h-[400px]">
        <Image
          src="/header-services.svg"
          alt="MTM Umzugsleistungen"
          fill
          priority
          className="object-cover object-center brightness-75"
        />
      </section>

      {/* Content-Bereich mit H1, Text links + Bild rechts */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* Überschrift */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-red-600 mb-10 text-center md:text-left">
          Umzüge in Hannover & Umgebung – stressfrei mit MTM
        </h1>

        {/* Text + Bild nebeneinander */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div>
            <p className="text-lg text-gray-700 mb-8">
              Ein Umzug bedeutet oft Stress, Organisation und Zeitdruck –{" "}
              <strong>nicht mit uns</strong>. MTM Möbel Transport Montage aus
              Hannover bietet maßgeschneiderte Umzugslösungen, die alle Ihre
              Bedürfnisse abdecken. Egal ob privater Wohnungswechsel,
              Firmenumzug oder kompletter Standortwechsel: Wir kümmern uns
              darum, dass Ihr Umzug{" "}
              <strong>schnell, sicher und zuverlässig</strong> durchgeführt wird.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Was uns besonders macht</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Rundum-sorglos-Service:</strong> Von der Planung bis zum
                Auspacken – wir übernehmen alles.
              </li>
              <li>
                <strong>Persönliche Beratung:</strong> Jeder Umzug ist anders, wir
                erstellen ein individuelles Konzept.
              </li>
              <li>
                <strong>Erfahrene Umzugshelfer:</strong> Eingespieltes Team, das
                auch schwierige Situationen meistert.
              </li>
              <li>
                <strong>Sicherheit & Schutz:</strong> Verpackungsmaterialien,
                Decken und Tragehilfen schützen Ihre Möbel.
              </li>
              <li>
                <strong>Transparente Preise:</strong> Klare Angebote ohne
                versteckte Kosten.
              </li>
            </ul>
          </div>

          {/* Bild rechts */}
          <div className="relative w-full h-80 md:h-[500px]">
            <Image
              src="/services/umzuege-hannover.png"
              alt="MTM Mitarbeiter tragen Kartons"
              fill
              priority
              className="object-cover object-center rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold mt-10 mb-4">Unsere Umzugsleistungen</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Privatumzüge:</strong> Kleine Wohnungen oder große Häuser –
            wir bringen alles sicher ins neue Zuhause.
          </li>
          <li>
            <strong>Firmenumzüge:</strong> Büro, Kanzlei oder Praxis – wir sorgen
            für minimale Ausfallzeiten.
          </li>
          <li>
            <strong>Seniorenumzüge:</strong> Einfühlsam, respektvoll und mit
            Geduld.
          </li>
          <li>
            <strong>Full-Service-Umzüge:</strong> Auf Wunsch inkl. Ein- und
            Auspacken, Montage und Entsorgung alter Möbel.
          </li>
          <li>
            <strong>Regionale & überregionale Umzüge:</strong> Innerhalb
            Hannovers, Norddeutschlands oder deutschlandweit.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">Warum MTM Ihr idealer Umzugspartner ist</h2>
        <p className="text-gray-700 mb-6">
          Viele Umzugsfirmen bieten Transport an –{" "}
          <strong>wir bieten Lösungen</strong>. Zuverlässigkeit, persönlicher
          Service und höchste Sorgfalt stehen bei uns im Mittelpunkt. Kunden
          schätzen besonders unsere Termintreue, unser freundliches Team und
          unsere Flexibilität. Wir machen Ihren Umzug so angenehm wie möglich –
          stressfrei, fair und professionell.
        </p>

        {/* CTA */}
        <div className="bg-red-600 text-white text-center py-10 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4">
            Planen Sie einen Umzug in Hannover oder Umgebung?
          </h3>
          <p className="mb-6">
            Kontaktieren Sie uns noch heute – wir beraten Sie gerne und erstellen
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
