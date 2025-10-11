import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | MTM Möbel Transport Montage",
  description:
    "Datenschutzerklärung für den MTM Publishing Agent – Informationen zu API-Tokens, Plattformzugriff und Datenschutzrichtlinien.",
  openGraph: {
    title: "Privacy Policy | MTM Möbel Transport Montage",
    description:
      "Erklärung zum Datenschutz und zur sicheren Verwendung von API-Zugangsdaten durch den MTM Publishing Agent.",
    url: "https://www.mtm-service.de/privacy",
    siteName: "MTM Möbel Transport Montage",
    locale: "de_DE",
    type: "article",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 px-6 py-28 leading-relaxed">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-8 text-center">
        <Link href="/" className="hover:text-red-500">
          Startseite
        </Link>{" "}
        › <span className="text-gray-300">Privacy Policy</span>
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
        Datenschutzerklärung für den MTM Publishing Agent
      </h1>

      {/* Inhalt */}
      <div className="max-w-3xl mx-auto space-y-10 text-gray-300">
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-400">
            1. Erhobene Daten
          </h2>
          <p>
            Der MTM Publishing Agent verarbeitet ausschließlich Social-Media-Inhalte
            (Texte, Bilder, Videos) und verwendet API-Tokens, um Inhalte auf
            autorisierten Plattformen (z. B. Meta, Instagram, LinkedIn, TikTok)
            automatisiert zu veröffentlichen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-green-400">
            2. Keine personenbezogenen Daten
          </h2>
          <p>
            Dieser Dienst sammelt oder speichert keine personenbezogenen Daten
            von Nutzern der Social-Media-Plattformen. Alle erstellten Inhalte
            werden ausschließlich im Auftrag von{" "}
            <strong>MTM Möbel Transport Montage</strong> verarbeitet und verwaltet.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-yellow-400">
            3. API-Zugangsdaten
          </h2>
          <p>
            API-Tokens werden sicher und verschlüsselt gespeichert. Sie werden
            ausschließlich zur Authentifizierung und Veröffentlichung auf
            den offiziellen Firmenkonten von MTM verwendet. Dritte haben keinen
            Zugriff auf diese Tokens.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-purple-400">
            4. Drittanbieter-Dienste
          </h2>
          <p>
            Wir nutzen APIs und Schnittstellen externer Plattformen wie{" "}
            <strong>Meta (Facebook/Instagram)</strong>,{" "}
            <strong>LinkedIn</strong> und <strong>TikTok</strong>.  
            Die Verarbeitung erfolgt gemäß den jeweiligen Datenschutzrichtlinien
            dieser Anbieter. MTM hat keinen Einfluss auf die Datenverarbeitung
            auf Seiten dieser Plattformen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-pink-400">
            5. Kontakt
          </h2>
          <p>
            MTM Möbel Transport Montage <br />
            Flüggestraße 19 <br />
            30161 Hannover <br />
            E-Mail:{" "}
            <a
              href="mailto:info@mtm-service.de"
              className="text-red-400 underline"
            >
              info@mtm-service.de
            </a>{" "}
            <br />
            Telefon:{" "}
            <a href="tel:+4951160978240" className="text-blue-400 underline">
              0511 / 60978240
            </a>
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
