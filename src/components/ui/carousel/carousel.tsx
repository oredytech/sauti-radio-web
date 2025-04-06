
import * as React from "react";
import { cn } from "@/lib/utils";
import { useCarousel } from "./use-carousel";
import { CarouselProvider } from "./carousel-context";
import type { EmblaCarouselType } from "embla-carousel-react";

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  opts?: any;
  plugins?: any;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: EmblaCarouselType) => void;
  autoplay?: boolean;
  delayMs?: number;
}

export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      autoplay = false,
      delayMs = 3000,
      ...props
    },
    ref
  ) => {
    const { carouselRef, emblaRef, api, onSelect, scrollPrev, scrollNext, canScrollPrev, canScrollNext } = 
      useCarousel({
        opts: {
          ...opts,
          axis: orientation === "horizontal" ? "x" : "y",
          loop: true,
        },
        plugins,
        setApi,
        autoplay,
        delayMs
      });

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );

    return (
      <CarouselProvider
        value={{
          carouselRef,
          api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          autoplay,
          delayMs,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselProvider>
    );
  }
);
Carousel.displayName = "Carousel";
