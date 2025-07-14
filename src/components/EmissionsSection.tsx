
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Music, Book, GraduationCap, Heart, List, Mic, Bandage, ChevronDown, ChevronRight, Play, FolderOpen } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useYouTubePlaylists } from "@/hooks/useYouTube";

interface EmissionCategory {
  name: string;
  icon: React.ReactNode;
  subcategories: string[];
}

const EmissionsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { t, currentLanguage } = useTranslation();
  const navigate = useNavigate();
  const { data: playlists } = useYouTubePlaylists();

  // Define categories with translations
  const getCategoryName = (frName: string): string => {
    switch (frName) {
      case "Enseignements Bibliques":
        return currentLanguage === "fr" 
          ? "Enseignements Bibliques" 
          : currentLanguage === "en" 
            ? "Biblical Teachings"
            : "Mafundisho ya Biblia";
      case "Emissions Traditionnelles":
        return currentLanguage === "fr" 
          ? "Emissions Traditionnelles" 
          : currentLanguage === "en" 
            ? "Traditional Shows"
            : "Vipindi vya Jadi";
      case "Emissions Educatives":
        return currentLanguage === "fr" 
          ? "Emissions Educatives" 
          : currentLanguage === "en" 
            ? "Educational Shows"
            : "Vipindi vya Elimu";
      case "Enseignements de couple":
        return currentLanguage === "fr" 
          ? "Enseignements de couple" 
          : currentLanguage === "en" 
            ? "Couple Teachings"
            : "Mafundisho ya Wanandoa";
      case "Divertissements":
        return currentLanguage === "fr" 
          ? "Divertissements" 
          : currentLanguage === "en" 
            ? "Entertainment"
            : "Burudani";
      case "Santé":
        return currentLanguage === "fr" 
          ? "Santé" 
          : currentLanguage === "en" 
            ? "Health"
            : "Afya";
      case "Maoni ya musikilizaji":
        return currentLanguage === "fr" 
          ? "Maoni ya musikilizaji" 
          : currentLanguage === "en" 
            ? "Listener Opinions"
            : "Maoni ya Wasikilizaji";
      case "Autres":
        return currentLanguage === "fr" 
          ? "Autres" 
          : currentLanguage === "en" 
            ? "Others"
            : "Mengine";
      default:
        return frName;
    }
  };

  const baseEmissionCategories: EmissionCategory[] = [
    {
      name: getCategoryName("Enseignements Bibliques"),
      icon: <Book className="h-5 w-5" />,
      subcategories: [
        "Bibliya ina jibu",
        "Levons-nous et bâtissons",
        "MAHUBIRI",
        "Neno la tumaini",
        "Tujifunze Bibliya",
        "Ujumbe kwa yote",
        "Uzima ndani ya neno",
        "Wazo",
      ],
    },
    {
      name: getCategoryName("Emissions Traditionnelles"),
      icon: <Music className="h-5 w-5" />,
      subcategories: [
        "Kifuliro",
        "Kihavu",
        "Kihunde",
        "Kinande",
        "Kinyindu",
        "Kirega",
        "Omuvughe wetu",
      ],
    },
    {
      name: getCategoryName("Emissions Educatives"),
      icon: <GraduationCap className="h-5 w-5" />,
      subcategories: [
        "Ake na Mama",
        "Jeunesse",
        "Mama mjane",
        "Tujifunze Kiswahili",
        "Watoto",
      ],
    },
    {
      name: getCategoryName("Enseignements de couple"),
      icon: <Heart className="h-5 w-5" />,
      subcategories: [
        "Tujenge ndoa zetu",
        "Unyumba unao Damu",
      ],
    },
    {
      name: getCategoryName("Divertissements"),
      icon: <Music className="h-5 w-5" />,
      subcategories: [
        "Salamu Na Nyimbo",
        "Théâtre TTV",
      ],
    },
    {
      name: getCategoryName("Santé"),
      icon: <Bandage className="h-5 w-5" />,
      subcategories: [
        "Jiko letu",
        "Tiba lishe",
      ],
    },
    {
      name: getCategoryName("Maoni ya musikilizaji"),
      icon: <Mic className="h-5 w-5" />,
      subcategories: [],
    },
  ];

  // Calculate unmatched playlists and create the "Autres" category
  const { emissionCategories, unmatchedPlaylists } = useMemo(() => {
    if (!playlists) {
      return { emissionCategories: baseEmissionCategories, unmatchedPlaylists: [] };
    }

    // Get all subcategories from base categories
    const allSubcategories = baseEmissionCategories.flatMap(cat => cat.subcategories);
    
    // Find playlists that don't match any subcategory
    const unmatched = playlists.filter(playlist => {
      return !allSubcategories.some(subcat => 
        playlist.title.toLowerCase().includes(subcat.toLowerCase()) ||
        subcat.toLowerCase().includes(playlist.title.toLowerCase())
      );
    });

    // Create "Autres" category if there are unmatched playlists
    const autresCategory: EmissionCategory = {
      name: getCategoryName("Autres"),
      icon: <FolderOpen className="h-5 w-5" />,
      subcategories: unmatched.map(playlist => playlist.title),
    };

    const finalCategories = unmatched.length > 0 
      ? [...baseEmissionCategories, autresCategory]
      : baseEmissionCategories;

    return { emissionCategories: finalCategories, unmatchedPlaylists: unmatched };
  }, [playlists, currentLanguage]);

  const toggleCategory = (categoryName: string) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryName);
    }
  };

  // Fonction pour trouver une playlist correspondante
  const findMatchingPlaylist = (subcategoryName: string) => {
    return playlists?.find(playlist => 
      playlist.title.toLowerCase().includes(subcategoryName.toLowerCase()) ||
      subcategoryName.toLowerCase().includes(playlist.title.toLowerCase())
    );
  };

  // Gérer le clic sur une sous-catégorie
  const handleSubcategoryClick = (subcategoryName: string) => {
    const matchingPlaylist = findMatchingPlaylist(subcategoryName);
    if (matchingPlaylist) {
      navigate(`/videos/${matchingPlaylist.id}`);
    } else {
      console.log(`Aucune playlist trouvée pour: ${subcategoryName}`);
    }
  };

  return (
    <section id="emissions" className="py-20 relative">
      {/* Image d'arrière-plan avec overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/lovable-uploads/da98c6a9-1dbc-4df8-aded-912f4621c67b.png')"
      }} />
      <div className="absolute inset-0 bg-black/70" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">{t('emissions.title')}</h2>
          <p className="text-gray-300">
            {t('emissions.subtitle')}
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Category buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            {emissionCategories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                onClick={() => toggleCategory(category.name)}
                className={`flex items-center gap-2 ${
                  selectedCategory === category.name 
                    ? "bg-primary text-white" 
                    : "bg-white/10 hover:bg-white/20 text-white border-white/30"
                }`}
              >
                {category.icon}
                {category.name}
                {category.subcategories.length > 0 && (
                  selectedCategory === category.name ? 
                  <ChevronDown className="h-4 w-4" /> : 
                  <ChevronRight className="h-4 w-4" />
                )}
              </Button>
            ))}
          </div>

          {/* Subcategories accordion */}
          {selectedCategory && (
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-md p-4 mt-6">
              <h3 className="text-xl font-semibold mb-4 text-primary dark:text-white">
                {selectedCategory}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {emissionCategories
                  .find((cat) => cat.name === selectedCategory)
                  ?.subcategories.map((subcat) => {
                    const matchingPlaylist = findMatchingPlaylist(subcat);
                    const hasPlaylist = !!matchingPlaylist;
                    
                    return (
                      <div 
                        key={subcat} 
                        className={`p-3 border border-gray-200 dark:border-gray-700 rounded-md transition-colors ${
                          hasPlaylist 
                            ? "hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700" 
                            : "bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                        }`}
                        onClick={() => hasPlaylist && handleSubcategoryClick(subcat)}
                      >
                        <div className="flex items-center justify-between">
                          <p className={`text-gray-700 dark:text-gray-300 ${hasPlaylist ? "font-medium" : ""}`}>
                            {subcat}
                          </p>
                          {hasPlaylist && (
                            <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                              <Play className="h-3 w-3" />
                              <span className="text-xs">{matchingPlaylist.videoCount}</span>
                            </div>
                          )}
                        </div>
                        {hasPlaylist && (
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Playlist: {matchingPlaylist.title}
                          </p>
                        )}
                      </div>
                    );
                  })}
              </div>
              
              {emissionCategories.find((cat) => cat.name === selectedCategory)?.subcategories.length === 0 && (
                <p className="text-gray-500 dark:text-gray-400">{t('emissions.noSubcategories')}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmissionsSection;
