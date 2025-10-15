"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/teams", label: "Teams" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ✅ Add scroll shadow effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full border-b border-slate-200/60 bg-white/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* ✅ Logo */}
        <Link href="/" className="group flex items-center gap-2" aria-label="PenakaKred Home">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            <Image
              src="/team/logo.jpg"
              alt="PenakaKred Logo"
              width={40}
              height={40}
              className="rounded-lg transition-transform duration-300 group-hover:scale-110"
              priority
            />
            <motion.div
              className="absolute inset-0 rounded-lg bg-gradient-to-br from-brandBlue/20 to-brandGold/20 blur-md -z-10"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <span className="text-lg font-semibold text-brandSlate group-hover:text-brandBlue transition-colors">
            PenakaKred
          </span>
        </Link>

        {/* ✅ Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative px-1 py-1 ${
                  active ? "text-brandBlue" : "text-slate-700"
                } hover:text-brandBlue transition-colors`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="active-underline"
                    className="absolute inset-x-0 -bottom-0.5 h-[2px] rounded bg-brandBlue"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* ✅ WhatsApp CTA (desktop) */}
        <Link
          href="https://wa.me/917396667670"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block rounded-xl bg-gradient-to-br from-brandBlue to-brandAzure px-4 py-2 text-sm text-white shadow-md hover:-translate-y-0.5 hover:shadow-lg transition"
        >
          WhatsApp Us
        </Link>

        {/* ✅ Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-slate-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* ✅ Mobile Nav Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-t border-slate-200 shadow-md"
          >
            <nav className="flex flex-col p-4 space-y-3 text-sm">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-slate-700 hover:text-brandBlue transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="https://wa.me/917396667670"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 rounded-xl bg-gradient-to-br from-brandBlue to-brandAzure px-4 py-2 text-center text-white shadow-md"
                onClick={() => setMenuOpen(false)}
              >
                WhatsApp Us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
