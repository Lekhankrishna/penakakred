import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FAQ from "../../components/FAQ";

export const metadata = {
  title: "FAQ | PenakaKred",
  description: "RBI compliance, borrower rights, repayment options, legal support and more.",
};

export default function Page() {
  return (
    <main>
      <Header />
      <FAQ />
      <Footer />
    </main>
  );
}
