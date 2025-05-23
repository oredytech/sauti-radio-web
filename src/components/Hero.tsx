
import RadioControl from "@/components/RadioControl";
import { useTranslation } from "@/hooks/useTranslation";

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <div className="relative flex items-center" style={{
      minHeight: "calc(100vh - 5rem)"
    }}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: 'url("/lovable-uploads/11813e14-6a65-4103-a8cf-814196a3c2e5.png")',
          backgroundSize: "cover",
          backgroundPosition: "center"
        }} />
        <div className="absolute inset-0 bg-primary/40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {t('home.hero.subtitle')}
          </p>
          <RadioControl showText={true} size="lg" variant="secondary" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
