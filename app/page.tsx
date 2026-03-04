import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import WhatsIncluded from "@/components/WhatsIncluded";
import ServiceArea from "@/components/ServiceArea";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <SocialProof />
      <Services />
      <HowItWorks />
      <WhatsIncluded />
      <ServiceArea />
      <ContactForm />
      <FAQ />
      <Footer />
    </main>
  );
}
