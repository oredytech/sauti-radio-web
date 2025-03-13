
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import DropdownMenu from "./DropdownMenu";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  const dropdownItems = [
    { label: "Morning Show", path: "/emissions/morning" },
    { label: "Evening Show", path: "/emissions/evening" },
    { label: "Weekend Show", path: "/emissions/weekend" }
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white dark:bg-gray-900 shadow-lg transition-all duration-300`}>
      <div className="px-2 pt-2 pb-3 space-y-1">
        <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800" onClick={closeMenu}>
          Accueil
        </Link>
        <Link to="/actualites" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800" onClick={closeMenu}>
          Actualités
        </Link>
        <div className="relative">
          <Link 
            to="/#emissions" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={closeMenu}
          >
            Émissions
          </Link>
        </div>
        <DropdownMenu 
          label="Sous-catégories Émissions" 
          items={dropdownItems} 
          isMobile={true} 
          onClick={closeMenu}
        />
        <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800" onClick={closeMenu}>
          Contact
        </Link>
        <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800" onClick={closeMenu}>
          À propos
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
