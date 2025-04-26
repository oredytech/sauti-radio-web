
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RadioPlayer from "@/components/RadioPlayer";
import { Button } from "@/components/ui/button";
import { fetchPostBySlug } from "@/utils/wordpress";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const checkForArticle = async () => {
      console.error(
        "404 Error: User attempted to access non-existent route:",
        location.pathname
      );
      
      // Try to extract a slug from the URL
      const pathSegments = location.pathname.split('/');
      const potentialSlug = pathSegments[pathSegments.length - 1];
      
      if (potentialSlug) {
        try {
          // Check if this is an article with a different URL format
          const post = await fetchPostBySlug(potentialSlug);
          if (post) {
            console.log("Found article with slug:", potentialSlug);
            navigate(`/shr/article/${potentialSlug}`, { replace: true });
            return;
          }
        } catch (error) {
          console.error("Error checking for article:", error);
        }
      }
    };
    
    checkForArticle();
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h1 className="text-5xl font-bold mb-4 text-primary dark:text-blue-400">404</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/">
                Retour à l'accueil
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/actualites">
                Parcourir nos actualités
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
      <RadioPlayer />
    </div>
  );
};

export default NotFound;
