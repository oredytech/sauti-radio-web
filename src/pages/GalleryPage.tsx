
import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RadioPlayer from "@/components/RadioPlayer";
import { useTranslation } from "@/hooks/useTranslation";

const GalleryPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const galleryImages = [
    {
      src: "/lovable-uploads/f6c0b1a5-d281-44f4-8271-c3ed385611ef.png",
      alt: "Équipe de Radio Sauti ya Injili"
    },
    {
      src: "/lovable-uploads/55cbe25e-9bbe-4fe2-aed1-b826ed55a8dd.png",
      alt: "Le Pasteur Ezra KASEREKA a représenté la RDC à Dar es Salaam Tanzanie 40 Ans de la Langue KISWAHILI Sanifu"
    },
    {
      src: "/lovable-uploads/4fdc22fe-93d7-432f-8a7a-5f68df48a1b5.png",
      alt: "Monseigneur de Diocese Anglicane Goma, Félicite le Coordonateur-Directeur Pasteur Ezra KASEREKA le Travail bien fait à la RSI"
    },
    {
      src: "/lovable-uploads/608dff5e-ca30-4abf-846f-05ef517e0ba4.png",
      alt: "Le 1er Fondateur de la RSI Rév. LAWI BAKULU BIRIKOLIKO Célèbre la 9ème Anniversaire de la RSI"
    },
    {
      src: "/lovable-uploads/69be07e4-fa83-4dda-b517-4f8968a42216.png",
      alt: "Le Coordonateur Directeur de la Station Radio SAUTI YA INJILI, fait son discour à l'occasion de la célébration de la 9ème Anniversaire de la Radio"
    },
    {
      src: "/lovable-uploads/f82647be-4f7b-4241-a775-ce4185195542.png",
      alt: "Les Autorités Politico Administratif de la RDC célèbrent avec les journalistes de la Radio Sauti ya Injili la 9ème Anniversaire"
    },
    {
      src: "/lovable-uploads/5ef5b927-9dd7-4993-a9ba-847f42ebb37e.png",
      alt: "Interview avec les dirigeants"
    },
    {
      src: "/lovable-uploads/6c4e1ffe-eeb8-42f9-ab3e-ab726078cd00.png",
      alt: "Studio de Radio Sauti ya Injili - Animateur en direct"
    },
    {
      src: "/lovable-uploads/8c77d9e1-d510-489f-8b8f-bdcc3334b804.png",
      alt: "Studio de Radio Sauti ya Injili - Émission en cours"
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Galerie - Radio Sauti ya Injili</title>
        <meta name="description" content="Découvrez notre galerie d'images montrant les moments forts de Radio Sauti ya Injili" />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Galerie
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Découvrez les moments forts et les activités de Radio Sauti ya Injili à travers notre galerie d'images
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-12">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <RadioPlayer />
    </div>
  );
};

export default GalleryPage;
