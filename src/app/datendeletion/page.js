
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Datenlöschung | MTM Möbel Transport Montage",
  description:
    "Anleitung zur Löschung deiner gespeicherten Daten bei MTM Möbel Transport Montage gemäß DSGVO.",
  openGraph: {
    title: "Datenlöschung | MTM Möbel Transport Montage",
    description:
      "So kannst du deine personenbezogenen Daten bei MTM Möbel Transport Montage löschen lassen – schnell und DSGVO-konform.",
    url: "https://www.mtm-service.de/datendeletion",
    siteName: "MTM Möbel Transport Montage",
    locale: "de_DE",
    type: "article",
  },
};

export default function DataDeletionPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 px-6 py-28 leading-relaxed">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-8 text-center">
        <Link href="/" className="hover:text-red-500">
          Startseite
        </Link>{" "}
        › <span className="text-gray-300">Datenlöschung</span>
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

      {/* Hauptinhalt */}
      <h1 className="text-4xl font-bold mb-6 text-red-500 text-center">
        Löschung deiner personenbezogenen Daten
      </h1>

      <div className="max-w-3xl mx-auto">
        <p className="mb-6 text-gray-200 text-center">
          Der Schutz deiner Daten ist uns wichtig. Wenn du über unsere Website,
          Social-Media-Kanäle oder Kontaktformulare personenbezogene Daten
          übermittelt hast, kannst du jederzeit die vollständige Löschung dieser
          Daten gemäß <strong>Art. 17 DSGVO („Recht auf Vergessenwerden“)</strong> beantragen.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3 text-green-400">
          🔒 So beantragst du die Löschung
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-8">
          <li>
            Sende eine E-Mail mit dem Betreff{" "}
            <strong>„Datenlöschung“</strong> an{" "}
            <a
              href="mailto:info@mtm-service.de"
              className="text-red-500 underline"
            >
              info@mtm-service.de
            </a>
          </li>
          <li>
            Gib an, über welchen Kanal (Website, Instagram, Facebook usw.) du
            mit uns Kontakt hattest.
          </li>
          <li>
            Wir bestätigen den Eingang und löschen deine gespeicherten Daten
            innerhalb von <strong>14 Tagen</strong>.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3 text-blue-400">
          🌐 Löschung über Social-Media-Plattformen
        </h2>
        <p className="mb-6 text-gray-300">
          Wenn du über eine Plattform wie Facebook oder Instagram mit uns
          interagiert hast, kannst du dort den Zugriff auf unsere App entfernen.
          Dadurch werden alle über die Plattform gespeicherten Daten ebenfalls gelöscht.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3 text-purple-400">
          🔗 Direkter Link zur Datenlöschung (Meta-App)
        </h2>
        <p className="mb-2 text-gray-300">
          Dies ist der offizielle Link zur Löschanleitung gemäß den Richtlinien
          von Meta / Facebook / Instagram:
        </p>
        <a
          href="https://www.mtm-service.de/datendeletion"
          className="text-red-400 underline break-all"
        >
          https://www.mtm-service.de/datendeletion
        </a>

        <h2 className="text-2xl font-semibold mt-10 mb-3 text-yellow-400">
          🧾 Verantwortlich für die Datenverarbeitung
        </h2>
        <address className="not-italic text-gray-300">
          <p>MTM – Möbel Transport Montage</p>
          <p>Hannover, Deutschland</p>
          <p>
            E-Mail:{" "}
            <a
              href="mailto:info@mtm-service.de"
              className="text-red-500 underline"
            >
              info@mtm-service.de
            </a>
          </p>
        </address>
      </div>

      <footer className="mt-12 text-sm text-gray-500 border-t border-gray-700 pt-4 text-center">
        © {new Date().getFullYear()} MTM Möbel Transport Montage. Alle Rechte vorbehalten.
      </footer>
    </main>
  );
}
