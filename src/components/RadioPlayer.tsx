import { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

// Static audio instance that persists across page navigations
let audioInstance: HTMLAudioElement | null = null;

const RadioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([50]);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize the audio element once for the entire application
  useEffect(() => {
    // If the audio instance doesn't exist yet, create it
    if (!audioInstance) {
      audioInstance = new Audio("https://stream.zeno.fm/jyat1y09yg1tv");
      audioInstance.volume = volume[0] / 100;
    }
    
    // Set the ref to point to our singleton audio instance
    audioRef.current = audioInstance;
    
    // Add event listeners
    const handlePlaying = () => {
      setIsLoading(false);
      setIsPlaying(true);
    };
    
    const handleWaiting = () => {
      setIsLoading(true);
    };
    
    const handleError = () => {
      setIsLoading(false);
      setIsPlaying(false);
      console.error("Error loading audio stream");
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
      // Don't nullify window.radioPlayer on unmount since we want it to persist
    };
  }, []);

  // Update volume when slider changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume[0] / 100;
    }
  }, [volume]);

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
        });
      }
    };
    
    return () => {
      // Don't reset window.playRadio to keep it available throughout the app
    };
  }, [isPlaying]);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t z-50 dark:bg-gray-900 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-secondary hover:text-primary relative"
              onClick={handlePlayPause}
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader className="h-6 w-6 animate-spin text-primary" />
              ) : isPlaying ? (
                <Pause className="h-6 w-6" />
              ) : (
                <Play className="h-6 w-6" />
              )}
            </Button>
            <div className="flex items-center gap-2">
              <img
                src="/lovable-uploads/c288b9bf-71dc-49ea-9721-51f84631a934.png"
                alt="Radio Sauti ya Injili"
                className="h-8 w-8 object-contain"
              />
              <div>
                <h3 className="font-semibold text-primary text-sm">Radio Sauti ya Injili</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {isPlaying ? "En direct" : "En pause"}
                </p>
              </div>
            </div>
          </div>

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
      </div>
    </div>
  );
};

// Declare global window types
declare global {
  interface Window {
    radioPlayer: HTMLAudioElement | null;
    playRadio: (() => void) | undefined;
  }
}

export default RadioPlayer;
