
import * as React from "react";
import useEmblaCarousel, { type EmblaCarouselType } from "embla-carousel-react";

interface UseCarouselProps {
  opts?: any;
  plugins?: any;
  setApi?: (api: EmblaCarouselType) => void;
  autoplay?: boolean;
  delayMs?: number;
}

export function useCarousel({
  opts,
  plugins,
  setApi,
  autoplay = false,
  delayMs = 3000,
}: UseCarouselProps) {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [emblaRef, api] = useEmblaCarousel(opts, plugins);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((api: EmblaCarouselType) => {
    if (!api) {
      return;
    }

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  // Set up the autoplay functionality
  React.useEffect(() => {
    if (!api || !autoplay) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, delayMs);

    return () => {
      clearInterval(intervalId);
    }
  }, [api, autoplay, delayMs]);

  React.useEffect(() => {
    if (!api || !setApi) {
      return;
    }

    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    }
  }, [api, onSelect]);

  return {
    carouselRef,
    emblaRef,
    api,
    onSelect,
    scrollPrev,
    scrollNext,
    canScrollPrev,
    canScrollNext,
  };
}
