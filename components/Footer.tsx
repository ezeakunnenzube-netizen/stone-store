import Link from "next/link";
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#050507] border-t border-[#d4af37]/15 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Info & Story */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 w-fit group">
              <img
                src="/stone-logo.png"
                alt="Sonic Stone Maintenance Limited"
                className="h-9 w-auto object-contain rounded-full drop-shadow-[0_0_10px_rgba(212,175,55,0.2)]"
              />
              <span className="font-serif tracking-[0.2em] text-base font-semibold text-white group-hover:text-[#d4af37] transition-colors">
                SONIC STONE
              </span>
            </Link>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm font-light">
              Sonic Stone Maintenance Limited. Curating the world&apos;s finest natural stones, marbles, granites, and porcelain slabs for architectural masterpieces and bespoke interior residences across Nigeria.
            </p>

            {/* Instagram Follow Pill */}
            <div className="pt-2">
              <a
                href="https://www.instagram.com/sonicstone_dickson"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-[#d4af37]/15 border border-[#d4af37]/35 text-[#d4af37] text-xs font-medium tracking-wide transition-all shadow-sm"
              >
                <svg
                  className="w-3.5 h-3.5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>@sonicstone_dickson</span>
              </a>
            </div>
          </div>

          {/* Collection Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-mono text-xs tracking-widest text-[#d4af37] uppercase font-bold">
              COLLECTION
            </h4>
            <ul className="space-y-2 font-light">
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Floor Tiles
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Wall Tiles
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Natural Marble
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Porcelain
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-mono text-xs tracking-widest text-[#d4af37] uppercase font-bold">
              COMPANY
            </h4>
            <ul className="space-y-2 font-light">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <a href="https://wa.me/2348067110134" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <Link href="/calculator" className="hover:text-white transition-colors">
                  Calculator
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-[#d4af37] hover:underline transition-colors font-medium">
                  Client Profile &amp; Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Visit & Contact Information */}
          <div className="lg:col-span-4 flex flex-col gap-3.5">
            <h4 className="font-mono text-xs tracking-widest text-[#d4af37] uppercase font-bold">
              VISIT &amp; CONTACT
            </h4>

            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-[#d4af37] shrink-0 mt-0.5" />
              <a
                href="https://share.google/hjxoYQGYqIsiuRYJ5"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                title="View on Google Maps"
              >
                <strong className="block text-[12.5px] font-semibold text-[#d1cfcb] group-hover:text-[#d4af37] transition-colors leading-snug">
                  AGRIC-COKER BUILDING MATERIAL MARKET
                </strong>
                <span className="block text-xs text-[#8a8784] leading-relaxed mt-0.5">
                  Block 5, Suite 40, Second Floor, Agric Coker-Orile, Lagos, Nigeria
                </span>
              </a>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3">
              <Clock size={15} className="text-[#d4af37] shrink-0 mt-0.5" />
              <div className="text-[12.5px] text-[#8a8784] leading-relaxed">
                <span>Mon – Sat: 8:00am – 6:00pm</span>
                <span className="block text-[11px] text-red-500 font-medium">Sunday: Closed</span>
              </div>
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="flex flex-col gap-2 pt-1">
              <a
                href="tel:+2348067110134"
                className="inline-flex items-center gap-2 text-[12.5px] text-[#a3a09d] hover:text-[#d4af37] transition-colors"
                title="Call direct line"
              >
                <Phone size={13} className="text-[#d4af37]" />
                <span>+234 806 711 0134</span>
              </a>
              <a
                href="https://wa.me/2348067110134"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[12.5px] text-[#a3a09d] hover:text-[#25d366] transition-colors"
                title="Chat on WhatsApp"
              >
                <MessageCircle size={13} className="text-[#25d366]" />
                <span>WhatsApp: +234 806 711 0134</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="border-t border-[#d4af37]/10">
        <p className="text-[13px] text-[#a3a09d] text-center py-6 px-4 tracking-wide font-normal">
          © 2026 Sonic Stone Maintenance Limited. All rights reserved. • Agric Coker-Orile, Lagos.
        </p>
      </div>
    </footer>
  );
}
