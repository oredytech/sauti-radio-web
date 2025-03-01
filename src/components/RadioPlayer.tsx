
import { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const RadioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([50]);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Create audio element on component mount
  useEffect(() => {
    audioRef.current = new Audio("https://stream.zeno.fm/jyat1y09yg1tv");
    audioRef.current.volume = volume[0] / 100;
    
    // Add event listeners
    audioRef.current.addEventListener("playing", () => {
      setIsLoading(false);
      setIsPlaying(true);
    });
    
    audioRef.current.addEventListener("waiting", () => {
      setIsLoading(true);
    });
    
    audioRef.current.addEventListener("error", () => {
      setIsLoading(false);
      setIsPlaying(false);
      console.error("Error loading audio stream");
    });
    
    // Set as global to access from other components
    window.radioPlayer = audioRef.current;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
        window.radioPlayer = null;
      }
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
      window.playRadio = undefined;
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
