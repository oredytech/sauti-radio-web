
import React from 'react';
import { Play, Clock, Headphones } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { YouTubeVideo } from '@/hooks/useYouTube';

interface VideoCardProps {
  video: YouTubeVideo;
  onVideoSelect: (videoId: string) => void;
  isAudioMode?: boolean;
}

const VideoCard = ({ video, onVideoSelect, isAudioMode = false }: VideoCardProps) => {
  const handleClick = () => {
    onVideoSelect(video.videoId);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <Card 
      className="group cursor-pointer hover:shadow-lg transition-shadow duration-200 bg-white dark:bg-gray-800"
      onClick={handleClick}
    >
      <CardContent className="p-0">
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden rounded-t-lg">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
          
          {/* Play overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
            {isAudioMode ? (
              <div className="bg-white/90 rounded-full p-3">
                <Headphones className="w-6 h-6 text-gray-800" />
              </div>
            ) : (
              <div className="bg-white/90 rounded-full p-3">
                <Play className="w-6 h-6 text-gray-800 ml-1" />
              </div>
            )}
          </div>

          {/* Audio mode badge */}
          {isAudioMode && (
            <Badge variant="secondary" className="absolute top-2 right-2 text-xs">
              <Headphones className="w-3 h-3 mr-1" />
              Audio
            </Badge>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-medium text-sm line-clamp-2 text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
            {video.title}
          </h3>
          
          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 gap-2">
            <Clock className="w-3 h-3" />
            <span>{formatDate(video.publishedAt)}</span>
          </div>

          {isAudioMode && (
            <p className="text-xs text-blue-600 dark:text-blue-400 mt-2 font-medium">
              Cliquez pour écouter en audio
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
