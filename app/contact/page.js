"use client";
import { useState } from "react";

export default function ContactForm() {
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
    setStatus("⏳ Submitting...");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyLI7roqnhxKZzcsMgdwwcRmp3s1ISYM__dQ8FJ7YuBWAdEywMabRlWXlsbXHlzctNegA/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      // Because mode: no-cors, response status is always opaque, so we skip response check
      setStatus("✅ Submitted Successfully!");
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
      console.error("Form submission failed:", error);
      setStatus("❌ Error submitting form. Please try again later.");
    }
  };

  return (
    <section className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4 text-brandBlue">Contact Us</h1>
      <p className="text-gray-600 mb-8 leading-relaxed">
        Have a portfolio to onboard or want a pilot? Share your DPD mix and
        monthly volumes—our team will propose a compliant, outcome-based plan
        within 24 hours.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white/70 backdrop-blur rounded-2xl p-6 shadow-lg"
      >
        {/* Input fields */}
        {["name", "company", "email", "phone", "portfolio", "monthly"].map(
          (field) => (
            <input
              key={field}
              type={field === "email" ? "email" : "text"}
              placeholder={
                field.charAt(0).toUpperCase() +
                field.slice(1).replace(/([A-Z])/g, " $1")
              }
              value={form[field]}
              onChange={(e) =>
                setForm({ ...form, [field]: e.target.value })
              }
              className="w-full border border-gray-300 focus:border-brandBlue focus:ring-1 focus:ring-brandBlue rounded-lg p-3 transition"
              required
            />
          )
        )}

        {/* Message box */}
        <textarea
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border border-gray-300 focus:border-brandBlue focus:ring-1 focus:ring-brandBlue rounded-lg p-3 h-32 transition"
          required
        />

        {/* Submit button */}
        <button
          type="submit"
          className="bg-gradient-to-r from-brandBlue to-brandAzure text-white px-6 py-3 rounded-lg hover:opacity-90 transition font-medium w-full"
        >
          Submit
        </button>
      </form>

      {/* Status message */}
      {status && (
        <p
          className={`mt-5 text-center text-sm ${
            status.includes("✅")
              ? "text-green-600"
              : status.includes("❌")
              ? "text-red-500"
              : "text-gray-500"
          }`}
        >
          {status}
        </p>
      )}
    </section>
  );
}
