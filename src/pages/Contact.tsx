import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RadioPlayer from "@/components/RadioPlayer";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "@/hooks/useTranslation";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Helmet>
        <title>{t('nav.contact')} - Radio Sauti ya Injili</title>
        <meta name="description" content="Contactez Radio Sauti ya Injili" />
      </Helmet>
      
      <Navbar />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {t('contact.title')}
              </h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                    placeholder={t('contact.namePlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                    placeholder={t('contact.emailPlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                    placeholder={t('contact.messagePlaceholder')}
                  />
                </div>
                <div>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    {t('contact.submit')}
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {t('contact.infoTitle')}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-blue-500" />
                  <div>
                    <h3 className="font-semibold text-gray-700 dark:text-gray-300">{t('contact.addressTitle')}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      B.P. : 3413 GOMA-DRC
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-blue-500" />
                  <div>
                    <h3 className="font-semibold text-gray-700 dark:text-gray-300">{t('contact.phoneTitle')}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      +243 976 512 077, +243 993 918 000
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-blue-500" />
                  <div>
                    <h3 className="font-semibold text-gray-700 dark:text-gray-300">{t('contact.emailTitle')}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      radiosautiyainjili@gmail.com
                    </p>
                  </div>
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

export default Contact;
