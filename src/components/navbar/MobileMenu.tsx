
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import DropdownMenu from "./DropdownMenu";
import { useTranslation } from "@/hooks/useTranslation";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  const closeMenu = () => setIsOpen(false);
  const { t } = useTranslation();

  const teamItems = [
    { label: t('nav.team.direction'), path: "/team/direction" },
    { label: t('nav.team.technical'), path: "/team/technical" },
    { label: t('nav.team.editorial'), path: "/team/editorial" },
    { label: t('nav.team.collaborators'), path: "/team/collaborators" },
  ];

  return (
    <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white dark:bg-gray-900 shadow-lg transition-all duration-300`}>
      <div className="px-2 pt-2 pb-3 space-y-1">
        <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800" onClick={closeMenu}>
          {t('nav.home')}
        </Link>
        <Link to="/emissions" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800" onClick={closeMenu}>
          {t('nav.shows')}
        </Link>
        <Link to="/actualites" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800" onClick={closeMenu}>
          {t('nav.news')}
        </Link>
        
        <DropdownMenu 
          label={t('nav.team')} 
          items={teamItems} 
          isMobile={true} 
          onClick={closeMenu} 
        />
        
        <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800" onClick={closeMenu}>
          {t('nav.contact')}
        </Link>
        <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800" onClick={closeMenu}>
          {t('nav.about')}
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
