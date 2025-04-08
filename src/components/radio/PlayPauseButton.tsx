
import { Play, Pause, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlayPauseButtonProps {
  isPlaying: boolean;
  isLoading: boolean;
  onClick: () => void;
  className?: string;
}

const PlayPauseButton = ({
  isPlaying,
  isLoading,
  onClick,
  className = ""
}: PlayPauseButtonProps) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className={`h-8 w-8 text-secondary hover:text-primary relative ${className}`}
      onClick={onClick}
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
  );
};

export default PlayPauseButton;
