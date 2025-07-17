
import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

interface VideoPlayerProps {
  videoId: string;
  title: string;
}

const VideoPlayer = ({ videoId, title }: VideoPlayerProps) => {
  const [hasError, setHasError] = useState(false);

  console.log('VideoPlayer - videoId:', videoId, 'title:', title);

  if (!videoId) {
    return (
      <div className="aspect-video w-full max-w-4xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-600 dark:text-gray-400">ID de vidéo manquant</p>
        </div>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="aspect-video w-full max-w-4xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-2" />
          <p className="text-gray-600 dark:text-gray-400">Impossible de charger la vidéo</p>
          <button 
            onClick={() => setHasError(false)}
            className="mt-2 text-blue-600 hover:text-blue-800 underline"
          >
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-video w-full max-w-4xl mx-auto">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&modestbranding=1`}
        title={title}
        className="w-full h-full rounded-lg shadow-lg"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        onError={() => setHasError(true)}
        onLoad={() => console.log('Video loaded successfully')}
      />
    </div>
  );
};

export default VideoPlayer;
