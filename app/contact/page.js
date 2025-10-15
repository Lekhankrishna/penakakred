"use client";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// export const metadata = {
//   title: "Contact | PenakaKred",
//   description:
//     "Talk to an expert, request a pilot, or WhatsApp us for quick onboarding.",
// };

export default function Page() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    portfolio: "",
    monthly: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      // 🔗 Replace with your actual Google Script Web App URL
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbyLI7roqnhxKZzcsMgdwwcRmp3s1ISYM__dQ8FJ7YuBWAdEywMabRlWXlsbXHlzctNegA/exec";

      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setStatus("✅ Submitted successfully!");
      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        portfolio: "",
        monthly: "",
        message: "",
      });
    } catch (error) {
      setStatus("❌ Submission failed. Try again.");
    }
  };

  return (
    <main>
      <Header />
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-semibold">Contact Us</h1>
        <p className="text-gray-700 mt-2">
          Have a portfolio to onboard or want a pilot? Share your DPD mix and
          monthly volumes—our team will propose a compliant, outcome-based plan
          within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <input
            className="border p-3 rounded-xl"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            className="border p-3 rounded-xl"
            placeholder="Company"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
          />
          <input
            className="border p-3 rounded-xl"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            className="border p-3 rounded-xl"
            placeholder="Phone/WhatsApp"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
          />
          <input
            className="border p-3 rounded-xl"
            placeholder="Portfolio Type"
            value={form.portfolio}
            onChange={(e) => setForm({ ...form, portfolio: e.target.value })}
          />
          <input
            className="border p-3 rounded-xl"
            placeholder="Monthly Cases"
            value={form.monthly}
            onChange={(e) => setForm({ ...form, monthly: e.target.value })}
          />
          <textarea
            className="border p-3 rounded-xl"
            rows="5"
            placeholder="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          ></textarea>

          <button
            type="submit"
            className="px-5 py-3 rounded-xl bg-brandBlue text-white w-fit hover:bg-brandAzure transition"
          >
            Submit
          </button>
        </form>

        <p className="mt-3 text-sm text-gray-600">{status}</p>

        <div className="mt-4">
          <a
            href="https://wa.me/917396667670"
            className="underline text-brandBlue"
          >
            Click to Chat on WhatsApp
          </a>
        </div>

        <div className="mt-8 h-56 w-full border rounded-xl flex items-center justify-center text-gray-500">
          Google Map embed placeholder
        </div>
      </section>
      <Footer />
    </main>
  );
}
