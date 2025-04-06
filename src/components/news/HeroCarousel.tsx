
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { WordPressPost, decodeHtmlEntities, generateSlug } from "@/utils/wordpress";

interface HeroCarouselProps {
  posts: WordPressPost[];
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ posts }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<any | null>(null);

  // Update current slide index when the carousel slides
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    
    // Cleanup
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Auto slide effect
  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [api]);

  // Handle manual navigation via dots
  const scrollToSlide = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  if (!posts || posts.length === 0) {
    return <div className="h-full bg-gray-200 rounded-lg flex items-center justify-center">Aucun article disponible</div>;
  }

  return (
    <Carousel 
      className="h-full relative" 
      opts={{ loop: true }}
      setApi={setApi}
    >
      <CarouselContent className="h-full">
        {posts.map((post, index) => {
          const slug = generateSlug(post.title.rendered, post.id);
          return (
            <CarouselItem key={post.id} className="h-full">
              <Link to={`/article/${slug}`} className="block h-full w-full">
                <div className="relative h-full w-full">
                  <img
                    src={
                      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                      "/lovable-uploads/e9395874-6c20-46b0-914a-4110cba6d314.png"
                    }
                    alt={decodeHtmlEntities(post.title.rendered)}
                    className="w-full h-full object-cover rounded-lg absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
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
          );
        })}
      </CarouselContent>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {posts.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToSlide(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              idx === activeIndex ? "bg-white" : "bg-white/30"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white z-20" />
      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white z-20" />
    </Carousel>
  );
};

export default HeroCarousel;
