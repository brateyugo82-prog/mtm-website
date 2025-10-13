import "./globals.css";
import ResponsiveHeader from "../components/ResponsiveHeader";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";

export const metadata = {
  title: "MTM Möbel Transport Montage | Umzüge & Möbeltransporte Hannover",
  description:
    "Professionelle Möbeltransporte, Umzüge, Montage & Entrümpelung in Hannover. MTM – zuverlässig, effizient und fair.",
  openGraph: {
    title: "MTM Möbel Transport Montage | Umzüge & Möbeltransporte Hannover",
    description:
      "Ihr zuverlässiger Partner für Möbeltransporte, Umzüge und Montagearbeiten in Hannover.",
    url: "https://mtm-service.de",
    siteName: "MTM Möbel Transport Montage",
    images: [
      {
        url: "/og-image.jpg",
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
  other: {
    "tiktok-developers-site-verification":
      "oyClOiKaBmrDRLVbZ1QHyC7I9aJLgci1",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        <ResponsiveHeader />
        <main className="flex-grow mt-[72px] md:mt-0">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
