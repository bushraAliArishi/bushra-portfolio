// src/components/ui/carousel.tsx
"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

/** 
 * نستخرج نوع الخيار (options) ونوع المكوّنات الإضافية (plugins) 
 * مباشرة من توقيع الهُوك Parameters<typeof useEmblaCarousel> 
 */
type _UseEmblaArgs = Parameters<typeof useEmblaCarousel>;
type EmblaOptions  = _UseEmblaArgs[0];
type EmblaPlugins  = NonNullable<_UseEmblaArgs[1]>;

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  /** "horizontal" = سهام يمين/يسار، "vertical" = سهام أعلى/أسفل */
  orientation?: "horizontal" | "vertical";
  /** إعدادات embla (سرعة، تكرار، الخ) */
  options?: EmblaOptions;
  /** أي مكوّنات (plugins) تريد إضافتها */
  plugins?: EmblaPlugins;
}

interface CarouselContextValue {
  scrollPrev(): void;
  scrollNext(): void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
}

const CarouselContext = React.createContext<CarouselContextValue | null>(null);

/** Hook لاستهلاك الـcontext داخل children */
export function useCarousel(): CarouselContextValue {
  const ctx = React.useContext(CarouselContext);
  if (!ctx) {
    throw new Error("useCarousel must be used within a <Carousel>");
  }
  return ctx;
}

/** المكوّن الرئيسي للـCarousel */
export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      orientation = "horizontal",
      options,
      plugins,
      className,
      children,
      ...divProps
    },
    forwardedRef
  ) => {
    // emblaRef: attach to viewport
    // emblaApi: the Embla API, قد يكون undefined حتى التهيئة
    const [emblaRef, emblaApi] = useEmblaCarousel(
      options || {},
      plugins || []
    );

    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    // حدث عند تغيير الشرائح
    const onSelect = React.useCallback(() => {
      if (!emblaApi) return;
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    React.useEffect(() => {
      if (!emblaApi) return;
      onSelect();
      emblaApi.on("reInit", onSelect);
      emblaApi.on("select", onSelect);
      return () => {
        emblaApi.off("reInit", onSelect);
        emblaApi.off("select", onSelect);
      };
    }, [emblaApi, onSelect]);

    const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const contextValue = React.useMemo<CarouselContextValue>(
      () => ({ scrollPrev, scrollNext, canScrollPrev, canScrollNext }),
      [scrollPrev, scrollNext, canScrollPrev, canScrollNext]
    );

    return (
      <CarouselContext.Provider value={contextValue}>
        <div
          ref={forwardedRef}
          className={cn("relative", className)}
          {...divProps}
        >
          {/* Embla viewport */}
          <div ref={emblaRef} className="overflow-hidden">
            <div
              className={cn(
                "flex",
                orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col"
              )}
            >
              {children}
            </div>
          </div>

          {/* Previous */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            data-slot="carousel-previous"
            className={cn(
              "absolute size-8 rounded-full",
              orientation === "horizontal"
                ? "top-1/2 -left-12 -translate-y-1/2"
                : "-top-12 left-1/2 -translate-x-1/2 rotate-90"
            )}
          >
            <ArrowLeft />
            <span className="sr-only">Previous slide</span>
          </Button>

          {/* Next */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            disabled={!canScrollNext}
            data-slot="carousel-next"
            className={cn(
              "absolute size-8 rounded-full",
              orientation === "horizontal"
                ? "top-1/2 -right-12 -translate-y-1/2"
                : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90"
            )}
          >
            <ArrowRight />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </CarouselContext.Provider>
    );
  }
);

Carousel.displayName = "Carousel";
