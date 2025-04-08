
import { Volume2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface VolumeControlProps {
  volume: number[];
  setVolume: (value: number[]) => void;
}

const VolumeControl = ({ volume, setVolume }: VolumeControlProps) => {
  return (
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
  );
};

export default VolumeControl;
