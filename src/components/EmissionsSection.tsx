
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Music, Book, GraduationCap, Heart, List, Mic, Bandage, ChevronDown, ChevronRight } from "lucide-react";

interface EmissionCategory {
  name: string;
  icon: React.ReactNode;
  subcategories: string[];
}

const EmissionsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const emissionCategories: EmissionCategory[] = [
    {
      name: "Enseignements Bibliques",
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
      name: "Emissions Traditionnelles",
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
      name: "Emissions Educatives",
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
      name: "Enseignements de couple",
      icon: <Heart className="h-5 w-5" />,
      subcategories: [
        "Tujenge ndoa zetu",
        "Unyumba unao Dumu",
      ],
    },
    {
      name: "Divertissements",
      icon: <Music className="h-5 w-5" />,
      subcategories: [
        "Salamu Na Nyimbo",
        "Théâtre TTV",
      ],
    },
    {
      name: "Santé",
      icon: <Bandage className="h-5 w-5" />,
      subcategories: [
        "Jiko letu",
        "Tiba lishe",
      ],
    },
    {
      name: "Maoni ya musikilizaji",
      icon: <Mic className="h-5 w-5" />,
      subcategories: [],
    },
  ];

  const toggleCategory = (categoryName: string) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryName);
    }
  };

  return (
    <section id="emissions" className="py-20 relative">
      {/* Image d'arrière-plan avec overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/lovable-uploads/b115b786-3404-4073-9148-628fbd66947e.png')"
      }} />
      <div className="absolute inset-0 bg-black/70" /> {/* Overlay sombre pour améliorer la lisibilité */}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Nos émissions</h2>
          <p className="text-gray-300">
            Découvrez nos différentes catégories d'émissions
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
                  ?.subcategories.map((subcat) => (
                    <div 
                      key={subcat} 
                      className="p-3 border border-gray-200 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                    >
                      <p className="text-gray-700 dark:text-gray-300">{subcat}</p>
                    </div>
                  ))}
              </div>
              
              {emissionCategories.find((cat) => cat.name === selectedCategory)?.subcategories.length === 0 && (
                <p className="text-gray-500 dark:text-gray-400">Aucune sous-catégorie disponible</p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmissionsSection;
