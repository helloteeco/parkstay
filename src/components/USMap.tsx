/*
  DESIGN: Topographic Naturalism — ParkStay by Teeco
  Interactive US Map for state-based park filtering
  Compact grid-style map with proper US geographic layout
*/
import { useState } from 'react';
import { useLocation } from 'wouter';
import { states } from '@/lib/parkData';

// Compact US state grid — tighter layout that resembles actual US geography
// Grid is 11 cols x 8 rows (plus AK/HI offset)
const stateGrid: { code: string; name: string; row: number; col: number }[] = [
  // Row 0 — top tier
  { code: 'AK', name: 'Alaska', row: 0, col: 0 },
  { code: 'ME', name: 'Maine', row: 0, col: 10 },
  // Row 1
  { code: 'WA', name: 'Washington', row: 1, col: 1 },
  { code: 'MT', name: 'Montana', row: 1, col: 2 },
  { code: 'ND', name: 'North Dakota', row: 1, col: 3 },
  { code: 'MN', name: 'Minnesota', row: 1, col: 4 },
  { code: 'WI', name: 'Wisconsin', row: 1, col: 5 },
  { code: 'MI', name: 'Michigan', row: 1, col: 7 },
  { code: 'VT', name: 'Vermont', row: 1, col: 8 },
  { code: 'NH', name: 'New Hampshire', row: 1, col: 9 },
  // Row 2
  { code: 'OR', name: 'Oregon', row: 2, col: 1 },
  { code: 'ID', name: 'Idaho', row: 2, col: 2 },
  { code: 'WY', name: 'Wyoming', row: 2, col: 3 },
  { code: 'SD', name: 'South Dakota', row: 2, col: 4 },
  { code: 'IA', name: 'Iowa', row: 2, col: 5 },
  { code: 'IL', name: 'Illinois', row: 2, col: 6 },
  { code: 'IN', name: 'Indiana', row: 2, col: 7 },
  { code: 'OH', name: 'Ohio', row: 2, col: 8 },
  { code: 'PA', name: 'Pennsylvania', row: 2, col: 9 },
  { code: 'NY', name: 'New York', row: 2, col: 10 },
  { code: 'MA', name: 'Massachusetts', row: 2, col: 11 },
  // Row 3
  { code: 'CA', name: 'California', row: 3, col: 1 },
  { code: 'NV', name: 'Nevada', row: 3, col: 2 },
  { code: 'UT', name: 'Utah', row: 3, col: 3 },
  { code: 'CO', name: 'Colorado', row: 3, col: 4 },
  { code: 'NE', name: 'Nebraska', row: 3, col: 5 },
  { code: 'MO', name: 'Missouri', row: 3, col: 6 },
  { code: 'KY', name: 'Kentucky', row: 3, col: 7 },
  { code: 'WV', name: 'West Virginia', row: 3, col: 8 },
  { code: 'NJ', name: 'New Jersey', row: 3, col: 9 },
  { code: 'CT', name: 'Connecticut', row: 3, col: 10 },
  { code: 'RI', name: 'Rhode Island', row: 3, col: 11 },
  // Row 4
  { code: 'AZ', name: 'Arizona', row: 4, col: 2 },
  { code: 'NM', name: 'New Mexico', row: 4, col: 3 },
  { code: 'KS', name: 'Kansas', row: 4, col: 4 },
  { code: 'AR', name: 'Arkansas', row: 4, col: 5 },
  { code: 'TN', name: 'Tennessee', row: 4, col: 6 },
  { code: 'VA', name: 'Virginia', row: 4, col: 7 },
  { code: 'NC', name: 'North Carolina', row: 4, col: 8 },
  { code: 'DE', name: 'Delaware', row: 4, col: 9 },
  { code: 'MD', name: 'Maryland', row: 4, col: 10 },
  // Row 5
  { code: 'OK', name: 'Oklahoma', row: 5, col: 3 },
  { code: 'TX', name: 'Texas', row: 5, col: 4 },
  { code: 'LA', name: 'Louisiana', row: 5, col: 5 },
  { code: 'MS', name: 'Mississippi', row: 5, col: 6 },
  { code: 'AL', name: 'Alabama', row: 5, col: 7 },
  { code: 'GA', name: 'Georgia', row: 5, col: 8 },
  { code: 'SC', name: 'South Carolina', row: 5, col: 9 },
  { code: 'DC', name: 'D.C.', row: 5, col: 10 },
  // Row 6
  { code: 'HI', name: 'Hawaii', row: 6, col: 0 },
  { code: 'FL', name: 'Florida', row: 6, col: 8 },
];

export default function USMap() {
  const [, navigate] = useLocation();
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const stateMap = new Map(states.map(s => [s.code, s]));

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        className="grid gap-[3px] sm:gap-1"
        style={{
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridTemplateRows: 'repeat(7, 1fr)',
        }}
      >
        {stateGrid.map(s => {
          const info = stateMap.get(s.code);
          const hasPark = !!info;
          const isHovered = hoveredState === s.code;

          return (
            <button
              key={s.code}
              onClick={() => hasPark ? navigate(`/explore/${s.code}`) : null}
              onMouseEnter={() => setHoveredState(s.code)}
              onMouseLeave={() => setHoveredState(null)}
              className={`
                relative aspect-square rounded-[4px] sm:rounded-md text-[8px] sm:text-[10px] md:text-xs font-medium
                transition-all duration-200 flex items-center justify-center
                ${hasPark
                  ? isHovered
                    ? 'bg-[#3d5a3e] text-white shadow-md scale-110 z-10'
                    : 'bg-[#3d5a3e]/15 text-[#3d5a3e] hover:bg-[#3d5a3e] hover:text-white'
                  : 'bg-[#e5e3da]/60 text-[#a09a8e]'
                }
              `}
              style={{ gridColumn: s.col + 1, gridRow: s.row + 1 }}
              title={`${s.name}${info ? ` — ${info.parkCount} park${info.parkCount > 1 ? 's' : ''}` : ''}`}
            >
              {s.code}
              {isHovered && info && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#2b2823] text-white text-[9px] sm:text-[10px] px-2 py-0.5 rounded whitespace-nowrap z-20 shadow-lg pointer-events-none">
                  {info.parkCount} park{info.parkCount > 1 ? 's' : ''}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
