export default async function sitemap() {
  const baseUrl = "https://www.mtm-service.de"; // <- deine Domain hier

  // Liste aller statischen Seiten (du kannst jederzeit neue hinzufügen)
  const staticPages = [
    "",
    "about",
    "services",
    "ablauf",
    "blog",
    "contact",
    "impressum",
    "datenschutz",
    "datendeletion",
    "agb",
    "terms",
    "privacy",
  ];

  return staticPages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: page === "" ? 1.0 : 0.7,
  }));
}
