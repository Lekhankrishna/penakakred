import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Grievance Redressal | PenakaKred",
  description: "Reach our grievance officer for prompt resolution.",
};

export default function Page() {
  return (
    <main>
      <Header />
      <section className="max-w-3xl mx-auto px-4 py-16 prose">
        <h1>Grievance Redressal</h1>
        <p>Please email <a href="mailto:akarshnchandrashekar@gmail.com">akarshnchandrashekar@gmail.com</a> or call +91 7396667670. We aim to acknowledge within 48 hours and resolve at the earliest.</p>
      </section>
      <Footer />
    </main>
  );
}
