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
        credentials: "include", // 👈 sorgt dafür, dass Cookies mitgeschickt werden
      });

      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Kontaktformular Fehler:", error);
      setStatus("error");
    }
  }

  return (
    <main className="bg-gray-50">
      {/* Header-Bild (ohne Text im Bild) */}
      <section className="relative h-[500px] md:h-[600px]">
        <Image
          src="/header-contact.svg"
          alt="MTM Kontakt"
          fill
          priority
          className="object-cover object-top brightness-75"
        />
      </section>

      {/* Überschrift unter dem Bild */}
      <div className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Kontakt aufnehmen
        </h1>
      </div>

      {/* Kontaktbereich */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 bg-white shadow-lg rounded-2xl p-10">
          {/* Firmeninfos */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              So erreichen Sie uns
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Haben Sie Fragen oder möchten ein unverbindliches Angebot?
              Unser Team hilft Ihnen gerne weiter.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li>
                <span className="font-semibold text-red-600">Adresse:</span>
                <br />
                Milchstraße 10, 30916 Isernhagen
              </li>
              <li>
                <span className="font-semibold text-red-600">Telefon:</span>
                <br />
                <Link href="tel:+4951160978240" className="hover:underline">
                  0511 / 60978240
                </Link>
              </li>
              <li>
                <span className="font-semibold text-red-600">E-Mail:</span>
                <br />
                <Link
                  href="mailto:info@mtm-service.de"
                  className="hover:underline"
                >
                  info@mtm-service.de
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontaktformular */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">
              Schreiben Sie uns
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-left font-medium text-gray-700"
                >
                  Ihr Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:outline-none text-black"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-left font-medium text-gray-700"
                >
                  Ihre E-Mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:outline-none text-black"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-left font-medium text-gray-700"
                >
                  Ihre Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:outline-none text-black"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg shadow-lg transition"
              >
                Nachricht senden
              </button>

              {/* Statusanzeige */}
              {status === "success" && (
                <p className="text-green-600 mt-4">
                  ✅ Ihre Nachricht wurde erfolgreich gesendet.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 mt-4">
                  ❌ Fehler beim Senden der Nachricht. Bitte versuchen Sie es
                  erneut.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
