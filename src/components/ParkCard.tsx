/*
  DESIGN: Topographic Naturalism — ParkStay by Teeco
  ParkCard: Rounded corners, warm shadows, hover lift effect
  Shows park image, type badge, name, state, rating, stays nearby
*/
import { Link } from 'wouter';
import { Star, MapPin, Home } from 'lucide-react';
import type { Park } from '@/lib/parkData';

interface ParkCardProps {
  park: Park;
  size?: 'large' | 'medium' | 'small';
}

const typeColors: Record<string, string> = {
  'National Park': 'bg-[#3d5a3e]/90 text-white',
  'National Monument': 'bg-[#787060]/90 text-white',
  'National Forest': 'bg-[#7a8c6e]/90 text-white',
  'National Seashore': 'bg-[#5a7a8c]/90 text-white',
  'National Cave': 'bg-[#8c6e5a]/90 text-white',
  'National River': 'bg-[#5a6e8c]/90 text-white',
};

export default function ParkCard({ park, size = 'medium' }: ParkCardProps) {
  const imageHeight = size === 'large' ? 'h-72 md:h-96' : size === 'medium' ? 'h-52 md:h-64' : 'h-44';

  return (
    <Link href={`/park/${park.id}`} className="group block no-underline">
      <div className="bg-white rounded-xl overflow-hidden border border-[#e5e3da] shadow-sm hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
        {/* Image */}
        <div className={`relative ${imageHeight} overflow-hidden`}>
          <img
            src={park.image}
            alt={park.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          {/* Type Badge */}
          <div className="absolute top-3 left-3">
            <span className={`trail-badge ${typeColors[park.type] || 'bg-[#787060]/90 text-white'}`}>
              {park.type}
            </span>
          </div>
          {/* Price */}
          <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-sm">
            <span className="text-xs text-[#787060]">from </span>
            <span className="text-sm font-semibold text-[#2b2823]">${park.priceFrom}</span>
            <span className="text-xs text-[#787060]">/night</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="font-serif text-lg font-semibold text-[#2b2823] group-hover:text-[#3d5a3e] transition-colors leading-tight">
              {park.name}
            </h3>
            <div className="flex items-center gap-1 shrink-0">
              <Star size={14} className="fill-[#c4704b] text-[#c4704b]" />
              <span className="text-sm font-medium text-[#2b2823]">{park.rating}</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 mb-3">
            <MapPin size={13} className="text-[#787060]" />
            <span className="text-sm text-[#787060]">{park.state}</span>
          </div>

          {park.tagline && size !== 'small' && (
            <p className="text-sm text-[#787060] mb-3 italic leading-relaxed">"{park.tagline}"</p>
          )}

          <div className="flex items-center gap-1.5 pt-3 border-t border-[#e5e3da]">
            <Home size={13} className="text-[#3d5a3e]" />
            <span className="text-xs font-medium text-[#3d5a3e]">{park.staysNearby} stays nearby</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
