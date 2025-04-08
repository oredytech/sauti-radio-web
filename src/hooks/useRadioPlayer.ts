import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { getAudioInstance, STREAM_URLS } from "@/utils/radioUtils";

export function useRadioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([50]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStreamIndex, setCurrentStreamIndex] = useState(0);
  const [networkError, setNetworkError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const wasPlayingBeforeError = useRef(false);

  // Initialize the audio element once for the entire application
  useEffect(() => {
    // Get the singleton audio instance
    const audio = getAudioInstance();
    audio.volume = volume[0] / 100;
    
    // Set the ref to point to our singleton audio instance
    audioRef.current = audio;
    
    // Add event listeners
    const handlePlaying = () => {
      setIsLoading(false);
      setIsPlaying(true);
      setNetworkError(false);
      toast.success("Radio en direct", {
        description: "Vous écoutez Radio Sauti ya Injili"
      });
    };
    
    const handleWaiting = () => {
      setIsLoading(true);
    };
    
    const handleError = () => {
      console.error("Error loading audio stream");
      setIsLoading(false);
      
      // Save the current playing state before error
      if (isPlaying) {
        wasPlayingBeforeError.current = true;
      }
      
      // Try the next stream URL if available
      if (currentStreamIndex < STREAM_URLS.length - 1) {
        const nextIndex = currentStreamIndex + 1;
        setCurrentStreamIndex(nextIndex);
        if (audioRef.current) {
          audioRef.current.src = STREAM_URLS[nextIndex];
          audioRef.current.load();
          if (isPlaying) {
            audioRef.current.play().catch(err => {
              console.error("Failed to play next stream:", err);
              setNetworkError(true);
              setIsPlaying(false);
            });
          }
        }
      } else {
        setNetworkError(true);
        setIsPlaying(false);
        toast.error("Difficulté de connexion", {
          description: "Impossible de se connecter au flux radio"
        });
      }
    };
    
    audioRef.current.addEventListener("playing", handlePlaying);
    audioRef.current.addEventListener("waiting", handleWaiting);
    audioRef.current.addEventListener("error", handleError);
    
    // Set component state based on current audio state
    setIsPlaying(!audioRef.current.paused);
    
    // Set as global to access from other components
    window.radioPlayer = audioRef.current;
    
    return () => {
      // Only remove event listeners, don't stop the audio
      if (audioRef.current) {
        audioRef.current.removeEventListener("playing", handlePlaying);
        audioRef.current.removeEventListener("waiting", handleWaiting);
        audioRef.current.removeEventListener("error", handleError);
      }
    };
  }, [currentStreamIndex, isPlaying, volume]);

  // Update stream URL when currentStreamIndex changes
  useEffect(() => {
    if (audioRef.current && audioRef.current.src !== STREAM_URLS[currentStreamIndex]) {
      audioRef.current.src = STREAM_URLS[currentStreamIndex];
      audioRef.current.load();
    }
  }, [currentStreamIndex]);

  // Network connection monitoring
  useEffect(() => {
    const handleOnline = () => {
      if (networkError && wasPlayingBeforeError.current) {
        // Reset stream index to try from the beginning when connection is restored
        setCurrentStreamIndex(0);
        if (audioRef.current) {
          audioRef.current.src = STREAM_URLS[0];
          audioRef.current.load();
          
          // Add a small delay to ensure the browser has properly re-established network connections
          setTimeout(() => {
            if (audioRef.current) {
              audioRef.current.play()
                .then(() => {
                  setNetworkError(false);
                  wasPlayingBeforeError.current = false;
                  toast.success("Connexion rétablie", {
                    description: "Lecture audio reprise automatiquement"
                  });
                })
                .catch(err => {
                  console.error("Failed to auto-resume playback:", err);
                });
            }
          }, 2000);
        }
      }
    };

    window.addEventListener('online', handleOnline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
    };
  }, [networkError]);

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setIsLoading(true);
      // Reset network error state when manually trying to play
      setNetworkError(false);
      
      audioRef.current.play().catch(err => {
        console.error("Failed to play:", err);
        setIsLoading(false);
        
        // Try the next stream URL if available
        if (currentStreamIndex < STREAM_URLS.length - 1) {
          setCurrentStreamIndex(currentStreamIndex + 1);
        } else {
          setNetworkError(true);
          toast.error("Difficulté de lecture", {
            description: "Impossible de lire le flux radio"
          });
        }
      });
    }
  };
  
  // Expose a function to play radio from other components
  useEffect(() => {
    window.playRadio = () => {
      if (audioRef.current && !isPlaying) {
        setIsLoading(true);
        // Reset network error state when manually trying to play
        setNetworkError(false);
        
        audioRef.current.play().catch(err => {
          console.error("Failed to play:", err);
          setIsLoading(false);
          
          // Try the next stream URL if available
          if (currentStreamIndex < STREAM_URLS.length - 1) {
            setCurrentStreamIndex(currentStreamIndex + 1);
          } else {
            setNetworkError(true);
            toast.error("Difficulté de lecture", {
              description: "Impossible de lire le flux radio"
            });
          }
        });
      }
    };
    
    return () => {
      // Don't reset window.playRadio to keep it available
    };
  }, [isPlaying, currentStreamIndex, networkError]);

  return {
    isPlaying,
    isLoading,
    volume,
    setVolume,
    handlePlayPause,
    networkError
  };
}
