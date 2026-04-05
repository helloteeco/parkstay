import { Link, useNavigate } from 'react-router-dom'
import ParkCard from '../components/ParkCard'
import { parks } from '../data/parks'
import { roadTrips } from '../data/roadTrips'
import { useState } from 'react'

// US States data for the map
const states = [
  { name: 'Alaska', abbr: 'AK', parks: 8 },
  { name: 'Hawaii', abbr: 'HI', parks: 2 },
  { name: 'Washington', abbr: 'WA', parks: 3 },
  { name: 'Oregon', abbr: 'OR', parks: 0 },
  { name: 'California', abbr: 'CA', parks: 9 },
  { name: 'Nevada', abbr: 'NV', parks: 0 },
  { name: 'Idaho', abbr: 'ID', parks: 0 },
  { name: 'Montana', abbr: 'MT', parks: 1 },
  { name: 'Wyoming', abbr: 'WY', parks: 2 },
  { name: 'Utah', abbr: 'UT', parks: 5 },
  { name: 'Colorado', abbr: 'CO', parks: 4 },
  { name: 'Arizona', abbr: 'AZ', parks: 3 },
  { name: 'New Mexico', abbr: 'NM', parks: 2 },
  { name: 'North Dakota', abbr: 'ND', parks: 0 },
  { name: 'South Dakota', abbr: 'SD', parks: 2 },
  { name: 'Nebraska', abbr: 'NE', parks: 0 },
  { name: 'Kansas', abbr: 'KS', parks: 0 },
  { name: 'Oklahoma', abbr: 'OK', parks: 0 },
  { name: 'Texas', abbr: 'TX', parks: 2 },
  { name: 'Minnesota', abbr: 'MN', parks: 0 },
  { name: 'Iowa', abbr: 'IA', parks: 0 },
  { name: 'Missouri', abbr: 'MO', parks: 0 },
  { name: 'Arkansas', abbr: 'AR', parks: 0 },
  { name: 'Louisiana', abbr: 'LA', parks: 0 },
  { name: 'Wisconsin', abbr: 'WI', parks: 0 },
  { name: 'Illinois', abbr: 'IL', parks: 0 },
  { name: 'Mississippi', abbr: 'MS', parks: 0 },
  { name: 'Michigan', abbr: 'MI', parks: 0 },
  { name: 'Indiana', abbr: 'IN', parks: 0 },
  { name: 'Ohio', abbr: 'OH', parks: 0 },
  { name: 'Kentucky', abbr: 'KY', parks: 1 },
  { name: 'Tennessee', abbr: 'TN', parks: 2 },
  { name: 'Alabama', abbr: 'AL', parks: 0 },
  { name: 'Georgia', abbr: 'GA', parks: 0 },
  { name: 'Florida', abbr: 'FL', parks: 3 },
  { name: 'South Carolina', abbr: 'SC', parks: 0 },
  { name: 'North Carolina', abbr: 'NC', parks: 2 },
  { name: 'Virginia', abbr: 'VA', parks: 2 },
  { name: 'West Virginia', abbr: 'WV', parks: 1 },
  { name: 'Pennsylvania', abbr: 'PA', parks: 0 },
  { name: 'New York', abbr: 'NY', parks: 0 },
  { name: 'New Jersey', abbr: 'NJ', parks: 0 },
  { name: 'Delaware', abbr: 'DE', parks: 0 },
  { name: 'Maryland', abbr: 'MD', parks: 0 },
  { name: 'D.C.', abbr: 'DC', parks: 6 },
  { name: 'Connecticut', abbr: 'CT', parks: 0 },
  { name: 'Rhode Island', abbr: 'RI', parks: 0 },
  { name: 'Massachusetts', abbr: 'MA', parks: 0 },
  { name: 'Vermont', abbr: 'VT', parks: 0 },
  { name: 'New Hampshire', abbr: 'NH', parks: 0 },
  { name: 'Maine', abbr: 'ME', parks: 1 },
]

export default function Home() {
  const featuredParks = parks.slice(0, 6)
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/explore?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <div className="w-full">
      {/* Hero Section - Full Screen */}
      <section className="relative w-full h-screen min-h-[700px]">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
          alt="Mountain valley at golden hour"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <p className="text-[#d5d2c8] uppercase tracking-[0.3em] text-sm mb-6">
            Destination-First Travel
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white/90 font-bold leading-tight mb-6">
            Find Your Next<br />
            <span className="text-white/80">Great Outdoors</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mb-12">
            Discover stays near 474+ national parks, monuments, and forests. Pick the destination first ‚Äî we'll find the perfect place to stay.
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="w-full max-w-4xl bg-white rounded-2xl p-2 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
              <div className="md:col-span-2 px-4 py-3">
                <label className="block text-xs font-semibold text-[#787060] mb-1">Destination</label>
                <input
                  type="text"
                  placeholder="Park name, state, or address"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-sm text-[#2b2823] placeholder-[#787060]/60 focus:outline-none bg-transparent"
                />
              </div>
              <div className="px-4 py-3 md:border-l border-[#d5d2c8]">
                <label className="block text-xs font-semibold text-[#787060] mb-1">Check In</label>
                <input
                  type="date"
                  className="w-full text-sm text-[#787060] focus:outline-none bg-transparent"
                />
              </div>
              <div className="px-4 py-3 md:border-l border-[#d5d2c8]">
                <label className="block text-xs font-semibold text-[#787060] mb-1">Check Out</label>
                <input
                  type="date"
                  className="w-full text-sm text-[#787060] focus:outline-none bg-transparent"
                />
              </div>
              <div className="flex items-end gap-2 px-4 py-3 md:border-l border-[#d5d2c8]">
                <div className="flex-1">
                  <label className="block text-xs font-semibold text-[#787060] mb-1">Guests</label>
                  <select className="w-full text-sm text-[#787060] focus:outline-none bg-transparent appearance-none">
                    <option>Add guests</option>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6+ Guests</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="bg-[#2b2823] text-white p-3 rounded-xl hover:bg-[#1a1611] transition flex-shrink-0"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Stats Bar at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-4xl mx-auto px-4 pb-8">
            <div className="flex justify-center gap-16 text-white">
              <div className="text-center">
                <div className="text-3xl font-serif font-bold">63</div>
                <div className="text-xs uppercase tracking-wider text-white/70">National Parks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif font-bold">474+</div>
                <div className="text-xs uppercase tracking-wider text-white/70">Destinations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif font-bold">2,400+</div>
                <div className="text-xs uppercase tracking-wider text-white/70">Stays Listed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <p className="text-[#787060] text-sm uppercase tracking-wider mb-3">How It Works</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2b2823] mb-4">Destination First. Stays Second.</h2>
          <p className="text-[#787060] max-w-2xl mx-auto">
            Unlike other platforms, we start with where you want to go ‚Äî not where you want to sleep.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              num: 1,
              title: 'Choose a Destination',
              desc: 'Browse by state, park type, or search for a specific national park, monument, or forest.',
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              ),
            },
            {
              num: 2,
              title: 'Explore the Park',
              desc: 'Discover things to do, seasonal highlights, trails, and insider tips for your chosen destination.',
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
              ),
            },
            {
              num: 3,
              title: 'Book Your Stay',
              desc: 'Find curated vacation rentals within 30 miles of the park ‚Äî cabins, lodges, and family homes.',
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              ),
            },
          ].map((step) => (
            <div key={step.num} className="bg-white p-8 rounded-2xl border border-[#d5d2c8] hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-full bg-[#2b2823] text-[#e5e3da] flex items-center justify-center mb-5">
                {step.icon}
              </div>
              <h3 className="font-serif text-xl text-[#2b2823] mb-3">{step.title}</h3>
              <p className="text-[#787060] text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Parks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[#787060] text-sm uppercase tracking-wider mb-2">Featured Destinations</p>
            <h2 className="font-serif text-4xl text-[#2b2823]">Popular Parks to Explore</h2>
          </div>
          <Link to="/explore" className="hidden md:inline-flex items-center gap-2 text-sm text-[#787060] hover:text-[#2b2823] transition">
            View all destinations
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {featuredParks.map((park) => (
            <ParkCard key={park.id} park={park} />
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link to="/explore" className="inline-flex items-center gap-2 text-sm text-[#787060] hover:text-[#2b2823] transition">
            View all destinations ‚Üí
          </Link>
        </div>
      </section>

      {/* US Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-4">
          <p className="text-[#787060] text-sm uppercase tracking-wider mb-2">Explore by State</p>
          <h2 className="font-serif text-4xl text-[#2b2823] mb-4">Click a State to Discover Parks</h2>
          <p className="text-[#787060] text-sm">States highlighted in green have national park destinations with stays available.</p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {states.map((state) => (
            <Link
              key={state.abbr}
              to={state.parks > 0 ? `/explore/${state.name.toLowerCase().replace(/\s+/g, '-')}` : '#'}
              className={`px-3 py-2 rounded-lg text-xs font-medium transition ${
                state.parks > 0
                  ? 'bg-[#4a7c59] text-white hover:bg-[#3d6b4a]'
                  : 'bg-[#e5e3da] text-[#787060] hover:bg-[#d5d2c8]'
              }`}
            >
              {state.name}{state.parks > 0 ? ` ‚Äî ${state.parks} park${state.parks > 1 ? 's' : ''}` : ''}
            </Link>
          ))}
        </div>
      </section>

      {/* Adventure Types */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <p className="text-[#787060] text-sm uppercase tracking-wider mb-2">Browse by Type</p>
          <h2 className="font-serif text-4xl text-[#2b2823]">Every Kind of Outdoor Adventure</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { emoji: 'üèîÔ∏è', name: 'National Parks', count: '63 sites' },
            { emoji: 'üóø', name: 'National Monuments', count: '129 sites' },
            { emoji: 'üå≤', name: 'National Forests', count: '154 sites' },
            { emoji: 'üèñÔ∏è', name: 'National Seashores', count: '10 sites' },
            { emoji: 'üéñÔ∏è', name: 'National Battlefields', count: '11 sites' },
            { emoji: 'üèõÔ∏è', name: 'National Memorials', count: '31 sites' },
          ].map((type, idx) => (
            <button key={idx} className="bg-white p-6 rounded-2xl border border-[#d5d2c8] text-center hover:shadow-lg hover:border-[#2b2823] transition group cursor-pointer">
              <div className="text-3xl mb-3">{type.emoji}</div>
              <h3 className="font-serif text-sm text-[#2b2823] mb-1 group-hover:text-[#2b2823]">{type.name}</h3>
              <p className="text-xs text-[#787060]">{type.count}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Road Trip CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden border border-[#d5d2c8]">
          {/* Left - Image with overlay card */}
          <div className="relative h-80 lg:h-auto">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80"
              alt="Family hiking in national park"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            {/* Overlay card */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur rounded-xl p-4">
                <p className="text-xs text-[#787060] uppercase tracking-wider mb-1">Road Trip</p>
                <p className="font-serif text-sm text-[#2b2823] font-semibold">Great Smoky Mountains ‚Üí Shenandoah</p>
                <p className="text-xs text-[#787060] mt-1">5 parks ¬∑ 7 days ¬∑ 4 states</p>
                <span className="inline-block mt-2 text-xs bg-[#e5e3da] text-[#2b2823] px-2 py-1 rounded">For Families</span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="p-10 lg:p-12 flex flex-col justify-center">
            <h2 className="font-serif text-3xl lg:text-4xl text-[#2b2823] mb-4 leading-tight">
              Plan the Road Trip<br />They'll Never Forget
            </h2>
            <p className="text-[#787060] mb-8 leading-relaxed">
              Remember those childhood road trips through national parks? We're making it easy for the next generation of adventurers.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Curated multi-park itineraries with drive times',
                'Family-friendly, verified vacation rentals',
                'Things to do with kids at every stop',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#2b2823]">
                  <svg className="w-5 h-5 text-[#4a7c59] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/road-trips" className="inline-block px-8 py-3 bg-[#2b2823] text-[#e5e3da] rounded-lg font-semibold hover:bg-[#1a1611] transition w-fit">
              Explore Road Trips ‚Üí
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <p className="text-[#787060] text-sm uppercase tracking-wider mb-2">What Families Say</p>
          <h2 className="font-serif text-4xl text-[#2b2823]">Stories from the Trail</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: 'We used to spend hours on Airbnb trying to find a place near Yellowstone. ParkStay showed us the park first, then the perfect cabin was right there.',
              author: 'Sarah M.',
              location: 'Yellowstone, WY',
            },
            {
              quote: 'Planned our entire East Coast road trip ‚Äî Shenandoah to Great Smokies to New River Gorge. The kids still talk about it.',
              author: 'David & Lisa K.',
              location: '3-park road trip',
            },
            {
              quote: 'As a property owner near Mammoth Cave, listing on ParkStay has been incredible. Guests come specifically for the park experience.',
              author: 'Tom R.',
              location: 'Host, Mammoth Cave, KY',
            },
          ].map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-[#d5d2c8]">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400">‚òÖ</span>)}
              </div>
              <p className="text-[#2b2823] italic mb-6 leading-relaxed">"{review.quote}"</p>
              <div>
                <p className="font-semibold text-[#2b2823]">{review.author}</p>
                <p className="text-sm text-[#787060]">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Property Owner CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mb-12">
        <div className="bg-gradient-to-r from-[#d4b896] to-[#c9a876] rounded-2xl p-12 md:p-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2b2823] mb-4">Own a Property Near a National Park?</h2>
          <p className="text-[#2b2823]/80 mb-8 text-lg max-w-2xl mx-auto">
            List your vacation rental on the only destination-first booking platform. Reach travelers who are already excited about the park near your property.
          </p>
          <button className="px-8 py-4 bg-[#2b2823] text-[#e5e3da] rounded-lg font-semibold hover:bg-[#1a1611] transition text-lg">
            List Your Property
          </button>
        </div>
      </section>
    </div>
  )
}
