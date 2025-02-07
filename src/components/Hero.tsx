import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-primary min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/e9395874-6c20-46b0-914a-4110cba6d314.png')] bg-cover bg-center opacity-30" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Proclamer l'Espoir au Monde
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Radio Sauti ya Injili, votre station de radio chrétienne à Goma, diffusant la Bonne Nouvelle à travers l'Afrique.
          </p>
          <Button 
            className="bg-secondary hover:bg-red-600 text-white text-lg px-8 py-6"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            En savoir plus
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;