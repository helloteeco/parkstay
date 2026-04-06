/*
  DESIGN: Topographic Naturalism — ParkStay by Teeco
  Interactive US Map for state-based park filtering
*/
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { states } from '../data/parkData.js';

const stateGrid = [
  { code: 'AK', name: 'Alaska', row: 0, col: 0 },
  { code: 'HI', name: 'Hawaii', row: 7, col: 0 },
  { code: 'WA', name: 'Washington', row: 0, col: 9 },
  { code: 'OR', name: 'Oregon', row: 1, col: 9 },
  { code: 'CA', name: 'California', row: 2, col: 9 },
  { code: 'NV', name: 'Nevada', row: 2, col: 10 },
  { code: 'ID', name: 'Idaho', row: 1, col: 10 },
  { code: 'MT', name: 'Montana', row: 0, col: 10 },
  { code: 'WY', name: 'Wyoming', row: 1, col: 11 },
  { code: 'UT', name: 'Utah', row: 2, col: 11 },
  { code: 'CO', name: 'Colorado', row: 3, col: 11 },
  { code: 'AZ', name: 'Arizona', row: 3, col: 10 },
  { code: 'NM', name: 'New Mexico', row: 4, col: 10 },
  { code: 'ND', name: 'North Dakota', row: 0, col: 11 },
  { code: 'SD', name: 'South Dakota', row: 1, col: 12 },
  { code: 'NE', name: 'Nebraska', row: 2, col: 12 },
  { code: 'KS', name: 'Kansas', row: 3, col: 12 },
  { code: 'OK', name: 'Oklahoma', row: 4, col: 11 },
  { code: 'TX', name: 'Texas', row: 5, col: 10 },
  { code: 'MN', name: 'Minnesota', row: 0, col: 12 },
  { code: 'IA', name: 'Iowa', row: 2, col: 13 },
  { code: 'MO', name: 'Missouri', row: 3, col: 13 },
  { code: 'AR', name: 'Arkansas', row: 4, col: 12 },
  { code: 'LA', name: 'Louisiana', row: 5, col: 11 },
  { code: 'WI', name: 'Wisconsin', row: 1, col: 13 },
  { code: 'IL', name: 'Illinois', row: 2, col: 14 },
  { code: 'MS', name: 'Mississippi', row: 5, col: 12 },
  { code: 'MI', name: 'Michigan', row: 1, col: 14 },
  { code: 'IN', name: 'Indiana', row: 2, col: 15 },
  { code: 'OH', name: 'Ohio', row: 2, col: 16 },
  { code: 'KY', name: 'Kentucky', row: 3, col: 15 },
  { code: 'TN', name: 'Tennessee', row: 3, col: 14 },
  { code: 'AL', name: 'Alabama', row: 4, col: 13 },
  { code: 'GA', name: 'Georgia', row: 4, col: 14 },
  { code: 'FL', name: 'Florida', row: 5, col: 14 },
  { code: 'SC', name: 'South Carolina', row: 4, col: 15 },
  { code: 'NC', name: 'North Carolina', row: 3, col: 16 },
  { code: 'VA', name: 'Virginia', row: 3, col: 17 },
  { code: 'WV', name: 'West Virginia', row: 2, col: 17 },
  { code: 'PA', name: 'Pennsylvania', row: 1, col: 17 },
  { code: 'NY', name: 'New York', row: 1, col: 18 },
  { code: 'NJ', name: 'New Jersey', row: 2, col: 18 },
  { code: 'DE', name: 'Delaware', row: 3, col: 18 },
  { code: 'MD', name: 'Maryland', row: 4, col: 17 },
  { code: 'DC', name: 'D.C.', row: 4, col: 18 },
  { code: 'CT', name: 'Connecticut', row: 1, col: 19 },
  { code: 'RI', name: 'Rhode Island', row: 2, col: 19 },
  { code: 'MA', name: 'Massachusetts', row: 1, col: 20 },
  { code: 'VT', name: 'Vermont', row: 0, col: 19 },
  { code: 'NH', name: 'New Hampshire', row: 0, col: 20 },
  { code: 'ME', name: 'Maine', row: 0, col: 21 },
];

export default function USMap() {
  const navigate = useNavigate();
  const [hoveredState, setHoveredState] = useState(null);

  const stateMap = new Map(states.map(s => [s.code, s]));

  return (
    <div className="w-full">
      <div className="grid gap-1" style={{ gridTemplateColumns: 'repeat(22, 1fr)', gridTemplateRows: 'repeat(8, 1fr)' }}>
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
                relative aspect-square rounded-md text-[9px] sm:text-[10px] md:text-xs font-medium
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
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#2b2823] text-white text-[10px] px-2 py-1 rounded whitespace-nowrap z-20 shadow-lg">
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
