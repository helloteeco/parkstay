/*
  DESIGN: Topographic Naturalism — ParkStay by Teeco
  ParkCard: Rounded corners, warm shadows, hover lift effect
  Shows park image, type badge, name, state, rating, and Notify Me button
*/
import { useState } from 'react';
import { Link } from 'wouter';
import { Star, MapPin, Bell } from 'lucide-react';
import type { Park } from '@/lib/parkData';
import WaitlistModal from './WaitlistModal';

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
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <>
      <div className="group block">
        <div className="bg-white rounded-xl overflow-hidden border border-[#e5e3da] shadow-sm hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
          {/* Image — links to park detail */}
          <Link href={`/park/${park.id}`} className="block no-underline">
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
            </div>
          </Link>

          {/* Content */}
          <div className="p-4">
            <Link href={`/park/${park.id}`} className="block no-underline">
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
            </Link>

            {/* Notify Me Button */}
            <div className="pt-3 border-t border-[#e5e3da]">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowWaitlist(true);
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#3d5a3e]/8 hover:bg-[#3d5a3e] text-[#3d5a3e] hover:text-white rounded-lg px-3 py-2 text-xs font-medium transition-all duration-200"
              >
                <Bell size={13} />
                <span>Notify Me When Stays Go Live</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <WaitlistModal
        isOpen={showWaitlist}
        onClose={() => setShowWaitlist(false)}
        parkName={park.name}
        source="park_card"
      />
    </>
  );
}
