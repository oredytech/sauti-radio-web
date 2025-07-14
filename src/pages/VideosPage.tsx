
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Youtube, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import VideoCard from '@/components/youtube/VideoCard';
import VideoPlayer from '@/components/youtube/VideoPlayer';
import { useYouTubePlaylistVideos } from '@/hooks/useYouTube';
import { useTranslation } from '@/hooks/useTranslation';

const VideosPage = () => {
  const { playlistId } = useParams<{ playlistId: string }>();
  const { t } = useTranslation();
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  
  const { data: videos, isLoading, error } = useYouTubePlaylistVideos(playlistId || '');

  if (isLoading) {
    return (
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
    );
  }

  if (error) {
    return (
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
    );
  }

  const selectedVideo = selectedVideoId ? videos?.find(v => v.videoId === selectedVideoId) : videos?.[0];

  return (
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
              Vidéos YouTube
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {videos?.length || 0} vidéos disponibles
            </p>
          </div>
        </div>

        {/* Video Player */}
        {selectedVideo && (
          <div className="mb-12">
            <VideoPlayer 
              videoId={selectedVideo.videoId} 
              title={selectedVideo.title}
            />
            <div className="max-w-4xl mx-auto mt-4">
              <h2 className="text-2xl font-bold mb-2">{selectedVideo.title}</h2>
              <p className="text-gray-600 dark:text-gray-400">
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideosPage;
