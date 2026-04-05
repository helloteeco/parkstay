import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#2b2823] text-[#e5e3da]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 border-2 border-[#e5e3da] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-[#e5e3da]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif font-bold text-lg text-[#e5e3da]">ParkStay</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#d5d2c8]">by teeco</span>
              </div>
            </div>
            <p className="text-sm text-[#d5d2c8] mb-6 leading-relaxed">
              The destination-first way to find stays near America's most beautiful national parks, monuments, and forests.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#d5d2c8]">
              <span className="text-green-400">üåø</span>
              <div>
                <span className="font-semibold text-[#e5e3da]">1% for Parks</span>
                <br />
                Supporting the National Park Foundation
              </div>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-serif font-semibold text-[#e5e3da] mb-4">Explore</h4>
            <ul className="space-y-3 text-sm text-[#d5d2c8]">
              <li><Link to="/explore" className="hover:text-[#e5e3da] transition">National Parks</Link></li>
              <li><a href="#" className="hover:text-[#e5e3da] transition">National Monuments</a></li>
              <li><a href="#" className="hover:text-[#e5e3da] transition">National Forests</a></li>
              <li><a href="#" className="hover:text-[#e5e3da] transition">National Seashores</a></li>
              <li><a href="#" className="hover:text-[#e5e3da] transition">State Parks</a></li>
            </ul>
          </div>

          {/* Plan Your Trip */}
          <div>
            <h4 className="font-serif font-semibold text-[#e5e3da] mb-4">Plan Your Trip</h4>
            <ul className="space-y-3 text-sm text-[#d5d2c8]">
              <li><Link to="/road-trips" className="hover:text-[#e5e3da] transition">Family Road Trips</Link></li>
              <li><a href="#" className="hover:text-[#e5e3da] transition">Weekend Getaways</a></li>
              <li><a href="#" className="hover:text-[#e5e3da] transition">Seasonal Guides</a></li>
              <li><a href="#" className="hover:text-[#e5e3da] transition">Packing Lists</a></li>
              <li><a href="#" className="hover:text-[#e5e3da] transition">Travel Tips</a></li>
            </ul>
          </div>

          {/* For Property Owners */}
          <div>
            <h4 className="font-serif font-semibold text-[#e5e3da] mb-4">For Property Owners</h4>
            <ul className="space-y-3 text-sm text-[#d5d2c8]">
              <li><a href="#" className="hover:text-[#e5e3da] transition">List Your Property</a></li>
              <li><a href="#" className="hover:text-[#e5e3da] transition">Property Management</a></li>
              <li><a href="#" className="hover:text-[#e5e3da] transition">Hosting Resources</a></li>
              <li><a href="#" className="hover:text-[#e5e3da] transition">Teeco Cohosting</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#787060]/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#d5d2c8]">¬© 2026 ParkStay by Teeco. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-[#d5d2c8]">
            <a href="#" className="hover:text-[#e5e3da] transition">Privacy</a>
            <a href="#" className="hover:text-[#e5e3da] transition">Terms</a>
            <a href="#" className="hover:text-[#e5e3da] transition">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
