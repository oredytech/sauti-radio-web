import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RadioPlayer from "@/components/RadioPlayer";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Helmet>
        <title>Page non trouvée - Radio Sauti ya Injili</title>
        <meta name="description" content="La page que vous cherchez n'existe pas" />
      </Helmet>
      
      <Navbar />
      
      <div className="flex flex-col items-center justify-center h-full py-20">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">404</h1>
        <p className="text-2xl text-gray-600 dark:text-gray-400 mb-8">
          La page que vous cherchez n'existe pas.
        </p>
        <Link to="/">
          <Button variant="secondary">
            Retour à l'accueil
          </Button>
        </Link>
      </div>
      
      <Footer />
      <RadioPlayer />
    </div>
  );
};

export default NotFound;
