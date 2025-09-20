export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Unsere Leistungen
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {/* Transport */}
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-4">Transport</h3>
          <p>
            Schneller, sicherer Möbeltransport – effizient und zuverlässig in
            ganz Deutschland.
          </p>
        </div>

        {/* Montage */}
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-4">Montage</h3>
          <p>
            Fachgerechter Auf- und Abbau von Möbeln jeder Art – vom Privatumzug
            bis zum Büro.
          </p>
        </div>

        {/* Umzüge */}
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-4">Umzüge</h3>
          <p>
            Komplettlösungen für Privat und Gewerbe – stressfrei & professionell
            organisiert.
          </p>
        </div>
      </div>
    </section>
  )
}
