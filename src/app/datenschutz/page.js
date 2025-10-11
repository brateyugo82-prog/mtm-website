import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Datenschutzerklärung | MTM Möbel Transport Montage",
  description:
    "Datenschutzerklärung der MTM Möbel Transport Montage – Informationen gemäß DSGVO über die Erhebung, Verarbeitung und Nutzung personenbezogener Daten.",
  openGraph: {
    title: "Datenschutzerklärung | MTM Möbel Transport Montage",
    description:
      "Erfahre, wie MTM Möbel Transport Montage personenbezogene Daten gemäß DSGVO schützt und verarbeitet.",
    url: "https://www.mtm-service.de/datenschutz",
    siteName: "MTM Möbel Transport Montage",
    locale: "de_DE",
    type: "article",
  },
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 px-6 py-28 leading-relaxed">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-8 text-center">
        <Link href="/" className="hover:text-red-500">
          Startseite
        </Link>{" "}
        › <span className="text-gray-300">Datenschutzerklärung</span>
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
        Datenschutzerklärung
      </h1>

      {/* Inhalt */}
      <div className="max-w-3xl mx-auto space-y-10 text-gray-300">
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-400">
            1. Verantwortlicher
          </h2>
          <p>
            Tim Precan <br />
            MTM Möbel Transport Montage <br />
            Flüggestraße 19 <br />
            30161 Hannover <br />
            Deutschland <br />
            E-Mail:{" "}
            <a
              href="mailto:info@mtm-service.de"
              className="text-red-400 underline"
            >
              info@mtm-service.de
            </a>
            <br />
            Telefon:{" "}
            <a href="tel:+4951160978240" className="text-blue-400 underline">
              0511 / 60978240
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-yellow-400">
            2. Erhebung und Speicherung personenbezogener Daten
          </h2>
          <p>
            Wir erheben personenbezogene Daten, wenn Sie unser Kontaktformular
            nutzen, uns eine E-Mail schreiben oder telefonisch kontaktieren.
            Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage
            verwendet und nicht ohne Ihre Zustimmung an Dritte weitergegeben.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-green-400">
            3. Cookies
          </h2>
          <p>
            Unsere Website verwendet Cookies, um die Nutzung zu optimieren.
            Einige Cookies sind technisch notwendig, andere helfen uns, Ihr
            Erlebnis zu verbessern. Sie können die Verwendung über unseren
            Cookie-Banner steuern oder in Ihrem Browser deaktivieren.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-purple-400">
            4. Hosting
          </h2>
          <p>
            Unsere Website wird von{" "}
            <strong>Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA</strong>{" "}
            gehostet. Beim Aufruf unserer Website werden automatisch
            technische Daten (z. B. IP-Adresse, Browsertyp, Datum und Uhrzeit
            des Zugriffs) in Server-Logfiles gespeichert. Diese Daten sind
            notwendig, um den sicheren Betrieb der Website zu gewährleisten.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-orange-400">
            5. Rechte der betroffenen Personen
          </h2>
          <p>
            Sie haben das Recht, jederzeit unentgeltlich Auskunft über Ihre bei
            uns gespeicherten personenbezogenen Daten zu erhalten. Zudem haben
            Sie das Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
            Wenden Sie sich hierzu bitte direkt an uns unter{" "}
            <a
              href="mailto:info@mtm-service.de"
              className="text-red-400 underline"
            >
              info@mtm-service.de
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-pink-400">
            6. Änderungen dieser Datenschutzerklärung
          </h2>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung gelegentlich
            anzupassen, um sie an geänderte rechtliche Rahmenbedingungen oder
            technische Entwicklungen anzupassen. Maßgeblich ist stets die
            aktuelle Version, die auf dieser Website veröffentlicht ist.
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
