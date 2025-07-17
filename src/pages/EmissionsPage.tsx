import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RadioPlayer from "@/components/RadioPlayer";
import EmissionsSection from '@/components/EmissionsSection';

const EmissionsPage = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Émissions - Radio Sauti ya Injili</title>
        <meta name="description" content="Retrouvez toutes les émissions de Radio Sauti ya Injili." />
      </Helmet>

      <Navbar />

      <main className="pt-20 pb-24">
        <EmissionsSection />
      </main>

      <Footer />
      <RadioPlayer />
    </div>
  );
};

export default EmissionsPage;
