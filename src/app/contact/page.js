"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Cookies from "js-cookie";
import { trackLead } from "@/lib/metaPixel";

export default function ContactPage() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;

    const formData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      message: form.elements.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      if (res.ok) {
        const consent = Cookies.get("cookie-consent");

        // 🔥 META LEAD – NUR MIT CONSENT
        if (consent === "accepted") {
          trackLead({
            content_name: "Kontaktformular",
            content_category: "Lead",
            page: "/contact",
          });

          console.log("🎯 Lead Event ausgelöst (Kontaktformular)");
        } else {
          console.log("ℹ️ Lead nicht getrackt (kein Consent)");
        }

        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("❌ Kontaktformular Fehler", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-white">
      {/* Hero */}
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

            <ul className="space-y-4 text-gray-700">
              <li>
                <span className="font-semibold text-red-600">Adresse</span><br />
                Milchstraße 10, 30916 Isernhagen
              </li>
              <li>
                <span className="font-semibold text-red-600">Telefon</span><br />
                <Link href="tel:+4951160978240">0511 / 60978240</Link>
              </li>
              <li>
                <span className="font-semibold text-red-600">E-Mail</span><br />
                <Link href="mailto:info@mtm-service.de">info@mtm-service.de</Link>
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
                required
                placeholder="Ihr Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Ihre E-Mail"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black"
              />

              <textarea
                name="message"
                rows="5"
                required
                placeholder="Ihre Nachricht"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black"
              />

              <button
                disabled={loading}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg"
              >
                {loading ? "Senden…" : "Nachricht senden"}
              </button>

              {status === "success" && (
                <p className="text-green-600">✅ Nachricht gesendet.</p>
              )}
              {status === "error" && (
                <p className="text-red-600">❌ Fehler beim Senden.</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}