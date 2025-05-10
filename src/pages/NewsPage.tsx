import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import ArticleCard from "@/components/news/ArticleCard";
import HeroCarousel from "@/components/news/HeroCarousel";
import { WordPressPost, decodeHtmlEntities, generateSlug } from "@/utils/wordpress";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "@/hooks/useTranslation";

const NewsPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const perPage = 12;
  const { t } = useTranslation();

  const { data: allPosts, isLoading } = useQuery({
    queryKey: ["all-posts", page],
    queryFn: async () => {
      const response = await axios.get<WordPressPost[]>(
        `https://rsirdc.net/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${page}`
      );
      return response.data;
    },
  });

  const { data: heroPosts } = useQuery({
    queryKey: ["hero-posts"],
    queryFn: async () => {
      const response = await axios.get<WordPressPost[]>(
        "https://rsirdc.net/wp-json/wp/v2/posts?_embed&per_page=10"
      );
      return response.data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen dark:bg-gray-900">
        <Navbar />
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(12)].map((_, i) => (
              <div key={i}>
                <Skeleton className="h-48 w-full mb-4" />
                <Skeleton className="h-4 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const firstFivePosts = heroPosts?.slice(0, 5) || [];
  const nextFourPosts = heroPosts?.slice(5, 9) || [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Helmet>
        <title>{t('news.title')}</title>
        <meta name="description" content={t('news.description')} />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
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
                  return (
                    <Link
                      key={post.id}
                      to={`/article/${slug}`}
                      className="block relative rounded-lg overflow-hidden hover:opacity-90 transition-opacity h-[150px] sm:h-[175px] lg:h-[195px]"
                    >
                      <img
                        src={
                          post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                          "/lovable-uploads/e9395874-6c20-46b0-914a-4110cba6d314.png"
                        }
                        alt={decodeHtmlEntities(post.title.rendered)}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                      <div className="absolute top-2 left-2">
                        <span className="bg-black text-white text-xs px-2 py-1 uppercase font-bold">
                          Totalement sport
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

      {/* Articles Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts?.map((post) => (
              <div key={post.id} className="relative rounded-lg overflow-hidden hover:opacity-95 transition-opacity shadow-md bg-white dark:bg-gray-800 h-[400px]">
                <Link to={`/article/${generateSlug(post.title.rendered, post.id)}`}>
                  <div className="relative h-[220px]">
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
                        Totalement sport
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
            ))}
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
              disabled={!allPosts || allPosts.length < perPage}
              className="dark:border-gray-700 dark:text-gray-300"
            >
              {t('common.next')}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsPage;
