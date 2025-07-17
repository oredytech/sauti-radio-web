import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { fetchPostBySlug } from "@/utils/wordpress";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/hooks/useTranslation";
import RadioPlayer from "@/components/RadioPlayer";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useTranslation();
  
  useEffect(() => {
    const checkForArticle = async () => {
      console.log(
        "404 Error: Attempted to access non-existent route:",
        location.pathname
      );
      
      // Try to extract a slug from the URL - handle different URL formats
      const pathSegments = location.pathname.split('/').filter(Boolean);
      let potentialSlug = pathSegments[pathSegments.length - 1];
      
      // Direct article slugs - if the URL is just /{slug}
      if (pathSegments.length === 1) {
        potentialSlug = pathSegments[0];
      }
      // If we're in a path like /article/slug
      else if (pathSegments.includes('article') && pathSegments.length >= 2) {
        const articleIndex = pathSegments.indexOf('article');
        if (articleIndex < pathSegments.length - 1) {
          potentialSlug = pathSegments[articleIndex + 1];
        }
      } else if (pathSegments.includes('actualites') && pathSegments.length >= 2) {
        // Also check /actualites/slug format
        const actualitesIndex = pathSegments.indexOf('actualites');
        if (actualitesIndex < pathSegments.length - 1) {
          potentialSlug = pathSegments[actualitesIndex + 1];
        }
      } else if (pathSegments.includes('news') && pathSegments.length >= 2) {
        // And check /news/slug format
        const newsIndex = pathSegments.indexOf('news');
        if (newsIndex < pathSegments.length - 1) {
          potentialSlug = pathSegments[newsIndex + 1];
        }
      }
      
      if (potentialSlug) {
        try {
          toast({
            title: t('404.searching'),
            description: t('404.searchingDesc'),
          });
          
          // Check if this is an article with a different URL format
          const post = await fetchPostBySlug(potentialSlug);
          if (post) {
            console.log("Found article with slug:", potentialSlug);
            toast({
              title: t('404.found'),
              description: t('404.foundDesc'),
            });
            navigate(`/article/${potentialSlug}`, { replace: true });
            return;
          } else {
            // Try to extract a numeric ID if present in the slug
            const idMatch = potentialSlug.match(/\d+$/);
            if (idMatch) {
              const cleanedSlug = potentialSlug.replace(/\-\d+$/, '');
              
              // Try with the cleaned slug
              const postByCleanSlug = await fetchPostBySlug(cleanedSlug);
              if (postByCleanSlug) {
                console.log("Found article with cleaned slug:", cleanedSlug);
                toast({
                  title: t('404.found'),
                  description: t('404.foundDesc'),
                });
                navigate(`/article/${cleanedSlug}`, { replace: true });
                return;
              }
            }
            
            // One more attempt - try to search by the raw path
            const rawPathSlug = location.pathname.substring(1); // Remove leading slash
            if (rawPathSlug && rawPathSlug !== potentialSlug) {
              const postByRawPath = await fetchPostBySlug(rawPathSlug);
              if (postByRawPath) {
                console.log("Found article with raw path:", rawPathSlug);
                toast({
                  title: t('404.found'),
                  description: t('404.foundDesc'),
                });
                navigate(`/article/${rawPathSlug}`, { replace: true });
                return;
              }
            }
            
            // Check for standard page names that might have been accessed incorrectly
            const standardPages = ['about', 'contact', 'actualites'];
            if (standardPages.includes(potentialSlug.toLowerCase())) {
              console.log("Redirecting to standard page:", potentialSlug);
              toast({
                title: t('404.found'),
                description: t('404.foundDesc'),
              });
              navigate(`/${potentialSlug.toLowerCase()}`, { replace: true });
              return;
            }
            
            toast({
              title: t('404.notFound'),
              description: t('404.notFoundDesc'),
              variant: "destructive",
            });
          }
        } catch (error) {
          console.error("Error checking for article:", error);
          toast({
            title: t('404.error'),
            description: t('404.errorDesc'),
            variant: "destructive",
          });
        }
      }
    };
    
    checkForArticle();
  }, [location.pathname, navigate, toast, t]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h1 className="text-5xl font-bold mb-4 text-primary dark:text-blue-400">404</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            {t('404.title')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/">
                {t('common.backToHome')}
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/actualites">
                {t('nav.news')}
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
