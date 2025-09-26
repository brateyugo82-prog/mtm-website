import React from "react";

export default function TermsPage() {
  return (
    <main className="bg-[#0f172a] text-gray-900 min-h-screen">
      {/* Abstand nach Header */}
      <section className="max-w-4xl mx-auto px-6 pt-48 pb-20">
        <div className="bg-white rounded-2xl shadow-lg p-10 space-y-8">
          <h1 className="text-3xl font-bold text-red-600">
            Nutzungsbedingungen
          </h1>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-2">1. Zweck</h2>
              <p>
                Der MTM Publishing Agent automatisiert die Erstellung und
                Veröffentlichung von Social-Media-Inhalten für MTM Möbel Transport Montage.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">2. Nutzung</h2>
              <p>
                Dieser Dienst ist ausschließlich für die interne Nutzung durch MTM
                und autorisierte Administratoren bestimmt. Eine Nutzung durch Dritte
                ist ohne vorherige schriftliche Zustimmung nicht gestattet.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">3. Inhalte</h2>
              <p>
                Alle generierten Inhalte bleiben das geistige Eigentum von MTM Möbel
                Transport Montage.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">4. Haftung</h2>
              <p>
                MTM übernimmt keine Verantwortung für Fehler oder Ausfälle, die durch
                Drittanbieter-Plattformen wie TikTok, LinkedIn oder Instagram verursacht werden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">5. Änderungen</h2>
              <p>
                Wir behalten uns vor, diese Bedingungen von Zeit zu Zeit zu ändern.
                Die fortgesetzte Nutzung des Dienstes gilt als Zustimmung zu den
                aktualisierten Bedingungen.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
