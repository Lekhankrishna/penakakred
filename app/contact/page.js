'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    portfolio: '',
    monthly: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      await fetch('https://script.google.com/macros/s/AKfycbyLI7roqnhxKZzcsMgdwwcRmp3s1ISYM__dQ8FJ7YuBWAdEywMabRlWXlsbXHlzctNegA/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus('✅ Submitted Successfully!');
      setForm({
        name: '',
        company: '',
        email: '',
        phone: '',
        portfolio: '',
        monthly: '',
        message: '',
      });
    } catch (error) {
      setStatus('❌ Error submitting form');
    }
  };

  return (
    <section className="max-w-lg mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-6">
        Have a portfolio to onboard or want a pilot? Share your DPD mix and
        monthly volumes—our team will propose a compliant, outcome-based plan
        within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {['name','company','email','phone','portfolio','monthly'].map((field) => (
          <input
            key={field}
            type={field === 'email' ? 'email' : 'text'}
            placeholder={
              field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')
            }
            value={form[field]}
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
            className="w-full border rounded-lg p-3"
            required
          />
        ))}

        <textarea
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border rounded-lg p-3"
          rows="4"
          required
        />

        <button
          type="submit"
          className="bg-brandBlue text-white px-6 py-3 rounded-lg hover:bg-brandAzure"
        >
          Submit
        </button>
      </form>

      <p className="mt-3 text-sm text-gray-500">{status}</p>
    </section>
  );
}
