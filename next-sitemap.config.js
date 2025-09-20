/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://mtm-service.de", // ✅ deine Domain
  generateRobotsTxt: true,          // robots.txt automatisch erstellen
  sitemapSize: 5000,                // Anzahl URLs pro Sitemap-File
  changefreq: "weekly",             // Crawling-Frequenz für Google
  priority: 0.7,                    // Standard-Priorität
  exclude: ["/admin/*"],            // optional: interne Seiten ausschließen
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },       // alle Crawler erlaubt
      { userAgent: "Googlebot", allow: "/" }
    ],
    additionalSitemaps: [
      "https://mtm-service.de/sitemap.xml"
    ],
  },
};
