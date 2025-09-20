import React from "react";

export default function ImpressumPage() {
  return (
    <main className="bg-[#0f172a] text-gray-900 min-h-screen">
      {/* Abstand nach Header */}
      <section className="max-w-4xl mx-auto px-6 pt-48 pb-20">
        <div className="bg-white rounded-2xl shadow-lg p-10 space-y-8">
          <h1 className="text-3xl font-bold text-red-600">Impressum</h1>

          <div className="space-y-6">
            <section>
              <p>
                <strong>MTM Möbel Transport Montage</strong> <br />
                Flüggestraße 19 <br />
                30161 Hannover <br />
                Deutschland
              </p>
              <p className="mt-4">
                Telefon: 0511 / 60978240 <br />
                E-Mail: info@mtm-service.de
              </p>
              <p className="mt-4">Inhaber: Tim Precan</p>
              <p className="mt-4">Umsatzsteuer-ID: DE338555383</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">Haftungsausschluss</h2>
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
                Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
                keine Gewähr übernehmen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
                Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
                Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
                des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
                Autors bzw. Erstellers.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
