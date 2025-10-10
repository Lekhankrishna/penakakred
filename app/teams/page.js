
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TeamSection from "./TeamSection";

export const metadata = {
  title: "Our Team | PenakaKred",
  description:
    "Meet the passionate professionals behind PenakaKred’s AI-driven collections and compliance-first innovation.",
};

export default function TeamsPage() {
  return (
    <>
      <Header />
      <TeamSection />
      <Footer />
    </>
  );
}
