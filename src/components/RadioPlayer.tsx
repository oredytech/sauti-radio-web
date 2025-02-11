
import { useState } from "react";
import { Play, Pause, Volume2, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const RadioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([50]);
  const [isLoading, setIsLoading] = useState(false);

  const handlePlayPause = () => {
    setIsLoading(true);
    setIsPlaying(!isPlaying);
    // Simuler le chargement
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-10">
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
                <p className="text-xs text-gray-500">En direct</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Volume2 className="h-4 w-4 text-gray-500" />
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

export default RadioPlayer;
