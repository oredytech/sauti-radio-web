
import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";

const AboutUs = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/lovable-uploads/aadc217e-e091-4719-aa5f-da6c6699bfe4.png"
              alt="Antenne Radio Sauti ya Injili"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">{t('home.about.title')}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t('aboutus.description')}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t('aboutus.mission')}
            </p>
            <Link to="/about" className="text-secondary hover:text-red-600 font-semibold flex items-center gap-2">
              {t('common.readMore')}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
