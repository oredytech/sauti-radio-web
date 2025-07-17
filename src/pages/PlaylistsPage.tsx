import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "@/hooks/useTranslation";

const PlaylistsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{t('playlists.title')} - Radio Sauti ya Injili</title>
        <meta name="description" content={t('playlists.description')} />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('playlists.title')}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('playlists.subtitle')}
            </p>
          </div>

          <div>
            <p>Liste des Playlists</p>
          </div>
        </div>
      </main>

      <Footer />
      
    </div>
  );
};

export default PlaylistsPage;
import RadioPlayer from "@/components/RadioPlayer";

const PlaylistsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{t('playlists.title')} - Radio Sauti ya Injili</title>
        <meta name="description" content={t('playlists.description')} />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('playlists.title')}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('playlists.subtitle')}
            </p>
          </div>

          <div>
            <p>Liste des Playlists</p>
          </div>
        </div>
      </main>

      <Footer />
      <RadioPlayer />
    </div>
  );
};

export default PlaylistsPage;
