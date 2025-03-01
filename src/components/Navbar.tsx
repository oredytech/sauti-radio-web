
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavLink from "./navbar/NavLink";
import DropdownMenu from "./navbar/DropdownMenu";
import SearchForm from "./navbar/SearchForm";
import ThemeToggle from "./navbar/ThemeToggle";
import MobileMenu from "./navbar/MobileMenu";
import RadioControl from "./RadioControl";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const emissionItems = [
    { label: "Morning Show", path: "/emissions/morning" },
    { label: "Evening Show", path: "/emissions/evening" },
    { label: "Weekend Show", path: "/emissions/weekend" }
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              <img alt="Radio Sauti ya Injili" className="h-16 w-16" src="/lovable-uploads/a681d37a-5626-4700-b989-7c74ac9b873c.png" />
            </Link>
            <RadioControl 
              showText={false}
              size="sm"
              variant="secondary"
              className="hidden sm:flex"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/actualites">Actualités</NavLink>
            <DropdownMenu label="Émissions" items={emissionItems} />
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">À propos</NavLink>
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full" 
                onClick={() => setShowSearch(!showSearch)}
                aria-label="Search"
              >
                <Search className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </Button>
              
              {showSearch && <SearchForm showSearch={showSearch} setShowSearch={setShowSearch} />}
            </div>
            
            <ThemeToggle />
            
            <RadioControl 
              showText={false}
              size="sm"
              variant="secondary"
              className="sm:hidden"
            />
            
            <Button variant="ghost" size="icon" className="md:hidden rounded-full" onClick={() => setIsOpen(!isOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600 dark:text-gray-300">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
      
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

export default Navbar;
