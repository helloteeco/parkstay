import { Link } from 'react-router-dom'
import ParkCard from '../components/ParkCard'
import SearchBar from '../components/SearchBar'
import { parks } from '../data/parks'
import { roadTrips } from '../data/roadTrips'

export default function Home() {
  const featuredParks = parks.slice(0, 6)

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative w-full h-96 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200)',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-serif text-5xl md:text-6xl text-white font-bold mb-6">
            Find Your Next Great Outdoors
          </h1>
          <div className="w-full max-w-2xl">
            <SearchBar />
          </div>
        </div>
      </div>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <p className="text-[#787060] text-lg mb-2">How It Works</p>
          <h2 className="font-serif text-4xl text-[#2b2823] mb-2">Destination First. Stays Second.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { num: 1, title: 'Choose a Destination', desc: 'Explore hundreds of parks and natural attractions across the US.' },
            { num: 2, title: 'Explore the Park', desc: 'Learn about activities, best times to visit, and insider tips.' },
            { num: 3, title: 'Book Your Stay', desc: 'Find and book accommodations near your favorite parks.' },
          ].map((step) => (
            <div key={step.num} className="bg-white p-8 rounded-lg border border-[#d5d2c8]">
              <div className="w-12 h-12 rounded-full bg-[#2b2823] text-[#e5e3da] flex items-center justify-center font-serif text-lg font-bold mb-4">
                {step.num}
              </div>
              <h3 className="font-serif text-xl text-[#2b2823] mb-2">{step.title}</h3>
              <p className="text-[#787060]">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Parks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-[#2b2823]">Popular Parks to Explore</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredParks.map((park) => (
            <ParkCard key={park.id} park={park} />
          ))}
        </div>
      </section>

      {/* US Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-[#2b2823] mb-4">Click a State to Discover Parks</h2>
        </div>
        <div className="bg-gradient-to-b from-[#e5d5c0] to-[#d5c0b0] rounded-lg p-12 text-center border border-[#d5d2c8]">
          <p className="text-[#787060] text-lg mb-4">Interactive Map Coming Soon</p>
          <p className="text-[#787060] text-sm">Explore parks by region with our interactive US map.</p>
        </div>
      </section>

      {/* Adventure Types */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-[#2b2823]">Every Kind of Outdoor Adventure</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { emoji: '🏔️', name: 'National Parks', desc: 'Vast landscapes and iconic attractions.' },
            { emoji: '🗿', name: 'National Monuments', desc: 'Historic and geologic treasures.' },
            { emoji: '🌲', name: 'National Forests', desc: 'Wilderness and recreation areas.' },
            { emoji: '🏖️', name: 'National Seashores', desc: 'Pristine coastal environments.' },
            { emoji: '🎖️', name: 'National Battlefields', desc: 'History and heritage sites.' },
            { emoji: '🕯️', name: 'National Memorials', desc: 'Monuments to American history.' },
          ].map((type, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg border border-[#d5d2c8] text-center hover:shadow-lg transition">
              <div className="text-4xl mb-3">{type.emoji}</div>
              <h3 className="font-serif text-lg text-[#2b2823] mb-2">{type.name}</h3>
              <p className="text-sm text-[#787060]">{type.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Road Trip CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-8">
          <h2 className="font-serif text-4xl text-[#2b2823]">Plan the Road Trip They'll Never Forget</h2>
        </div>
        <div className="bg-white rounded-lg overflow-hidden border border-[#d5d2c8] hover:shadow-lg transition">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-64 md:h-auto bg-cover bg-center" style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600)',
            }}></div>
            <div className="p-8 flex flex-col justify-center">
              <p className="text-[#787060] text-sm uppercase tracking-wide mb-2">Curated Itineraries</p>
              <h3 className="font-serif text-2xl text-[#2b2823] mb-4">Appalachian Family Adventure</h3>
              <p className="text-[#787060] mb-6">
                The ultimate East Coast family road trip. Start in the misty Smokies, drive the scenic Blue Ridge Parkway to Shenandoah, explore New River Gorge, and finish underground at Mammoth Cave.
              </p>
              <Link to="/road-trips" className="inline-block px-6 py-3 bg-[#2b2823] text-[#e5e3da] rounded font-semibold hover:bg-[#1a1611] transition w-fit">
                View All Road Trips →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-[#2b2823]">Stories from the Trail</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { author: 'Sarah M.', location: 'Colorado', quote: 'Best way to plan our family vacation. Everything in one place!' },
            { author: 'James T.', location: 'California', quote: 'The curated road trips took the stress out of planning.' },
            { author: 'Maria L.', location: 'Utah', quote: 'Found the most amazing cabin near Zion. Highly recommend!' },
          ].map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg border border-[#d5d2c8]">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
              </div>
              <p className="text-[#2b2823] italic mb-4">"{review.quote}"</p>
              <p className="font-semibold text-[#2b2823]">{review.author}</p>
              <p className="text-sm text-[#787060]">{review.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Property Owner CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mb-20">
        <div className="bg-gradient-to-r from-[#d4b896] to-[#c9a876] rounded-lg p-12 text-center">
          <h2 className="font-serif text-3xl text-[#2b2823] mb-4">Own a Property Near a National Park?</h2>
          <p className="text-[#2b2823] mb-6 text-lg">
            Start earning by listing your property with ParkStay. Our guests are ready to book their next adventure.
          </p>
          <button className="px-8 py-3 bg-[#2b2823] text-[#e5e3da] rounded font-semibold hover:bg-[#1a1611] transition">
            List Your Property Today
          </button>
        </div>
      </section>
    </div>
  )
}
