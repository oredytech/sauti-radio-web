
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Video } from 'lucide-react';
import { YouTubePlaylist } from '@/hooks/useYouTube';

interface PlaylistCardProps {
  playlist: YouTubePlaylist;
}

const PlaylistCard = ({ playlist }: PlaylistCardProps) => {
  return (
    <Link to={`/videos/${playlist.id}`}>
      <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={playlist.thumbnail} 
            alt={playlist.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
          <div className="absolute top-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
            <Video className="w-3 h-3" />
            {playlist.videoCount}
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-red-600 text-white rounded-full p-3">
              <Play className="w-6 h-6 fill-current" />
            </div>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-red-600 transition-colors duration-200">
            {playlist.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
            {playlist.description || 'Découvrez cette playlist de vidéos spirituelles'}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PlaylistCard;
