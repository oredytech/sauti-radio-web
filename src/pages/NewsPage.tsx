import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RadioPlayer from "@/components/RadioPlayer";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
}

const decodeHtmlEntities = (html: string) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const ArticleCard: React.FC<{ post: WordPressPost }> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={
          post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
          "/lovable-uploads/e9395874-6c20-46b0-914a-4110cba6d314.png"
        }
        alt={decodeHtmlEntities(post.title.rendered)}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="text-secondary text-sm font-semibold mb-2">
          {format(new Date(post.date), "d MMMM yyyy", { locale: fr })}
        </div>
        <h3 className="text-lg font-bold text-primary mb-2">
          {decodeHtmlEntities(post.title.rendered)}
        </h3>
        <div
          className="text-gray-600 text-sm mb-4 line-clamp-2"
          dangerouslySetInnerHTML={{
            __html: post.excerpt.rendered,
          }}
        />
        <Link
          to={`/article/${post.id}`}
          className="text-secondary hover:text-red-600 font-semibold text-sm flex items-center gap-2"
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
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-3 gap-8">
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
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-12 text-center">
            Actualités
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Center Slider */}
            <div className="lg:col-span-3">
              <Carousel autoplay={true} delayMs={3000} opts={{ loop: true }}>
                <CarouselContent>
                  {firstFivePosts.map((post) => (
                    <CarouselItem key={post.id}>
                      <Link to={`/article/${post.id}`}>
                        <div className="relative">
                          <img
                            src={
                              post._embedded?.["wp:featuredmedia"]?.[0]
                                ?.source_url ||
                              "/lovable-uploads/e9395874-6c20-46b0-914a-4110cba6d314.png"
                            }
                            alt={decodeHtmlEntities(post.title.rendered)}
                            className="w-full h-[400px] object-cover rounded-lg"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                            <h3 className="text-white text-xl font-bold mb-2">
                              {decodeHtmlEntities(post.title.rendered)}
                            </h3>
                            <div className="text-gray-200">
                              {format(new Date(post.date), "d MMMM yyyy", {
                                locale: fr,
                              })}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            {/* Right Grid */}
            <div className="lg:col-span-1">
              <div className="grid grid-cols-2 gap-4 h-full">
                {nextFourPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/article/${post.id}`}
                    className="block bg-gray-100 rounded-lg p-2 hover:bg-gray-200 transition-colors"
                  >
                    <img
                      src={
                        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                        "/lovable-uploads/e9395874-6c20-46b0-914a-4110cba6d314.png"
                      }
                      alt={decodeHtmlEntities(post.title.rendered)}
                      className="w-full h-24 object-cover rounded-lg mb-2"
                    />
                    <h3 className="font-semibold text-primary text-xs line-clamp-2">
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
            >
              Précédent
            </Button>
            <Button
              variant="outline"
              onClick={() => setPage((p) => p + 1)}
              disabled={!allPosts || allPosts.length < perPage}
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
