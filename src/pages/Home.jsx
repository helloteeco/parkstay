/*
  DESIGN: Topographic Naturalism — ParkStay by Teeco
  Home Page: Hero with search overlay, featured destinations grid,
  interactive US map, park type categories, family road trip CTA, host CTA, testimonials
*/
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Mountain, TreePine, Compass, Map, Star, Shield, Home as HomeIcon } from 'lucide-react';
import { toast } from 'sonner';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import SearchBar from '../components/SearchBar.jsx';
import ParkCard from '../components/ParkCard.jsx';
import USMap from '../components/USMap.jsx';
import { getFeaturedParks, parkTypes, HERO_IMAGE, FAMILY_IMAGE } from '../data/parkData.js';

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function Home() {
  const featured = getFeaturedParks();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[75vh] md:h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Mountain valley at golden hour"
            className="w-full h-full object-cover animate-[kenburns_20s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center mb-8 max-w-3xl"
          >
            <p className="text-sm md:text-base font-light tracking-[0.2em] uppercase text-white/80 mb-4">
              Destination-First Travel
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-4" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              Find Your Next
              <br />
              <span className="text-[#e5e3da]">Great Outdoors</span>
            </h1>
            <p className="text-base md:text-lg text-white/85 font-light max-w-xl mx-auto leading-relaxed">
              Discover stays near 474+ national parks, monuments, and forests.
              Pick the destination first — we'll find the perfect place to stay.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="w-full max-w-4xl px-4"
          >
            <SearchBar variant="hero" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-6 md:gap-10 mt-8"
          >
            {[
              { label: 'National Parks', value: '63' },
              { label: 'Destinations', value: '474+' },
              { label: 'Stays Listed', value: '2,400+' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <p className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>{stat.value}</p>
                <p className="text-[10px] md:text-xs tracking-wider uppercase text-white/70">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <FadeIn className="text-center mb-12">
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#3d5a3e] mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2b2823]" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              Destination First. Stays Second.
            </h2>
            <p className="text-[#787060] mt-3 max-w-lg mx-auto leading-relaxed">
              Unlike other platforms, we start with where you want to go — not where you want to sleep.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <Compass className="text-[#3d5a3e]" size={28} />,
                title: 'Choose a Destination',
                desc: 'Browse by state, park type, or search for a specific national park, monument, or forest.',
              },
              {
                icon: <Mountain className="text-[#3d5a3e]" size={28} />,
                title: 'Explore the Park',
                desc: 'Discover things to do, seasonal highlights, trails, and insider tips for your chosen destination.',
              },
              {
                icon: <TreePine className="text-[#3d5a3e]" size={28} />,
                title: 'Book Your Stay',
                desc: 'Find curated vacation rentals within 30 miles of the park — cabins, lodges, and family homes.',
              },
            ].map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.15}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#3d5a3e]/8 flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#e5e3da] flex items-center justify-center mx-auto mb-3 text-sm font-semibold text-[#2b2823]" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-[#2b2823] mb-2" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>{step.title}</h3>
                  <p className="text-sm text-[#787060] leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED DESTINATIONS ===== */}
      <section className="py-16 md:py-20 topo-pattern">
        <div className="container">
          <FadeIn>
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#3d5a3e] mb-3">Featured Destinations</p>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#2b2823]" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                  Popular Parks to Explore
                </h2>
              </div>
              <Link to="/explore" className="hidden md:flex items-center gap-1.5 text-sm font-medium text-[#3d5a3e] hover:text-[#2e4830] transition-colors no-underline">
                View all destinations <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeIn className="lg:col-span-2 lg:row-span-1">
              <ParkCard park={featured[0]} size="large" />
            </FadeIn>
            {featured.slice(1, 3).map((park, i) => (
              <FadeIn key={park.id} delay={(i + 1) * 0.1}>
                <ParkCard park={park} size="medium" />
              </FadeIn>
            ))}
            {featured.slice(3, 6).map((park, i) => (
              <FadeIn key={park.id} delay={(i + 3) * 0.1}>
                <ParkCard park={park} size="medium" />
              </FadeIn>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/explore" className="inline-flex items-center gap-1.5 text-sm font-medium text-[#3d5a3e] no-underline">
              View all destinations <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== EXPLORE BY STATE ===== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <FadeIn className="text-center mb-10">
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#3d5a3e] mb-3">Explore by State</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2b2823] mb-3" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              Click a State to Discover Parks
            </h2>
            <p className="text-[#787060] max-w-md mx-auto">
              States highlighted in green have national park destinations with stays available.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="max-w-4xl mx-auto bg-[#faf9f6] rounded-2xl border border-[#e5e3da] p-6 md:p-10">
              <USMap />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== BROWSE BY TYPE ===== */}
      <section className="py-16 md:py-20 topo-pattern">
        <div className="container">
          <FadeIn className="text-center mb-10">
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#3d5a3e] mb-3">Browse by Type</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2b2823]" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              Every Kind of Outdoor Adventure
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {parkTypes.map((type, i) => (
              <FadeIn key={type.label} delay={i * 0.08}>
                <button
                  onClick={() => toast('Feature coming soon', { description: `Browse all ${type.count} ${type.label}` })}
                  className="group bg-white rounded-xl border border-[#e5e3da] p-5 text-center hover:border-[#3d5a3e]/30 hover:shadow-md transition-all duration-300 w-full"
                >
                  <span className="text-3xl block mb-3">{type.icon}</span>
                  <h4 className="text-sm font-medium text-[#2b2823] mb-1">{type.label}</h4>
                  <p className="text-xs text-[#787060]">{type.count} sites</p>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAMILY ROAD TRIPS ===== */}
      <section className="py-16 md:py-20 bg-white overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeIn>
              <div className="relative">
                <img
                  src={FAMILY_IMAGE}
                  alt="Family hiking in national park"
                  className="w-full rounded-2xl shadow-lg object-cover h-[400px] lg:h-[500px]"
                />
                <div className="absolute -bottom-4 -right-4 md:bottom-6 md:-right-6 bg-white rounded-xl shadow-lg p-4 border border-[#e5e3da] max-w-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <Map size={16} className="text-[#3d5a3e]" />
                    <span className="text-xs font-medium text-[#3d5a3e] tracking-wider uppercase">Road Trip</span>
                  </div>
                  <p className="text-sm font-semibold text-[#2b2823]" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>Great Smoky Mountains → Shenandoah</p>
                  <p className="text-xs text-[#787060] mt-1">5 parks · 7 days · 4 states</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#3d5a3e] mb-3">For Families</p>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#2b2823] mb-4 leading-tight" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                  Plan the Road Trip
                  <br />
                  They'll Never Forget
                </h2>
                <p className="text-[#787060] leading-relaxed mb-6">
                  Remember those childhood road trips through national parks? We're making it easy for the next generation.
                  Browse curated multi-park itineraries, find family-friendly stays along the route, and create memories
                  that last a lifetime.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    { icon: <Compass size={18} />, text: 'Curated multi-park itineraries with drive times' },
                    { icon: <Shield size={18} />, text: 'Family-friendly, verified vacation rentals' },
                    { icon: <Star size={18} />, text: 'Things to do with kids at every stop' },
                  ].map(item => (
                    <div key={item.text} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#3d5a3e]/8 flex items-center justify-center shrink-0 text-[#3d5a3e]">
                        {item.icon}
                      </div>
                      <p className="text-sm text-[#2b2823] pt-1.5">{item.text}</p>
                    </div>
                  ))}
                </div>

                <Link
                  to="/road-trips"
                  className="inline-flex items-center gap-2 bg-[#3d5a3e] hover:bg-[#2e4830] text-white rounded-xl px-6 py-3 text-sm font-medium transition-colors no-underline"
                >
                  Explore Road Trips <ArrowRight size={16} />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-16 md:py-20 bg-[#2b2823] text-[#e5e3da]">
        <div className="container">
          <FadeIn className="text-center mb-12">
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#7a8c6e] mb-3">What Families Say</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#e5e3da]" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              Stories from the Trail
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                quote: "We used to spend hours on Airbnb trying to find a place near Yellowstone. ParkStay showed us the park first, then the perfect cabin was right there. Game changer for our family.",
                name: 'Sarah M.',
                trip: 'Yellowstone, WY',
                stars: 5,
              },
              {
                quote: "Planned our entire East Coast road trip — Shenandoah to Great Smokies to New River Gorge. The kids still talk about it. So much easier than piecing it together ourselves.",
                name: 'David & Lisa K.',
                trip: '3-park road trip',
                stars: 5,
              },
              {
                quote: "As a property owner near Mammoth Cave, listing on ParkStay has been incredible. Guests come specifically for the park experience, and they're the best guests we've ever had.",
                name: 'Tom R.',
                trip: 'Host, Mammoth Cave, KY',
                stars: 5,
              },
            ].map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.15}>
                <div className="bg-[#353129] rounded-xl p-6 border border-[#4a463d]">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} size={14} className="fill-[#c4704b] text-[#c4704b]" />
                    ))}
                  </div>
                  <p className="text-sm text-[#c8c3b8] leading-relaxed mb-4 italic">"{t.quote}"</p>
                  <div>
                    <p className="text-sm font-medium text-[#e5e3da]">{t.name}</p>
                    <p className="text-xs text-[#787060]">{t.trip}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOST CTA BANNER ===== */}
      <section className="py-16 md:py-20 bg-[#3d5a3e] text-white">
        <div className="container">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <HomeIcon size={20} className="text-[#e5e3da]" />
                  <span className="text-xs font-medium tracking-[0.15em] uppercase text-white/70">For Property Owners</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                  Own a Vacation Home
                  <br />
                  Near a Park?
                </h2>
                <p className="text-lg text-white/90 font-light leading-relaxed mb-2" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                  List it here on ParkStay.
                </p>
                <p className="text-white/70 leading-relaxed mb-8 max-w-lg">
                  Reach travelers who are already excited about your area. Our guests come for the destination — 
                  your property is the perfect home base. Join the only booking platform built around national parks.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => toast('Feature coming soon', { description: 'Property listing will be available soon' })}
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#3d5a3e] hover:bg-[#e5e3da] rounded-xl px-8 py-3.5 text-sm font-medium transition-colors"
                  >
                    List Your Property <ArrowRight size={16} />
                  </button>
                  <button
                    onClick={() => toast('Feature coming soon', { description: 'Learn about Teeco cohosting services' })}
                    className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 rounded-xl px-8 py-3.5 text-sm font-medium transition-colors"
                  >
                    Learn About Cohosting
                  </button>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="space-y-6">
                    {[
                      { value: '2,400+', label: 'Active Listings' },
                      { value: '92%', label: 'Average Occupancy' },
                      { value: '$0', label: 'Listing Fee' },
                      { value: '24/7', label: 'Host Support' },
                    ].map(stat => (
                      <div key={stat.label} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0">
                        <span className="text-sm text-white/70">{stat.label}</span>
                        <span className="text-xl font-semibold text-white" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.08) translate(-1%, -1%); }
        }
      `}</style>
    </div>
  );
}
