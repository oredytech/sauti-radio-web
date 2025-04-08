import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { getAudioInstance, STREAM_URLS } from "@/utils/radioUtils";

export function useRadioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([50]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStreamIndex, setCurrentStreamIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
              setIsPlaying(false);
            });
          }
        }
      } else {
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

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setIsLoading(true);
      audioRef.current.play().catch(err => {
        console.error("Failed to play:", err);
        setIsLoading(false);
        
        // Try the next stream URL if available
        if (currentStreamIndex < STREAM_URLS.length - 1) {
          setCurrentStreamIndex(currentStreamIndex + 1);
        } else {
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
        audioRef.current.play().catch(err => {
          console.error("Failed to play:", err);
          setIsLoading(false);
          
          // Try the next stream URL if available
          if (currentStreamIndex < STREAM_URLS.length - 1) {
            setCurrentStreamIndex(currentStreamIndex + 1);
          } else {
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
  }, [isPlaying, currentStreamIndex]);

  return {
    isPlaying,
    isLoading,
    volume,
    setVolume,
    handlePlayPause
  };
}
