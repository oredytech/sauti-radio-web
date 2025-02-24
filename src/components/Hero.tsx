
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-primary min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/ed46bbe7-3b36-46d2-ad26-02193f40977b.png')] bg-cover bg-center opacity-90" />
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
