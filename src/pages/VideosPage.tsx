
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Youtube, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import VideoCard from '@/components/youtube/VideoCard';
import AudioPlayer from '@/components/youtube/AudioPlayer';
import { useYouTubePlaylistVideos } from '@/hooks/useYouTube';
import { useTranslation } from '@/hooks/useTranslation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const VideosPage = () => {
  const { playlistId } = useParams<{ playlistId: string }>();
  const { t } = useTranslation();
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  
  const { data: videos, isLoading, error } = useYouTubePlaylistVideos(playlistId || '');

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
            
            {/* Video player skeleton */}
            <div className="mb-12">
              <Skeleton className="aspect-video w-full max-w-4xl mx-auto rounded-lg" />
            </div>
            
            {/* Video grid skeleton */}
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
              Impossible de charger les vidéos de cette playlist.
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

  const selectedVideo = selectedVideoId ? videos?.find(v => v.videoId === selectedVideoId) : videos?.[0];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link to="/emissions">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux émissions
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Écoute Audio
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {videos?.length || 0} contenus audio disponibles
              </p>
            </div>
          </div>

          {/* Audio Player */}
          {selectedVideo && (
            <div className="mb-12">
              <AudioPlayer 
                videoId={selectedVideo.videoId} 
                title={selectedVideo.title}
                thumbnail={selectedVideo.thumbnail}
              />
              <div className="max-w-4xl mx-auto mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {selectedVideo.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {selectedVideo.description}
                </p>
              </div>
            </div>
          )}

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos?.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onVideoSelect={setSelectedVideoId}
                isAudioMode={true}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VideosPage;
