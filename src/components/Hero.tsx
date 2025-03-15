
import RadioControl from "@/components/RadioControl";

const Hero = () => {
  return <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: "url('/lovable-uploads/c8da9cd8-7dfd-4993-84ec-1ea3ece1921a.png')"
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-primary/70" /> {/* Overlay avec dégradé */}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Radio Sauti Ya Injili
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Radio Sauti ya Injili, votre station de radio chrétienne à Goma, diffusant la Bonne Nouvelle à travers l'Afrique.
          </p>
          <RadioControl 
            showText={true}
            size="lg"
            variant="secondary"
          />
        </div>
      </div>
    </div>;
};

export default Hero;
