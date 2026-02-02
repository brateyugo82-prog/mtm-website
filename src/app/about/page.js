"use client";
import Image from "next/image";
import {
  ShieldCheckIcon,
  BriefcaseIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";

export default function AboutPage() {
  return (
    <main className="relative bg-white overflow-hidden">
      {/* Subpage Hero – liegt UNTER dem Header */}
      <section className="relative w-full h-[60vh] min-h-[420px] -mt-[110px]">
        <Image
          src="/header-about.png"
          alt="MTM Möbel Transport Montage – Über uns"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-105 contrast-110"
        />

        {/* extrem dezentes Overlay – KEIN Balken */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/5 to-black/15 pointer-events-none" />
      </section>

      {/* Content */}
      <section className="relative py-20 px-6 max-w-5xl mx-auto text-center bg-white">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10">
          Über uns
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
          MTM – Möbel Transport Montage
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-16">
          MTM steht für Präzision, Effizienz und Vertrauen. Seit vielen Jahren
          unterstützen wir unsere Kunden bei Umzügen, Möbeltransporten und
          Montagen – professionell, zuverlässig und kundenorientiert.
          <br />
          <br />
          Unser erfahrenes Team arbeitet sorgfältig, pünktlich und mit einem
          hohen Qualitätsanspruch. So stellen wir sicher, dass Ihr Umzug oder
          Transport reibungslos und stressfrei abläuft.
        </p>

        {/* Werte */}
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-gray-50 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <ShieldCheckIcon className="h-14 w-14 mx-auto text-red-600 mb-6" />
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Zuverlässig
            </h3>
            <p className="text-gray-700">
              Pünktlichkeit, Sicherheit und Verlässlichkeit bei jedem Auftrag.
            </p>
          </div>

          <div className="bg-gray-50 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <BriefcaseIcon className="h-14 w-14 mx-auto text-red-600 mb-6" />
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Erfahren
            </h3>
            <p className="text-gray-700">
              Jahrzehntelange Erfahrung im Transport- und Montagebereich.
            </p>
          </div>

          <div className="bg-gray-50 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <HandThumbUpIcon className="h-14 w-14 mx-auto text-red-600 mb-6" />
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Fair
            </h3>
            <p className="text-gray-700">
              Transparente Preise – keine versteckten Kosten.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
