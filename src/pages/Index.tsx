import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FounderSection from "@/components/FounderSection";
import FeaturesSlider from "@/components/FeaturesSlider";
import ProductSection from "@/components/ProductSection";
import CourseSection from "@/components/CourseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import OfficesSection from "@/components/OfficesSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SocialProofPopup from "@/components/SocialProofPopup"; const Index = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Header />
      <HeroSection />
      <AboutSection />
      <FounderSection />
      <FeaturesSlider />
      <ProductSection />
      <CourseSection />
      <TestimonialsSection />
      <ContactSection />
      <OfficesSection />
      <Footer />
      <WhatsAppFloat />
      <SocialProofPopup />
    </div>
  );
};

export default Index;
