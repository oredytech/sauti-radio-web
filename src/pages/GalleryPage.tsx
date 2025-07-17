
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RadioPlayer from "@/components/RadioPlayer";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "@/hooks/useTranslation";

const GalleryPage: React.FC = () => {
  const { t } = useTranslation();

  const galleryImages = [
    {
      id: 1,
      src: "/lovable-uploads/f4db413e-521f-445d-a288-2604f9438f7d.png",
      title: "Équipe de Radio Sauti ya Injili",
      description: "Photo de groupe de l'équipe de la radio"
    },
    {
      id: 2,
      src: "/lovable-uploads/2b6c85fe-9372-4427-99ea-0c2e2f096c2b.png",
      title: "Représentation en Tanzanie",
      description: "Le Pasteur Ezra KASEREKA a représenté la RDC à Dar es Salaam Tanzanie 40 Ans de la Langue KISWAHILI Sanifu"
    },
    {
      id: 3,
      src: "/lovable-uploads/6cb5af49-a681-4589-aaa9-278743cb0b3a.png",
      title: "Félicitations du Diocese",
      description: "Monseigneur de Diocese Anglicane Goma, Félicite le Coordonateur-Directeur Pasteur Ezra KASEREKA le Travail bien fait à la RSI"
    },
    {
      id: 4,
      src: "/lovable-uploads/02413012-56eb-4987-9322-490030f0d502.png",
      title: "9ème Anniversaire",
      description: "Le 1er Fondateur de la RSI Rév. LAWI BAKULU BIRIKOLIKO Célèbre la 9ème Anniversaire de la RSI"
    },
    {
      id: 5,
      src: "/lovable-uploads/2aeb7043-a57f-47f2-ae13-8b99c1b65509.png",
      title: "Discours du Coordonateur",
      description: "Le Coordonateur Directeur de la Station Radio SAUTI YA INJILI, fait son discours à l'occasion de la célébration de la 9ème Anniversaire de la Radio"
    },
    {
      id: 6,
      src: "/lovable-uploads/da6c095d-219f-40ff-b2c2-df2f3a1d7b84.png",
      title: "Célébration avec les Autorités",
      description: "Les Autorités Politico Administratif de la RDC célèbrent avec les journalistes de la Radio Sauti ya Injili la 9ème Anniversaire"
    },
    {
      id: 7,
      src: "/lovable-uploads/e605b890-e81f-4c37-a583-57033d4584ed.png",
      title: "Rencontre avec les collaborateurs",
      description: "Rencontre de travail avec les collaborateurs de la radio"
    },
    {
      id: 8,
      src: "/lovable-uploads/edc9f4c4-8d4d-45e5-b221-7e5d4c52bc45.png",
      title: "Studio d'enregistrement",
      description: "Vue du studio d'enregistrement de Radio Sauti ya Injili"
    },
    {
      id: 9,
      src: "/lovable-uploads/da3a2dad-c242-4783-8c59-9f0f863bb32b.png",
      title: "Animateur en direct",
      description: "Animateur en direct dans le studio de Radio Sauti ya Injili"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Helmet>
        <title>Galerie - Radio Sauti ya Injili</title>
        <meta name="description" content="Découvrez la galerie photos de Radio Sauti ya Injili" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800 py-16 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Galerie Photos
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Découvrez les moments forts et les activités de Radio Sauti ya Injili à travers notre galerie photos
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image) => (
              <div key={image.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <RadioPlayer />
    </div>
  );
};

export default GalleryPage;
