"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ShoppingBag,
  Home,
  Layers,
  Calculator,
} from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    {
      href: "/",
      label: "HOME",
      sub: "Showroom & Overview",
      icon: Home,
    },
    {
      href: "/products",
      label: "SLABS",
      sub: "Marble, Granite & Slabs",
      icon: Layers,
    },
    {
      href: "/calculator",
      label: "CALCULATOR",
      sub: "Coverage & Material Estimator",
      icon: Calculator,
    },
    {
      href: "/cart",
      label: "CART",
      sub: "Your Selected Items (0)",
      icon: ShoppingBag,
    },
  ];

  return (
    <>
      {/* =========================================================================
          TOP NAVBAR
          Scrolls naturally on mobile (relative), sticky on desktop (md:sticky)
          ========================================================================= */}
      <header className="relative md:sticky md:top-0 z-40 bg-[#08080a]/90 backdrop-blur-md border-b border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/stone-logo.png"
              alt="Stone Store Logo"
              className="h-10 w-auto object-contain rounded-full drop-shadow-[0_0_12px_rgba(212,175,55,0.25)]"
            />
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.2em] text-lg font-semibold text-white group-hover:text-[#d4af37] transition-colors">
                STONE STORE
              </span>
              <span className="text-[10px] tracking-[0.3em] text-zinc-400 uppercase -mt-1">
                Lagos • Nigeria
              </span>
            </div>
          </Link>

          {/* Actions: Cart & Desktop Hamburger Menu Trigger (Hidden on Mobile View) */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/cart"
              className="relative p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-all backdrop-blur-sm"
              aria-label="View Cart"
            >
              <ShoppingBag size={19} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#d4af37] text-black font-bold text-[10px] rounded-full flex items-center justify-center shadow-sm">
                0
              </span>
            </Link>

            {/* Hamburger Button for Desktop Screen */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 hover:bg-[#d4af37]/15 border border-white/10 hover:border-[#d4af37]/50 text-zinc-200 hover:text-[#d4af37] transition-all backdrop-blur-md shadow-sm"
              aria-label="Open Navigation Menu"
            >
              <span className="text-xs font-semibold tracking-widest uppercase text-zinc-300">
                MENU
              </span>
              <Menu size={18} className="text-[#d4af37]" />
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================================
          SLIDE-OVER DRAWER (ACCESSIBLE FROM DESKTOP MENU)
          ========================================================================= */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end animate-in fade-in duration-200">
          {/* Dark Backdrop */}
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <aside className="relative z-10 w-full max-w-sm sm:max-w-md h-full bg-[#0c0c12] border-l border-[#d4af37]/30 shadow-[-10px_0_50px_rgba(0,0,0,0.9)] p-6 sm:p-10 flex flex-col justify-between overflow-y-auto">
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-end pb-6 border-b border-white/10">
                

                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/15 transition-all"
                  aria-label="Close Menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Navigation Links: Home, Slabs, Calculator, Cart */}
              <nav className="py-8 flex flex-col gap-10">
                {navLinks.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="group flex items-center justify-between text-left transition-colors"
                    >
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`p-2 rounded-md transition-colors ${
                            isActive
                              ? "bg-[#d4af37] text-black"
                              : "bg-white/5 group-hover:bg-[#d4af37]/15 text-[#d4af37]"
                          }`}
                        >
                          <Icon size={20} />
                        </div>
                        <div>
                          <span
                            className={`block font-serif text-xl sm:text-2xl font-light tracking-wider transition-colors ${
                              isActive
                                ? "text-[#d4af37] font-normal"
                                : "text-zinc-200 group-hover:text-[#d4af37]"
                            }`}
                          >
                            {item.label}
                          </span>
                          
                        </div>
                      </div>
                      {isActive ? (
                        <span className="text-[10px] uppercase font-bold tracking-widest text-[#d4af37] px-2 py-0.5 rounded border border-[#d4af37]/40 bg-[#d4af37]/10">
                          Active
                        </span>
                      ) : (
                        <span className="text-zinc-600 group-hover:text-[#d4af37] font-mono text-xs transition-colors">
                          →
                        </span>
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
