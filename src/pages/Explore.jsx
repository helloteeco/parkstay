import { useState, useMemo } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import ParkCard from '../components/ParkCard'
import { parks } from '../data/parks'

export default function Explore() {
  const { state } = useParams()
  const [searchParams] = useSearchParams()
  const [selectedState, setSelectedState] = useState(state || '')
  const [selectedType, setSelectedType] = useState('')
  const searchQuery = searchParams.get('q') || ''

  // Get unique states and types
  const states = useMemo(() => {
    const uniqueStates = [...new Set(parks.map(p => p.state))].sort()
    return uniqueStates
  }, [])

  const types = useMemo(() => {
    const uniqueTypes = [...new Set(parks.map(p => p.type))].sort()
    return ['All Types', ...uniqueTypes]
  }, [])

  // Filter parks
  const filteredParks = useMemo(() => {
    return parks.filter(park => {
      const matchesState = !selectedState || park.state === selectedState
      const matchesType = !selectedType || selectedType === 'All Types' || park.type === selectedType
      const matchesSearch = !searchQuery ||
        park.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        park.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        park.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesState && matchesType && matchesSearch
    })
  }, [selectedState, selectedType, searchQuery])

  return (
    <div className="w-full">
      {/* Hero */}
      <div className="bg-[#e5d5c0] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl text-[#2b2823] mb-2">Explore All Destinations</h1>
          <p className="text-[#787060]">Discover your perfect national park adventure</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg border border-[#d5d2c8] sticky top-20">
              <h3 className="font-serif text-lg text-[#2b2823] mb-4">Filters</h3>

              {/* State Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-[#2b2823] mb-2">State</label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full px-3 py-2 border border-[#d5d2c8] rounded text-sm text-[#2b2823] focus:outline-none focus:ring-2 focus:ring-[#2b2823]"
                >
                  <option value="">All States</option>
                  {states.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Park Type Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-[#2b2823] mb-2">Park Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-3 py-2 border border-[#d5d2c8] rounded text-sm text-[#2b2823] focus:outline-none focus:ring-2 focus:ring-[#2b2823]"
                >
                  {types.map(t => (
                    <option key={t} value={t === 'All Types' ? '' : t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Reset Filters */}
              <button
                onClick={() => {
                  setSelectedState('')
                  setSelectedType('')
                }}
                className="w-full px-4 py-2 border border-[#d5d2c8] text-[#2b2823] rounded font-semibold hover:bg-[#f5f5f5] transition text-sm"
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Parks Grid */}
          <div className="lg:col-span-3">
            {filteredParks.length > 0 ? (
              <>
                <p className="text-[#787060] text-sm mb-6">
                  Showing {filteredParks.length} of {parks.length} parks
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredParks.map(park => (
                    <ParkCard key={park.id} park={park} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-[#787060] text-lg">No parks found matching your filters.</p>
                <button
                  onClick={() => {
                    setSelectedState('')
                    setSelectedType('')
                  }}
                  className="mt-4 px-6 py-2 bg-[#2b2823] text-[#e5e3da] rounded font-semibold hover:bg-[#1a1611] transition"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
