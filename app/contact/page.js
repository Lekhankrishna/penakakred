import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Contact | PenakaKred",
  description: "Talk to an expert, request a pilot, or WhatsApp us for quick onboarding.",
};

export default function Page() {
  return (
    <main>
      <Header />
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-semibold">Contact Us</h1>
        <p className="text-gray-700 mt-2">Have a portfolio to onboard or want a pilot? Share your DPD mix and monthly volumes—our team will propose a compliant, outcome-based plan within 24 hours.</p>
        <form className="mt-6 grid gap-4">
          <input className="border p-3 rounded-xl" placeholder="Name" required />
          <input className="border p-3 rounded-xl" placeholder="Company" />
          <input className="border p-3 rounded-xl" type="email" placeholder="Email" required />
          <input className="border p-3 rounded-xl" placeholder="Phone/WhatsApp" required />
          <input className="border p-3 rounded-xl" placeholder="Portfolio Type" />
          <input className="border p-3 rounded-xl" placeholder="Monthly Cases" />
          <textarea className="border p-3 rounded-xl" rows="5" placeholder="Message"></textarea>
          <button className="px-5 py-3 rounded-xl bg-brandBlue text-white w-fit">Submit</button>
        </form>
        <div className="mt-4">
          <a href="https://wa.me/917396667670" className="underline">Click to Chat on WhatsApp</a>
        </div>
        <div className="mt-8 h-56 w-full border rounded-xl flex items-center justify-center text-gray-500">
          Google Map embed placeholder
        </div>
      </section>
      <Footer />
    </main>
  );
}
