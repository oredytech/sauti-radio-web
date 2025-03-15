import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

interface DropdownItem {
  label: string;
  path: string;
}

interface DropdownMenuProps {
  label: string;
  items: DropdownItem[];
  isMobile?: boolean;
  onClick?: () => void;
  sectionLink?: string;
}

const DropdownMenu = ({ label, items, isMobile = false, onClick, sectionLink }: DropdownMenuProps) => {
  if (isMobile) {
    return (
      <div className="relative">
        <button 
          className="flex w-full items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800" 
          onClick={e => {
            e.currentTarget.nextElementSibling?.classList.toggle('hidden');
          }}
        >
          {label} <ChevronDown className="h-4 w-4" />
        </button>
        <div className="hidden pl-4 space-y-1">
          {items.map((item, index) => (
            <Link 
              key={index} 
              to={item.path} 
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800" 
              onClick={onClick}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  const isSection = sectionLink && sectionLink.startsWith('#');
  
  const handleSectionClick = (e: React.MouseEvent) => {
    if (isSection) {
      e.preventDefault();
      
      if (window.location.pathname === '/') {
        const sectionId = sectionLink?.substring(1);
        const section = document.getElementById(sectionId || '');
        section?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = `/${sectionLink}`;
      }
      
      onClick?.();
    }
  };

  return (
    <div className="relative group">
      <Link 
        to={sectionLink || "#"} 
        className="flex items-center text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary font-semibold"
        onClick={isSection ? handleSectionClick : undefined}
      >
        {label} <ChevronDown className="h-4 w-4 ml-1" />
      </Link>
      <div className="absolute hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded-md p-2 w-48 mt-2 transition-colors duration-300 z-50">
        {items.map((item, index) => (
          <Link 
            key={index} 
            to={item.path} 
            className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-gray-800 dark:text-gray-200 transition-colors duration-200"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
