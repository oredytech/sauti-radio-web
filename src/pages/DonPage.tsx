import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "@/hooks/useTranslation";
import RadioPlayer from "@/components/RadioPlayer";

const DonPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{t('don.title')} - Radio Sauti ya Injili</title>
        <meta name="description" content={t('don.metaDescription')} />
      </Helmet>

      <Navbar />

      <main className="pt-20 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('don.title')}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('don.description')}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              {t('don.makeDonation')}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {t('don.bankDetails')}
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
              <li><strong>{t('don.bankName')}:</strong> FirstBANK DRC, SA</li>
              <li><strong>{t('don.accountNumber')}:</strong> 00014280003010013790510</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {t('don.alternativeMethods')}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              {t('don.contactUs')}
            </p>
          </div>
        </div>
      </main>

      <Footer />
      <RadioPlayer />
    </div>
  );
};

export default DonPage;
