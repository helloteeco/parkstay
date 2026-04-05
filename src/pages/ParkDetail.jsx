import { useParams, Link } from 'react-router-dom'
import { parks } from '../data/parks'

export default function ParkDetail() {
  const { parkId } = useParams()
  const park = parks.find(p => p.id === parkId)

  if (!park) {
    return (
      <div className="text-center py-20">
        <h1 className="font-serif text-4xl text-[#2b2823] mb-4">Park Not Found</h1>
        <Link to="/explore" className="text-[#2b2823] hover:underline">Back to Explore</Link>
      </div>
    )
  }

  const nearbyParks = parks.filter(p => park.nearbyParks.includes(p.id))

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-96 bg-cover bg-center" style={{
        backgroundImage: `url(${park.image})`,
      }}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex flex-col justify-between p-8">
          <div>
            <p className="text-[#e5e3da] text-sm mb-2">
              <Link to="/explore" className="hover:underline">All Parks</Link> / {park.type}
            </p>
          </div>
          <div>
            <h1 className="font-serif text-5xl text-white font-bold mb-2">{park.name}</h1>
            <div className="flex items-center gap-4 text-white">
              <span className="text-lg font-semibold">{park.state}</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(park.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm">{park.rating}</span>
              <span className="text-sm">Visitors: {park.visitors}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2">
            {/* About Section */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl text-[#2b2823] mb-4">About {park.name}</h2>
              <p className="text-[#787060] leading-relaxed mb-6">{park.description}</p>
            </section>

            {/* Highlights */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl text-[#2b2823] mb-6">Top Highlights</h2>
              <div className="grid grid-cols-2 gap-4">
                {park.highlights.map((highlight, idx) => (
                  <div key={idx} className="bg-white p-4 rounded border border-[#d5d2c8]">
                    <p className="font-semibold text-[#2b2823]">{highlight}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Activities */}
            <section className="mb-12">
              <h2 className="font-serif text-3xl text-[#2b2823] mb-4">Things to Do</h2>
              <div className="flex flex-wrap gap-2">
                {park.activities.map((activity, idx) => (
                  <span key={idx} className="px-4 py-2 bg-[#f5f5f5] text-[#2b2823] rounded-full text-sm">
                    {activity}
                  </span>
                ))}
              </div>
            </section>

            {/* Stays Section */}
            <section>
              <h2 className="font-serif text-3xl text-[#2b2823] mb-6">Stays Near {park.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {park.stays.map((stay, idx) => (
                  <div key={idx} className="bg-white rounded-lg overflow-hidden border border-[#d5d2c8] hover:shadow-lg transition">
                    <div className="w-full h-48 bg-cover bg-center" style={{
                      backgroundImage: `url(${stay.image})`,
                    }}></div>
                    <div className="p-4">
                      <h3 className="font-semibold text-[#2b2823] mb-2">{stay.name}</h3>
                      <p className="text-sm text-[#787060] mb-3">{stay.type}</p>
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-sm text-[#787060]">
                          <p>{stay.beds} beds • {stay.guests} guests</p>
                        </div>
                        <p className="font-bold text-[#2b2823]">${stay.price}/night</p>
                      </div>
                      <button className="w-full px-4 py-2 bg-[#2b2823] text-[#e5e3da] rounded font-semibold hover:bg-[#1a1611] transition text-sm">
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Info Card */}
            <div className="bg-[#e5d5c0] p-6 rounded-lg border border-[#d5d2c8] sticky top-20 mb-8">
              <h3 className="font-serif text-lg text-[#2b2823] mb-4">Quick Info</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase text-[#787060] tracking-wide mb-1">Best Time to Visit</p>
                  <p className="font-semibold text-[#2b2823]">{park.bestTime}</p>
                </div>
                <div>
                  <p className="text-xs uppercase text-[#787060] tracking-wide mb-1">Stays Nearby</p>
                  <p className="font-semibold text-[#2b2823]">{park.staysNearby}</p>
                </div>
                <div>
                  <p className="text-xs uppercase text-[#787060] tracking-wide mb-1">Annual Visitors</p>
                  <p className="font-semibold text-[#2b2823]">{park.visitors}</p>
                </div>
                <div>
                  <p className="text-xs uppercase text-[#787060] tracking-wide mb-1">Entrance Fee</p>
                  <p className="font-semibold text-[#2b2823]">{park.entranceFee}</p>
                </div>
              </div>
            </div>

            {/* Nearby Parks */}
            {nearbyParks.length > 0 && (
              <div className="bg-white p-6 rounded-lg border border-[#d5d2c8]">
                <h3 className="font-serif text-lg text-[#2b2823] mb-4">Nearby Parks</h3>
                <div className="space-y-2">
                  {nearbyParks.map(nearbyPark => (
                    <Link
                      key={nearbyPark.id}
                      to={`/park/${nearbyPark.id}`}
                      className="block p-3 bg-[#f5f5f5] rounded hover:bg-[#e5e5e5] transition text-sm text-[#2b2823] font-semibold"
                    >
                      {nearbyPark.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
