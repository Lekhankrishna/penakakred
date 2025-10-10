"use client";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative mx-auto my-12 max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 md:p-10">
      {/* subtle animated highlight sweep */}
      <motion.div
        aria-hidden
        initial={{ x: "-120%" }}
        whileInView={{ x: "120%" }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 1.8, ease: "linear" }}
        className="pointer-events-none absolute inset-y-0 -left-1/3 right-1/3 rotate-6 bg-gradient-to-r from-transparent via-white/60 to-transparent"
      />

      <div className="relative">
        <h3 className="text-2xl font-semibold text-brandSlate md:text-3xl">
          Ready to increase recoveries <span className="text-brandBlue">safely</span>?
        </h3>
        <p className="mt-2 max-w-2xl text-slate-600">
          Get a tailored, compliant plan within 24 hours—omnichannel workflows, legal desk, and borrower portal.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <motion.a
            href="/contact"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-xl bg-brandBlue px-5 py-3 text-sm text-white shadow-lg shadow-brandBlue/20"
          >
            Book a Demo
          </motion.a>

          <motion.a
            href="https://wa.me/917396667670"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-xl border px-5 py-3 text-sm"
          >
            WhatsApp a Pilot Request
          </motion.a>
        </div>
      </div>
    </section>
  );
}
