"use client";
import { motion } from "framer-motion";
import { Shield, Brain, MessageSquare, Scale } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-brandBlue" />,
      title: "AI-Driven Recovery",
      desc: "Machine learning insights for prioritizing borrower segments and optimizing contact timing.",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-brandBlue" />,
      title: "Omnichannel Outreach",
      desc: "WhatsApp, voice, email, and SMS in one seamless workflow—ensuring faster resolution.",
    },
    {
      icon: <Scale className="w-6 h-6 text-brandBlue" />,
      title: "LegalTech Automation",
      desc: "Automated 138 notices, eSign workflows, and DRT/SARFAESI documentation through AI templates.",
    },
    {
      icon: <Shield className="w-6 h-6 text-brandBlue" />,
      title: "Compliance-First",
      desc: "RBI and DPDP aligned privacy, consent management, and full audit trail of every interaction.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-center text-brandSlate"
        >
          Built for <span className="text-brandBlue">Collections Teams</span>
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h3 className="font-medium text-lg text-brandSlate">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
  
}
