"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 border-b border-black/5 bg-white/80 apple-blur">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-primary"
                  : "text-text-primary/70 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:+17273141215" className="hidden lg:flex items-center gap-2 text-sm text-text-primary/70 hover:text-primary">
            <span className="material-symbols-outlined text-sm">phone</span>
            (727) 314-1215
          </a>
          <Link
            href="/contact"
            className="hidden sm:flex items-center justify-center rounded-[5px] bg-primary px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-primary/90 active:scale-95"
          >
            Send Your Bill
          </Link>
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-sm font-medium ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-text-primary/70"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block text-center rounded-[5px] bg-primary px-5 py-2 text-sm font-semibold text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Send Your Bill
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
