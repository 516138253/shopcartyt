"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Globe, Sparkles, Truck } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { heroSlideLinks } from "@/constants/data";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/useTranslation";

const slideIcons = [Globe, Sparkles, Truck];
const slideGradients = [
  "from-[#1a3c2a] via-[#2d5a3d] to-[#3d7a52]",
  "from-[#3d2b1a] via-[#6b4423] to-[#c17f3a]",
  "from-[#1a3c2a] via-[#2d4a3d] to-[#5a8f6a]",
];
const slideAccents = ["bg-amber-600", "bg-orange-400", "bg-emerald-300"];

const HomeBanner = () => {
  const { t } = useTranslation();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const timer = setInterval(() => emblaApi.scrollNext(), 6000);
    return () => clearInterval(timer);
  }, [emblaApi]);

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-blue-900/10">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {t.hero.slides.map((slide, index) => {
            const Icon = slideIcons[index % slideIcons.length];
            return (
              <div
                key={index}
                className={cn(
                  "min-w-0 shrink-0 grow-0 basis-full bg-gradient-to-br px-8 py-12 md:px-16 md:py-16 text-white",
                  slideGradients[index]
                )}
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="space-y-5 max-w-xl">
                    <span
                      className={cn(
                        "inline-block brand-pill text-xs uppercase tracking-widest text-slate-900",
                        slideAccents[index]
                      )}
                    >
                      {slide.badge}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight whitespace-pre-line">
                      {slide.title}
                    </h2>
                    <p className="text-blue-100/90 text-sm md:text-base leading-relaxed">
                      {slide.subtitle}
                    </p>
                    <Link
                      href={heroSlideLinks[index]}
                      className="inline-flex items-center gap-2 brand-pill bg-white text-brand-navy hover:bg-orange-400 hover:text-white hoverEffect shadow-lg"
                    >
                      {slide.cta}
                    </Link>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-48 h-48 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                    <Icon className="w-24 h-24 text-white/80" strokeWidth={1.2} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/40 hoverEffect"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={scrollNext}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/40 hoverEffect"
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {t.hero.slides.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => emblaApi?.scrollTo(index)}
            className={cn(
              "h-2 rounded-full hoverEffect",
              selectedIndex === index
                ? "w-8 bg-orange-400"
                : "w-2 bg-white/50 hover:bg-white/80"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeBanner;
