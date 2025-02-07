
import { Button } from "@/components/ui/button";
import { Radio } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
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
            <a href="#" className="text-primary hover:text-secondary">Accueil</a>
            <a href="#about" className="text-primary hover:text-secondary">À propos</a>
            <a href="#schedule" className="text-primary hover:text-secondary">Programme</a>
            <a href="#news" className="text-primary hover:text-secondary">Actualités</a>
            <a href="#contact" className="text-primary hover:text-secondary">Contact</a>
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
