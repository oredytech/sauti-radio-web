
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Calendar } from 'lucide-react';
import { YouTubeVideo } from '@/hooks/useYouTube';

interface VideoCardProps {
  video: YouTubeVideo;
  onVideoSelect: (videoId: string) => void;
}

const VideoCard = ({ video, onVideoSelect }: VideoCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card 
      className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      onClick={() => onVideoSelect(video.videoId)}
    >
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-red-600 text-white rounded-full p-3">
            <Play className="w-6 h-6 fill-current" />
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-red-600 transition-colors duration-200">
          {video.title}
        </h3>
        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-2">
          <Calendar className="w-4 h-4 mr-1" />
          {formatDate(video.publishedAt)}
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
          {video.description || 'Regardez cette vidéo inspirante'}
        </p>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
