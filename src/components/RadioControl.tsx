
import { useState, useEffect } from "react";
import { Play, Pause, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface RadioControlProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "default" | "lg";
  variant?: "primary" | "secondary" | "outline" | "ghost";
}

const RadioControl = ({
  className = "",
  showText = false,
  size = "default",
  variant = "secondary",
}: RadioControlProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    const updatePlayState = () => {
      if (window.radioPlayer) {
        setIsPlaying(!window.radioPlayer.paused);
      }
    };
    
    updatePlayState();
    
    const handlePlay = () => {
      setIsPlaying(true);
      setIsLoading(false);
    };
    
    const handlePause = () => {
      setIsPlaying(false);
    };
    
    const handleWaiting = () => {
      setIsLoading(true);
    };
    
    const handleError = () => {
      setIsLoading(false);
      setIsPlaying(false);
    };
    
    if (window.radioPlayer) {
      window.radioPlayer.addEventListener("play", handlePlay);
      window.radioPlayer.addEventListener("playing", handlePlay);
      window.radioPlayer.addEventListener("pause", handlePause);
      window.radioPlayer.addEventListener("waiting", handleWaiting);
      window.radioPlayer.addEventListener("error", handleError);
    }
    
    return () => {
      if (window.radioPlayer) {
        window.radioPlayer.removeEventListener("play", handlePlay);
        window.radioPlayer.removeEventListener("playing", handlePlay);
        window.radioPlayer.removeEventListener("pause", handlePause);
        window.radioPlayer.removeEventListener("waiting", handleWaiting);
        window.radioPlayer.removeEventListener("error", handleError);
      }
    };
  }, []);

  const handlePlayPause = () => {
    if (window.radioPlayer) {
      if (isPlaying) {
        window.radioPlayer.pause();
        toast.info("Radio en pause", {
          duration: 2000
        });
      } else {
        setIsLoading(true);
        if (window.playRadio) {
          window.playRadio();
        } else {
          window.radioPlayer.play().catch(err => {
            console.error("Failed to play:", err);
            setIsLoading(false);
            toast.error("Erreur de lecture", {
              description: "Impossible de lire le flux radio"
            });
          });
        }
      }
    }
  };

  const iconSize = {
    sm: 16,
    default: 20,
    lg: 24,
  };

  return (
    <Button
      className={`${className} ${size === "lg" ? "h-11 px-8 py-6" : ""}`}
      variant={variant as any}
      size={size}
      onClick={handlePlayPause}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader size={iconSize[size]} className="animate-spin" />
      ) : isPlaying ? (
        <Pause size={iconSize[size]} />
      ) : (
        <Play size={iconSize[size]} />
      )}
      {showText && (
        <span className={size === "lg" ? "text-lg" : ""}>
          {isPlaying ? "En direct" : "Écouter en direct"}
        </span>
      )}
    </Button>
  );
};

export default RadioControl;
