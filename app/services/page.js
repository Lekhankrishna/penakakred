import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Services | PenakaKred",
  description: "Receivables management, credit collection, skip tracing, legal desk, repayment/OTS, analytics and more.",
};

const services = [
  { name: "Receivables Management", desc: "Manage overdue accounts and improve cash flow." },
  { name: "Credit Collection", desc: "Ethical collections maintaining customer relationships." },
  { name: "Tactical Recovery Plans", desc: "Customized strategies for each portfolio." },
  { name: "NPA Follow-ups / Retention", desc: "Systematic monitoring of NPAs to reduce slippages." },
  { name: "Phased Collection Programs", desc: "Stepwise repayment and settlement solutions." },
  { name: "Skip Tracing", desc: "Locate delinquent customers via responsible OSINT and signals." },
  { name: "Litigation & Settlement", desc: "Handle notices, arbitration support, and case updates." },
  { name: "Legal Enforcement", desc: "Compliance-driven enforcement actions and arbitration." },
  { name: "Credit Risk Management", desc: "Assess profiles, identify risks, advise lenders." },
  { name: "Debt Collection Services", desc: "Comprehensive recovery across retail, SME, corporate." },
  { name: "Credit & Industry Reports", desc: "Detailed reports for credit decisions and benchmarking." },
  { name: "Enterprise Risk & Advisory", desc: "ERM advisory, compliance & operational controls." }
];

export default function Page() {
  return (
    <main>
      <Header />
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-semibold">Services</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {services.map((s, i) => (
            <div key={i} className="border rounded-xl p-5">
              <div className="font-medium">{s.name}</div>
              <div className="text-sm text-gray-600 mt-2">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
