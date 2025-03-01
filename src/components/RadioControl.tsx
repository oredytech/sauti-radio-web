
import { Play, Pause, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  // State is managed by RadioPlayer, we just trigger the global function
  const isPlaying = window.radioPlayer?.paused === false;
  const isLoading = false; // We'll get this from a global state in the future

  const handlePlay = () => {
    if (window.playRadio) {
      window.playRadio();
    }
  };

  // Determine icon size based on button size
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
      onClick={handlePlay}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader size={iconSize[size]} />
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
