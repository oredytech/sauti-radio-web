import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RadioPlayer from "@/components/RadioPlayer";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "@/hooks/useTranslation";

const EquipePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Helmet>
        <title>Notre équipe - Radio Sauti ya Injili</title>
        <meta name="description" content="Découvrez l'équipe de Radio Sauti ya Injili" />
      </Helmet>
      
      <Navbar />
      
      <section className="bg-white dark:bg-gray-800 py-16 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Notre équipe
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Découvrez les personnes passionnées qui font vivre Radio Sauti ya Injili.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member Cards - Replace with actual data */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Membre de l'équipe"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Nom du membre
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Fonction
                </p>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Petite description du membre de l'équipe.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Membre de l'équipe"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Nom du membre
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Fonction
                </p>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Petite description du membre de l'équipe.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Membre de l'équipe"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Nom du membre
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Fonction
                </p>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Petite description du membre de l'équipe.
                </p>
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

export default EquipePage;
