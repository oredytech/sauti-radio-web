import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import AppDownload from "@/components/AppDownload";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import RadioPlayer from "@/components/RadioPlayer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <AppDownload />
      <Events />
      <Footer />
      <RadioPlayer />
    </div>
  );
};

export default Index;