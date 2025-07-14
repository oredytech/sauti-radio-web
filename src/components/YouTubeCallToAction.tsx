
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Youtube, PlayCircle } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const YouTubeCallToAction = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 relative">
      {/* Fond avec dégradé et overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-gray-900 to-red-900"
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Youtube className="w-16 h-16 text-red-600 bg-white p-3 rounded-full mx-auto mb-6" />
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('home.youtube.title')}
          </h2>
          
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            {t('home.youtube.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-6 h-auto"
              onClick={() => window.open("https://www.youtube.com/@UCVtyJTceyibnYDLQ7eCK8gg?sub_confirmation=1", "_blank")}
            >
              <Youtube className="mr-2 h-5 w-5" />
              {t('home.youtube.subscribe')}
            </Button>
            
            <Link to="/playlists">
              <Button 
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 font-bold px-8 py-6 h-auto"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Voir nos vidéos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeCallToAction;
