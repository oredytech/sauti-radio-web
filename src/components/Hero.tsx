
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-[url('/lovable-uploads/c556d486-14f5-4acf-a3f0-456898833de3.png')] bg-cover bg-center"
          style={{ backgroundImage: "url('/lovable-uploads/c556d486-14f5-4acf-a3f0-456898833de3.png')" }}
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Overlay sombre */}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Radio Sauti Ya Injili
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Radio Sauti ya Injili, votre station de radio chrétienne à Goma, diffusant la Bonne Nouvelle à travers l'Afrique.
          </p>
          <Button 
            className="bg-secondary hover:bg-red-600 text-white text-lg px-8 py-6 flex items-center gap-2"
          >
            <Play className="h-6 w-6" />
            Écouter en direct
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
