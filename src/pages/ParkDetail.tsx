/*
  DESIGN: Topographic Naturalism — ParkStay by Teeco
  Park Detail Page: Full park info with hero image, things to do,
  highlights, seasonal info, and nearby stays section
*/
import { useParams, Link } from 'wouter';
import { ArrowLeft, Star, MapPin, Calendar, Clock, Users, Home, Sun, Thermometer, Mountain, TreePine, Camera, Fish, Tent, Bike, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import { getParkById } from '@/lib/parkData';

const activityIcons: Record<string, React.ReactNode> = {
  'Hiking': <Mountain size={16} />,
  'Camping': <Tent size={16} />,
  'Fishing': <Fish size={16} />,
  'Photography': <Camera size={16} />,
  'Wildlife Watching': <TreePine size={16} />,
  'Mountain Biking': <Bike size={16} />,
  'Scenic Drives': <Sun size={16} />,
};

// Mock nearby stays data
const mockStays = [
  { id: 1, name: 'Mountain View Cabin', type: 'Entire cabin', beds: 3, guests: 6, price: 149, rating: 4.9, reviews: 87, image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=400&auto=format' },
  { id: 2, name: 'Creekside Lodge', type: 'Entire home', beds: 4, guests: 8, price: 199, rating: 4.8, reviews: 124, image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&auto=format' },
  { id: 3, name: 'Pine Ridge Retreat', type: 'Entire cabin', beds: 2, guests: 4, price: 119, rating: 4.7, reviews: 56, image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=400&auto=format' },
  { id: 4, name: 'Trailhead Cottage', type: 'Entire cottage', beds: 2, guests: 5, price: 129, rating: 4.9, reviews: 93, image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&auto=format' },
];

export default function ParkDetail() {
  const params = useParams<{ parkId: string }>();
  const park = getParkById(params.parkId || '');

  if (!park) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-2xl font-semibold text-[#2b2823] mb-2">Park not found</h1>
            <p className="text-[#787060] mb-4">The destination you're looking for doesn't exist.</p>
            <Link href="/explore" className="text-sm text-[#3d5a3e] font-medium no-underline">
              Browse all destinations
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={park.image}
          alt={park.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Back button */}
        <div className="absolute top-4 left-4 z-10">
          <Link href="/explore" className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-sm text-[#2b2823] no-underline hover:bg-white transition-colors shadow-sm">
            <ArrowLeft size={16} /> All Parks
          </Link>
        </div>

        {/* Park info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="container">
            <span className={`trail-badge bg-white/20 backdrop-blur-sm text-white mb-3`}>
              {park.type}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
              {park.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <span className="flex items-center gap-1.5 text-sm">
                <MapPin size={14} /> {park.state}
              </span>
              <span className="flex items-center gap-1.5 text-sm">
                <Star size={14} className="fill-[#c4704b] text-[#c4704b]" /> {park.rating} ({park.reviewCount.toLocaleString()} reviews)
              </span>
              <span className="flex items-center gap-1.5 text-sm">
                <Users size={14} /> {park.visitors}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10">
          {/* Main Content */}
          <div className="space-y-10">
            {/* Description */}
            <section>
              <h2 className="font-serif text-2xl font-semibold text-[#2b2823] mb-4">About {park.name}</h2>
              <p className="text-[#787060] leading-relaxed text-base">{park.description}</p>
            </section>

            {/* Highlights */}
            <section>
              <h2 className="font-serif text-2xl font-semibold text-[#2b2823] mb-4">Top Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {park.highlights.map(h => (
                  <div key={h} className="flex items-center gap-3 bg-white rounded-xl border border-[#e5e3da] p-4">
                    <div className="w-10 h-10 rounded-lg bg-[#3d5a3e]/8 flex items-center justify-center shrink-0">
                      <Star size={18} className="text-[#3d5a3e]" />
                    </div>
                    <span className="text-sm font-medium text-[#2b2823]">{h}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Things to Do */}
            <section>
              <h2 className="font-serif text-2xl font-semibold text-[#2b2823] mb-4">Things to Do</h2>
              <div className="flex flex-wrap gap-3">
                {park.activities.map(a => (
                  <button
                    key={a}
                    onClick={() => toast('Feature coming soon', { description: `Browse ${a} activities at ${park.name}` })}
                    className="flex items-center gap-2 bg-white rounded-xl border border-[#e5e3da] px-4 py-3 hover:border-[#3d5a3e]/30 hover:shadow-sm transition-all"
                  >
                    <span className="text-[#3d5a3e]">
                      {activityIcons[a] || <Mountain size={16} />}
                    </span>
                    <span className="text-sm text-[#2b2823]">{a}</span>
                  </button>
                ))}
              </div>
            </section>

            {/* Nearby Stays */}
            <section>
              <div className="flex items-end justify-between mb-6">
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-[#2b2823]">Stays Near {park.name}</h2>
                  <p className="text-sm text-[#787060] mt-1">{park.staysNearby} vacation rentals within 30 miles</p>
                </div>
                <button
                  onClick={() => toast('Feature coming soon')}
                  className="hidden md:flex items-center gap-1.5 text-sm font-medium text-[#3d5a3e]"
                >
                  View all stays <ArrowRight size={14} />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {mockStays.map(stay => (
                  <button
                    key={stay.id}
                    onClick={() => toast('Feature coming soon', { description: 'Booking will be available soon' })}
                    className="text-left bg-white rounded-xl border border-[#e5e3da] overflow-hidden hover:shadow-md transition-all group"
                  >
                    <div className="h-40 overflow-hidden">
                      <img
                        src={stay.image}
                        alt={stay.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="font-serif text-base font-semibold text-[#2b2823]">{stay.name}</h4>
                        <div className="flex items-center gap-1 shrink-0">
                          <Star size={12} className="fill-[#c4704b] text-[#c4704b]" />
                          <span className="text-xs font-medium text-[#2b2823]">{stay.rating}</span>
                        </div>
                      </div>
                      <p className="text-xs text-[#787060] mb-2">{stay.type} · {stay.beds} beds · Up to {stay.guests} guests</p>
                      <p className="text-sm">
                        <span className="font-semibold text-[#2b2823]">${stay.price}</span>
                        <span className="text-[#787060]"> /night</span>
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <div className="bg-white rounded-xl border border-[#e5e3da] p-6 sticky top-24 shadow-sm">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-serif font-bold text-[#2b2823]">${park.priceFrom}</span>
                <span className="text-sm text-[#787060]">/night avg.</span>
              </div>

              <div className="space-y-3 mb-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="border border-[#e5e3da] rounded-lg p-3">
                    <label className="block text-[10px] font-medium tracking-[0.08em] uppercase text-[#787060]">Check In</label>
                    <input type="date" className="w-full bg-transparent text-sm text-[#2b2823] outline-none mt-1" />
                  </div>
                  <div className="border border-[#e5e3da] rounded-lg p-3">
                    <label className="block text-[10px] font-medium tracking-[0.08em] uppercase text-[#787060]">Check Out</label>
                    <input type="date" className="w-full bg-transparent text-sm text-[#2b2823] outline-none mt-1" />
                  </div>
                </div>
                <div className="border border-[#e5e3da] rounded-lg p-3">
                  <label className="block text-[10px] font-medium tracking-[0.08em] uppercase text-[#787060]">Guests</label>
                  <select className="w-full bg-transparent text-sm text-[#2b2823] outline-none mt-1 appearance-none">
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>5 Guests</option>
                    <option>6+ Guests</option>
                  </select>
                </div>
              </div>

              <button
                onClick={() => toast('Feature coming soon', { description: 'Search for available stays' })}
                className="w-full bg-[#3d5a3e] hover:bg-[#2e4830] text-white rounded-xl py-3 text-sm font-medium transition-colors"
              >
                Search {park.staysNearby} Stays
              </button>

              <p className="text-xs text-center text-[#787060] mt-3">
                You won't be charged yet
              </p>
            </div>

            {/* Quick Info */}
            <div className="bg-white rounded-xl border border-[#e5e3da] p-6">
              <h3 className="font-serif text-lg font-semibold text-[#2b2823] mb-4">Quick Info</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar size={18} className="text-[#3d5a3e] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-[#2b2823]">Best Time to Visit</p>
                    <p className="text-xs text-[#787060]">{park.bestSeason}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Home size={18} className="text-[#3d5a3e] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-[#2b2823]">Stays Nearby</p>
                    <p className="text-xs text-[#787060]">{park.staysNearby} vacation rentals within 30 mi</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users size={18} className="text-[#3d5a3e] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-[#2b2823]">Annual Visitors</p>
                    <p className="text-xs text-[#787060]">{park.visitors}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Thermometer size={18} className="text-[#3d5a3e] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-[#2b2823]">Entrance Fee</p>
                    <p className="text-xs text-[#787060]">$35 per vehicle (7-day pass)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nearby Parks */}
            <div className="bg-white rounded-xl border border-[#e5e3da] p-6">
              <h3 className="font-serif text-lg font-semibold text-[#2b2823] mb-3">Nearby Parks</h3>
              <p className="text-xs text-[#787060] mb-4">Add another park to your road trip</p>
              <div className="space-y-3">
                {['Shenandoah', 'Great Smoky Mountains', 'Mammoth Cave'].filter(n => n !== park.name).slice(0, 2).map(name => (
                  <button
                    key={name}
                    onClick={() => toast('Feature coming soon')}
                    className="w-full text-left flex items-center gap-3 p-2 rounded-lg hover:bg-[#e5e3da]/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#3d5a3e]/8 flex items-center justify-center shrink-0">
                      <Mountain size={16} className="text-[#3d5a3e]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#2b2823]">{name}</p>
                      <p className="text-xs text-[#787060]">National Park</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
