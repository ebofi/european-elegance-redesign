import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JobTicker from "@/components/JobTicker";
import TrustBar from "@/components/TrustBar";
import ExpertiseSection from "@/components/ExpertiseSection";
import WhyUsSection from "@/components/WhyUsSection";
import DualPathSection from "@/components/DualPathSection";
import StudyAbroadSection from "@/components/StudyAbroadSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <JobTicker />
      <TrustBar />
      <ExpertiseSection />
      <WhyUsSection />
      <DualPathSection />
      <StudyAbroadSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
