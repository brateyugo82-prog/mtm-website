import React from "react";

export default function DatenschutzPage() {
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
              <h2 className="text-xl font-semibold mb-2">1. Verantwortlicher</h2>
              <p>
                Tim Precan <br />
                MTM Möbel Transport Montage <br />
                Flüggestraße 19 <br />
                30161 Hannover <br />
                Deutschland <br />
                E-Mail: info@mtm-service.de <br />
                Telefon: 0511 / 60978240
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                2. Erhebung und Speicherung personenbezogener Daten
              </h2>
              <p>
                Wir erheben personenbezogene Daten, wenn Sie unser Kontaktformular
                nutzen, uns eine E-Mail schreiben oder uns telefonisch
                kontaktieren. Diese Daten werden ausschließlich zur Bearbeitung
                Ihrer Anfrage verwendet und nicht ohne Ihre Zustimmung an Dritte
                weitergegeben.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">3. Cookies</h2>
              <p>
                Unsere Website verwendet Cookies. Cookies sind kleine Textdateien,
                die auf Ihrem Endgerät gespeichert werden. Einige Cookies sind
                technisch notwendig, andere dienen dazu, die Nutzung unserer
                Website zu verbessern. Sie können der Verwendung von Cookies über
                unseren Cookie-Banner zustimmen oder widersprechen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">4. Hosting</h2>
              <p>
                Unsere Website wird von Vercel Inc. gehostet. Beim Besuch der Seite
                werden automatisch technische Daten wie Ihre IP-Adresse, Datum und
                Uhrzeit des Zugriffs sowie Browserinformationen in Server-Logfiles
                gespeichert. Diese Daten sind für den sicheren Betrieb notwendig
                und werden automatisch gelöscht.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                5. Rechte der betroffenen Personen
              </h2>
              <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Ihre bei
                uns gespeicherten personenbezogenen Daten zu erhalten. Außerdem
                haben Sie das Recht auf Berichtigung, Sperrung oder Löschung dieser
                Daten. Wenn Sie eine erteilte Einwilligung zur Verarbeitung
                widerrufen möchten, genügt eine formlose Mitteilung an uns.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">6. Kontakt</h2>
              <p>
                Wenn Sie Fragen zum Datenschutz haben, wenden Sie sich bitte an:
                <br />
                Tim Precan <br />
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
