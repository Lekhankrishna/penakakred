import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "Privacy Policy | PenakaKred",
  description: "DPDP-aligned privacy practices for PenakaKred.",
};

export default function Page() {
  return (
    <main>
      <Header />
      <section className="max-w-3xl mx-auto px-4 py-16 prose">
        <h1>Privacy Policy</h1>
        <p>We align with India's DPDP Act using least-privilege access, encryption at rest/in transit, and audit logs. This page is a stub and should be reviewed by legal counsel.</p>
        <h2>Data We Process</h2>
        <ul>
          <li>Contact details for clients and debtors where lawful.</li>
          <li>Operational data necessary for collections.</li>
        </ul>
        <h2>Your Rights</h2>
        <p>Access, correction, and grievance redressal via our contact page.</p>
      </section>
      <Footer />
    </main>
  );
}
