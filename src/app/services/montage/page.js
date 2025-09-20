import Image from "next/image";

export default function MontagePage() {
  return (
    <main className="bg-gray-900 text-gray-900">
      {/* Weiße Box mit viel Abstand nach oben */}
      <section className="max-w-6xl mx-auto px-6 pt-60 pb-20">
        <div className="bg-white rounded-2xl shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text links */}
          <div>
            <h1 className="text-3xl font-bold text-red-600 mb-4">
              Montage
            </h1>
            <p className="text-base text-gray-700 leading-relaxed">
              Fachgerechter Auf- und Abbau von Möbeln aller Art. 
              Ob Privatwohnung oder Büro – wir übernehmen die Montage 
              effizient und zuverlässig, inklusive professionellem Werkzeug.
            </p>
          </div>

          {/* Bilder rechts */}
          <div className="grid grid-cols-2 gap-6">
            <div className="w-full h-56 relative">
              <Image
                src="/services/montage1.png"
                alt="MTM Mitarbeiter schraubt Möbel zusammen"
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full h-56 relative">
              <Image
                src="/services/montage2.png"
                alt="MTM Mitarbeiter bauen Esstisch auf"
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
