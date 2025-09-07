import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SolutionsPreview from "@/components/SolutionsPreview";
import PlatformPreview from "@/components/PlatformPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <SolutionsPreview />
      <PlatformPreview />
      <Footer />
    </div>
  );
};

export default Index;
