"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Layers, Calculator, ShoppingBag } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    {
      href: "/",
      label: "Home",
      icon: Home,
    },
    {
      href: "/products",
      label: "Slabs",
      icon: Layers,
    },
    {
      href: "/calculator",
      label: "Calculator",
      icon: Calculator,
    },
    {
      href: "/cart",
      label: "Cart",
      icon: ShoppingBag,
      badge: 0,
    },
  ];

  return (
    <nav
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-sm md:hidden rounded-full bg-[#0c0c12]/80 backdrop-blur-xl border border-[#d4af37]/35 shadow-[0_12px_40px_rgba(0,0,0,0.85),0_0_20px_rgba(212,175,55,0.15)] px-3 py-1.5 flex items-center justify-around"
      aria-label="Mobile Bottom Navigation"
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`group relative flex flex-col items-center justify-center p-2 rounded-full transition-all hover:scale-110 active:scale-95 ${
              isActive ? "text-[#d4af37] font-semibold" : "text-zinc-400 hover:text-white"
            }`}
            aria-label={item.label}
          >
            {/* Glassmorphic Tooltip */}
            <span className="absolute -top-11 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-[#161622]/95 border border-[#d4af37]/50 text-[10px] font-semibold tracking-wider text-[#d4af37] uppercase opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-[0_6px_16px_rgba(0,0,0,0.9)] backdrop-blur-md -translate-y-1 group-hover:translate-y-0">
              {item.label}
              <span className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-1.5 h-1.5 bg-[#161622] border-b border-r border-[#d4af37]/50 rotate-45" />
            </span>

            <div className="relative">
              <Icon size={21} />
              {item.badge !== undefined && (
                <span className="absolute -top-1 -right-1.5 w-3.5 h-3.5 bg-[#d4af37] text-black font-bold text-[8px] rounded-full flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </div>

            <span className="text-[9px] font-medium tracking-tight mt-0.5">
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
