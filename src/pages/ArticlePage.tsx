import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleSkeleton from "@/components/article/ArticleSkeleton";
import ArticleError from "@/components/article/ArticleError";
import ArticleContent from "@/components/article/ArticleContent";
import ArticleSidebar from "@/components/article/ArticleSidebar";
import { useTranslation } from "@/hooks/useTranslation";
import { 
  WordPressPost,
  decodeHtmlEntities,
  fetchPostBySlug,
  fetchPosts
} from "@/utils/wordpress";
import RadioPlayer from "@/components/RadioPlayer";

const ArticlePage = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isLoadingRedirect, setIsLoadingRedirect] = useState(false);
  const { toast } = useToast();
  const { t, translateWithBrowser } = useTranslation();
  
  // Define standardPages here before using it
  const standardPages = ['about', 'contact', 'actualites'];
  
  // Handle standard page routes that might have been accessed directly
  useEffect(() => {
    if (standardPages.includes(slug.toLowerCase())) {
      navigate(`/${slug.toLowerCase()}`, { replace: true });
      return;
    }
  }, [slug, navigate]);
  
  const { 
    data: post, 
    isLoading, 
    isError 
  } = useQuery({
    queryKey: ["post", slug],
    queryFn: async () => {
      console.log("Fetching post with slug:", slug);
      try {
        // Try first with exact slug
        const slugPost = await fetchPostBySlug(slug);
        if (slugPost) {
          console.log("Successfully found post by slug");
          return slugPost;
        }
        
        // If not found, try with slug variations
        const slugVariations = [
          slug,
          slug.replace(/-/g, ' '), // Replace hyphens with spaces
          slug.toLowerCase(),
          encodeURIComponent(slug),
          decodeURIComponent(slug), // Try decoding if it's URL encoded
          slug.replace(/\.[^/.]+$/, ""), // Remove file extension if any
        ];
        
        for (const variation of slugVariations) {
          if (variation !== slug) {
            const variantPost = await fetchPostBySlug(variation);
            if (variantPost) {
              console.log("Found post with slug variation:", variation);
              return variantPost;
            }
          }
        }
        
        // If still not found, attempt to search latest posts
        const latestPosts = await fetchPosts(1, 20);
        const matchedPost = latestPosts.find(post => {
          const postSlug = generateSlug(post.title.rendered, post.id);
          return postSlug.includes(slug) || slug.includes(postSlug);
        });
        
        if (matchedPost) {
          console.log("Found similar post in latest posts");
          return matchedPost;
        }
        
        throw new Error("Post not found");
      } catch (error) {
        console.error("Error in article fetch:", error);
        throw error;
      }
    },
    enabled: !!slug && !standardPages.includes(slug.toLowerCase()),
    retry: 2,
    staleTime: 5 * 60 * 1000,
    meta: {
      onSettled: (data, error) => {
        if (error && !isLoadingRedirect) {
          setIsLoadingRedirect(true);
          toast({
            title: t('404.notFound'),
            description: t('404.notFoundDesc'),
            variant: "destructive"
          });
          
          setTimeout(() => {
            navigate("/actualites", { replace: true });
          }, 2000);
        }
      }
    }
  });

  // Helper function to generate slugs (copied from wordpress.ts for local use)
  const generateSlug = (title: string, id: number): string => {
    const decodedTitle = decodeHtmlEntities(title);
    return decodedTitle
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen dark:bg-gray-900">
        <Navbar />
        <ArticleSkeleton />
        <Footer />
      </div>
    );
  }

  if (isError || !post) {
    return (
      <div className="min-h-screen dark:bg-gray-900">
        <Navbar />
        <ArticleError />
        <Footer />
      </div>
    );
  }

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const title = decodeHtmlEntities(post.title.rendered);
  const excerpt = post.excerpt ? decodeHtmlEntities(post.excerpt.rendered.replace(/<[^>]*>/g, '')) : '';
  const postUrl = window.location.href;

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{translateWithBrowser(title)} | Sauti Radio</title>
        <meta name="description" content={translateWithBrowser(excerpt)} />
        <meta property="og:title" content={translateWithBrowser(title)} />
        <meta property="og:description" content={translateWithBrowser(excerpt)} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={postUrl} />
        {featuredImage && <meta property="og:image" content={featuredImage} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={translateWithBrowser(title)} />
        <meta name="twitter:description" content={translateWithBrowser(excerpt)} />
        {featuredImage && <meta name="twitter:image" content={featuredImage} />}
      </Helmet>
      
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {featuredImage && (
            <img
              src={featuredImage}
              alt={translateWithBrowser(title)}
              className="w-full h-[400px] object-cover rounded-t-lg shadow-lg mb-0"
            />
          )}
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-2/3 bg-white dark:bg-gray-800 rounded-b-lg shadow-lg overflow-hidden">
              <ArticleContent post={post} />
            </div>
            
            <ArticleSidebar 
              postId={post.id}
              url={postUrl}
              title={translateWithBrowser(title)}
            />
          </div>
        </div>
      </div>
      <Footer />
      <RadioPlayer />
    </div>
  );
};

export default ArticlePage;
