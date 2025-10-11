import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Impressum | MTM Möbel Transport Montage",
  description:
    "Impressum von MTM Möbel Transport Montage – gesetzliche Angaben gemäß § 5 TMG.",
  openGraph: {
    title: "Impressum | MTM Möbel Transport Montage",
    description:
      "Gesetzliche Pflichtangaben und Kontaktinformationen zu MTM Möbel Transport Montage.",
    url: "https://www.mtm-service.de/impressum",
    siteName: "MTM Möbel Transport Montage",
    locale: "de_DE",
    type: "article",
  },
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 px-6 py-28 leading-relaxed">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-8 text-center">
        <Link href="/" className="hover:text-red-500">
          Startseite
        </Link>{" "}
        › <span className="text-gray-300">Impressum</span>
      </nav>

      {/* MTM Logo zentriert */}
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
        Impressum
      </h1>

      <div className="max-w-3xl mx-auto space-y-10 text-gray-300">
        <section>
          <p>
            <strong>MTM Möbel Transport Montage</strong> <br />
            Flüggestraße 19 <br />
            30161 Hannover <br />
            Deutschland
          </p>

          <p className="mt-4">
            Telefon:{" "}
            <a href="tel:+4951160978240" className="text-blue-400 underline">
              0511 / 60978240
            </a>{" "}
            <br />
            E-Mail:{" "}
            <a
              href="mailto:info@mtm-service.de"
              className="text-red-400 underline"
            >
              info@mtm-service.de
            </a>
          </p>

          <p className="mt-4">Inhaber: Tim Precan</p>
          <p className="mt-4">Umsatzsteuer-ID: DE338555383</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-yellow-400">
            Haftungsausschluss
          </h2>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
            Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
            keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG
            für eigene Inhalte auf diesen Seiten verantwortlich. Nach §§ 8 bis 10 TMG
            sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-green-400">
            Urheberrecht
          </h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
            Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
            Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
            des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
            Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den
            privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-purple-400">
            Streitbeilegung
          </h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
            (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            . Wir sind nicht verpflichtet und nicht bereit, an einem
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </section>
      </div>

      <footer className="mt-16 text-sm text-gray-500 border-t border-gray-700 pt-4 text-center">
        © {new Date().getFullYear()} MTM Möbel Transport Montage. Alle Rechte vorbehalten.
      </footer>
    </main>
  );
}
