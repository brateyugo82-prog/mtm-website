"use client";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-20 bg-transparent">
      <nav className="max-w-7xl mx-auto px-0 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="MTM Logo"
            width={400}
            height={100}
            priority
            className="ml-[-10px]"
          />
        </Link>

        {/* Navigation */}
        <ul className="flex space-x-14 text-white font-medium">
          <li><Link href="/about" className="hover:text-red-400">Über uns</Link></li>
          <li><Link href="/services" className="hover:text-red-400">Leistungen</Link></li>
          <li><Link href="/blog" className="hover:text-red-400">Blog</Link></li>
          <li><Link href="/contact" className="hover:text-red-400">Kontakt</Link></li>
        </ul>
      </nav>
    </header>
  );
}
