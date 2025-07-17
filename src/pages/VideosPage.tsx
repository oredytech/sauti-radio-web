import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, Eye, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import VideoCard from '@/components/youtube/VideoCard';
import VideoPlayer from '@/components/youtube/VideoPlayer';
import { useYouTubePlaylistVideos } from '@/hooks/useYouTube';
import { useTranslation } from '@/hooks/useTranslation';
import { formatViewCount, formatDuration } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RadioPlayer from '@/components/RadioPlayer';

const VideosPage = () => {
  const { playlistId } = useParams<{ playlistId: string }>();
  const { t } = useTranslation();
  const { data: videos, isLoading, error } = useYouTubePlaylistVideos(playlistId);
  const [selectedVideoId, setSelectedVideoId] = React.useState<string | null>(null);

  const handleVideoSelect = (videoId: string) => {
    setSelectedVideoId(videoId);
  };

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center gap-4 mb-8">
              <Link to="/playlists">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t('common.back')}
                </Button>
              </Link>
              <Skeleton className="h-8 w-64" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="aspect-video rounded-lg" />
                  <Skeleton className="h-4 w-full" />
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-gray-400" />
                    <Skeleton className="h-4 w-12" />
                    <Clock className="w-4 h-4 text-gray-400" />
                    <Skeleton className="h-4 w-12" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
        <RadioPlayer />
      </>
    );
  }

  if (error || !videos?.length) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">
              {t('youtube.noVideos')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {t('youtube.checkPlaylist')}
            </p>
            <Link to="/playlists">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('common.backToPlaylists')}
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
        <RadioPlayer />
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
            <Link to="/playlists">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('common.back')}
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                {videos[0]?.playlistTitle}
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {t('youtube.videosInPlaylist', { count: videos.length })}
              </p>
            </div>
          </div>

          {/* Video Player */}
          {selectedVideoId ? (
            <VideoPlayer videoId={selectedVideoId} />
          ) : (
            <VideoPlayer videoId={videos[0]?.videoId} />
          )}

          {/* Video List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {videos.map((video) => (
              <VideoCard
                key={video.videoId}
                video={video}
                onClick={() => handleVideoSelect(video.videoId)}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <RadioPlayer />
    </>
  );
};

export default VideosPage;
