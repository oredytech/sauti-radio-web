
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-primary font-bold text-xl">
            Radio Sauti ya Injili
          </Link>
          <div className="space-x-4">
            <Link to="/">
              <Button variant="ghost">Accueil</Button>
            </Link>
            <Link to="/actualites">
              <Button variant="ghost">Actualités</Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost">À propos</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
