const services = [
  "Receivables Management",
  "Credit Collection",
  "Tactical Recovery Plans",
  "NPA Follow-ups / Retention",
  "Phased Collection Programs",
  "Skip Tracing",
  "Litigation & Settlement",
  "Legal Enforcement",
  "Credit Risk Management",
  "Debt Collection Services",
  "Credit & Industry Reports",
  "Enterprise Risk & Advisory"
];

export default function ServicesGrid() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold">Services</h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s, i) => (
          <a key={i} href="/services" className="block border rounded-xl p-5 hover:shadow-sm">
            <div className="font-medium text-brandSlate">{s}</div>
            <div className="text-sm text-gray-600 mt-2">Learn more →</div>
          </a>
        ))}
      </div>
    </section>
  );
}
