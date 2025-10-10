"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  // gentle parallax on the headline
  const titleY = useTransform(scrollY, [0, 300], [0, -30]);
  const subtitleY = useTransform(scrollY, [0, 300], [0, -15]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brandAzure/10 to-brandGold/10">
      {/* soft radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_500px_at_10%_-10%,theme(colors.brandAzure/20),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
        <motion.h1
          style={{ y: titleY }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl font-bold text-brandSlate md:text-5xl"
        >
          Recover Faster. <span className="text-brandBlue">Stay Compliant.</span>
          <br className="hidden md:block" /> Build Better Borrower Outcomes.
        </motion.h1>

        <motion.p
          style={{ y: subtitleY }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
          className="mt-5 max-w-2xl text-lg text-gray-700"
        >
          Ethical, data-driven collections for banks, NBFCs, and fintechs. Omnichannel outreach,
          legal workflows, and dashboards for faster closures.
        </motion.p>

        <div className="mt-8 flex flex-wrap gap-3">
          <motion.a
            href="/contact"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-xl bg-brandBlue px-5 py-3 text-sm text-white shadow-lg shadow-brandBlue/20"
          >
            Talk to an Expert
          </motion.a>

          <motion.a
            href="https://wa.me/917396667670"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-xl border px-5 py-3 text-sm"
          >
            Request Pilot on WhatsApp
          </motion.a>
        </div>
      </div>
    </section>
  );
}
