import Image from "next/image";

export default function UmzuegePage() {
  return (
    <main className="bg-gray-900 text-gray-900">
      {/* Weiße Box mit viel Abstand nach oben */}
      <section className="max-w-6xl mx-auto px-6 pt-60 pb-20">
        <div className="bg-white rounded-2xl shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text links */}
          <div>
            <h1 className="text-3xl font-bold text-red-600 mb-4">Umzüge</h1>
            <p className="text-base text-gray-700 leading-relaxed">
              Komplettlösungen für Privat- und Firmenumzüge. 
              Von der Planung über Verpackung bis zum Transport – 
              wir übernehmen alles, damit Ihr Umzug stressfrei 
              und reibungslos verläuft.
            </p>
          </div>

          {/* Bilder rechts */}
          <div className="grid grid-cols-2 gap-6">
            <div className="w-full h-56 relative">
              <Image
                src="/services/umzuege1.png"
                alt="MTM Mitarbeiter tragen Kartons"
                fill
                priority
                className="object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full h-56 relative">
              <Image
                src="/services/umzuege2.png"
                alt="MTM Team beim Umzugstransport"
                fill
                priority
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
