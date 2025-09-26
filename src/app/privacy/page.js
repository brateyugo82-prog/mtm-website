import React from "react";

export default function PrivacyPage() {
  return (
    <main className="bg-[#0f172a] text-gray-900 min-h-screen">
      {/* Abstand nach Header */}
      <section className="max-w-4xl mx-auto px-6 pt-48 pb-20">
        <div className="bg-white rounded-2xl shadow-lg p-10 space-y-8">
          <h1 className="text-3xl font-bold text-red-600">
            Datenschutzerklärung
          </h1>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-2">1. Erhobene Daten</h2>
              <p>
                Der MTM Publishing Agent verarbeitet Social-Media-Inhalte (Texte,
                Bilder, Videos) und verwendet API-Tokens, um Inhalte auf
                Drittanbieter-Plattformen zu veröffentlichen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">2. Keine personenbezogenen Daten</h2>
              <p>
                Dieser Dienst sammelt oder speichert keine personenbezogenen Daten
                von Nutzern von TikTok, Instagram oder LinkedIn.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">3. API-Zugangsdaten</h2>
              <p>
                API-Zugangstokens werden sicher gespeichert und ausschließlich für
                die Veröffentlichung von Inhalten auf autorisierten MTM-Firmenkonten
                verwendet.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">4. Drittanbieter-Dienste</h2>
              <p>
                Wir nutzen APIs von TikTok, LinkedIn und Instagram. Diese Dienste
                verarbeiten Daten gemäß ihren eigenen Datenschutzrichtlinien.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">5. Kontakt</h2>
              <p>
                MTM Möbel Transport Montage <br />
                Flüggestraße 19 <br />
                30161 Hannover <br />
                E-Mail: info@mtm-service.de <br />
                Telefon: 0511 / 60978240
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
