
import React from 'react';
import { Play, Pause, Square, Volume2, Loader } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { useYouTubeAudio } from '@/hooks/useYouTubeAudio';

interface AudioPlayerProps {
  videoId: string;
  title: string;
  thumbnail: string;
}

const AudioPlayer = ({ videoId, title, thumbnail }: AudioPlayerProps) => {
  const {
    isPlaying,
    isLoading,
    currentVideoId,
    duration,
    currentTime,
    volume,
    playVideo,
    togglePlayPause,
    seek,
    setVolume,
    stop
  } = useYouTubeAudio();

  const handlePlayClick = () => {
    if (currentVideoId !== videoId) {
      playVideo(videoId);
    } else {
      togglePlayPause();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSeek = (value: number[]) => {
    seek(value[0]);
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      {/* Header with thumbnail and title */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
            {title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Lecture audio uniquement
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <Slider
          value={[currentTime]}
          max={duration || 100}
          step={1}
          onValueChange={handleSeek}
          className="w-full"
          disabled={!duration}
        />
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePlayClick}
            disabled={isLoading}
            className="h-12 w-12"
          >
            {isLoading ? (
              <Loader className="h-5 w-5 animate-spin" />
            ) : isPlaying && currentVideoId === videoId ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5" />
            )}
          </Button>

          {currentVideoId === videoId && (
            <Button
              variant="outline"
              size="icon"
              onClick={stop}
              className="h-10 w-10"
            >
              <Square className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Volume control */}
        <div className="flex items-center gap-3">
          <Volume2 className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Slider
            value={volume}
            onValueChange={setVolume}
            max={100}
            step={1}
            className="w-24"
          />
        </div>
      </div>

      {/* Current playing indicator */}
      {currentVideoId === videoId && isPlaying && (
        <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <p className="text-sm text-green-700 dark:text-green-300 text-center">
            🎵 En cours de lecture...
          </p>
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;
