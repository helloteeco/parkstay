/*
  DESIGN: Topographic Naturalism — ParkStay by Teeco
  SearchBar: Warm cream card with rounded corners, forest green CTA
  Supports destination search + date pickers + guest count
*/
import { useState } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function SearchBar({ variant = 'hero', className = '' }) {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');

  const handleSearch = () => {
    if (destination.trim()) {
      navigate('/explore');
    } else {
      toast('Enter a destination', { description: 'Search by park name, state, or address' });
    }
  };

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2 bg-white rounded-full border border-[#d5d2c8] shadow-sm px-4 py-2 max-w-xl ${className}`}>
        <Search size={16} className="text-[#787060] shrink-0" />
        <input
          type="text"
          placeholder="Search parks, states, or paste an address..."
          value={destination}
          onChange={e => setDestination(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSearch()}
          className="flex-1 bg-transparent text-sm text-[#2b2823] placeholder:text-[#a09a8e] outline-none"
        />
      </div>
    );
  }

  return (
    <div className={`bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-[#d5d2c8]/60 p-2 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto_auto] items-center gap-0">
        {/* Destination */}
        <div className="flex items-center gap-3 px-4 py-3 md:border-r border-[#e5e3da]">
          <MapPin size={18} className="text-[#3d5a3e] shrink-0" />
          <div className="flex-1 min-w-0">
            <label className="block text-[10px] font-medium tracking-[0.08em] uppercase text-[#787060]">Destination</label>
            <input
              type="text"
              placeholder="Park name, state, or address"
              value={destination}
              onChange={e => setDestination(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSearch()}
              className="w-full bg-transparent text-sm text-[#2b2823] placeholder:text-[#a09a8e] outline-none mt-0.5"
            />
          </div>
        </div>

        {/* Check In */}
        <div className="flex items-center gap-3 px-4 py-3 md:border-r border-[#e5e3da]">
          <Calendar size={18} className="text-[#3d5a3e] shrink-0" />
          <div>
            <label className="block text-[10px] font-medium tracking-[0.08em] uppercase text-[#787060]">Check In</label>
            <input
              type="date"
              value={checkIn}
              onChange={e => setCheckIn(e.target.value)}
              className="bg-transparent text-sm text-[#2b2823] outline-none mt-0.5"
            />
          </div>
        </div>

        {/* Check Out */}
        <div className="flex items-center gap-3 px-4 py-3 md:border-r border-[#e5e3da]">
          <Calendar size={18} className="text-[#3d5a3e] shrink-0" />
          <div>
            <label className="block text-[10px] font-medium tracking-[0.08em] uppercase text-[#787060]">Check Out</label>
            <input
              type="date"
              value={checkOut}
              onChange={e => setCheckOut(e.target.value)}
              className="bg-transparent text-sm text-[#2b2823] outline-none mt-0.5"
            />
          </div>
        </div>

        {/* Guests */}
        <div className="flex items-center gap-3 px-4 py-3">
          <Users size={18} className="text-[#3d5a3e] shrink-0" />
          <div>
            <label className="block text-[10px] font-medium tracking-[0.08em] uppercase text-[#787060]">Guests</label>
            <select
              value={guests}
              onChange={e => setGuests(e.target.value)}
              className="bg-transparent text-sm text-[#2b2823] outline-none mt-0.5 appearance-none pr-4"
            >
              <option value="">Add guests</option>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
              <option value="6">6+ Guests</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div className="px-2 py-2">
          <button
            onClick={handleSearch}
            className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#3d5a3e] hover:bg-[#2e4830] text-white rounded-xl px-6 py-3 transition-colors text-sm font-medium"
          >
            <Search size={16} />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
}
