"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[10000] transition-all duration-500 ${
        scrolled
          ? "bg-gray-900/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* ✅ Nur das Logo, kein Text */}
        <Link href="/" className="flex items-center z-[10001]">
          <div className="relative w-[220px] h-[90px] sm:w-[260px] sm:h-[100px]">
            <Image
              src="/logo.svg"
              alt="MTM Logo"
              fill
              priority
              className="object-contain pointer-events-auto select-none"
            />
          </div>
        </Link>

        {/* Desktop-Navigation */}
        <ul className="hidden md:flex space-x-10 text-white font-medium">
          <li><Link href="/about" className="hover:text-red-400">Über uns</Link></li>
          <li><Link href="/services" className="hover:text-red-400">Leistungen</Link></li>
          <li><Link href="/ablauf" className="hover:text-red-400">Ablauf</Link></li>
          <li><Link href="/blog" className="hover:text-red-400">Blog</Link></li>
          <li><Link href="/contact" className="hover:text-red-400">Kontakt</Link></li>
        </ul>

        {/* Mobile Menü Button */}
        <button
          className="md:hidden text-white z-[10001]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menü */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-900/95 text-white py-6 text-center space-y-4 shadow-xl z-[10000]">
          <Link href="/about" onClick={() => setMenuOpen(false)}>Über uns</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>Leistungen</Link>
          <Link href="/ablauf" onClick={() => setMenuOpen(false)}>Ablauf</Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Kontakt</Link>
        </div>
      )}
    </header>
  );
}
