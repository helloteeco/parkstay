import { Link } from 'react-router-dom'

export default function ParkCard({ park }) {
  return (
    <Link to={`/park/${park.id}`} className="group block">
      <div className="rounded-2xl overflow-hidden bg-white border border-[#d5d2c8] hover:shadow-xl transition-shadow duration-300">
        {/* Image Container */}
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <img
            src={park.image}
            alt={park.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Type Badge - top right */}
          <div className="absolute top-3 right-3 bg-[#2b2823]/90 text-[#e5e3da] px-3 py-1.5 rounded-lg text-xs font-semibold">
            {park.type}
          </div>
          {/* Price Badge - top left */}
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur text-[#2b2823] px-3 py-1.5 rounded-lg text-xs">
            <span className="text-[#787060]">from </span>
            <span className="font-bold text-sm">${park.priceFrom}</span>
            <span className="text-[#787060]">/night</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-serif font-semibold text-[#2b2823] text-lg mb-1">
            {park.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1">
              <span className="text-yellow-400 text-sm">‚òÖ</span>
              <span className="text-sm font-semibold text-[#2b2823]">{park.rating}</span>
            </div>
            <span className="text-sm text-[#787060]">{park.state}</span>
          </div>

          {/* Tagline */}
          <p className="text-sm text-[#787060] italic mb-3">
            "{park.description ? park.description.substring(0, 50) : park.name}"
          </p>

          {/* Stays Count */}
          <p className="text-xs text-[#787060]">
            {park.staysNearby} stays nearby
          </p>
        </div>
      </div>
    </Link>
  )
}
