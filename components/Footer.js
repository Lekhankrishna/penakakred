"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-br from-white via-slate-50 to-brandAzure/10">
      {/* soft animated glow background */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_120%,theme(colors.brandBlue/20),transparent_70%)]"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-3 text-sm text-slate-700">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold text-brandBlue">PenakaKred Private Limited</h3>
          <p className="mt-2 text-slate-600">
            Vinayaka Layout, Nagdevanahalli, Bengaluru, Karnataka
          </p>

          <ul className="mt-3 space-y-1 text-slate-600">
            <li className="flex items-center gap-2">
              <Phone size={15} className="text-brandBlue" />
              <a href="tel:+917396667670" className="hover:text-brandBlue transition">
                +91 7396667670
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-brandBlue" />
              <a
                href="mailto:akarshnchandrashekar@gmail.com"
                className="hover:text-brandBlue transition"
              >
                akarshnchandrashekar@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2 mt-2">
              <MapPin size={15} className="mt-0.5 text-brandBlue" />
              <span>Mon–Sat 08:00–19:00 IST</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-brandSlate uppercase tracking-wide">
            Quick Links
          </h4>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li><a href="/services" className="hover:text-brandBlue transition">Services</a></li>
            <li><a href="/faq" className="hover:text-brandBlue transition">FAQ</a></li>
            <li><a href="/contact" className="hover:text-brandBlue transition">Contact Us</a></li>
            <li><a href="/legal/terms" className="hover:text-brandBlue transition">Terms of Service</a></li>
            <li><a href="/legal/privacy" className="hover:text-brandBlue transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Compliance Info */}
        <div>
          <h4 className="text-sm font-semibold text-brandSlate uppercase tracking-wide">
            Compliance
          </h4>
          <p className="mt-3 text-slate-600">
            We follow RBI fair practices and DPDP privacy norms with grievance redressal and QA
            monitoring. Data is processed under strict ISO 27001-aligned frameworks.
          </p>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="relative border-t border-slate-200 bg-white/50 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} <span className="text-brandBlue font-medium">PenakaKred Pvt. Ltd.</span> — All Rights Reserved.
      </div>
    </footer>
  );
}
