
import * as React from "react";

export interface CarouselContextProps {
  carouselRef: React.RefObject<HTMLDivElement>;
  api: any;
  opts?: any;
  orientation?: "horizontal" | "vertical";
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  autoplay?: boolean;
  delayMs?: number;
}

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

export function useCarouselContext() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

export function CarouselProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: CarouselContextProps;
}) {
  return (
    <CarouselContext.Provider value={value}>
      {children}
    </CarouselContext.Provider>
  );
}
