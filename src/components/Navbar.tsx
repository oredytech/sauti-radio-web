
import { Link } from "react-router-dom";
import { ChevronDown, Search, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo et bouton écouter */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/8f100b7c-cc2f-44fc-89f7-f3c48f156acd.png" 
                alt="Radio Sauti ya Injili" 
                className="h-16 w-16"
              />
            </Link>
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 rounded-lg text-sm md:text-base hidden sm:block"
            >
              ÉCOUTER
            </Button>
          </div>

          {/* Navigation liens */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-primary font-semibold">
              Accueil
            </Link>
            <div className="relative group">
              <button className="flex items-center text-gray-800 hover:text-primary font-semibold">
                Émissions <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-2 w-48 mt-2">
                <Link to="/emissions/morning" className="block p-2 hover:bg-gray-100 rounded">
                  Morning Show
                </Link>
                <Link to="/emissions/evening" className="block p-2 hover:bg-gray-100 rounded">
                  Evening Show
                </Link>
                <Link to="/emissions/weekend" className="block p-2 hover:bg-gray-100 rounded">
                  Weekend Show
                </Link>
              </div>
            </div>
            <Link to="/contact" className="text-gray-800 hover:text-primary font-semibold">
              Contact
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-primary font-semibold">
              À propos
            </Link>
          </div>

          {/* Boutons search et theme */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Moon className="h-5 w-5" />
            </Button>
            
            {/* Bouton mobile écouter */}
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-1 rounded-lg text-sm sm:hidden"
            >
              ÉCOUTER
            </Button>
            
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden rounded-full"
              onClick={() => console.log('Menu mobile')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu - hidden by default */}
      <div className="hidden md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100">
            Accueil
          </Link>
          <button className="flex w-full items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100">
            Émissions <ChevronDown className="h-4 w-4" />
          </button>
          <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100">
            Contact
          </Link>
          <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100">
            À propos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
