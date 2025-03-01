
import { Play, Pause, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RadioControlProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline" | "ghost";
}

const RadioControl = ({
  className = "",
  showText = false,
  size = "md",
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

  // Determine button size classes
  const sizeClasses = {
    sm: "h-9 px-3",
    md: "h-10 px-4 py-2",
    lg: "h-11 px-8 py-6",
  };

  // Determine icon size
  const iconSize = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  return (
    <Button
      className={className}
      variant={variant as any}
      size={size !== "lg" ? size : undefined}
      className={size === "lg" ? sizeClasses.lg : undefined}
      onClick={handlePlay}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader className={iconSize[size]} />
      ) : isPlaying ? (
        <Pause className={iconSize[size]} />
      ) : (
        <Play className={iconSize[size]} />
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
