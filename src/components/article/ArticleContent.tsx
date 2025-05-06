
import { format } from "date-fns";
import { fr, enUS } from "date-fns/locale";
import { type WordPressPost } from "@/utils/wordpress";
import { useTranslation } from "@/hooks/useTranslation";
import { useEffect, useRef } from "react";

interface ArticleContentProps {
  post: WordPressPost;
}

const ArticleContent = ({ post }: ArticleContentProps) => {
  const { t, currentLanguage, translateWithBrowser } = useTranslation();
  const contentRef = useRef<HTMLDivElement>(null);

  // Déterminer la locale en fonction de la langue actuelle
  const dateLocale = (() => {
    switch (currentLanguage) {
      case 'en': return enUS;
      case 'sw': return enUS; // For Swahili, use English locale as fallback since Swahili is not available
      default: return fr;
    }
  })();

  // Utiliser l'API de traduction du navigateur pour traduire le contenu de l'article
  useEffect(() => {
    if (contentRef.current && currentLanguage !== 'fr') {
      // Permettre au navigateur de traduire le contenu
      const htmlElement = document.documentElement;
      htmlElement.setAttribute('translate', 'yes');
      if (htmlElement.lang !== currentLanguage) {
        htmlElement.lang = currentLanguage;
      }
    }
  }, [currentLanguage, post.content?.rendered]);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-primary dark:text-blue-400 mb-4">
        {translateWithBrowser(post.title.rendered)}
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
        {format(new Date(post.date), "d MMMM yyyy", { locale: dateLocale })}
      </div>

      <div 
        ref={contentRef}
        className="prose prose-lg max-w-none dark:prose-invert [&>p]:mb-6 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-primary dark:[&>h2]:text-blue-400 [&>h2]:mt-8 [&>h2]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:list-decimal [&>ol]:pl-6 [&>blockquote]:border-l-4 [&>blockquote]:border-primary dark:[&>blockquote]:border-blue-500 [&>blockquote]:pl-4 [&>blockquote]:italic [&>img]:rounded-lg [&>img]:shadow-lg [&>img]:my-8"
        dangerouslySetInnerHTML={{ __html: post.content?.rendered || '' }}
      />
    </div>
  );
};

export default ArticleContent;
