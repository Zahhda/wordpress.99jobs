import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductSection from "@/components/ProductSection";
import OfficesSection from "@/components/OfficesSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SocialProofPopup from "@/components/SocialProofPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <OfficesSection />
      <Footer />
      <WhatsAppFloat />
      <SocialProofPopup />
    </div>
  );
};

export default Index;
