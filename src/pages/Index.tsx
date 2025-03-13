
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import AppDownload from "@/components/AppDownload";
import Events from "@/components/Events";
import EmissionsSection from "@/components/EmissionsSection";
import YouTubeCallToAction from "@/components/YouTubeCallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <AppDownload />
      <Events />
      <EmissionsSection />
      <YouTubeCallToAction />
      <Footer />
    </div>
  );
};

export default Index;
