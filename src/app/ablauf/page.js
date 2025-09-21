import Image from "next/image";
import {
  PhoneIcon,
  UserIcon,
  DocumentTextIcon,
  CalendarDaysIcon,
  TruckIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Unser Ablauf | MTM Möbel Transport Montage Hannover",
  description:
    "So läuft Ihr Umzug mit MTM ab: Kontakt, Besichtigung, Angebot, Terminvereinbarung und Durchführung – professionell & transparent.",
  keywords: [
    "Umzug Ablauf Hannover",
    "Umzugsfirma Prozess Hannover",
    "MTM Möbel Transport Montage",
    "Umzug Angebot Hannover",
  ],
};

export default function AblaufPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Header-Bild */}
      <section className="relative h-[300px] md:h-[400px]">
        <Image
          src="/header-services.svg"
          alt="MTM Ablauf"
          fill
          priority
          className="object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white text-center drop-shadow-lg">
            Unser Ablauf – Schritt für Schritt zu Ihrem Umzug
          </h1>
        </div>
      </section>

      {/* Ablauf Diagramm */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Schritt 1 */}
          <div className="flex flex-col items-center text-center">
            <PhoneIcon className="h-12 w-12 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold">1. Sie rufen uns an</h3>
            <p className="text-gray-600 mt-2">
              Erste Kontaktaufnahme per Telefon oder Kontaktformular.
            </p>
          </div>

          <ArrowRightIcon className="hidden md:block h-8 w-8 text-gray-400" />

          {/* Schritt 2 */}
          <div className="flex flex-col items-center text-center">
            <UserIcon className="h-12 w-12 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold">2. Besichtigung vor Ort</h3>
            <p className="text-gray-600 mt-2">
              Unser Außendienstmitarbeiter schaut sich alles an.
            </p>
          </div>

          <ArrowRightIcon className="hidden md:block h-8 w-8 text-gray-400" />

          {/* Schritt 3 */}
          <div className="flex flex-col items-center text-center">
            <DocumentTextIcon className="h-12 w-12 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold">3. Angebot erhalten</h3>
            <p className="text-gray-600 mt-2">
              Sie bekommen ein transparentes, faires Angebot.
            </p>
          </div>

          <ArrowRightIcon className="hidden md:block h-8 w-8 text-gray-400" />

          {/* Schritt 4 */}
          <div className="flex flex-col items-center text-center">
            <CalendarDaysIcon className="h-12 w-12 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold">4. Termin vereinbaren</h3>
            <p className="text-gray-600 mt-2">
              Wir stimmen den Umzugstermin nach Ihren Wünschen ab.
            </p>
          </div>

          <ArrowRightIcon className="hidden md:block h-8 w-8 text-gray-400" />

          {/* Schritt 5 */}
          <div className="flex flex-col items-center text-center">
            <TruckIcon className="h-12 w-12 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold">5. Umzug durchführen</h3>
            <p className="text-gray-600 mt-2">
              Unser Team erledigt alles professionell & stressfrei.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
