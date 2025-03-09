
import { Link } from "react-router-dom";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink = ({ to, children, onClick }: NavLinkProps) => {
  return (
    <Link 
      to={to} 
      className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-blue-400 font-semibold transition-colors duration-200"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavLink;
