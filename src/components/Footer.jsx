import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#2b2823] text-[#e5e3da] mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#e5e3da] rounded flex items-center justify-center">
                <svg className="w-5 h-5 text-[#2b2823]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a2 2 0 11-4 0 2 2 0 014 0zm0 0c0 1.22-.756 2.267-1.812 2.734C5.195 5.466 4 7.057 4 9c0 3.314 1.343 5.323 3 6.236V19a1 1 0 001 1h4a1 1 0 001-1v-3.764c1.657-.913 3-2.922 3-6.236 0-1.943-1.195-3.534-2.188-4.266C11.756 4.267 11 3.22 11 2a1 1 0 10-2 0zm0 0z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-semibold text-[#e5e3da]">ParkStay</span>
                <span className="text-xs uppercase tracking-widest text-[#d5d2c8]">by teeco</span>
              </div>
            </div>
            <p className="text-sm text-[#d5d2c8]">Discover, explore, and stay near America's greatest natural wonders.</p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-serif font-semibold text-[#e5e3da] mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-[#d5d2c8]">
              <li><a href="#" className="hover:text-[#e5e3da] transition">National Parks</a></li>
              <li><a href="#" className="hover:text-[#e5e3da] transition">State Parks</a></li>
              <li><a href="#" className="hover:text-[#e5e3da] transition">National Forests</a></li>
              <li><a href="#" className="hover:text-[#e5e3da] transition">All Destinations</a></li>
            </ul>
          </div>

          {/* Plan Your Trip */}
          <div>
            <h4 className="font-serif font-semibold text-[#e5e3da] mb-4">Plan Your Trip</h4>
            <ul className="space-y-2 text-sm text-[#d5d2c8]">
              <li><a href="#" className="hover:text-[#e5e3da] transition">Road Trips</a></li>
              <li><a href="#" className="hover:text-[#e5e3da] transition">Travel Guides</a></li>
              <li><a href="#" className="hover:text-[#e5e3da] transition">Packing Lists</a></li>
              <li><a href="#" className="hover:text-[#e5e3da] transition">FAQs</a></li>
            </ul>
          </div>

          {/* For Property Owners */}
          <div>
            <h4 className="font-serif font-semibold text-[#e5e3da] mb-4">For Property Owners</h4>
            <ul className="space-y-2 text-sm text-[#d5d2c8]">
              <li><a href="#" className="hover:text-[#e5e3da] transition">List Your Property</a></li>
              <li><a href="#" className="hover:text-[#e5e3da] transition">Owner Dashboard</a></li>
              <li><a href="#" className="hover:text-[#e5e3da] transition">Pricing</a></li>
              <li><a href="#" className="hover:text-[#e5e3da] transition">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#d5d2c8] pt-8 text-center text-sm text-[#d5d2c8]">
          <p>© 2026 ParkStay by Teeco. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
