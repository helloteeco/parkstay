/*
  DESIGN: Topographic Naturalism — ParkStay by Teeco
  Navbar: Warm cream background, Source Serif logo, Raleway nav links
  Thin gray bottom border (Teeco brand element)
  Coming Soon badge to signal pre-launch status
*/
import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, User, Heart, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

export default function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/explore', label: 'Explore Parks' },
    { href: '/road-trips', label: 'Road Trips' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#faf9f6]/95 backdrop-blur-sm border-b border-[#d5d2c8]">
      <div className="container flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline">
          <div className="w-8 h-8 rounded-lg bg-[#2b2823] flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e5e3da" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold text-[#2b2823] tracking-tight">ParkStay</span>
            <span className="text-[10px] font-light tracking-[0.12em] text-[#787060] uppercase">by teeco</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-normal tracking-wide transition-colors no-underline ${
                location === link.href
                  ? 'text-[#3d5a3e] font-medium'
                  : 'text-[#787060] hover:text-[#2b2823]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <span className="inline-flex items-center gap-1 bg-[#c4704b]/10 text-[#c4704b] rounded-full px-2.5 py-1 text-[10px] font-medium tracking-wide">
            <Sparkles size={10} />
            Launching Soon
          </span>
          <Link
            href="/list-your-property"
            className="text-sm font-normal text-[#787060] hover:text-[#2b2823] transition-colors no-underline"
          >
            List Your Property
          </Link>
          <div className="w-px h-5 bg-[#d5d2c8]" />
          <button
            onClick={() => toast('Feature coming soon', { description: 'Save your favorite parks and stays' })}
            className="p-2 rounded-full hover:bg-[#e5e3da] transition-colors text-[#787060]"
          >
            <Heart size={18} />
          </button>
          <button
            onClick={() => toast('Feature coming soon', { description: 'Sign in to your account' })}
            className="p-2 rounded-full hover:bg-[#e5e3da] transition-colors text-[#787060]"
          >
            <User size={18} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <span className="inline-flex items-center gap-1 bg-[#c4704b]/10 text-[#c4704b] rounded-full px-2 py-0.5 text-[9px] font-medium">
            <Sparkles size={8} />
            Soon
          </span>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg hover:bg-[#e5e3da] transition-colors text-[#2b2823]"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#d5d2c8] bg-[#faf9f6] px-4 py-4 space-y-3">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-2 text-base no-underline ${
                location === link.href
                  ? 'text-[#3d5a3e] font-medium'
                  : 'text-[#787060]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="brand-divider my-3" />
          <Link
            href="/list-your-property"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-base text-[#787060] no-underline"
          >
            List Your Property
          </Link>
          <button
            onClick={() => { toast('Feature coming soon'); setMobileOpen(false); }}
            className="block w-full text-left py-2 text-base text-[#787060]"
          >
            Sign In
          </button>
        </div>
      )}
    </header>
  );
}
