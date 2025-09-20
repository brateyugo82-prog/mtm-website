"use client";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] flex items-end justify-center text-center text-white">
      {/* Hintergrundbild */}
      <Image
        src="/flotte.png" // dein aktuelles Bild im public-Ordner
        alt="MTM Fahrzeugflotte"
        fill
        priority
        className="object-cover brightness-75"
      />

      {/* Overlay Inhalt – weiter unten im Bild */}
      <div className="relative z-10 px-4 pb-20 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          MTM Möbel Transport Montage
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-white drop-shadow-2xl">
          Ihr zuverlässiger Partner für Möbeltransporte, Montage & Umzüge –
          professionell, effizient und fair.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition"
        >
          Jetzt Angebot anfordern
        </Link>
      </div>
    </section>
  );
}
