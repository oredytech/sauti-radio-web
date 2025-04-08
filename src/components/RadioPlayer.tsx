
import { useRadioPlayer } from "@/hooks/useRadioPlayer";
import PlayPauseButton from "./radio/PlayPauseButton";
import VolumeControl from "./radio/VolumeControl";
import RadioInfo from "./radio/RadioInfo";

const RadioPlayer = () => {
  const { isPlaying, isLoading, volume, setVolume, handlePlayPause } = useRadioPlayer();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t z-50 dark:bg-gray-900 dark:border-gray-800">
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

          <VolumeControl volume={volume} setVolume={setVolume} />
        </div>
      </div>
    </div>
  );
};

export default RadioPlayer;
