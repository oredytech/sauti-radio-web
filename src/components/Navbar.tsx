
import { Button } from "@/components/ui/button";
import { Radio } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-primary shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img
              src="/lovable-uploads/c288b9bf-71dc-49ea-9721-51f84631a934.png"
              alt="Radio Sauti ya Injili"
              className="h-16"
            />
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#" className={`${isScrolled ? 'text-white' : 'text-primary'} hover:text-secondary transition-colors`}>Accueil</a>
            <a href="#about" className={`${isScrolled ? 'text-white' : 'text-primary'} hover:text-secondary transition-colors`}>À propos</a>
            <a href="#schedule" className={`${isScrolled ? 'text-white' : 'text-primary'} hover:text-secondary transition-colors`}>Programme</a>
            <a href="#news" className={`${isScrolled ? 'text-white' : 'text-primary'} hover:text-secondary transition-colors`}>Actualités</a>
            <a href="#contact" className={`${isScrolled ? 'text-white' : 'text-primary'} hover:text-secondary transition-colors`}>Contact</a>
          </div>

          <Button 
            className="bg-secondary hover:bg-red-600 text-white flex items-center gap-2"
            onClick={() => window.open("#", "_blank")}
          >
            <Radio className="h-4 w-4" />
            ÉCOUTER EN DIRECT
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
