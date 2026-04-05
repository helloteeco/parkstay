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
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 border-2 border-[#2b2823] rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-[#2b2823]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif font-bold text-lg text-[#2b2823]">ParkStay</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#787060]">by teeco</span>
            </div>
          </Link>

          {/* Desktop Menu - Center */}
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
          </div>

          {/* Right Side - List Property + Icons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm text-[#787060] hover:text-[#2b2823] transition">
              List Your Property
            </button>
            <div className="w-px h-5 bg-[#d5d2c8]"></div>
            {/* Heart Icon */}
            <button className="text-[#787060] hover:text-[#2b2823] transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </button>
            {/* User Icon */}
            <button className="text-[#787060] hover:text-[#2b2823] transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
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
            <Link to="/" className="block px-2 py-2 text-sm text-[#2b2823]" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/explore" className="block px-2 py-2 text-sm text-[#2b2823]" onClick={() => setMenuOpen(false)}>Explore Parks</Link>
            <Link to="/road-trips" className="block px-2 py-2 text-sm text-[#2b2823]" onClick={() => setMenuOpen(false)}>Road Trips</Link>
            <button className="w-full mt-2 px-4 py-2 bg-[#2b2823] text-[#e5e3da] text-sm font-semibold rounded">
              List Your Property
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
