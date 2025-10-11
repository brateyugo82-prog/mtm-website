import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Allgemeine Geschäftsbedingungen (AGB) | MTM Möbel Transport Montage",
  description:
    "AGB der MTM Möbel Transport Montage – rechtliche Grundlagen für Transport-, Umzugs- und Montagedienstleistungen.",
  openGraph: {
    title: "Allgemeine Geschäftsbedingungen (AGB) | MTM Möbel Transport Montage",
    description:
      "Hier findest du die Allgemeinen Geschäftsbedingungen (AGB) von MTM Möbel Transport Montage.",
    url: "https://www.mtm-service.de/agb",
    siteName: "MTM Möbel Transport Montage",
    locale: "de_DE",
    type: "article",
  },
};

export default function AgbPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 px-6 py-28 leading-relaxed">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-8 text-center">
        <Link href="/" className="hover:text-red-500">
          Startseite
        </Link>{" "}
        › <span className="text-gray-300">AGB</span>
      </nav>

      {/* MTM Logo */}
      <div className="flex justify-center mb-10">
        <Image
          src="/logo.svg"
          alt="MTM Logo"
          width={260}
          height={140}
          className="opacity-90"
        />
      </div>

      {/* Titel */}
      <h1 className="text-4xl font-bold mb-6 text-red-500 text-center">
        Allgemeine Geschäftsbedingungen (AGB)
      </h1>

      {/* Inhalt */}
      <div className="max-w-3xl mx-auto space-y-10 text-gray-300">
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-400">
            1. Geltungsbereich
          </h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge,
            Lieferungen und Leistungen zwischen{" "}
            <strong>MTM Möbel Transport Montage – Inhaber: Tim Precan</strong>,
            Flüggestraße 19, 30161 Hannover, Telefon: 0511 / 60978240,
            E-Mail:{" "}
            <a
              href="mailto:info@mtm-service.de"
              className="text-red-400 underline"
            >
              info@mtm-service.de
            </a>{" "}
            und unseren Kunden in ihrer zum Zeitpunkt des Vertragsabschlusses
            gültigen Fassung.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-yellow-400">
            2. Leistungen
          </h2>
          <p>
            Wir bieten Dienstleistungen in den Bereichen Möbeltransport, Umzüge,
            Montagearbeiten sowie Entrümpelung & Entsorgung an. Der genaue
            Leistungsumfang wird im individuellen Vertrag bzw. Auftrag
            festgelegt.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-green-400">
            3. Angebote und Vertragsschluss
          </h2>
          <p>
            Unsere Angebote sind freibleibend. Ein Vertrag kommt erst zustande,
            wenn wir die Annahme des Kunden schriftlich oder in Textform
            bestätigen oder die Leistung ausführen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-purple-400">
            4. Preise und Zahlungsbedingungen
          </h2>
          <p>
            Sofern nicht anders vereinbart, verstehen sich alle Preise in Euro
            und inklusive gesetzlicher Umsatzsteuer. Zahlungen sind nach
            Abschluss der Leistung sofort ohne Abzug fällig. Teilzahlungen oder
            Vorauszahlungen können individuell vereinbart werden.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-orange-400">
            5. Pflichten des Kunden
          </h2>
          <p>
            Der Kunde ist verpflichtet, für einen freien Zugang zu den
            Transportwegen zu sorgen und uns rechtzeitig über besondere
            Umstände (z. B. schwierige Parkmöglichkeiten, empfindliche
            Möbelstücke) zu informieren. Eventuell erforderliche Genehmigungen
            (z. B. Halteverbotszonen) sind durch den Kunden zu beschaffen,
            sofern nicht anders vereinbart.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-pink-400">
            6. Haftung
          </h2>
          <p>
            Wir haften für Schäden nur im Rahmen der gesetzlichen Bestimmungen.
            Für leichte Fahrlässigkeit haften wir nur bei Verletzung wesentlicher
            Vertragspflichten. Für Schäden durch unsachgemäße Verpackung seitens
            des Kunden übernehmen wir keine Haftung.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-yellow-400">
            7. Stornierung
          </h2>
          <p>
            Stornierungen sind bis 7 Tage vor dem vereinbarten Termin kostenlos
            möglich. Bei späteren Stornierungen behalten wir uns vor, eine
            angemessene Aufwandsentschädigung zu berechnen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-400">
            8. Schlussbestimmungen
          </h2>
          <p>
            Änderungen oder Ergänzungen dieser Geschäftsbedingungen bedürfen der
            Schriftform. Sollten einzelne Bestimmungen unwirksam sein, bleibt die
            Gültigkeit der übrigen Bestimmungen unberührt.
          </p>
          <p className="mt-4">
            Gerichtsstand ist, soweit gesetzlich zulässig, Hannover.
          </p>
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-sm text-gray-500 border-t border-gray-700 pt-4 text-center">
        © {new Date().getFullYear()} MTM Möbel Transport Montage. Alle Rechte vorbehalten.
      </footer>
    </main>
  );
}
