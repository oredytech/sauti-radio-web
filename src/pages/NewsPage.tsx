import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RadioPlayer from "@/components/RadioPlayer";
import HeroCarousel from "@/components/news/HeroCarousel";
import ArticleCard from "@/components/news/ArticleCard";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "@/hooks/useTranslation";

const NewsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Helmet>
        <title>{t('nav.news')} - Radio Sauti ya Injili</title>
        <meta name="description" content="Découvrez les dernières actualités de Radio Sauti ya Injili" />
      </Helmet>
      
      <Navbar />
      
      <HeroCarousel />

      {/* Articles Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </div>
        </div>
      </section>
      
      <Footer />
      <RadioPlayer />
    </div>
  );
};

export default NewsPage;
