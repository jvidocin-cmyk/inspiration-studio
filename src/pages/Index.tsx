import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import SitesSection from "@/components/home/SitesSection";
import SpacesSection from "@/components/home/SpacesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <SitesSection />
        <SpacesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
