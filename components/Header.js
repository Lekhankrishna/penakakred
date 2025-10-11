"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/teams", label: "Teams" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">

        {/* ✅ Logo section */}
        <Link
          href="/"
          className="group flex items-center gap-2"
          aria-label="PenakaKred Home"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            {/* 🖼️ Your logo image (place logo.png inside /public) */}
            <Image
              src="/team/logo.jpg"

              alt="PenakaKred Logo"
              width={40}
              height={40}
              className="rounded-lg transition-transform duration-300 group-hover:scale-110"
              priority
            />
            {/* ✨ Subtle animated glow */}
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

        {/* ✅ Navigation */}
        <nav className="relative hidden gap-6 text-sm md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="relative px-1 py-1 text-slate-700 transition-colors hover:text-brandBlue"
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

        {/* ✅ WhatsApp Button */}
        <Link
          href="https://wa.me/917396667670"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-gradient-to-br from-brandBlue to-brandAzure px-4 py-2 text-sm text-white shadow-md shadow-brandBlue/20 transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          WhatsApp Us
        </Link>
      </div>
    </header>
  );
}
