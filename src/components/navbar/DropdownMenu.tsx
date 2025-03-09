
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
}

const DropdownMenu = ({ label, items, isMobile = false, onClick }: DropdownMenuProps) => {
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

  return (
    <div className="relative group">
      <button className="flex items-center text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary font-semibold">
        {label} <ChevronDown className="h-4 w-4 ml-1" />
      </button>
      <div className="absolute hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded-md p-2 w-48 mt-2 transition-colors duration-300">
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
