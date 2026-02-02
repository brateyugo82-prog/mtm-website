"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="bg-white">
      {/* Subpage Hero – KEIN Balken */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
       <Image
        src="/header-contact.svg"
        alt="MTM Kontakt"
        fill
        priority
        sizes="100vw"
        quality={100}
        className="object-cover"
        style={{ objectPosition: "50% 70%" }}
      />

        {/* sehr leichtes Overlay für Harmonie */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/5 to-black/15" />
      </section>

      {/* Content */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Kontakt aufnehmen
          </h1>
          <p className="text-lg text-gray-600">
            Wir beraten Sie gerne persönlich und unverbindlich.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 bg-gray-50 rounded-2xl p-10 shadow-lg">
          {/* Infos */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              So erreichen Sie uns
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Haben Sie Fragen oder möchten ein Angebot?
            </p>

            <ul className="space-y-4 text-gray-700">
              <li>
                <span className="font-semibold text-red-600">Adresse</span>
                <br />
                Milchstraße 10, 30916 Isernhagen
              </li>
              <li>
                <span className="font-semibold text-red-600">Telefon</span>
                <br />
                <Link href="tel:+4951160978240">0511 / 60978240</Link>
              </li>
              <li>
                <span className="font-semibold text-red-600">E-Mail</span>
                <br />
                <Link href="mailto:info@mtm-service.de">
                  info@mtm-service.de
                </Link>
              </li>
            </ul>
          </div>

          {/* Formular */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">
              Schreiben Sie uns
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                name="name"
                placeholder="Ihr Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 text-black"
              />

              <input
                name="email"
                type="email"
                placeholder="Ihre E-Mail"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 text-black"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Ihre Nachricht"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 text-black"
              />

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg shadow-lg transition"
              >
                Nachricht senden
              </button>

              {status === "success" && (
                <p className="text-green-600 mt-4">
                  ✅ Nachricht erfolgreich gesendet.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 mt-4">
                  ❌ Fehler beim Senden. Bitte erneut versuchen.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
