
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RadioPlayer from "@/components/RadioPlayer";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import ArticleCard from "@/components/news/ArticleCard";
import HeroCarousel from "@/components/news/HeroCarousel";
import { WordPressPost, decodeHtmlEntities } from "@/utils/wordpress";

const NewsPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const perPage = 12;

  const { data: allPosts, isLoading } = useQuery({
    queryKey: ["all-posts", page],
    queryFn: async () => {
      const response = await axios.get<WordPressPost[]>(
        `https://totalementactus.net/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${page}`
      );
      return response.data;
    },
  });

  const { data: heroPosts } = useQuery({
    queryKey: ["hero-posts"],
    queryFn: async () => {
      const response = await axios.get<WordPressPost[]>(
        "https://totalementactus.net/wp-json/wp/v2/posts?_embed&per_page=10"
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
        <RadioPlayer />
      </div>
    );
  }

  const firstFivePosts = heroPosts?.slice(0, 5) || [];
  const nextFourPosts = heroPosts?.slice(5, 9) || [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800 py-12 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary dark:text-blue-400 mb-12 text-center">
            Actualités
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Center Slider */}
            <div className="lg:col-span-3">
              <HeroCarousel posts={firstFivePosts} />
            </div>

            {/* Right Grid */}
            <div className="lg:col-span-1">
              <div className="grid grid-cols-2 gap-4 h-full">
                {nextFourPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/article/${post.id}`}
                    className="block bg-gray-100 dark:bg-gray-700 rounded-lg p-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <img
                      src={
                        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                        "/lovable-uploads/e9395874-6c20-46b0-914a-4110cba6d314.png"
                      }
                      alt={decodeHtmlEntities(post.title.rendered)}
                      className="w-full h-24 object-cover rounded-lg mb-2"
                    />
                    <h3 className="font-semibold text-primary dark:text-blue-400 text-xs line-clamp-2">
                      {decodeHtmlEntities(post.title.rendered)}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {allPosts?.map((post) => (
              <ArticleCard key={post.id} post={post} />
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <Button
              variant="outline"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="dark:border-gray-700 dark:text-gray-300"
            >
              Précédent
            </Button>
            <Button
              variant="outline"
              onClick={() => setPage((p) => p + 1)}
              disabled={!allPosts || allPosts.length < perPage}
              className="dark:border-gray-700 dark:text-gray-300"
            >
              Suivant
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <RadioPlayer />
    </div>
  );
};

export default NewsPage;
