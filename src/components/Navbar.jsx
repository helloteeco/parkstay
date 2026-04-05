import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="sticky top-0 z-50 bg-[#faf9f6]/95 backdrop-blur border-b border-[#d5d2c8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#2b2823] rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-[#e5e3da]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a2 2 0 11-4 0 2 2 0 014 0zm0 0c0 1.22-.756 2.267-1.812 2.734C5.195 5.466 4 7.057 4 9c0 3.314 1.343 5.323 3 6.236V19a1 1 0 001 1h4a1 1 0 001-1v-3.764c1.657-.913 3-2.922 3-6.236 0-1.943-1.195-3.534-2.188-4.266C11.756 4.267 11 3.22 11 2a1 1 0 10-2 0zm0 0z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-semibold text-[#2b2823]">ParkStay</span>
              <span className="text-xs uppercase tracking-widest text-[#787060]">by teeco</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm ${
                isActive('/') ? 'text-[#2b2823] font-semibold' : 'text-[#787060] hover:text-[#2b2823]'
              }`}
            >
              Home
            </Link>
            <Link
              to="/explore"
              className={`text-sm ${
                isActive('/explore') ? 'text-[#2b2823] font-semibold' : 'text-[#787060] hover:text-[#2b2823]'
              }`}
            >
              Explore Parks
            </Link>
            <Link
              to="/road-trips"
              className={`text-sm ${
                isActive('/road-trips') ? 'text-[#2b2823] font-semibold' : 'text-[#787060] hover:text-[#2b2823]'
              }`}
            >
              Road Trips
            </Link>
            <button className="px-4 py-2 bg-[#2b2823] text-[#e5e3da] text-sm font-semibold rounded hover:bg-[#1a1611] transition">
              List Your Property
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 hover:bg-[#e5e3da]/20 rounded"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-[#d5d2c8]">
            <Link to="/" className="block px-2 py-2 text-sm text-[#2b2823]">Home</Link>
            <Link to="/explore" className="block px-2 py-2 text-sm text-[#2b2823]">Explore Parks</Link>
            <Link to="/road-trips" className="block px-2 py-2 text-sm text-[#2b2823]">Road Trips</Link>
            <button className="w-full mt-2 px-4 py-2 bg-[#2b2823] text-[#e5e3da] text-sm font-semibold rounded">
              List Your Property
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
