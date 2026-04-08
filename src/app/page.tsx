import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import ServicesSection from "@/components/home/ServicesSection";
import CommercialSection from "@/components/home/CommercialSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FinancingSection from "@/components/home/FinancingSection";
import CredibilityBar from "@/components/home/CredibilityBar";
import FaqSection from "@/components/home/FaqSection";
import ContactSection from "@/components/home/ContactSection";

export const metadata = {
  title: "OKIE HVAC Systems | Stillwater's Trusted HVAC Contractor",
  description: "Fast, reliable HVAC & heating solutions for homes and businesses in Stillwater, OK. 24/7 emergency service — no overtime charges. Call (405) 338-9194.",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustBar />
        <ServicesSection />
        <CommercialSection />
        <TestimonialsSection />
        <WhyChooseUs />
        <FinancingSection />
        <CredibilityBar />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
