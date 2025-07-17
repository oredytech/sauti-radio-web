import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "@/hooks/useTranslation";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import RadioPlayer from "@/components/RadioPlayer";

const EquipePage = () => {
  const { t } = useTranslation();

  const images = [
    {
      original: '/lovable-uploads/f6c0b1a5-d281-44f4-8271-c3ed385611ef.png',
      thumbnail: '/lovable-uploads/f6c0b1a5-d281-44f4-8271-c3ed385611ef.png',
      description: 'Équipe de Radio Sauti ya Injili',
    },
    {
      original: '/lovable-uploads/55cbe25e-9bbe-4fe2-aed1-b826ed55a8dd.png',
      thumbnail: '/lovable-uploads/55cbe25e-9bbe-4fe2-aed1-b826ed55a8dd.png',
      description: 'Le Pasteur Ezra KASEREKA a représenté la RDC à Dar es Salaam Tanzanie 40 Ans de la Langue KISWAHILI Sanifu',
    },
    {
      original: '/lovable-uploads/4fdc22fe-93d7-432f-8a7a-5f68df48a1b5.png',
      thumbnail: '/lovable-uploads/4fdc22fe-93d7-432f-8a7a-5f68df48a1b5.png',
      description: 'Monseigneur de Diocese Anglicane Goma, Félicite le Coordonateur-Directeur Pasteur Ezra KASEREKA le Travail bien fait à la RSI',
    },
    {
      original: '/lovable-uploads/608dff5e-ca30-4abf-846f-05ef517e0ba4.png',
      thumbnail: '/lovable-uploads/608dff5e-ca30-4abf-846f-05ef517e0ba4.png',
      description: 'Le 1er Fondateur de la RSI Rév. LAWI BAKULU BIRIKOLIKO Célèbre la 9ème Anniversaire de la RSI',
    },
    {
      original: '/lovable-uploads/69be07e4-fa83-4dda-b517-4f8968a42216.png',
      thumbnail: '/lovable-uploads/69be07e4-fa83-4dda-b517-4f8968a42216.png',
      description: "Le Coordonateur Directeur de la Station Radio SAUTI YA INJILI, fait son discour à l'occasion de la célébration de la 9ème Anniversaire de la Radio",
    },
    {
      original: '/lovable-uploads/f82647be-4f7b-4241-a775-ce4185195542.png',
      thumbnail: '/lovable-uploads/f82647be-4f7b-4241-a775-ce4185195542.png',
      description: "Les Autorités Politico Administratif de la RDC célèbrent avec les journalistes de la Radio Sauti ya Injili la 9ème Anniversaire",
    },
    {
      original: '/lovable-uploads/5ef5b927-9dd7-4993-a9ba-847f42ebb37e.png',
      thumbnail: '/lovable-uploads/5ef5b927-9dd7-4993-a9ba-847f42ebb37e.png',
      description: "Interview avec les dirigeants",
    },
    {
      original: '/lovable-uploads/6c4e1ffe-eeb8-42f9-ab3e-ab726078cd00.png',
      thumbnail: '/lovable-uploads/6c4e1ffe-eeb8-42f9-ab3e-ab726078cd00.png',
      description: "Studio de Radio Sauti ya Injili - Animateur en direct",
    },
    {
      original: '/lovable-uploads/8c77d9e1-d510-489f-8b8f-bdcc3334b804.png',
      thumbnail: '/lovable-uploads/8c77d9e1-d510-489f-8b8f-bdcc3334b804.png',
      description: "Studio de Radio Sauti ya Injili - Émission en cours",
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{t('equipe.title')} - Radio Sauti ya Injili</title>
        <meta name="description" content={t('equipe.description')} />
      </Helmet>

      <Navbar />

      <main className="pt-20 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('equipe.title')}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('equipe.description')}
            </p>
          </div>
          <ImageGallery items={images} />
        </div>
      </main>

      <Footer />
      <RadioPlayer />
    </div>
  );
};

export default EquipePage;
