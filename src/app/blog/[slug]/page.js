import Image from "next/image";
import Link from "next/link";

const blogPosts = {
  "stressfreier-umzug": {
    title: "5 Tipps für einen stressfreien Umzug",
    description:
      "So gelingt Ihr Umzug stressfrei und organisiert – Tipps von MTM Möbel Transport Montage in Hannover.",
    keywords: [
      "Umzug Hannover",
      "Stressfreier Umzug",
      "Umzugsfirma Hannover",
      "Möbeltransport Hannover",
    ],
    content: `
1. Frühzeitig mit der Planung beginnen
2. Kartons richtig beschriften
3. Möbel schützen und sicher verpacken
4. Helfer organisieren
5. Wichtige Dokumente separat aufbewahren
    `,
    image: "/blog/stressfreier-umzug.png",
  },
  "moebel-schuetzen": {
    title: "So schützen Sie Ihre Möbel beim Transport",
    description:
      "Praktische Tipps zum sicheren Verpacken und Transportieren Ihrer Möbel in Hannover.",
    keywords: [
      "Möbel schützen Hannover",
      "Umzug Möbeltransport",
      "Möbelverpackung Tipps",
    ],
    content: `
- Decken und Folien nutzen
- Empfindliche Kanten extra schützen
- Möbel demontieren, wenn möglich
- Transportwege vorher prüfen
    `,
    image: "/blog/moebel-schuetzen.png",
  },
  "umzug-checkliste": {
    title: "Checkliste für den perfekten Umzugstag",
    description:
      "Mit unserer praktischen Umzugs-Checkliste behalten Sie in Hannover den Überblick.",
    keywords: [
      "Umzug Checkliste Hannover",
      "Umzugsplanung",
      "Umzugstipps Hannover",
    ],
    content: `
- Früh aufstehen und Zeitplan einhalten
- Team einteilen (Tragen, Beladen, Fahren)
- Letzte Sachen sicher verpacken
- Neue Wohnung kontrollieren
- Nach dem Umzug: Übergabe vorbereiten
    `,
    image: "/blog/umzug-checkliste.png",
  },
};

// ✅ Dynamisches SEO für jede Blog-Seite
export async function generateMetadata({ params }) {
  const post = blogPosts[params.slug];

  if (!post) {
    return {
      title: "Beitrag nicht gefunden | MTM Möbel Transport Montage",
    };
  }

  return {
    title: `${post.title} | MTM Umzug Hannover`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: `${post.title} | MTM Umzug Hannover`,
      description: post.description,
      url: `https://mtm-service.de/blog/${params.slug}`,
      siteName: "MTM Möbel Transport Montage",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "de_DE",
      type: "article",
    },
  };
}

export default function BlogPostPage({ params }) {
  const { slug } = params;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <section className="py-20 text-center">
        <h1 className="text-3xl font-bold">Beitrag nicht gefunden</h1>
        <Link
          href="/blog"
          className="mt-4 inline-block text-red-600 font-semibold hover:underline"
        >
          ← Zurück zum Blog
        </Link>
      </section>
    );
  }

  return (
    <main className="bg-white min-h-screen">
      {/* Header-Bild groß */}
      <div className="relative w-full h-[500px]">
        <Image
          src="/header-blog.png"
          alt="MTM Blog Header"
          fill
          className="object-cover"
        />
      </div>

      {/* Inhalt kompakter, gleiche Box wie Übersicht */}
      <section className="max-w-3xl mx-auto px-6 mt-6 pb-12">
        <div className="bg-white border rounded-2xl shadow hover:shadow-lg p-6">
          <h1 className="text-2xl font-bold text-red-600 mb-4">{post.title}</h1>
          <div className="prose text-gray-700 whitespace-pre-line mb-6">
            {post.content}
          </div>

          {/* Artikel-spezifisches Bild */}
          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={500}
              className="rounded-2xl shadow mb-6"
            />
          )}

          <Link
            href="/blog"
            className="mt-6 inline-block text-red-600 font-semibold hover:underline"
          >
            ← Zurück zum Blog
          </Link>
        </div>
      </section>
    </main>
  );
}
