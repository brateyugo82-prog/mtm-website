import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Nutzungsbedingungen | MTM Möbel Transport Montage",
  description:
    "Nutzungsbedingungen für den MTM Publishing Agent und die IntelliAgent-Integration.",
  openGraph: {
    title: "Nutzungsbedingungen | MTM Möbel Transport Montage",
    description:
      "Hier findest du die Nutzungsbedingungen für den MTM Publishing Agent.",
    url: "https://www.mtm-service.de/terms",
    siteName: "MTM Möbel Transport Montage",
    locale: "de_DE",
    type: "article",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 px-6 py-28 leading-relaxed">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-8 text-center">
        <Link href="/" className="hover:text-red-500">
          Startseite
        </Link>{" "}
        › <span className="text-gray-300">Nutzungsbedingungen</span>
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
        Nutzungsbedingungen
      </h1>

      <div className="max-w-3xl mx-auto space-y-10 text-gray-300">
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-400">1. Zweck</h2>
          <p>
            Der MTM Publishing Agent automatisiert die Erstellung und Veröffentlichung
            von Social-Media-Inhalten für MTM Möbel Transport Montage. Ziel ist es,
            Prozesse zu optimieren und Marketing-Workflows effizienter zu gestalten.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-yellow-400">2. Nutzung</h2>
          <p>
            Dieser Dienst ist ausschließlich für die interne Nutzung durch MTM und
            autorisierte Administratoren bestimmt. Eine Nutzung durch Dritte ist ohne
            vorherige schriftliche Zustimmung nicht gestattet.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-green-400">3. Inhalte</h2>
          <p>
            Alle generierten Inhalte bleiben das geistige Eigentum von MTM Möbel
            Transport Montage. Die Nutzung, Vervielfältigung oder Weitergabe ohne
            ausdrückliche Genehmigung ist untersagt.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-purple-400">4. Haftung</h2>
          <p>
            MTM übernimmt keine Verantwortung für Ausfälle, technische Fehler oder
            Einschränkungen, die durch externe Plattformen wie Meta, TikTok, LinkedIn
            oder Instagram entstehen. Alle Integrationen erfolgen im Rahmen der
            jeweiligen API-Richtlinien dieser Anbieter.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-orange-400">5. Änderungen</h2>
          <p>
            Wir behalten uns vor, diese Nutzungsbedingungen jederzeit anzupassen,
            um rechtliche, technische oder betriebliche Änderungen zu berücksichtigen.
            Die fortgesetzte Nutzung des Dienstes gilt als Zustimmung zu den
            aktualisierten Bedingungen.
          </p>
        </section>
      </div>

      <footer className="mt-16 text-sm text-gray-500 border-t border-gray-700 pt-4 text-center">
        © {new Date().getFullYear()} MTM Möbel Transport Montage. Alle Rechte vorbehalten.
      </footer>
    </main>
  );
}
