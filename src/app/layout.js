import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Script from "next/script";
import { META_PIXEL_ID } from "@/lib/metaPixel";

export const metadata = {
  title: "MTM Möbel Transport Montage | Umzüge & Möbeltransporte Hannover",
  description:
    "Professionelle Möbeltransporte, Umzüge, Montage & Entrümpelung in Hannover. MTM – zuverlässig, effizient und fair.",

  // ✅ HIER ist der richtige Platz
  other: {
    "facebook-domain-verification": "jg7kfr7cldzs99uhlb8r0ioxaxzc3c",
    "tiktok-developers-site-verification":
      "oyClOiKaBmrDRLVbZ1QHyC7I9aJLgci1",
  },

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className="flex min-h-screen flex-col bg-gray-50 text-gray-900">
        <Header />

        <main className="flex-grow">{children}</main>

        <Footer />
        <CookieBanner />

        {/* 🔥 Meta Pixel – Basis (Events feuern wir NACH Consent) */}
        <Script
          id="meta-pixel-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');

              fbq('init', '${META_PIXEL_ID}');
            `,
          }}
        />
      </body>
    </html>
  );
}