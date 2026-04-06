/*
  DESIGN: Topographic Naturalism — ParkStay by Teeco
  Footer: Dark warm gray (#2b2823) background, cream text, thin dividers
*/
import { Link } from 'wouter';
import { toast } from 'sonner';

export default function Footer() {
  const handleClick = () => toast('Feature coming soon');

  return (
    <footer className="bg-[#2b2823] text-[#e5e3da]">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#e5e3da] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2b2823" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-lg font-semibold text-[#e5e3da]">ParkStay</span>
                <span className="text-[10px] font-light tracking-[0.12em] text-[#787060] uppercase">by teeco</span>
              </div>
            </div>
            <p className="text-sm text-[#a09a8e] leading-relaxed mb-6 max-w-xs">
              The destination-first way to find stays near America's most beautiful national parks, monuments, and forests.
            </p>
            <p className="text-xs text-[#787060] leading-relaxed">
              We're committed to supporting America's national parks.
            </p>
          </div>

          {/* Explore Column */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.1em] uppercase text-[#787060] mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {['National Parks', 'National Monuments', 'National Forests', 'National Seashores', 'State Parks'].map(item => (
                <li key={item}>
                  <button onClick={handleClick} className="text-sm text-[#a09a8e] hover:text-[#e5e3da] transition-colors">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Plan Your Trip Column */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.1em] uppercase text-[#787060] mb-4">Plan Your Trip</h4>
            <ul className="space-y-2.5">
              {['Family Road Trips', 'Weekend Getaways', 'Seasonal Guides', 'Packing Lists', 'Travel Tips'].map(item => (
                <li key={item}>
                  <button onClick={handleClick} className="text-sm text-[#a09a8e] hover:text-[#e5e3da] transition-colors">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* For Hosts Column */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.1em] uppercase text-[#787060] mb-4">For Property Owners</h4>
            <ul className="space-y-2.5">
              <li>
                  <Link href="/list-your-property" className="text-sm text-[#a09a8e] hover:text-[#e5e3da] transition-colors no-underline">List Your Property</Link>
                </li>
              {['Property Management', 'Hosting Resources', 'Teeco Cohosting'].map(item => (
                <li key={item}>
                  <button onClick={handleClick} className="text-sm text-[#a09a8e] hover:text-[#e5e3da] transition-colors">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#3d3a33]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#787060]">
              &copy; {new Date().getFullYear()} ParkStay by Teeco. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-xs text-[#787060] hover:text-[#a09a8e] transition-colors no-underline">Privacy</Link>
              <Link href="/terms" className="text-xs text-[#787060] hover:text-[#a09a8e] transition-colors no-underline">Terms</Link>
              <Link href="/do-not-sell" className="text-xs text-[#787060] hover:text-[#a09a8e] transition-colors no-underline">Do Not Sell or Share My Personal Information</Link>
              <button onClick={handleClick} className="text-xs text-[#787060] hover:text-[#a09a8e] transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
