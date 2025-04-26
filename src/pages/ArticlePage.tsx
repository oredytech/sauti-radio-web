
import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RadioPlayer from "@/components/RadioPlayer";
import ArticleSkeleton from "@/components/article/ArticleSkeleton";
import ArticleError from "@/components/article/ArticleError";
import ArticleContent from "@/components/article/ArticleContent";
import ArticleSidebar from "@/components/article/ArticleSidebar";
import { 
  WordPressPost,
  decodeHtmlEntities,
  fetchPostBySlug
} from "@/utils/wordpress";

const ArticlePage = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isLoadingRedirect, setIsLoadingRedirect] = useState(false);
  const { toast } = useToast();
  
  const { 
    data: post, 
    isLoading, 
    isError 
  } = useQuery({
    queryKey: ["post", slug],
    queryFn: async () => {
      console.log("Fetching post with slug:", slug);
      try {
        const slugPost = await fetchPostBySlug(slug);
        if (slugPost) {
          console.log("Successfully found post by slug");
          return slugPost;
        }
        throw new Error("Post not found");
      } catch (error) {
        console.error("Error in article fetch:", error);
        throw error;
      }
    },
    enabled: !!slug,
    retry: 2,
    staleTime: 5 * 60 * 1000,
    meta: {
      onError: () => {
        if (!isLoadingRedirect) {
          setIsLoadingRedirect(true);
          toast({
            title: "Article introuvable",
            description: "Nous n'avons pas pu trouver l'article demandé",
            variant: "destructive"
          });
          
          setTimeout(() => {
            navigate("/actualites", { replace: true });
          }, 2000);
        }
      }
    }
  });

  if (isLoading) {
    return (
      <div className="min-h-screen dark:bg-gray-900">
        <Navbar />
        <ArticleSkeleton />
        <Footer />
        <RadioPlayer />
      </div>
    );
  }

  if (isError || !post) {
    return (
      <div className="min-h-screen dark:bg-gray-900">
        <Navbar />
        <ArticleError />
        <Footer />
        <RadioPlayer />
      </div>
    );
  }

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const title = decodeHtmlEntities(post.title.rendered);
  const excerpt = post.excerpt ? decodeHtmlEntities(post.excerpt.rendered.replace(/<[^>]*>/g, '')) : '';
  const postUrl = window.location.href;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>{title} | Sauti Radio</title>
        <meta name="description" content={excerpt} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={postUrl} />
        {featuredImage && <meta property="og:image" content={featuredImage} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={excerpt} />
        {featuredImage && <meta name="twitter:image" content={featuredImage} />}
      </Helmet>
      
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {featuredImage && (
            <img
              src={featuredImage}
              alt={title}
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
              title={title}
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
