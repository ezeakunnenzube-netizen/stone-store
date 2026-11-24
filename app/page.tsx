"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Shield,
  Truck,
  Gem,
  Calculator,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Layers,
} from "lucide-react";

/**
 * Hero slides definition
 * Uses local stone hero imagery copied from the original Stone Store project.
 */
interface HeroSlide {
  img: string;
  alt: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    img: "/hero/hero-1.jpg",
    alt: "Luxury Polished Black Marquina Marble Kitchen Countertop & Backsplash",
  },
  {
    img: "/hero/hero-2.jpg",
    alt: "Designer Black Veined Quartz Cooking Range & Backsplash",
  },
  {
    img: "/hero/hero-3.jpg",
    alt: "High-Gloss Waterfall Marble Island with Natural Lighting",
  },
  {
    img: "/hero/hero-4.jpg",
    alt: "Architectural Honed Nero Kitchen with Integrated Under-Cabinet Glow",
  },
  {
    img: "/hero/hero-5.jpg",
    alt: "Monolithic Hand-Selected Black Veined Marble Quarry Slab",
  },
];

/**
 * Curated product item interface for type safety
 */
interface CuratedProduct {
  id: string;
  name: string;
  material: string;
  finish: string;
  dimensions: string;
  price: number;
  imageUrl: string;
}

const SAMPLE_CURATED: CuratedProduct[] = [
  {
    id: "prod-1",
    name: "Nero Marquina Polished",
    material: "Marble",
    finish: "Polished",
    dimensions: "60x120 cm",
    price: 145000,
    imageUrl: "/stones/art of extraction image1.jpg",
  },
  {
    id: "prod-2",
    name: "Calacatta Gold Bookmatch",
    material: "Porcelain Slab",
    finish: "High-Gloss",
    dimensions: "120x240 cm",
    price: 210000,
    imageUrl: "/stones/art of extraction image2.jpg",
  },
  {
    id: "prod-3",
    name: "Silver Travertine Roman Cut",
    material: "Travertine",
    finish: "Honed & Unfilled",
    dimensions: "60x60 cm",
    price: 115000,
    imageUrl: "/stones/art of extraction image3.jpg",
  },
  {
    id: "prod-4",
    name: "Laurent Black Quartzite",
    material: "Quartzite",
    finish: "Leathered",
    dimensions: "80x160 cm",
    price: 185000,
    imageUrl: "/stones/art of extraction image4.jpg",
  },
];

export default function HomePage() {
  // ---------------------------------------------------------------------------
  // 1. STATE MANAGEMENT
  // ---------------------------------------------------------------------------
  // Hero slideshow index
  const [currentHeroIndex, setCurrentHeroIndex] = useState<number>(0);

  // Curated products list
  const [curatedProducts] = useState<CuratedProduct[]>(SAMPLE_CURATED);

  // ---------------------------------------------------------------------------
  // 2. HERO SLIDESHOW AUTOPLAY EFFECT (KEN BURNS 6-SECOND CYCLE)
  // ---------------------------------------------------------------------------
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setCurrentHeroIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNextSlide = () => {
    setCurrentHeroIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <div className="w-full bg-[#08080a] text-zinc-100 flex flex-col font-sans">
      {/* =========================================================================
          SECTION 1: HERO SLIDESHOW — Matches Original Stone Store Hero
          ========================================================================= */}
      <section className="relative w-full h-[88vh] min-h-[600px] max-h-[920px] overflow-hidden bg-[#08080a] flex items-center justify-center select-none after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-[#d4af37] after:to-transparent after:z-20">
        {/* Animated Background Slides with Ken Burns Zoom & Smooth Fade */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden" aria-hidden="true">
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = idx === currentHeroIndex;
            return (
              <div
                key={slide.img}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <img
                  src={slide.img}
                  alt={slide.alt}
                  className={`w-full h-full object-cover object-center ${
                    isActive ? "animate-ken-burns" : "scale-100"
                  }`}
                  loading={idx === 0 ? "eager" : "lazy"}
                />
              </div>
            );
          })}
        </div>

        {/* Ambient Dark Luxury Gradient Overlays */}
        <div className="absolute inset-0 bg-radial-[circle_at_50%_45%] from-[#08080a]/30 via-[#08080a]/60 to-[#08080a]/85 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08080a]/60 via-[#08080a]/20 to-[#08080a]/90 z-10 pointer-events-none" />

        {/* Centered Editorial Hero Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
          {/* Eyebrow with Gold Flanking Lines */}
          <div className="flex items-center gap-3 sm:gap-4 text-[#d4af37] text-[10.5px] sm:text-xs font-semibold tracking-[0.28em] uppercase mb-5 sm:mb-7">
            <span className="w-8 sm:w-10 h-px bg-[#d4af37]/60" />
            <span>Agric, Lagos, Nigeria</span>
            <span className="w-8 sm:w-10 h-px bg-[#d4af37]/60" />
          </div>

          {/* Primary Signature Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.02em] text-white leading-[1.08] max-w-3xl mb-6">
            Timeless Elegance In Every Slab
          </h1>

          {/* Thin Gold Divider */}
          <div className="w-14 sm:w-16 h-px bg-[#d4af37] mb-6" />

          {/* Sub-headline */}
          <p className="font-sans text-sm sm:text-base md:text-lg text-zinc-300 font-light max-w-lg leading-relaxed tracking-wide mb-3">
            A curated house of marble, travertine, and natural stone — sourced from the world&apos;s most storied quarries.
          </p>

          {/* Tagline Italic */}
          <p className="font-serif italic text-sm sm:text-base md:text-lg text-white/50 tracking-wider mb-8 sm:mb-10">
            — Stone is never just material
          </p>

          {/* Hero Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <Link
              href="/products"
              className="w-full sm:w-auto px-9 py-4 bg-[#d4af37] hover:bg-[#e5c358] text-black font-semibold text-xs tracking-[0.18em] uppercase transition-all duration-300 hover:shadow-[0_8px_32px_rgba(212,175,55,0.35)] hover:-translate-y-0.5 text-center"
            >
              Explore Collection
            </Link>

            <Link
              href="/calculator"
              className="w-full sm:w-auto px-9 py-4 bg-transparent hover:bg-[#d4af37]/10 border border-white/30 hover:border-[#d4af37] text-zinc-200 hover:text-[#d4af37] font-semibold text-xs tracking-[0.18em] uppercase transition-all duration-300 text-center"
            >
              Tile Calculator
            </Link>
          </div>
        </div>

        {/* Vertically Centered Left/Right Navigation Arrows */}
        <button
          type="button"
          onClick={handlePrevSlide}
          aria-label="Previous Slide"
          className="hidden sm:flex absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#0e0e12]/60 hover:bg-[#d4af37] border border-[#d4af37]/30 hover:border-[#d4af37] text-white hover:text-black items-center justify-center backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_16px_rgba(212,175,55,0.3)]"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={handleNextSlide}
          aria-label="Next Slide"
          className="hidden sm:flex absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#0e0e12]/60 hover:bg-[#d4af37] border border-[#d4af37]/30 hover:border-[#d4af37] text-white hover:text-black items-center justify-center backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_16px_rgba(212,175,55,0.3)]"
        >
          <ChevronRight size={20} />
        </button>

        {/* Luxury Slideshow Progress Indicators */}
        <div className="absolute z-20 bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentHeroIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className="p-1 cursor-pointer flex items-center justify-center"
            >
              <span
                className={`block h-[2.5px] rounded-full transition-all duration-400 ${
                  idx === currentHeroIndex
                    ? "w-10 sm:w-12 bg-[#d4af37] shadow-[0_0_12px_rgba(212,175,55,0.6)]"
                    : "w-6 bg-white/30 hover:bg-white/60"
                }`}
              />
            </button>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: CURATED MASTERPIECES (THE ART OF EXTRACTION)
          ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#d4af37] font-mono">
              Exclusive Inventory
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-normal tracking-tight text-white mt-1">
              Curated Masterpieces
            </h2>
          </div>
          <Link
            href="/products"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-zinc-300 hover:text-[#d4af37] transition-colors"
          >
            <span>View All Stone Slabs</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Product Cards Grid — 2 columns on mobile for compact card size, 4 columns on desktop, somewhat rounded on all screens */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 lg:gap-8">
          {curatedProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col bg-[#0f0f14] border border-white/10 hover:border-[#d4af37]/50 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.8)]"
            >
              {/* Product Image Frame */}
              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-black/70 backdrop-blur-md px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg border border-white/10 text-[9px] sm:text-[10px] font-mono tracking-wider text-zinc-300 uppercase">
                  {product.material}
                </div>
              </div>

              {/* Product Metadata */}
              <div className="p-3 sm:p-5 flex flex-col flex-1 justify-between">
                <div>
                  <div className="text-[10px] sm:text-[11px] text-zinc-400 font-mono uppercase tracking-wider mb-1 truncate">
                    {product.finish} • {product.dimensions}
                  </div>
                  <h3 className="font-serif text-sm sm:text-lg font-medium text-white group-hover:text-[#d4af37] transition-colors line-clamp-1 sm:line-clamp-none">
                    {product.name}
                  </h3>
                </div>

                <div className="pt-2.5 mt-2.5 sm:pt-4 sm:mt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="block text-[8.5px] sm:text-[10px] text-zinc-400 uppercase tracking-widest font-mono">
                      Per Slab
                    </span>
                    <span className="text-xs sm:text-base font-semibold text-white font-mono">
                      ₦{product.price.toLocaleString()}
                    </span>
                  </div>

                  <Link
                    href={`/products?selected=${product.id}`}
                    className="p-1.5 sm:p-2.5 rounded-md sm:rounded-lg bg-white/5 hover:bg-[#d4af37] border border-white/10 hover:border-[#d4af37] text-zinc-300 hover:text-black transition-all shrink-0"
                    aria-label={`View details for ${product.name}`}
                  >
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: ARCHITECTURAL STONE CRAFTSMANSHIP
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#0a0a0e] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#d4af37] font-mono">
              Uncompromising Standards
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-normal tracking-tight text-white mt-1">
              The Sonic Stone Distinction
            </h2>
            <p className="mt-3 text-sm text-zinc-300 font-light leading-relaxed">
              Every stone that leaves our Agric Coker yard carries an unyielding commitment to quarry authenticity, seam precision, and durability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-sm bg-[#0d0d12] border border-white/5 hover:border-[#d4af37]/30 transition-all flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37] mb-5">
                <Shield size={28} />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">
                Direct Quarry Extraction
              </h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                We eliminate middlemen markups by directly importing natural marble, granite, and travertine blocks from verified European and Asian mountain quarries.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-sm bg-[#0d0d12] border border-white/5 hover:border-[#d4af37]/30 transition-all flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37] mb-5">
                <Truck size={28} />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">
                Heavy Slab Logistics
              </h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                Specialized hydraulic crane and flatbed transit direct from our Lagos port terminal to residential and commercial site foundations.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-sm bg-[#0d0d12] border border-white/5 hover:border-[#d4af37]/30 transition-all flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37] mb-5">
                <Gem size={28} />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">
                Hand-Selected Vein Quality
              </h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                Every individual slab bundle is inspected by stone specialists to ensure unbroken vein continuity and structural purity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: DEDICATED CALCULATOR INVITATION BANNER
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#0d0d14] via-[#12121c] to-[#0d0d14] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-sm border border-[#d4af37]/25 bg-[#0a0a0f] flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-2xl">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-semibold tracking-wider text-[#d4af37] uppercase mb-3">
                <Calculator size={13} />
                <span>Coverage Estimator</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                Planning an Architectural Project?
              </h2>
              <p className="mt-2 text-sm text-zinc-300 font-light leading-relaxed">
                Calculate precise tile quantities, room square meter coverage, and cutting buffers with our full-featured stone estimator before placing your order.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                href="/calculator"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm bg-[#d4af37] hover:bg-[#c49f2f] text-black font-semibold text-xs tracking-widest uppercase transition-all shadow-md"
              >
                <span>Open Tile Calculator</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm border border-white/20 hover:border-white/40 text-white font-medium text-xs tracking-widest uppercase transition-all bg-white/5"
              >
                <span>Browse Slabs</span>
                <Layers size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
