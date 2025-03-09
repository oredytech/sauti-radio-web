
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RadioPlayer from "@/components/RadioPlayer";
import { Skeleton } from "@/components/ui/skeleton";
import { WordPressPost, decodeHtmlEntities } from "@/utils/wordpress";
import CommentForm from "@/components/article/CommentForm";
import SocialShare from "@/components/article/SocialShare";
import { Helmet } from "react-helmet-async";

const ArticlePage = () => {
  const { id } = useParams();

  const { data: post, isLoading } = useQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      const response = await axios.get<WordPressPost>(
        `https://totalementactus.net/wp-json/wp/v2/posts/${id}?_embed`
      );
      return response.data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen dark:bg-gray-900">
        <Navbar />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <Skeleton className="h-8 w-3/4 mb-4" />
            <Skeleton className="h-6 w-1/4 mb-8" />
            <Skeleton className="h-[400px] w-full mb-8" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </div>
        <Footer />
        <RadioPlayer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen dark:bg-gray-900">
        <Navbar />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl font-bold text-primary dark:text-blue-400 mb-4">
              Article non trouvé
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Désolé, l'article que vous recherchez n'existe pas.
            </p>
          </div>
        </div>
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
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={postUrl} />
        {featuredImage && <meta property="og:image" content={featuredImage} />}
        
        {/* Twitter Card Meta Tags */}
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
            {/* Main content */}
            <div className="w-full md:w-2/3 bg-white dark:bg-gray-800 rounded-b-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h1 className="text-4xl font-bold text-primary dark:text-blue-400 mb-4">
                  {title}
                </h1>
                
                <div className="text-gray-600 dark:text-gray-300 mb-8 flex items-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 mr-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                    />
                  </svg>
                  {format(new Date(post.date), "d MMMM yyyy", { locale: fr })}
                </div>

                <div 
                  className="prose prose-lg max-w-none dark:prose-invert [&>p]:mb-6 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-primary dark:[&>h2]:text-blue-400 [&>h2]:mt-8 [&>h2]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:list-decimal [&>ol]:pl-6 [&>blockquote]:border-l-4 [&>blockquote]:border-primary dark:[&>blockquote]:border-blue-500 [&>blockquote]:pl-4 [&>blockquote]:italic [&>img]:rounded-lg [&>img]:shadow-lg [&>img]:my-8"
                  dangerouslySetInnerHTML={{ __html: post.content?.rendered || '' }}
                />
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="w-full md:w-1/3 space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-primary dark:text-blue-400 mb-4">
                  Partager cet article
                </h3>
                <SocialShare url={postUrl} title={title} />
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-primary dark:text-blue-400 mb-4">
                  Laisser un commentaire
                </h3>
                <CommentForm postId={post.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <RadioPlayer />
    </div>
  );
};

export default ArticlePage;
