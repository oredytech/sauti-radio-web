
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WordPressPost } from "@/utils/wordpress";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "@/hooks/useTranslation";
import NewsLoading from "@/components/news/NewsLoading";
import HeroSection from "@/components/news/HeroSection";
import ArticleGrid from "@/components/news/ArticleGrid";
import { getCategoryName } from "@/utils/categoryUtils";

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
    return <NewsLoading />;
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
      
      {/* Hero Section with carousel and featured posts */}
      <HeroSection 
        firstFivePosts={firstFivePosts}
        nextFourPosts={nextFourPosts}
        getCategoryName={getCategoryName}
      />

      {/* Articles Grid */}
      <ArticleGrid 
        posts={allPosts || []}
        page={page}
        setPage={setPage}
        perPage={perPage}
        getCategoryName={getCategoryName}
      />

      <Footer />
    </div>
  );
};

export default NewsPage;
