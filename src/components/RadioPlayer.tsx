
import { useRadioPlayer } from "@/hooks/useRadioPlayer";
import PlayPauseButton from "./radio/PlayPauseButton";
import VolumeControl from "./radio/VolumeControl";
import RadioInfo from "./radio/RadioInfo";
import VlcPlayButton from "./radio/VlcPlayButton";
import { Wifi, WifiOff } from "lucide-react";
import { Alert, AlertDescription } from "./ui/alert";

const RadioPlayer = () => {
  const { isPlaying, isLoading, volume, setVolume, handlePlayPause, networkError } = useRadioPlayer();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t z-50 dark:bg-gray-900 dark:border-gray-800">
      {networkError && (
        <Alert variant="destructive" className="py-2 rounded-none border-t-0 border-x-0">
          <div className="flex items-center gap-2">
            {navigator.onLine ? <Wifi className="h-4 w-4" /> : <WifiOff className="h-4 w-4" />}
            <AlertDescription className="text-xs">
              Problème de connexion au flux radio. 
              {navigator.onLine ? " Tentative de reconnexion automatique..." : " Vérifiez votre connexion internet..."}
            </AlertDescription>
          </div>
        </Alert>
      )}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <PlayPauseButton
              isPlaying={isPlaying}
              isLoading={isLoading}
              onClick={handlePlayPause}
            />
            <RadioInfo isPlaying={isPlaying} />
          </div>

          <div className="flex items-center gap-4">
            <VlcPlayButton variant="outline" size="sm" className="hidden md:flex" />
            <VolumeControl volume={volume} setVolume={setVolume} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioPlayer;
