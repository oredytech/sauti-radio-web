
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Youtube, Loader2, Radio } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import PlaylistCard from '@/components/youtube/PlaylistCard';
import { useYouTubePlaylists } from '@/hooks/useYouTube';
import { useTranslation } from '@/hooks/useTranslation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Emissions avec leurs sous-catégories
const emissions = [
  {
    id: 1,
    name: "Enseignements",
    subcategories: [
      "Enseignement du Dimanche",
      "Enseignement du Mercredi",
      "Enseignement Spéciaux",
      "Formation Biblique"
    ]
  },
  {
    id: 2,
    name: "Cultes",
    subcategories: [
      "Culte du Dimanche",
      "Culte du Mercredi",
      "Culte du Vendredi",
      "Culte Spéciaux"
    ]
  },
  {
    id: 3,
    name: "Prières",
    subcategories: [
      "Prière du Matin",
      "Prière du Soir",
      "Intercession",
      "Jeûne et Prière"
    ]
  },
  {
    id: 4,
    name: "Témoignages",
    subcategories: [
      "Témoignages Personnels",
      "Guérisons",
      "Délivrances",
      "Témoignages Spéciaux"
    ]
  },
  {
    id: 5,
    name: "Évangélisation",
    subcategories: [
      "Campagnes d'Évangélisation",
      "Mission",
      "Évangélisation de Rue",
      "Conférences"
    ]
  }
];

const EmissionsPage = () => {
  const { t } = useTranslation();
  const { data: playlists, isLoading, error } = useYouTubePlaylists();

  // Fonction pour trouver les playlists correspondant à une sous-catégorie
  const getMatchingPlaylists = (subcategoryName: string) => {
    if (!playlists) return [];
    return playlists.filter(playlist => 
      playlist.title.toLowerCase().includes(subcategoryName.toLowerCase()) ||
      subcategoryName.toLowerCase().includes(playlist.title.toLowerCase())
    );
  };

  // Playlists non catégorisées (Autres)
  const getUncategorizedPlaylists = () => {
    if (!playlists) return [];
    const allSubcategories = emissions.flatMap(emission => emission.subcategories);
    return playlists.filter(playlist => {
      return !allSubcategories.some(subcategory =>
        playlist.title.toLowerCase().includes(subcategory.toLowerCase()) ||
        subcategory.toLowerCase().includes(playlist.title.toLowerCase())
      );
    });
  };

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
            
            <div className="space-y-12">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="space-y-6">
                  <Skeleton className="h-8 w-48" />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {Array.from({ length: 4 }).map((_, j) => (
                      <div key={j} className="space-y-4">
                        <Skeleton className="aspect-video rounded-lg" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-2/3" />
                      </div>
                    ))}
                  </div>
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

  const uncategorizedPlaylists = getUncategorizedPlaylists();

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
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                <Radio className="w-8 h-8 text-blue-600" />
                Nos Émissions
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Découvrez toutes nos émissions spirituelles organisées par catégories
              </p>
            </div>
          </div>

          {/* Emissions par catégories */}
          <div className="space-y-12">
            {emissions.map((emission) => {
              // Récupérer toutes les playlists pour cette catégorie
              const categoryPlaylists = emission.subcategories.flatMap(subcategory => 
                getMatchingPlaylists(subcategory)
              );
              
              // Supprimer les doublons
              const uniquePlaylists = categoryPlaylists.filter((playlist, index, self) => 
                index === self.findIndex(p => p.id === playlist.id)
              );

              if (uniquePlaylists.length === 0) return null;

              return (
                <section key={emission.id} className="space-y-6">
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {emission.name}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      {uniquePlaylists.length} playlist{uniquePlaylists.length > 1 ? 's' : ''} disponible{uniquePlaylists.length > 1 ? 's' : ''}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {uniquePlaylists.map((playlist) => (
                      <PlaylistCard key={playlist.id} playlist={playlist} />
                    ))}
                  </div>
                </section>
              );
            })}

            {/* Section "Autres" pour les playlists non catégorisées */}
            {uncategorizedPlaylists.length > 0 && (
              <section className="space-y-6">
                <div className="border-l-4 border-gray-400 pl-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Autres
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    {uncategorizedPlaylists.length} playlist{uncategorizedPlaylists.length > 1 ? 's' : ''} supplémentaire{uncategorizedPlaylists.length > 1 ? 's' : ''}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {uncategorizedPlaylists.map((playlist) => (
                    <PlaylistCard key={playlist.id} playlist={playlist} />
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Message si aucune playlist */}
          {(!playlists || playlists.length === 0) && (
            <div className="text-center py-12">
              <Youtube className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Aucune émission trouvée</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Les émissions apparaîtront ici une fois les playlists configurées.
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EmissionsPage;
