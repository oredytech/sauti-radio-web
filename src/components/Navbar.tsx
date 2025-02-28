
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Search, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return document.documentElement.classList.contains('dark');
  });
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Toggle dark mode
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  // Initialize theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark' && !document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // Add actual search functionality here
      setSearchQuery("");
      setShowSearch(false);
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
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
            <Link to="/" className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary font-semibold">
              Accueil
            </Link>
            <Link to="/actualites" className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary font-semibold">
              Actualités
            </Link>
            <div className="relative group">
              <button className="flex items-center text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary font-semibold">
                Émissions <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              <div className="absolute hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded-md p-2 w-48 mt-2">
                <Link to="/emissions/morning" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-gray-800 dark:text-gray-200">
                  Morning Show
                </Link>
                <Link to="/emissions/evening" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-gray-800 dark:text-gray-200">
                  Evening Show
                </Link>
                <Link to="/emissions/weekend" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-gray-800 dark:text-gray-200">
                  Weekend Show
                </Link>
              </div>
            </div>
            <Link to="/contact" className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary font-semibold">
              Contact
            </Link>
            <Link to="/about" className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary font-semibold">
              À propos
            </Link>
          </div>

          {/* Boutons search et theme */}
          <div className="flex items-center space-x-2">
            {/* Search button and form */}
            {showSearch ? (
              <form 
                onSubmit={handleSearch}
                className="relative flex items-center"
              >
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full pl-4 pr-10 py-1 focus:outline-none focus:ring-2 focus:ring-primary text-sm w-full md:w-64 transition-all"
                  autoFocus
                />
                <Button 
                  type="submit" 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-0 rounded-full"
                >
                  <Search className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                </Button>
                <Button 
                  type="button"
                  variant="ghost" 
                  size="icon" 
                  className="ml-1"
                  onClick={() => setShowSearch(false)}
                >
                  <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                </Button>
              </form>
            ) : (
              <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setShowSearch(true)}>
                <Search className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </Button>
            )}
            
            {/* Dark/Light mode toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full" 
              onClick={toggleDarkMode}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-gray-300" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
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
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600 dark:text-gray-300">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu - conditionally shown */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white dark:bg-gray-900 shadow-lg transition-all duration-300`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link 
            to="/" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            Accueil
          </Link>
          <Link 
            to="/actualites" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            Actualités
          </Link>
          <div className="relative">
            <button 
              className="flex w-full items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={(e) => {
                e.currentTarget.nextElementSibling.classList.toggle('hidden');
              }}
            >
              Émissions <ChevronDown className="h-4 w-4" />
            </button>
            <div className="hidden pl-4 space-y-1">
              <Link 
                to="/emissions/morning" 
                className="block px-3 py-2 rounded-md text-sm font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Morning Show
              </Link>
              <Link 
                to="/emissions/evening" 
                className="block px-3 py-2 rounded-md text-sm font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Evening Show
              </Link>
              <Link 
                to="/emissions/weekend" 
                className="block px-3 py-2 rounded-md text-sm font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Weekend Show
              </Link>
            </div>
          </div>
          <Link 
            to="/contact" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link 
            to="/about" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            À propos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
