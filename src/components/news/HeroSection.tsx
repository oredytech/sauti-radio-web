
import React from "react";
import { Link } from "react-router-dom";
import { WordPressPost, decodeHtmlEntities, generateSlug } from "@/utils/wordpress";
import HeroCarousel from "./HeroCarousel";

interface HeroSectionProps {
  firstFivePosts: WordPressPost[];
  nextFourPosts: WordPressPost[];
  getCategoryName: (post: WordPressPost) => string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  firstFivePosts, 
  nextFourPosts,
  getCategoryName
}) => {
  return (
    <section className="bg-white dark:bg-gray-800 py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[350px] md:h-[400px] lg:h-[450px]">
          {/* Slider - takes half the width with full height */}
          <div className="lg:col-span-1 h-full">
            <div className="h-full">
              <HeroCarousel posts={firstFivePosts} />
            </div>
          </div>

          {/* Right Grid */}
          <div className="lg:col-span-1 h-full">
            <div className="grid grid-cols-2 gap-4 h-full">
              {nextFourPosts.map((post) => {
                const slug = generateSlug(post.title.rendered, post.id);
                const categoryName = getCategoryName(post);
                
                return (
                  <Link
                    key={post.id}
                    to={`/article/${slug}`}
                    className="block relative rounded-lg overflow-hidden hover:opacity-90 transition-opacity h-[150px] sm:h-[175px] lg:h-[195px]"
                  >
                    <div className="absolute inset-0 overflow-hidden">
                      <img
                        src={
                          post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                          "/lovable-uploads/e9395874-6c20-46b0-914a-4110cba6d314.png"
                        }
                        alt={decodeHtmlEntities(post.title.rendered)}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                    <div className="absolute top-2 left-2">
                      <span className="bg-black text-white text-xs px-2 py-1 uppercase font-bold">
                        {categoryName}
                      </span>
                    </div>
                    <h3 className="absolute bottom-3 left-3 right-3 font-bold text-white text-sm md:text-base line-clamp-3 z-10">
                      {decodeHtmlEntities(post.title.rendered)}
                    </h3>
                    <div className="absolute bottom-1 left-3 text-xs text-gray-300 flex items-center">
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
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
