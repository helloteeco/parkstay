import { Link } from 'react-router-dom'

export default function ParkCard({ park }) {
  const renderStars = (rating) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}>
            ★
          </span>
        ))}
      </div>
    )
  }

  return (
    <Link to={`/park/${park.id}`}>
      <div className="rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Image Container */}
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-200">
          <img
            src={park.image}
            alt={park.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          {/* Type Badge */}
          <div className="absolute top-3 right-3 bg-[#2b2823]/90 text-[#e5e3da] px-3 py-1 rounded text-xs font-semibold">
            {park.type}
          </div>
          {/* Price Badge */}
          <div className="absolute bottom-3 left-3 bg-[#e5e3da]/95 text-[#2b2823] px-3 py-1 rounded text-xs font-semibold">
            from ${park.priceFrom}/night
          </div>
        </div>

        {/* Content */}
        <div className="p-4 bg-white">
          <h3 className="font-serif font-semibold text-[#2b2823] text-lg mb-2">
            {park.name}
          </h3>
          <p className="text-sm text-[#787060] mb-3">{park.state}</p>

          {/* Rating & Reviews */}
          <div className="flex items-center gap-2 mb-3">
            {renderStars(park.rating)}
            <span className="text-xs text-[#787060]">
              {park.rating} ({park.reviews} reviews)
            </span>
          </div>

          {/* Stays Count */}
          <p className="text-xs text-[#787060]">
            {park.staysNearby} stays nearby
          </p>
        </div>
      </div>
    </Link>
  )
}
