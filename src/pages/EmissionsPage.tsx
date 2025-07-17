import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RadioPlayer from "@/components/RadioPlayer";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "@/hooks/useTranslation";

const EmissionsPage: React.FC = () => {
  const { t } = useTranslation();

  const emissions = [
    {
      id: 1,
      title: "Matin Spirituel",
      time: "06:00 - 08:00",
      description: "Commencez votre journée avec des méditations et des prières inspirantes",
      image: "/lovable-uploads/spiritual-morning.jpg"
    },
    {
      id: 2,
      title: "Actualités Chrétiennes",
      time: "08:00 - 09:00",
      description: "Les dernières nouvelles du monde chrétien et de la communauté",
      image: "/lovable-uploads/christian-news.jpg"
    },
    {
      id: 3,
      title: "Musique Gospel",
      time: "09:00 - 12:00",
      description: "Les meilleurs chants gospel pour élever votre âme",
      image: "/lovable-uploads/gospel-music.jpg"
    },
    {
      id: 4,
      title: "Enseignement Biblique",
      time: "14:00 - 15:00",
      description: "Approfondissez votre connaissance de la Parole de Dieu",
      image: "/lovable-uploads/bible-teaching.jpg"
    },
    {
      id: 5,
      title: "Témoignages",
      time: "15:00 - 16:00",
      description: "Écoutez les témoignages inspirants de nos auditeurs",
      image: "/lovable-uploads/testimonies.jpg"
    },
    {
      id: 6,
      title: "Prière du Soir",
      time: "20:00 - 21:00",
      description: "Terminez votre journée dans la prière et la méditation",
      image: "/lovable-uploads/evening-prayer.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Helmet>
        <title>{t('nav.shows')} - Radio Sauti ya Injili</title>
        <meta name="description" content="Découvrez les émissions de Radio Sauti ya Injili" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800 py-16 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Nos Émissions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Découvrez notre programmation riche et variée, conçue pour nourrir votre foi et enrichir votre vie spirituelle
            </p>
          </div>
        </div>
      </section>

      {/* Emissions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emissions.map((emission) => (
              <div key={emission.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-xl font-bold mb-2">{emission.title}</h3>
                    <p className="text-lg">{emission.time}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {emission.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {emission.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {emission.time}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      En direct
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Grille des Programmes
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Retrouvez tous vos programmes préférés selon notre grille horaire
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Lundi - Vendredi
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-600">
                      <span className="text-gray-900 dark:text-white">Matin Spirituel</span>
                      <span className="text-gray-600 dark:text-gray-300">06:00 - 08:00</span>
                    </li>
                    <li className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-600">
                      <span className="text-gray-900 dark:text-white">Actualités Chrétiennes</span>
                      <span className="text-gray-600 dark:text-gray-300">08:00 - 09:00</span>
                    </li>
                    <li className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-600">
                      <span className="text-gray-900 dark:text-white">Musique Gospel</span>
                      <span className="text-gray-600 dark:text-gray-300">09:00 - 12:00</span>
                    </li>
                    <li className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-600">
                      <span className="text-gray-900 dark:text-white">Enseignement Biblique</span>
                      <span className="text-gray-600 dark:text-gray-300">14:00 - 15:00</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Weekend
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-600">
                      <span className="text-gray-900 dark:text-white">Culte du Dimanche</span>
                      <span className="text-gray-600 dark:text-gray-300">09:00 - 11:00</span>
                    </li>
                    <li className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-600">
                      <span className="text-gray-900 dark:text-white">Émission Jeunesse</span>
                      <span className="text-gray-600 dark:text-gray-300">15:00 - 17:00</span>
                    </li>
                    <li className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-600">
                      <span className="text-gray-900 dark:text-white">Soirée Musicale</span>
                      <span className="text-gray-600 dark:text-gray-300">19:00 - 21:00</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <RadioPlayer />
    </div>
  );
};

export default EmissionsPage;
