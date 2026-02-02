import Image from "next/image";
import {
  PhoneIcon,
  UserIcon,
  DocumentTextIcon,
  CalendarDaysIcon,
  TruckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Unser Ablauf | MTM Möbel Transport Montage Hannover",
  description:
    "So läuft Ihr Umzug mit MTM ab: Kontakt, Besichtigung, Angebot, Terminvereinbarung und Durchführung – professionell & transparent.",
};

export default function AblaufPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Header-Bild */}
      <section className="relative h-[300px] md:h-[400px]">
        <Image
          src="/header-services111.png"
          alt="MTM Ablauf"
          fill
          priority
          className="object-cover object-center brightness-75"
        />
      </section>

      {/* Überschrift */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">
          Unser Ablauf – Schritt für Schritt zu Ihrem Umzug
        </h1>
      </div>

      {/* Ablauf Diagramm */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 text-center">
          
          {/* Schritt 1 */}
          <div className="flex-1 flex flex-col items-center">
            <PhoneIcon className="h-16 w-16 text-red-600 mb-4" />
            <h3 className="text-lg font-semibold">1. Sie rufen uns an</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Erste Kontaktaufnahme per Telefon oder Kontaktformular.
            </p>
          </div>

          <ArrowRightIcon className="hidden md:block h-10 w-10 text-red-600 mt-6" />

          {/* Schritt 2 */}
          <div className="flex-1 flex flex-col items-center">
            <UserIcon className="h-16 w-16 text-orange-500 mb-4" />
            <h3 className="text-lg font-semibold">2. Besichtigung vor Ort</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Unser Außendienstmitarbeiter schaut sich alles an.
            </p>
          </div>

          <ArrowRightIcon className="hidden md:block h-10 w-10 text-orange-500 mt-6" />

          {/* Schritt 3 */}
          <div className="flex-1 flex flex-col items-center">
            <DocumentTextIcon className="h-16 w-16 text-yellow-500 mb-4" />
            <h3 className="text-lg font-semibold">3. Angebot erhalten</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Sie bekommen ein transparentes, faires Angebot.
            </p>
          </div>

          <ArrowRightIcon className="hidden md:block h-10 w-10 text-yellow-500 mt-6" />

          {/* Schritt 4 */}
          <div className="flex-1 flex flex-col items-center">
            <CalendarDaysIcon className="h-16 w-16 text-lime-500 mb-4" />
            <h3 className="text-lg font-semibold">4. Termin vereinbaren</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Wir stimmen den Umzugstermin nach Ihren Wünschen ab.
            </p>
          </div>

          <ArrowRightIcon className="hidden md:block h-10 w-10 text-green-600 mt-6" />

          {/* Schritt 5 */}
          <div className="flex-1 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-4">
              <TruckIcon className="h-16 w-16 text-green-600" />
              <CheckCircleIcon className="h-10 w-10 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold">5. Umzug durchführen</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Unser Team erledigt alles professionell & stressfrei.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
