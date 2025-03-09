
import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { WordPressPost, decodeHtmlEntities } from "@/utils/wordpress";

interface HeroCarouselProps {
  posts: WordPressPost[];
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ posts }) => {
  return (
    <Carousel autoplay={true} delayMs={3000} opts={{ loop: true }}>
      <CarouselContent>
        {posts.map((post) => (
          <CarouselItem key={post.id}>
            <Link to={`/article/${post.id}`}>
              <div className="relative">
                <img
                  src={
                    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
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
  );
};

export default HeroCarousel;
