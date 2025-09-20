import React from "react";

export default function AgbPage() {
  return (
    <main className="bg-[#0f172a] text-gray-900 min-h-screen">
      {/* Abstand nach Header */}
      <section className="max-w-4xl mx-auto px-6 pt-48 pb-20">
        <div className="bg-white rounded-2xl shadow-lg p-10 space-y-8">
          <h1 className="text-3xl font-bold text-red-600">
            Allgemeine Geschäftsbedingungen (AGB)
          </h1>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-2">1. Geltungsbereich</h2>
              <p>
                Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge,
                Lieferungen und Leistungen zwischen <br />
                <strong>
                  MTM Möbel Transport Montage – Inhaber: Tim Precan
                </strong>
                , Flüggestraße 19, 30161 Hannover, <br />
                Telefon: 0511 60978240, E-Mail: info@mtm-service.de, <br />
                und unseren Kunden in ihrer zum Zeitpunkt des Vertragsabschlusses
                gültigen Fassung.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">2. Leistungen</h2>
              <p>
                Wir bieten Dienstleistungen in den Bereichen Möbeltransport,
                Umzüge, Montagearbeiten sowie Entrümpelung & Entsorgung an.
                Der genaue Leistungsumfang wird im individuellen Vertrag bzw.
                Auftrag festgelegt.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                3. Angebote und Vertragsschluss
              </h2>
              <p>
                Unsere Angebote sind freibleibend. Ein Vertrag kommt erst
                zustande, wenn wir die Annahme des Kunden schriftlich oder in
                Textform bestätigen oder die Leistung ausführen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                4. Preise und Zahlungsbedingungen
              </h2>
              <p>
                Sofern nicht anders vereinbart, verstehen sich alle Preise in
                Euro und inklusive gesetzlicher Umsatzsteuer. Zahlungen sind nach
                Abschluss der Leistung sofort ohne Abzug fällig. Teilzahlungen oder
                Vorauszahlungen können individuell vereinbart werden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">5. Pflichten des Kunden</h2>
              <p>
                Der Kunde ist verpflichtet, für einen freien Zugang zu den
                Transportwegen zu sorgen und uns rechtzeitig über besondere
                Umstände (z. B. schwierige Parkmöglichkeiten, empfindliche
                Möbelstücke) zu informieren. Eventuell erforderliche Genehmigungen
                (z. B. Halteverbotszonen) sind durch den Kunden zu beschaffen,
                sofern nicht anders vereinbart.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">6. Haftung</h2>
              <p>
                Wir haften für Schäden nur im Rahmen der gesetzlichen
                Bestimmungen. Für leichte Fahrlässigkeit haften wir nur bei
                Verletzung wesentlicher Vertragspflichten. Für Schäden durch
                unsachgemäße Verpackung seitens des Kunden übernehmen wir keine
                Haftung.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">7. Stornierung</h2>
              <p>
                Stornierungen sind bis 7 Tage vor dem vereinbarten Termin
                kostenlos möglich. Bei späteren Stornierungen behalten wir uns
                vor, eine angemessene Aufwandsentschädigung zu berechnen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">8. Schlussbestimmungen</h2>
              <p>
                Änderungen oder Ergänzungen dieser Geschäftsbedingungen bedürfen
                der Schriftform. Sollten einzelne Bestimmungen unwirksam sein,
                bleibt die Gültigkeit der übrigen Bestimmungen unberührt.
              </p>
              <p className="mt-4">
                Gerichtsstand ist, soweit gesetzlich zulässig, Hannover.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
