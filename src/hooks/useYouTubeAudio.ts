
import { useState, useEffect, useRef } from 'react';
import { toast } from 'sonner';

interface YouTubeAudioState {
  isPlaying: boolean;
  isLoading: boolean;
  currentVideoId: string | null;
  duration: number;
  currentTime: number;
  volume: number[];
}

export const useYouTubeAudio = () => {
  const [state, setState] = useState<YouTubeAudioState>({
    isPlaying: false,
    isLoading: false,
    currentVideoId: null,
    duration: 0,
    currentTime: 0,
    volume: [50]
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize audio element
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.volume = state.volume[0] / 100;
    }

    const audio = audioRef.current;

    const handleLoadStart = () => {
      setState(prev => ({ ...prev, isLoading: true }));
    };

    const handleCanPlay = () => {
      setState(prev => ({ 
        ...prev, 
        isLoading: false,
        duration: audio.duration || 0
      }));
    };

    const handlePlay = () => {
      setState(prev => ({ ...prev, isPlaying: true, isLoading: false }));
      
      // Pause radio if playing
      if (window.radioPlayer && !window.radioPlayer.paused) {
        window.radioPlayer.pause();
        toast.info('Radio mise en pause', {
          description: 'Lecture audio YouTube en cours'
        });
      }

      // Start time tracking
      intervalRef.current = setInterval(() => {
        setState(prev => ({ ...prev, currentTime: audio.currentTime }));
      }, 1000);
    };

    const handlePause = () => {
      setState(prev => ({ ...prev, isPlaying: false }));
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const handleEnded = () => {
      setState(prev => ({ 
        ...prev, 
        isPlaying: false, 
        currentTime: 0 
      }));
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const handleError = () => {
      setState(prev => ({ ...prev, isLoading: false, isPlaying: false }));
      toast.error('Erreur de lecture', {
        description: 'Impossible de lire cette vidéo en audio'
      });
    };

    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [state.volume]);

  // Update volume when changed
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = state.volume[0] / 100;
    }
  }, [state.volume]);

  const playVideo = (videoId: string) => {
    if (!audioRef.current) return;

    // Use a proxy service to get audio stream from YouTube
    const audioUrl = `https://www.youtube.com/watch?v=${videoId}`;
    
    setState(prev => ({ 
      ...prev, 
      currentVideoId: videoId,
      isLoading: true 
    }));

    // For now, we'll use the video embed but hide it and extract audio
    // In a real implementation, you'd use a service like youtube-dl or similar
    audioRef.current.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0`;
    audioRef.current.load();
  };

  const togglePlayPause = () => {
    if (!audioRef.current || !state.currentVideoId) return;

    if (state.isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => {
        console.error('Failed to play:', err);
        toast.error('Erreur de lecture');
      });
    }
  };

  const seek = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setState(prev => ({ ...prev, currentTime: time }));
    }
  };

  const setVolume = (volume: number[]) => {
    setState(prev => ({ ...prev, volume }));
  };

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setState(prev => ({ 
        ...prev, 
        isPlaying: false, 
        currentTime: 0,
        currentVideoId: null 
      }));
    }
  };

  return {
    ...state,
    playVideo,
    togglePlayPause,
    seek,
    setVolume,
    stop
  };
};
