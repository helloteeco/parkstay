/*
  DESIGN: Topographic Naturalism — ParkStay by Teeco
  Interactive US Map using real SVG geography from react-simple-maps
  States with parks are highlighted in green and clickable
*/
import { useState, useMemo } from 'react';
import { useLocation } from 'wouter';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { states } from '@/lib/parkData';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

// FIPS code to state abbreviation mapping
const FIPS_TO_STATE: Record<string, string> = {
  '01': 'AL', '02': 'AK', '04': 'AZ', '05': 'AR', '06': 'CA',
  '08': 'CO', '09': 'CT', '10': 'DE', '11': 'DC', '12': 'FL',
  '13': 'GA', '15': 'HI', '16': 'ID', '17': 'IL', '18': 'IN',
  '19': 'IA', '20': 'KS', '21': 'KY', '22': 'LA', '23': 'ME',
  '24': 'MD', '25': 'MA', '26': 'MI', '27': 'MN', '28': 'MS',
  '29': 'MO', '30': 'MT', '31': 'NE', '32': 'NV', '33': 'NH',
  '34': 'NJ', '35': 'NM', '36': 'NY', '37': 'NC', '38': 'ND',
  '39': 'OH', '40': 'OK', '41': 'OR', '42': 'PA', '44': 'RI',
  '45': 'SC', '46': 'SD', '47': 'TN', '48': 'TX', '49': 'UT',
  '50': 'VT', '51': 'VA', '53': 'WA', '54': 'WV', '55': 'WI',
  '56': 'WY',
};

export default function USMap() {
  const [, navigate] = useLocation();
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [tooltipContent, setTooltipContent] = useState('');
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const stateMap = useMemo(() => new Map(states.map(s => [s.code, s])), []);

  const handleClick = (stateCode: string) => {
    if (stateMap.has(stateCode)) {
      navigate(`/explore/${stateCode}`);
    }
  };

  return (
    <div className="w-full relative">
      {/* Tooltip */}
      {hoveredState && tooltipContent && (
        <div
          className="absolute z-20 bg-[#2b2823] text-white text-xs px-3 py-1.5 rounded-lg shadow-lg pointer-events-none whitespace-nowrap"
          style={{
            left: tooltipPos.x,
            top: tooltipPos.y - 40,
            transform: 'translateX(-50%)',
          }}
        >
          {tooltipContent}
        </div>
      )}

      <ComposableMap
        projection="geoAlbersUsa"
        projectionConfig={{ scale: 1000 }}
        width={800}
        height={500}
        style={{ width: '100%', height: 'auto' }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const fips = geo.id;
              const stateCode = FIPS_TO_STATE[fips] || '';
              const info = stateMap.get(stateCode);
              const hasPark = !!info;
              const isHovered = hoveredState === stateCode;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => handleClick(stateCode)}
                  onMouseEnter={(e) => {
                    setHoveredState(stateCode);
                    const stateName = geo.properties.name || stateCode;
                    if (info) {
                      setTooltipContent(`${stateName} — ${info.parkCount} park${info.parkCount > 1 ? 's' : ''}`);
                    } else {
                      setTooltipContent(stateName);
                    }
                    // Get position relative to the map container
                    const rect = (e.target as SVGElement).closest('svg')?.getBoundingClientRect();
                    if (rect) {
                      setTooltipPos({
                        x: e.clientX - rect.left,
                        y: e.clientY - rect.top,
                      });
                    }
                  }}
                  onMouseMove={(e) => {
                    const rect = (e.target as SVGElement).closest('svg')?.getBoundingClientRect();
                    if (rect) {
                      setTooltipPos({
                        x: e.clientX - rect.left,
                        y: e.clientY - rect.top,
                      });
                    }
                  }}
                  onMouseLeave={() => {
                    setHoveredState(null);
                    setTooltipContent('');
                  }}
                  style={{
                    default: {
                      fill: hasPark ? '#3d5a3e' : '#e5e3da',
                      stroke: '#ffffff',
                      strokeWidth: 0.75,
                      outline: 'none',
                      cursor: hasPark ? 'pointer' : 'default',
                      transition: 'fill 0.2s ease',
                    },
                    hover: {
                      fill: hasPark ? '#2e4830' : '#d5d2c8',
                      stroke: '#ffffff',
                      strokeWidth: 0.75,
                      outline: 'none',
                      cursor: hasPark ? 'pointer' : 'default',
                    },
                    pressed: {
                      fill: hasPark ? '#1e3520' : '#d5d2c8',
                      stroke: '#ffffff',
                      strokeWidth: 0.75,
                      outline: 'none',
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-2 text-xs text-[#787060]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-[#3d5a3e]" />
          <span>Parks with stays coming soon</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-[#e5e3da]" />
          <span>Coming later</span>
        </div>
      </div>
    </div>
  );
}
