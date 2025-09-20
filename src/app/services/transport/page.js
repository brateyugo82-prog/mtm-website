import Image from "next/image";

export default function TransportPage() {
  return (
    <main className="bg-gray-900 text-gray-900">
      {/* Weiße Box mit viel Abstand nach oben */}
      <section className="max-w-6xl mx-auto px-6 pt-60 pb-20">
        <div className="bg-white rounded-2xl shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text links */}
          <div>
            <h1 className="text-3xl font-bold text-red-600 mb-4">Transport</h1>
            <p className="text-base text-gray-700 leading-relaxed">
              Unser Transportservice sorgt dafür, dass Ihre Möbel und Objekte
              zuverlässig, schnell und termingerecht ans Ziel kommen. Mit unserem
              modernen Fuhrpark und erfahrenen Mitarbeitern garantieren wir höchste
              Sorgfalt bei jedem Auftrag.
            </p>
          </div>

          {/* Bilder rechts */}
          <div className="grid grid-cols-2 gap-6">
            <div className="w-full h-56 relative">
              <Image
                src="/services/transport1.png"
                alt="MTM Mitarbeiter laden Sofa in Transporter"
                fill
                priority
                className="object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full h-56 relative">
              <Image
                src="/services/transport2.png"
                alt="MTM Mitarbeiter sichern Möbel mit Spanngurten"
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
