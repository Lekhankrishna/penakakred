import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "Terms of Service | PenakaKred",
  description: "Terms governing the use of PenakaKred's website.",
};

export default function Page() {
  return (
    <main>
      <Header />
      <section className="max-w-3xl mx-auto px-4 py-16 prose">
        <h1>Terms of Service</h1>
        <p>These terms govern your use of this website. This is a stub; please finalize with counsel.</p>
        <h2>Acceptable Use</h2>
        <p>No scraping or unauthorized data collection. Respect applicable laws and RBI guidelines.</p>
      </section>
      <Footer />
    </main>
  );
}
