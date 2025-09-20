"use client";
import Image from "next/image";
import { ShieldCheckIcon, BriefcaseIcon, HandThumbUpIcon } from "@heroicons/react/24/outline";

export default function AboutPage() {
  return (
    <main className="bg-gray-50">
      {/* Header-Bild (ohne Text im Bild) */}
      <section className="relative h-[500px] md:h-[600px]">
        <Image
          src="/header-about.png"
          alt="MTM Möbeltransport - Über uns"
          fill
          priority
          className="object-cover object-top brightness-75"
        />
      </section>

      {/* Überschrift jetzt UNTER dem Bild */}
      <div className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Über uns
        </h1>
      </div>

      {/* Firmenbeschreibung */}
      <section className="py-10 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
          MTM – Möbel Transport Montage
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-12">
          MTM steht für Präzision, Effizienz und Vertrauen. Seit vielen Jahren
          unterstützen wir unsere Kunden bei Umzügen, Möbeltransporten und
          Montagen – professionell, zuverlässig und kundenorientiert. 
          <br /><br />
          Unser erfahrenes Team arbeitet sorgfältig, pünktlich und mit einem
          hohen Qualitätsanspruch. So stellen wir sicher, dass Ihr Umzug oder
          Transport reibungslos und stressfrei abläuft.
        </p>

        {/* Werte / Highlights */}
<div className="grid md:grid-cols-3 gap-10 mt-12">
  {/* Zuverlässig */}
  <div className="bg-gray-50 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition">
    <ShieldCheckIcon className="h-14 w-14 mx-auto text-red-600 mb-6" />
    <h3 className="text-2xl font-semibold mb-4 text-gray-900">Zuverlässig</h3>
    <p className="text-gray-700 leading-relaxed">
      Wir garantieren Pünktlichkeit, Sicherheit und absolute Verlässlichkeit bei jedem Auftrag.
    </p>
  </div>

  {/* Erfahren */}
  <div className="bg-gray-50 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition">
    <BriefcaseIcon className="h-14 w-14 mx-auto text-red-600 mb-6" />
    <h3 className="text-2xl font-semibold mb-4 text-gray-900">Erfahren</h3>
    <p className="text-gray-700 leading-relaxed">
      Jahrzehntelange Erfahrung im Bereich Transport & Montage macht uns zum kompetenten Partner.
    </p>
  </div>

  {/* Fair */}
  <div className="bg-gray-50 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition">
    <HandThumbUpIcon className="h-14 w-14 mx-auto text-red-600 mb-6" />
    <h3 className="text-2xl font-semibold mb-4 text-gray-900">Fair</h3>
    <p className="text-gray-700 leading-relaxed">
      Transparente Preise ohne versteckte Kosten – fair und klar für unsere Kunden.
    </p>
  </div>
</div>

      </section>
    </main>
  );
}
