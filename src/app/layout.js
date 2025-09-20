// src/app/layout.js
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";

export const metadata = {
  title: "MTM Möbel Transport Montage | Umzüge & Möbeltransporte Hannover",
  description:
    "Professionelle Möbeltransporte, Umzüge, Montage & Entrümpelung in Hannover. MTM – zuverlässig, effizient und fair.",
  keywords: [
    "Umzug Hannover",
    "Möbeltransport Hannover",
    "Möbel Montage",
    "Entrümpelung Hannover",
    "MTM Service",
    "Umzugsfirma Hannover",
  ],
  openGraph: {
    title: "MTM Möbel Transport Montage | Umzüge & Möbeltransporte Hannover",
    description:
      "Ihr zuverlässiger Partner für Möbeltransporte, Umzüge und Montagearbeiten in Hannover.",
    url: "https://mtm-service.de", // ✅ später echte Domain eintragen
    siteName: "MTM Möbel Transport Montage",
    images: [
      {
        url: "/og-image.jpg", // ✅ Bild in public/ legen (1200x630 px empfohlen)
        width: 1200,
        height: 630,
        alt: "MTM Möbel Transport Montage – Umzug in Hannover",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MTM Möbel Transport Montage",
    description:
      "Professionelle Möbeltransporte & Umzüge in Hannover – fair, effizient & zuverlässig.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
