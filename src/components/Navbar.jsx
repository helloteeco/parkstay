/*
  DESIGN: Topographic Naturalism — ParkStay by Teeco
  Navbar: Warm cream background, Source Serif logo, Raleway nav links
  Thin gray bottom border (Teeco brand element)
*/
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, User, Heart } from 'lucide-react';
import { toast } from 'sonner';

export default function Navbar() {
  const location = useLocation();
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
        <Link to="/" className="flex items-center gap-2 no-underline">
          <div className="w-8 h-8 rounded-lg bg-[#2b2823] flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e5e3da" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold text-[#2b2823] tracking-tight" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>ParkStay</span>
            <span className="text-[10px] font-light tracking-[0.12em] text-[#787060] uppercase">by teeco</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-normal tracking-wide transition-colors no-underline ${
                location.pathname === link.href
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
          <button
            onClick={() => toast('Feature coming soon', { description: 'List your property near a national park' })}
            className="text-sm font-normal text-[#787060] hover:text-[#2b2823] transition-colors"
          >
            List Your Property
          </button>
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
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-[#e5e3da] transition-colors text-[#2b2823]"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#d5d2c8] bg-[#faf9f6] px-4 py-4 space-y-3">
          {navLinks.map(link => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-2 text-base no-underline ${
                location.pathname === link.href
                  ? 'text-[#3d5a3e] font-medium'
                  : 'text-[#787060]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="brand-divider my-3" />
          <button
            onClick={() => { toast('Feature coming soon'); setMobileOpen(false); }}
            className="block w-full text-left py-2 text-base text-[#787060]"
          >
            List Your Property
          </button>
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
