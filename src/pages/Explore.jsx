/*
  DESIGN: Topographic Naturalism — ParkStay by Teeco
  Explore Page: State-filtered park browsing with search, filter chips, and grid
*/
import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Search, X, ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import ParkCard from '../components/ParkCard.jsx';
import { parks, states, getParksForState, searchParks } from '../data/parkData.js';

export default function Explore() {
  const { state: stateFilter = '' } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [showAllStates, setShowAllStates] = useState(false);

  const selectedState = states.find(s => s.code === stateFilter);

  const filteredParks = useMemo(() => {
    let result = stateFilter ? getParksForState(stateFilter) : parks;
    if (searchQuery) {
      result = searchParks(searchQuery).filter(p =>
        !stateFilter || p.stateCode === stateFilter
      );
    }
    if (typeFilter) {
      result = result.filter(p => p.type === typeFilter);
    }
    return result;
  }, [stateFilter, searchQuery, typeFilter]);

  const parkTypeOptions = Array.from(new Set(parks.map(p => p.type)));
  const displayedStates = showAllStates ? states : states.slice(0, 12);

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6]">
      <Navbar />

      {/* Header */}
      <div className="bg-white border-b border-[#e5e3da]">
        <div className="container py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#2b2823] mb-2" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
            {selectedState ? `Parks in ${selectedState.name}` : 'Explore All Destinations'}
          </h1>
          <p className="text-[#787060] max-w-lg">
            {selectedState
              ? `Discover ${selectedState.parkCount} national park destinations in ${selectedState.name} and find your perfect stay.`
              : 'Browse national parks, monuments, forests, and more across the United States.'}
          </p>
        </div>
      </div>

      <div className="container py-8 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
          {/* Sidebar Filters */}
          <aside className="space-y-6">
            <div className="bg-white rounded-xl border border-[#e5e3da] p-4">
              <div className="flex items-center gap-2 border border-[#e5e3da] rounded-lg px-3 py-2">
                <Search size={16} className="text-[#787060] shrink-0" />
                <input
                  type="text"
                  placeholder="Search parks..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-sm text-[#2b2823] placeholder:text-[#a09a8e] outline-none"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="text-[#787060]">
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-[#e5e3da] p-4">
              <h3 className="text-xs font-medium tracking-[0.1em] uppercase text-[#787060] mb-3">Filter by State</h3>
              {stateFilter && (
                <Link
                  to="/explore"
                  className="flex items-center gap-1.5 text-xs text-[#3d5a3e] font-medium mb-3 no-underline"
                >
                  <X size={12} /> Clear state filter
                </Link>
              )}
              <div className="space-y-1">
                {displayedStates.map(s => (
                  <Link
                    key={s.code}
                    to={`/explore/${s.code}`}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm no-underline transition-colors ${
                      stateFilter === s.code
                        ? 'bg-[#3d5a3e] text-white'
                        : 'text-[#2b2823] hover:bg-[#e5e3da]/60'
                    }`}
                  >
                    <span>{s.name}</span>
                    <span className={`text-xs ${stateFilter === s.code ? 'text-white/70' : 'text-[#787060]'}`}>
                      {s.parkCount}
                    </span>
                  </Link>
                ))}
              </div>
              {states.length > 12 && (
                <button
                  onClick={() => setShowAllStates(!showAllStates)}
                  className="flex items-center gap-1 text-xs text-[#3d5a3e] font-medium mt-3"
                >
                  {showAllStates ? 'Show less' : `Show all ${states.length} states`}
                  <ChevronDown size={12} className={showAllStates ? 'rotate-180' : ''} />
                </button>
              )}
            </div>

            <div className="bg-white rounded-xl border border-[#e5e3da] p-4">
              <h3 className="text-xs font-medium tracking-[0.1em] uppercase text-[#787060] mb-3">Park Type</h3>
              <div className="space-y-1">
                <button
                  onClick={() => setTypeFilter('')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    !typeFilter ? 'bg-[#3d5a3e] text-white' : 'text-[#2b2823] hover:bg-[#e5e3da]/60'
                  }`}
                >
                  All Types
                </button>
                {parkTypeOptions.map(type => (
                  <button
                    key={type}
                    onClick={() => setTypeFilter(type === typeFilter ? '' : type)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      typeFilter === type ? 'bg-[#3d5a3e] text-white' : 'text-[#2b2823] hover:bg-[#e5e3da]/60'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Results Grid */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-[#787060]">
                <span className="font-medium text-[#2b2823]">{filteredParks.length}</span> destination{filteredParks.length !== 1 ? 's' : ''} found
              </p>
              {(typeFilter || searchQuery) && (
                <button
                  onClick={() => { setTypeFilter(''); setSearchQuery(''); }}
                  className="text-xs text-[#3d5a3e] font-medium flex items-center gap-1"
                >
                  Clear filters <X size={12} />
                </button>
              )}
            </div>

            {filteredParks.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredParks.map(park => (
                  <ParkCard key={park.id} park={park} size="medium" />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-xl border border-[#e5e3da]">
                <Search size={40} className="text-[#d5d2c8] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#2b2823] mb-2" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>No destinations found</h3>
                <p className="text-sm text-[#787060] mb-4">Try adjusting your filters or search terms.</p>
                <Link to="/explore" className="text-sm text-[#3d5a3e] font-medium no-underline">
                  View all destinations
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
