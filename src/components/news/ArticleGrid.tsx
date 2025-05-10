
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { WordPressPost, decodeHtmlEntities, generateSlug } from "@/utils/wordpress";
import { useTranslation } from "@/hooks/useTranslation";

interface ArticleGridProps {
  posts: WordPressPost[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  perPage: number;
  getCategoryName: (post: WordPressPost) => string;
}

const ArticleGrid: React.FC<ArticleGridProps> = ({ 
  posts, 
  page, 
  setPage, 
  perPage,
  getCategoryName
}) => {
  const { t } = useTranslation();

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts?.map((post) => {
            const slug = generateSlug(post.title.rendered, post.id);
            const categoryName = getCategoryName(post);
            
            return (
              <div key={post.id} className="relative rounded-lg overflow-hidden hover:opacity-95 transition-opacity shadow-md bg-white dark:bg-gray-800 h-[400px]">
                <Link to={`/article/${slug}`}>
                  <div className="relative h-[220px] overflow-hidden">
                    <img
                      src={
                        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                        "/lovable-uploads/e9395874-6c20-46b0-914a-4110cba6d314.png"
                      }
                      alt={decodeHtmlEntities(post.title.rendered)}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="bg-black text-white text-xs px-2 py-1 uppercase font-bold">
                        {categoryName}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-primary dark:text-blue-400 mb-2 line-clamp-3">
                      {decodeHtmlEntities(post.title.rendered)}
                    </h3>
                    <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 001.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </div>
                    <div
                      className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered,
                      }}
                    />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <Button
            variant="outline"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="dark:border-gray-700 dark:text-gray-300"
          >
            {t('common.previous')}
          </Button>
          <Button
            variant="outline"
            onClick={() => setPage((p) => p + 1)}
            disabled={!posts || posts.length < perPage}
            className="dark:border-gray-700 dark:text-gray-300"
          >
            {t('common.next')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArticleGrid;
