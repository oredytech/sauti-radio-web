
import React from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Link } from "react-router-dom";
import { WordPressPost, decodeHtmlEntities, generateSlug } from "@/utils/wordpress";

interface ArticleCardProps {
  post: WordPressPost;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ post }) => {
  const slug = generateSlug(post.title.rendered, post.id);
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-300">
      <img
        src={
          post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
          "/lovable-uploads/e9395874-6c20-46b0-914a-4110cba6d314.png"
        }
        alt={decodeHtmlEntities(post.title.rendered)}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="text-secondary dark:text-red-400 text-sm font-semibold mb-2">
          {format(new Date(post.date), "d MMMM yyyy", { locale: fr })}
        </div>
        <h3 className="text-lg font-bold text-primary dark:text-blue-400 mb-2">
          {decodeHtmlEntities(post.title.rendered)}
        </h3>
        <div
          className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2"
          dangerouslySetInnerHTML={{
            __html: post.excerpt.rendered,
          }}
        />
        <Link
          to={`/article/${slug}`}
          className="text-secondary dark:text-red-400 hover:text-red-600 dark:hover:text-red-300 font-semibold text-sm flex items-center gap-2"
        >
          Lire la suite
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
