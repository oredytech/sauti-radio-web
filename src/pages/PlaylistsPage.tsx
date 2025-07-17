
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Youtube, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import PlaylistCard from '@/components/youtube/PlaylistCard';
import { useYouTubePlaylists } from '@/hooks/useYouTube';
import { useTranslation } from '@/hooks/useTranslation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PlaylistsPage = () => {
  const { t } = useTranslation();
  const { data: playlists, isLoading, error } = useYouTubePlaylists();

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center gap-4 mb-8">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-8 w-64" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="aspect-video rounded-lg" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
          <div className="text-center">
            <Youtube className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Erreur de chargement</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Impossible de charger les playlists YouTube.
            </p>
            <Link to="/">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour à l'accueil
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Nos Playlists YouTube
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Découvrez nos différentes catégories de vidéos
              </p>
            </div>
          </div>

          {/* Playlists Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {playlists?.map((playlist) => (
              <PlaylistCard key={playlist.id} playlist={playlist} />
            ))}
          </div>

          {!playlists || playlists.length === 0 ? (
            <div className="text-center py-12">
              <Youtube className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Aucune playlist trouvée</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Les playlists apparaîtront ici une fois configurées.
              </p>
            </div>
          ) : null}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PlaylistsPage;
