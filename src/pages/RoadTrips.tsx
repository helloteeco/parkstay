/*
  DESIGN: Topographic Naturalism — ParkStay by Teeco
  Road Trips Page: Curated multi-park itineraries for families
*/
import { Link } from 'wouter';
import { ArrowRight, Clock, MapPin, Car, Users, Star, Calendar } from 'lucide-react';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FAMILY_IMAGE } from '@/lib/parkData';

interface RoadTrip {
  id: string;
  name: string;
  tagline: string;
  duration: string;
  parks: string[];
  states: string[];
  distance: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  bestFor: string;
  description: string;
  image: string;
  priceFrom: number;
}

const roadTrips: RoadTrip[] = [
  {
    id: 'appalachian-adventure',
    name: 'Appalachian Family Adventure',
    tagline: 'Mountains, Caves & Gorges',
    duration: '7-10 days',
    parks: ['Great Smoky Mountains', 'Shenandoah', 'New River Gorge', 'Mammoth Cave'],
    states: ['Tennessee', 'Virginia', 'West Virginia', 'Kentucky'],
    distance: '1,200 miles',
    difficulty: 'Easy',
    bestFor: 'Families with kids 5+',
    description: 'The ultimate East Coast family road trip. Start in the misty Smokies, drive the scenic Blue Ridge Parkway to Shenandoah, explore the newest national park at New River Gorge, and finish underground at Mammoth Cave. Every stop is a new adventure.',
    image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&auto=format',
    priceFrom: 99,
  },
  {
    id: 'western-wonders',
    name: 'Western National Parks Loop',
    tagline: 'Geysers, Canyons & Red Rocks',
    duration: '10-14 days',
    parks: ['Yellowstone', 'Grand Teton', 'Zion', 'Grand Canyon'],
    states: ['Wyoming', 'Utah', 'Arizona'],
    distance: '2,400 miles',
    difficulty: 'Moderate',
    bestFor: 'Adventurous families',
    description: 'The classic Western road trip that every family should take at least once. Watch Old Faithful erupt, gaze at the Grand Tetons, hike the Narrows in Zion, and stand on the rim of the Grand Canyon. This is bucket-list territory.',
    image: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=800&auto=format',
    priceFrom: 129,
  },
  {
    id: 'pacific-coast',
    name: 'Pacific Coast Discovery',
    tagline: 'Rainforests, Volcanoes & Giant Trees',
    duration: '7-10 days',
    parks: ['Olympic', 'Crater Lake', 'Yosemite', 'Redwood'],
    states: ['Washington', 'Oregon', 'California'],
    distance: '1,800 miles',
    difficulty: 'Moderate',
    bestFor: 'Nature-loving families',
    description: 'Drive the stunning Pacific Coast from Washington\'s temperate rainforests through Oregon\'s volcanic landscapes to California\'s towering sequoias and Yosemite\'s granite cliffs. Every mile brings a completely different ecosystem.',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&auto=format',
    priceFrom: 149,
  },
  {
    id: 'colorado-rockies',
    name: 'Colorado Rockies Explorer',
    tagline: 'Peaks, Passes & Alpine Lakes',
    duration: '5-7 days',
    parks: ['Rocky Mountain', 'Black Canyon of the Gunnison', 'Great Sand Dunes', 'Mesa Verde'],
    states: ['Colorado'],
    distance: '900 miles',
    difficulty: 'Easy',
    bestFor: 'First-time park families',
    description: 'A compact but spectacular loop through Colorado\'s diverse national parks. Drive Trail Ridge Road above 12,000 feet, peer into the Black Canyon, play on massive sand dunes, and explore ancient cliff dwellings. All within one state.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format',
    priceFrom: 119,
  },
];

export default function RoadTrips() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[45vh] md:h-[55vh] overflow-hidden">
        <img
          src={FAMILY_IMAGE}
          alt="Family hiking"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="container">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-white/70 mb-3">Family Adventures</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3">
              Curated Road Trips
            </h1>
            <p className="text-base text-white/85 font-light max-w-lg">
              Multi-park itineraries designed for families. We've mapped the routes, 
              found the stays, and listed the must-dos at every stop.
            </p>
          </div>
        </div>
      </section>

      {/* Trip Cards */}
      <section className="py-12 md:py-16 topo-pattern">
        <div className="container">
          <div className="space-y-8">
            {roadTrips.map((trip, i) => (
              <div
                key={trip.id}
                className="bg-white rounded-2xl border border-[#e5e3da] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-[400px_1fr] ${i % 2 === 1 ? 'lg:grid-cols-[1fr_400px]' : ''}`}>
                  {/* Image */}
                  <div className={`h-64 lg:h-auto ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={trip.image}
                      alt={trip.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="trail-badge bg-[#3d5a3e]/10 text-[#3d5a3e]">{trip.difficulty}</span>
                      <span className="trail-badge bg-[#c4704b]/10 text-[#c4704b]">{trip.bestFor}</span>
                    </div>

                    <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#2b2823] mb-1">
                      {trip.name}
                    </h2>
                    <p className="text-sm italic text-[#787060] mb-4">"{trip.tagline}"</p>

                    <p className="text-[#787060] leading-relaxed mb-5 text-sm">
                      {trip.description}
                    </p>

                    {/* Trip Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-[#3d5a3e]" />
                        <div>
                          <p className="text-xs text-[#787060]">Duration</p>
                          <p className="text-sm font-medium text-[#2b2823]">{trip.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Car size={16} className="text-[#3d5a3e]" />
                        <div>
                          <p className="text-xs text-[#787060]">Distance</p>
                          <p className="text-sm font-medium text-[#2b2823]">{trip.distance}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-[#3d5a3e]" />
                        <div>
                          <p className="text-xs text-[#787060]">Parks</p>
                          <p className="text-sm font-medium text-[#2b2823]">{trip.parks.length} stops</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star size={16} className="text-[#c4704b]" />
                        <div>
                          <p className="text-xs text-[#787060]">Stays from</p>
                          <p className="text-sm font-medium text-[#2b2823]">${trip.priceFrom}/night</p>
                        </div>
                      </div>
                    </div>

                    {/* Park stops */}
                    <div className="mb-6">
                      <p className="text-xs font-medium tracking-[0.1em] uppercase text-[#787060] mb-2">Route</p>
                      <div className="flex flex-wrap items-center gap-2">
                        {trip.parks.map((park, j) => (
                          <span key={park} className="flex items-center gap-2">
                            <span className="text-sm text-[#2b2823] font-medium">{park}</span>
                            {j < trip.parks.length - 1 && (
                              <ArrowRight size={12} className="text-[#d5d2c8]" />
                            )}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-[#787060] mt-1">
                        {trip.states.join(' → ')}
                      </p>
                    </div>

                    <button
                      onClick={() => toast('Feature coming soon', { description: `View the full ${trip.name} itinerary` })}
                      className="self-start inline-flex items-center gap-2 bg-[#3d5a3e] hover:bg-[#2e4830] text-white rounded-xl px-6 py-3 text-sm font-medium transition-colors"
                    >
                      View Full Itinerary <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Build Your Own CTA */}
      <section className="py-16 md:py-20 bg-[#2b2823] text-[#e5e3da]">
        <div className="container text-center">
          <Calendar size={32} className="text-[#7a8c6e] mx-auto mb-4" />
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            Build Your Own Road Trip
          </h2>
          <p className="text-[#a09a8e] max-w-lg mx-auto mb-8 leading-relaxed">
            Don't see the perfect itinerary? Use our trip planner to create a custom route 
            connecting any combination of national parks, with stays along the way.
          </p>
          <button
            onClick={() => toast('Feature coming soon', { description: 'Custom trip planner will be available soon' })}
            className="inline-flex items-center gap-2 bg-[#3d5a3e] hover:bg-[#2e4830] text-white rounded-xl px-8 py-3.5 text-sm font-medium transition-colors"
          >
            Start Planning <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
