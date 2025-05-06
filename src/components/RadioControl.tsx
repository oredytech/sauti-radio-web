
import { useState, useEffect } from "react";
import { Play, Pause, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useTranslation } from "@/hooks/useTranslation";

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
  const { t } = useTranslation();
  
  // Synchroniser l'état du bouton avec l'état réel du lecteur
  useEffect(() => {
    const syncPlayerState = () => {
      if (window.radioPlayer) {
        // Mettre à jour l'état isPlaying basé sur l'état du lecteur
        setIsPlaying(!window.radioPlayer.paused);
      }
    };
    
    // Vérifier immédiatement l'état du lecteur
    syncPlayerState();
    
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
    
    // S'assurer que le lecteur audio existe avant d'ajouter des écouteurs d'événements
    if (window.radioPlayer) {
      window.radioPlayer.addEventListener("play", handlePlay);
      window.radioPlayer.addEventListener("playing", handlePlay);
      window.radioPlayer.addEventListener("pause", handlePause);
      window.radioPlayer.addEventListener("waiting", handleWaiting);
      window.radioPlayer.addEventListener("error", handleError);
      
      // Ajouter un écouteur pour détecter les changements directs sur le lecteur
      window.radioPlayer.addEventListener("loadstart", syncPlayerState);
      window.radioPlayer.addEventListener("canplay", syncPlayerState);
    }
    
    // Nettoyer les écouteurs d'événements
    return () => {
      if (window.radioPlayer) {
        window.radioPlayer.removeEventListener("play", handlePlay);
        window.radioPlayer.removeEventListener("playing", handlePlay);
        window.radioPlayer.removeEventListener("pause", handlePause);
        window.radioPlayer.removeEventListener("waiting", handleWaiting);
        window.radioPlayer.removeEventListener("error", handleError);
        window.radioPlayer.removeEventListener("loadstart", syncPlayerState);
        window.radioPlayer.removeEventListener("canplay", syncPlayerState);
      }
    };
  }, []);

  const handlePlayPause = () => {
    if (!window.radioPlayer) return;
    
    if (isPlaying) {
      window.radioPlayer.pause();
      toast.info(t('radio.paused'), {
        duration: 2000
      });
    } else {
      setIsLoading(true);
      // Utiliser la fonction globale playRadio si disponible
      if (window.playRadio) {
        window.playRadio();
      } else {
        window.radioPlayer.play().catch(err => {
          console.error("Failed to play:", err);
          setIsLoading(false);
          toast.error(t('radio.playError'), {
            description: t('radio.playErrorDesc')
          });
        });
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
      aria-label={isPlaying ? "Mettre en pause" : "Écouter"}
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
          {isPlaying ? t('radio.onAir') : t('radio.listen')}
        </span>
      )}
    </Button>
  );
};

export default RadioControl;
