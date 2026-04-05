import { Link } from 'react-router-dom'
import { roadTrips } from '../data/roadTrips'
import { parks } from '../data/parks'

export default function RoadTrips() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-[#e5d5c0] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl text-[#2b2823] mb-2">Curated Road Trips</h1>
          <p className="text-lg text-[#2b2823] mb-4">
            <span className="inline-block px-4 py-1 bg-[#2b2823] text-[#e5e3da] rounded text-sm font-semibold">
              Family Adventures
            </span>
          </p>
          <p className="text-[#787060] text-lg">
            Multi-park itineraries designed for families. We've mapped the routes, found the stays, and listed the must-dos at every stop.
          </p>
        </div>
      </div>

      {/* Road Trips Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          {roadTrips.map((trip) => {
            const tripParks = trip.parkIds.map(id => parks.find(p => p.id === id)).filter(Boolean)
            return (
              <div key={trip.id} className="bg-white rounded-lg overflow-hidden border border-[#d5d2c8] hover:shadow-lg transition">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {/* Image */}
                  <div className="h-64 md:h-80 bg-cover bg-center md:col-span-1" style={{
                    backgroundImage: `url(${trip.image})`,
                  }}></div>

                  {/* Content */}
                  <div className="p-8 md:col-span-2 flex flex-col justify-between">
                    <div>
                      <p className="text-[#787060] text-sm uppercase tracking-wide mb-2">
                        {trip.tag}
                      </p>
                      <h2 className="font-serif text-3xl text-[#2b2823] mb-2">
                        {trip.title}
                      </h2>
                      <p className="text-lg text-[#787060] italic mb-4">
                        "{trip.subtitle}"
                      </p>
                      <p className="text-[#787060] mb-6">
                        {trip.description}
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 py-4 border-t border-b border-[#d5d2c8]">
                        <div>
                          <p className="text-xs uppercase text-[#787060] tracking-wide mb-1">Duration</p>
                          <p className="font-semibold text-[#2b2823]">{trip.duration}</p>
                        </div>
                        <div>
                          <p className="text-xs uppercase text-[#787060] tracking-wide mb-1">Distance</p>
                          <p className="font-semibold text-[#2b2823]">{trip.distance}</p>
                        </div>
                        <div>
                          <p className="text-xs uppercase text-[#787060] tracking-wide mb-1">Parks</p>
                          <p className="font-semibold text-[#2b2823]">{trip.parks}</p>
                        </div>
                        <div>
                          <p className="text-xs uppercase text-[#787060] tracking-wide mb-1">Stays From</p>
                          <p className="font-semibold text-[#2b2823]">${trip.staysFrom}/night</p>
                        </div>
                      </div>

                      <p className="text-[#2b2823] font-semibold mb-4">Route: {trip.route}</p>

                      {/* Parks in Trip */}
                      <div className="mb-6">
                        <p className="text-sm font-semibold text-[#2b2823] mb-3">Parks on This Trip:</p>
                        <div className="flex flex-wrap gap-2">
                          {tripParks.map(park => (
                            <Link
                              key={park.id}
                              to={`/park/${park.id}`}
                              className="px-3 py-1 bg-[#e5d5c0] text-[#2b2823] rounded text-sm hover:bg-[#d5c5b0] transition"
                            >
                              {park.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Link
                      to={`/park/${trip.parkIds[0]}`}
                      className="inline-block px-6 py-3 bg-[#2b2823] text-[#e5e3da] rounded font-semibold hover:bg-[#1a1611] transition w-fit"
                    >
                      View Parks on This Route →
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Build Your Own CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-[#d4b896] to-[#c9a876] rounded-lg p-12 text-center">
          <h2 className="font-serif text-4xl text-[#2b2823] mb-4">Build Your Own Road Trip</h2>
          <p className="text-[#2b2823] mb-6 text-lg max-w-2xl mx-auto">
            Mix and match parks, create custom stops, and plan the perfect itinerary for your group. Use our trip planner to design your adventure.
          </p>
          <Link
            to="/explore"
            className="inline-block px-8 py-3 bg-[#2b2823] text-[#e5e3da] rounded font-semibold hover:bg-[#1a1611] transition"
          >
            Start Planning →
          </Link>
        </div>
      </section>
    </div>
  )
}
