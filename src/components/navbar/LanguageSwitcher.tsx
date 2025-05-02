
import { Globe } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

const languages = [
  { code: "fr", name: "Français" },
  { code: "en", name: "English" },
  { code: "sw", name: "Kiswahili" },
];

const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage } = useTranslation();
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm"
          className="flex items-center gap-1 px-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline text-xs font-medium">{currentLanguage.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code as "fr" | "en" | "sw")}
            className={`cursor-pointer text-sm ${currentLanguage === lang.code ? "bg-gray-100 dark:bg-gray-700" : ""}`}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
