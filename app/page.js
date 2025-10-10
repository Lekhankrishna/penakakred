import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ServicesGrid from "../components/ServicesGrid";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import ConsentBanner from "../components/ConsentBanner";
import SchemaOrg from "../components/SchemaOrg";
import SmoothScroll from "../components/SmoothScroll";

export default function Page() {
  return (
    <SmoothScroll>
      <main className="min-h-screen">
        {/* Top Navigation */}
        <Header />

        {/* Hero Section */}
        <Hero />

        {/* Animated Features / Services */}
        <Features />
        <ServicesGrid />

        {/* FAQ Section */}
        <FAQ />

        {/* Call-to-Action */}
        <CTA />

        {/* Footer + Compliance */}
        <Footer />
        <ConsentBanner />
        <SchemaOrg />
      </main>
    </SmoothScroll>
  );
}