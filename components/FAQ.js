"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react"; // optional icon library

const faqs = [
  {
    q: "Is PenakaKred compliant with RBI guidelines?",
    a: "Yes. We follow RBI instructions on fair practices, privacy, and grievance redressal, with audited SOPs and QA monitoring.",
  },
  {
    q: "Do you provide legal recovery services?",
    a: "We assist with Sec.138 notices, arbitration documentation, and DRT/SARFAESI coordination via empaneled counsel.",
  },
  {
    q: "How do you contact borrowers?",
    a: "Omnichannel: WhatsApp, IVR/voice, SMS, email, and field visits—using consent-based, empathetic scripts.",
  },
  {
    q: "Can borrowers pay online?",
    a: "Yes; we provide secure links (UPI/PG) and a self-serve portal for settlements or EMI restructuring.",
  },
  {
    q: "Which industries do you serve?",
    a: "Banks, NBFCs, FinTechs, and debt asset firms (ARCs).",
  },
  {
    q: "What data privacy standards do you follow?",
    a: "DPDP-aligned privacy, least-privilege access, encryption at rest/in transit, and audit logs.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-brandSlate text-center">
        Frequently Asked <span className="text-brandBlue">Questions</span>
      </h2>

      <div className="mt-8 space-y-4">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl border border-slate-200 bg-white/60 shadow-sm transition hover:shadow-md"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between px-5 py-4 text-left"
            >
              <span className="font-medium text-slate-800">{item.q}</span>
              <motion.span
                animate={{ rotate: open === i ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-brandBlue"
              >
                <ChevronDown size={18} />
              </motion.span>
            </button>

            <motion.div
              initial={false}
              animate={{
                height: open === i ? "auto" : 0,
                opacity: open === i ? 1 : 0,
              }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="overflow-hidden px-5"
            >
              <p className="pb-5 text-sm text-slate-700">{item.a}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
