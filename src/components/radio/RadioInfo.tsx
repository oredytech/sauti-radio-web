
interface RadioInfoProps {
  isPlaying: boolean;
}

const RadioInfo = ({ isPlaying }: RadioInfoProps) => {
  return (
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
  );
};

export default RadioInfo;
