"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 🔑 Seiten-Logik
  const blackPages = ["/", "/about"];
  const isBlackPage = blackPages.includes(pathname);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[10000] transition-all duration-300
        ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
      `}
    >
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center h-[110px]">
        
        {/* Logo */}
        <Link
          href="/"
          className="
            relative
            w-[220px] h-[80px]
            md:w-[300px] md:h-[95px]
            md:translate-y-[6px]
          "
        >
          <Image
            src="/logo.svg"
            alt="MTM Logo"
            fill
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul
          className={`hidden md:flex items-center gap-10 font-medium transition-colors ${
            isBlackPage ? "text-black" : "text-white"
          }`}
        >
          <li><Link href="/about" className="hover:text-red-500">Über uns</Link></li>
          <li><Link href="/services" className="hover:text-red-500">Leistungen</Link></li>
          <li><Link href="/ablauf" className="hover:text-red-500">Ablauf</Link></li>
          <li><Link href="/blog" className="hover:text-red-500">Blog</Link></li>
          <li><Link href="/contact" className="hover:text-red-500">Kontakt</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-colors ${
            isBlackPage ? "text-black" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-xl">
          <ul className="flex flex-col items-center gap-6 py-8 text-lg font-medium text-black">
            <li><Link href="/about" onClick={() => setMenuOpen(false)}>Über uns</Link></li>
            <li><Link href="/services" onClick={() => setMenuOpen(false)}>Leistungen</Link></li>
            <li><Link href="/ablauf" onClick={() => setMenuOpen(false)}>Ablauf</Link></li>
            <li><Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
            <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Kontakt</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
