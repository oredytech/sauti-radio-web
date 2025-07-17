import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RadioPlayer from "@/components/RadioPlayer";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "@/hooks/useTranslation";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Helmet>
        <title>{t('nav.about')} - Radio Sauti ya Injili</title>
        <meta name="description" content={t('about.description')} />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800 py-20 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div>
              <img
                src="/lovable-uploads/a681d37a-5626-4700-b989-7c74ac9b873c.png"
                alt="À propos de Radio Sauti ya Injili"
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {t('about.title')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {t('about.heroDescription')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('about.ourMission')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t('about.missionDescription')}
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('about.ourVision')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t('about.visionDescription')}
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('about.ourValues')}
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>{t('about.value1')}</li>
              <li>{t('about.value2')}</li>
              <li>{t('about.value3')}</li>
            </ul>
          </div>
        </div>
      </section>
      
      <Footer />
      <RadioPlayer />
    </div>
  );
};

export default About;
