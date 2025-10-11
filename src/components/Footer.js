"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 mt-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        
        {/* Logo / Kurzinfo */}
        <div className="text-center md:text-left">
          <Image
            src="/logo.svg"
            alt="MTM Logo"
            width={220}
            height={120}
            className="mx-auto md:mx-0 mb-4"
          />
          <p className="text-gray-400">
            MTM – Möbel Transport Montage<br />
            Ihr zuverlässiger Partner für Umzüge, Transporte und Montage.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Navigation</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white">Startseite</Link></li>
            <li><Link href="/about" className="hover:text-white">Über uns</Link></li>
            <li><Link href="/services" className="hover:text-white">Leistungen</Link></li>
            <li><Link href="/ablauf" className="hover:text-white">Ablauf</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white">Kontakt</Link></li>
          </ul>
        </div>

        {/* Kontaktinfos */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Kontakt</h3>
          <ul className="space-y-2">
            <li>
              📍{" "}
              <a
                href="https://www.google.com/maps?q=Milchstraße+10,+30916+Isernhagen"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline"
              >
                Milchstraße 10, 30916 Isernhagen
              </a>
            </li>
            <li>
              📞{" "}
              <Link href="tel:+4951160978240" className="hover:text-white">
                0511 / 60978240
              </Link>
            </li>
            <li>
              📧{" "}
              <Link href="mailto:info@mtm-service.de" className="hover:text-white">
                info@mtm-service.de
              </Link>
            </li>
          </ul>
        </div>

        {/* Sitemap (ersetzt Rechtliches) */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Sitemap</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-blue-400">🏠 Startseite</Link></li>
            <li><Link href="/services" className="hover:text-blue-400">🛠️ Leistungen</Link></li>
            <li><Link href="/about" className="hover:text-blue-400">ℹ️ Über uns</Link></li>
            <li><Link href="/ablauf" className="hover:text-blue-400">📦 Ablauf</Link></li>
            <li><Link href="/blog" className="hover:text-blue-400">📰 Blog</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400">📧 Kontakt</Link></li>
            <li><Link href="/datenschutz" className="hover:text-blue-400">🔒 Datenschutzerklärung</Link></li>
            <li><Link href="/impressum" className="hover:text-blue-400">📘 Impressum</Link></li>
            <li><Link href="/datendeletion" className="hover:text-blue-400">🧹 Datenlöschung</Link></li>
            <li><Link href="/agb" className="hover:text-blue-400">📄 AGB</Link></li>
            <li><Link href="/terms" className="hover:text-blue-400">⚙️ Nutzungsbedingungen</Link></li>
            <li><Link href="/privacy" className="hover:text-blue-400">🤖 Datenschutz (Agenten)</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MTM Möbel Transport Montage · Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
