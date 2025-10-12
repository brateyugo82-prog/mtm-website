"use client";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sabine K., Hannover",
      text: "Der Umzug mit MTM lief absolut stressfrei. Das Team war pünktlich, freundlich und sehr sorgfältig. Jeder Karton und jedes Möbelstück kam unversehrt an – wirklich empfehlenswert!",
    },
    {
      name: "Thomas R., Hamburg",
      text: "Ich war beeindruckt von der schnellen Möbelmontage. Mein komplettes Büro stand in kürzester Zeit. Klare Preise, top Service – gerne wieder.",
    },
    {
      name: "Familie M., Hameln",
      text: "MTM hat unseren Umzug perfekt organisiert. Von der Planung über den Transport bis zum Aufbau war alles professionell. Besonders toll fanden wir die transparente Kommunikation.",
    },
    {
      name: "Julia S., Hannover",
      text: "Sehr freundliches Team! Alle Möbel wurden schnell und sorgfältig aufgebaut. Ich musste mich um nichts kümmern – absolut zuverlässig.",
    },
    {
      name: "Michael L., Bremen",
      text: "Preis-Leistung top! Der gesamte Transport verlief reibungslos, die Mitarbeiter waren hilfsbereit und haben auch Extrawünsche berücksichtigt.",
    },
    {
      name: "Petra H., Hannover",
      text: "Ich hatte vorher schlechte Erfahrungen mit anderen Firmen – aber MTM hat mich komplett überzeugt. Seriös, freundlich und professionell!",
    },
    {
      name: "Dr. Weber, Hannover",
      text: "Sehr professionelle Abwicklung meines Büro-Umzugs. Alles lief nach Plan, keine Schäden, keine Überraschungen – kann ich nur weiterempfehlen.",
    },
    // 🆕 Neue Testimonials
    {
      name: "Familie M., Hannover",
      text: "Noch nie lief ein Umzug so reibungslos. Das Team war pünktlich, höflich und extrem sorgfältig.",
    },
    {
      name: "Zentrallogistik eines Möbelhauses (anonymisiert)",
      text: "Endlich mal ein Dienstleister, der hält, was er verspricht. Wir arbeiten weiter mit MTM!",
    },
    {
      name: "Online-Shop für Wohnaccessoires",
      text: "Wir waren begeistert von der Expresslieferung – ein echter Gamechanger.",
    },
  ];

  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-900">
          Was unsere Kunden sagen
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white p-10 rounded-2xl shadow-md hover:shadow-2xl transition text-left flex flex-col"
            >
              <ChatBubbleLeftRightIcon className="h-10 w-10 text-red-600 mb-4" />
              <p className="text-gray-700 italic mb-6">“{testimonial.text}”</p>
              <p className="font-semibold text-red-600 mt-auto">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
