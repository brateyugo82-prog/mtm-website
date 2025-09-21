import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "MTM Blog – Umzugstipps für Hannover & Umgebung",
  description:
    "Hilfreiche Tipps zu Umzügen in Hannover: stressfrei umziehen, Möbel schützen und Checklisten für den perfekten Umzugstag.",
  keywords: [
    "Umzug Hannover",
    "Umzugsfirma Hannover",
    "Möbeltransport Hannover",
    "Möbelmontage Hannover",
    "Umzugstipps Hannover",
    "MTM Möbel Transport Montage",
  ],
  openGraph: {
    title: "MTM Blog – Umzugstipps für Hannover",
    description:
      "Ihr Partner in Hannover für Umzüge, Möbeltransporte und Montage. Lesen Sie unsere Tipps für einen stressfreien Umzug.",
    url: "https://mtm-service.de/blog",
    siteName: "MTM Möbel Transport Montage",
    images: [
      {
        url: "/header-blog.png",
        width: 1200,
        height: 630,
        alt: "MTM Blog Umzug Hannover",
      },
    ],
    locale: "de_DE",
    type: "article",
  },
};

const blogPosts = [
  {
    slug: "stressfreier-umzug",
    title: "5 Tipps für einen stressfreien Umzug",
    description: "So gelingt Ihr Umzug stressfrei und organisiert.",
  },
  {
    slug: "moebel-schuetzen",
    title: "So schützen Sie Ihre Möbel beim Transport",
    description: "Tipps zum sicheren Verpacken und Transportieren.",
  },
  {
    slug: "umzug-checkliste",
    title: "Checkliste für den perfekten Umzugstag",
    description: "Behalten Sie den Überblick mit dieser praktischen Checkliste.",
  },
];

export default function BlogOverviewPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Header-Bild */}
      <div className="relative w-full h-[500px]">
        <Image
          src="/header-blog.png"
          alt="MTM Blog"
          fill
          className="object-cover"
        />
      </div>

      {/* Überschrift */}
      <div className="text-center py-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          MTM Blog
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Hilfreiche Tipps und Infos rund um Umzug, Möbeltransport & Montage
          in Hannover und Umgebung.
        </p>
      </div>

      {/* Inhalt kompakter */}
      <section className="max-w-6xl mx-auto px-6 mt-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="bg-white border rounded-2xl shadow hover:shadow-lg transition-shadow p-6">
                <h2 className="text-xl font-bold text-red-600 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-700">{post.description}</p>
                <span className="mt-4 inline-block text-red-600 font-semibold hover:underline">
                  Weiterlesen →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
