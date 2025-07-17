import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RadioPlayer from "@/components/RadioPlayer";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "@/hooks/useTranslation";

const DonPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Helmet>
        <title>Faire un don - Radio Sauti ya Injili</title>
        <meta name="description" content="Soutenez Radio Sauti ya Injili par vos dons" />
      </Helmet>
      
      <Navbar />
      
      <section className="bg-white dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
              {t('donate.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {t('donate.description')}
            </p>

            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t('donate.bankTransfer')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t('donate.accountDetails')}
              </p>
              <p className="font-bold text-gray-900 dark:text-gray-200">
                FirstBANK DRC, SA: 00014280003010013790510
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t('donate.mobileMoney')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t('donate.mobileMoneyDetails')}
              </p>
              <p className="font-bold text-gray-900 dark:text-gray-200">
                Orange Money: +243 993 918 000
              </p>
            </div>

            <div className="mt-8">
              <p className="text-gray-600 dark:text-gray-300">
                {t('donate.contactUs')}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <RadioPlayer />
    </div>
  );
};

export default DonPage;
