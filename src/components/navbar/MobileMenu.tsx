
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import { useTranslation } from "@/hooks/useTranslation";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  const closeMenu = () => setIsOpen(false);
  const { t } = useTranslation();

  const internalActivitiesItems = [
    { label: t('nav.internal.info'), path: "/activities/internal-info" },
    { label: t('nav.internal.gallery'), path: "/activities/gallery" },
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
        <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800" onClick={closeMenu}>
          {t('nav.about')}
        </Link>
        <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800" onClick={closeMenu}>
          {t('nav.contact')}
        </Link>
        <Link to="/don" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800" onClick={closeMenu}>
          Faire un don
        </Link>
        
        <DropdownMenu 
          label={t('nav.internal')} 
          items={internalActivitiesItems} 
          isMobile={true} 
          onClick={closeMenu} 
        />
      </div>
    </div>
  );
};

export default MobileMenu;
