
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "@/hooks/useTranslation";
import RadioPlayer from "@/components/RadioPlayer";
import { YouTubeVideo } from '@/lib/youtube';
import { formatViewCount } from '@/lib/utils';
import { Card, CardContent } from "@/components/ui/card";
import ReactPlayer from 'react-player';

const VideosPage = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);
  
  // Example playlist ID - replace with your actual playlist ID
  const playlistId = 'PLrAKYbGin7lS3EaXKoNSaKNKwfLQlRvKN';
  
  const { t } = useTranslation();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchVideos = async () => {
      if (!playlistId) return;

      try {
        setLoading(true);
        setError(null);
        
        // This is a mock implementation since we can't access YouTube API directly
        // In a real implementation, you would fetch from your backend or YouTube API
        const mockVideos: YouTubeVideo[] = [
          {
            id: 'dQw4w9WgXcQ',
            title: 'Prédication du Dimanche - La Foi qui Transforme',
            description: 'Une puissante prédication sur la foi qui peut transformer nos vies.',
            thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
            publishedAt: '2024-01-15T10:00:00Z',
            viewCount: '1234',
            duration: 'PT45M32S',
            channelTitle: 'Radio Sauti ya Injili'
          },
          {
            id: 'ScMzIvxBSi4',
            title: 'Louange et Adoration - Soirée Spéciale',
            description: 'Une soirée de louange et d\'adoration avec notre équipe musicale.',
            thumbnailUrl: 'https://img.youtube.com/vi/ScMzIvxBSi4/maxresdefault.jpg',
            publishedAt: '2024-01-10T19:00:00Z',
            viewCount: '856',
            duration: 'PT1H12M45S',
            channelTitle: 'Radio Sauti ya Injili'
          }
        ];

        setVideos(mockVideos);
        if (mockVideos.length > 0) {
          setSelectedVideo(mockVideos[0]);
        }
      } catch (err) {
        console.error('Error fetching videos:', err);
        setError('Erreur lors du chargement des vidéos');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [playlistId]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20 pb-24">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p>Chargement des vidéos...</p>
            </div>
          </div>
        </main>
        <Footer />
        <RadioPlayer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20 pb-24">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-red-600">{error}</p>
            </div>
          </div>
        </main>
        <Footer />
        <RadioPlayer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Vidéos - Radio Sauti ya Injili</title>
        <meta name="description" content="Regardez nos dernières vidéos et prédications" />
      </Helmet>

      <Navbar />

      <main className="pt-20 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nos Vidéos
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Découvrez nos prédications, moments de louange et émissions spéciales
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Video Player */}
            <div className="lg:col-span-2">
              {selectedVideo && (
                <Card>
                  <CardContent className="p-0">
                    <div className="aspect-video relative">
                      <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${selectedVideo.id}`}
                        width="100%"
                        height="100%"
                        controls
                        config={{
                          youtube: {
                            playerVars: { 
                              showinfo: 0,
                              rel: 0,
                              modestbranding: 1
                            },
                          },
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {selectedVideo.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {selectedVideo.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                        <span>{formatViewCount(selectedVideo.viewCount)} vues</span>
                        <span>{new Date(selectedVideo.publishedAt).toLocaleDateString('fr-FR')}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Video List */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Autres vidéos
              </h3>
              {videos.map((video) => (
                <Card 
                  key={video.id} 
                  className={`cursor-pointer transition-colors ${
                    selectedVideo?.id === video.id 
                      ? 'border-primary bg-primary/5' 
                      : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`}
                  onClick={() => setSelectedVideo(video)}
                >
                  <CardContent className="p-4">
                    <div className="flex space-x-3">
                      <img
                        src={video.thumbnailUrl}
                        alt={video.title}
                        className="w-24 h-16 object-cover rounded flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 dark:text-white text-sm line-clamp-2 mb-1">
                          {video.title}
                        </h4>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          <p>{formatViewCount(video.viewCount)} vues</p>
                          <p>{new Date(video.publishedAt).toLocaleDateString('fr-FR')}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <RadioPlayer />
    </div>
  );
};

export default VideosPage;
