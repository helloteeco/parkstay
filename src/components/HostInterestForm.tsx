/*
  HostInterestForm: Full-page form for property owners to express interest.
  Includes fee comparison table (ParkStay vs Airbnb vs VRBO) and form fields.
  Saves to host_waitlist via tRPC.
*/
import { useState } from 'react';
import { ArrowRight, CheckCircle2, Mountain, DollarSign, Shield, Users } from 'lucide-react';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';
import Navbar from './Navbar';
import Footer from './Footer';

const US_STATES = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
  'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC',
  'SD','TN','TX','UT','VT','VA','WA','WV','WI','WY','DC'
];

export default function HostInterestForm() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [propertyCity, setPropertyCity] = useState('');
  const [propertyState, setPropertyState] = useState('');
  const [nearestPark, setNearestPark] = useState('');
  const [numProperties, setNumProperties] = useState('');
  const [currentPlatforms, setCurrentPlatforms] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const joinHost = trpc.waitlist.joinHost.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    onError: (err) => {
      toast.error('Something went wrong', { description: err.message });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName || !propertyCity || !propertyState || !numProperties) {
      toast.error('Please fill in all required fields');
      return;
    }
    joinHost.mutate({
      email: email.trim(),
      firstName: firstName.trim(),
      propertyCity: propertyCity.trim(),
      propertyState,
      nearestPark: nearestPark.trim() || undefined,
      numProperties,
      currentPlatforms: currentPlatforms.trim() || undefined,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6]">
      <Navbar />

      {submitted ? (
        /* Success State */
        <div className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="text-center max-w-md">
            <CheckCircle2 size={56} className="text-[#3d5a3e] mx-auto mb-6" />
            <h1 className="font-serif text-3xl font-semibold text-[#2b2823] mb-3">
              You're on the Host Waitlist!
            </h1>
            <p className="text-[#787060] leading-relaxed mb-6">
              We'll reach out soon with next steps to get your property listed on ParkStay.
              In the meantime, explore the parks near your property.
            </p>
            <a
              href="/explore"
              className="inline-flex items-center gap-2 bg-[#3d5a3e] hover:bg-[#2e4830] text-white rounded-xl px-6 py-3 text-sm font-medium transition-colors no-underline"
            >
              Explore Parks <ArrowRight size={16} />
            </a>
          </div>
        </div>
      ) : (
        <div className="flex-1">
          {/* Hero */}
          <section className="bg-[#3d5a3e] text-white py-16 md:py-20">
            <div className="container text-center max-w-3xl">
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/60 mb-3">For Property Owners</p>
              <h1 className="font-serif text-3xl md:text-5xl font-semibold mb-4 leading-tight">
                Own a Vacation Home Near a Park?
                <br />
                <span className="text-[#c8dcc0]">List It Here on ParkStay.</span>
              </h1>
              <p className="text-white/80 leading-relaxed max-w-xl mx-auto">
                Reach travelers who are already excited about your area. Lower fees, better guests, 
                and a platform built specifically for park-adjacent properties.
              </p>
            </div>
          </section>

          {/* Fee Comparison */}
          <section className="py-16 md:py-20 bg-white">
            <div className="container max-w-4xl">
              <div className="text-center mb-10">
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#3d5a3e] mb-3">Why ParkStay?</p>
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#2b2823] mb-3">
                  Keep More of What You Earn
                </h2>
                <p className="text-[#787060] max-w-lg mx-auto">
                  We charge the lowest platform fees in the industry because we believe hosts deserve better.
                </p>
              </div>

              {/* Comparison Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left py-4 px-4 text-sm font-medium text-[#787060] border-b border-[#e5e3da]"></th>
                      <th className="py-4 px-4 text-center border-b border-[#e5e3da]">
                        <div className="bg-[#3d5a3e] text-white rounded-t-xl px-4 py-3 -mb-4 -mx-1">
                          <p className="text-xs tracking-wider uppercase mb-1">ParkStay</p>
                          <p className="font-serif text-lg font-semibold">by Teeco</p>
                        </div>
                      </th>
                      <th className="py-4 px-4 text-center text-sm font-medium text-[#787060] border-b border-[#e5e3da]">Airbnb</th>
                      <th className="py-4 px-4 text-center text-sm font-medium text-[#787060] border-b border-[#e5e3da]">VRBO</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { label: 'Host Fee', parkstay: '3%', airbnb: '3-5%', vrbo: '5%' },
                      { label: 'Guest Fee', parkstay: '5-8%', airbnb: '14-16%', vrbo: '6-12%' },
                      { label: 'Total Platform Take', parkstay: '8-11%', airbnb: '17-21%', vrbo: '11-17%' },
                      { label: 'Park-Focused Travelers', parkstay: '✓', airbnb: '—', vrbo: '—' },
                      { label: 'Destination-First Discovery', parkstay: '✓', airbnb: '—', vrbo: '—' },
                      { label: 'Road Trip Itineraries', parkstay: '✓', airbnb: '—', vrbo: '—' },
                    ].map((row) => (
                      <tr key={row.label} className="border-b border-[#e5e3da] last:border-0">
                        <td className="py-4 px-4 text-sm text-[#2b2823] font-medium">{row.label}</td>
                        <td className="py-4 px-4 text-center">
                          <span className="text-sm font-semibold text-[#3d5a3e]">{row.parkstay}</span>
                        </td>
                        <td className="py-4 px-4 text-center text-sm text-[#787060]">{row.airbnb}</td>
                        <td className="py-4 px-4 text-center text-sm text-[#787060]">{row.vrbo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[10px] text-[#a09a8e] mt-4 text-center">
                * Fee comparison based on publicly available information as of 2025. Actual fees may vary.
                ParkStay fees are projected and subject to change before launch.
              </p>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-16 md:py-20 bg-[#faf9f6]">
            <div className="container max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <DollarSign size={24} />,
                    title: 'Lower Fees',
                    desc: 'Our 3% host fee means you keep more of every booking. No hidden charges.',
                  },
                  {
                    icon: <Users size={24} />,
                    title: 'Better Guests',
                    desc: 'Travelers who come for the park experience tend to be respectful, family-oriented guests.',
                  },
                  {
                    icon: <Shield size={24} />,
                    title: 'Park-Adjacent Focus',
                    desc: 'Your property gets discovered by travelers specifically searching near national parks.',
                  },
                ].map((benefit) => (
                  <div key={benefit.title} className="text-center">
                    <div className="w-14 h-14 rounded-2xl bg-[#3d5a3e]/8 flex items-center justify-center mx-auto mb-4 text-[#3d5a3e]">
                      {benefit.icon}
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-[#2b2823] mb-2">{benefit.title}</h3>
                    <p className="text-sm text-[#787060] leading-relaxed">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Form */}
          <section className="py-16 md:py-20 bg-white">
            <div className="container max-w-lg">
              <div className="text-center mb-8">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#2b2823] mb-3">
                  Join the Host Waitlist
                </h2>
                <p className="text-[#787060]">
                  We'll reach out when we're ready to onboard hosts in your area.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium tracking-[0.08em] uppercase text-[#787060] mb-1.5">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Your first name"
                      className="w-full border border-[#d5d2c8] rounded-xl px-4 py-3 text-sm text-[#2b2823] placeholder:text-[#a09a8e] outline-none focus:border-[#3d5a3e] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium tracking-[0.08em] uppercase text-[#787060] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full border border-[#d5d2c8] rounded-xl px-4 py-3 text-sm text-[#2b2823] placeholder:text-[#a09a8e] outline-none focus:border-[#3d5a3e] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium tracking-[0.08em] uppercase text-[#787060] mb-1.5">
                      Property City *
                    </label>
                    <input
                      type="text"
                      required
                      value={propertyCity}
                      onChange={(e) => setPropertyCity(e.target.value)}
                      placeholder="e.g. Fayetteville"
                      className="w-full border border-[#d5d2c8] rounded-xl px-4 py-3 text-sm text-[#2b2823] placeholder:text-[#a09a8e] outline-none focus:border-[#3d5a3e] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium tracking-[0.08em] uppercase text-[#787060] mb-1.5">
                      State *
                    </label>
                    <select
                      required
                      value={propertyState}
                      onChange={(e) => setPropertyState(e.target.value)}
                      className="w-full border border-[#d5d2c8] rounded-xl px-4 py-3 text-sm text-[#2b2823] outline-none focus:border-[#3d5a3e] transition-colors appearance-none bg-white"
                    >
                      <option value="">Select state</option>
                      {US_STATES.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium tracking-[0.08em] uppercase text-[#787060] mb-1.5">
                    Nearest National Park (optional)
                  </label>
                  <input
                    type="text"
                    value={nearestPark}
                    onChange={(e) => setNearestPark(e.target.value)}
                    placeholder="e.g. New River Gorge"
                    className="w-full border border-[#d5d2c8] rounded-xl px-4 py-3 text-sm text-[#2b2823] placeholder:text-[#a09a8e] outline-none focus:border-[#3d5a3e] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium tracking-[0.08em] uppercase text-[#787060] mb-1.5">
                      Number of Properties *
                    </label>
                    <select
                      required
                      value={numProperties}
                      onChange={(e) => setNumProperties(e.target.value)}
                      className="w-full border border-[#d5d2c8] rounded-xl px-4 py-3 text-sm text-[#2b2823] outline-none focus:border-[#3d5a3e] transition-colors appearance-none bg-white"
                    >
                      <option value="">Select</option>
                      <option value="1">1</option>
                      <option value="2-5">2-5</option>
                      <option value="6-10">6-10</option>
                      <option value="11+">11+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium tracking-[0.08em] uppercase text-[#787060] mb-1.5">
                      Current Platforms (optional)
                    </label>
                    <input
                      type="text"
                      value={currentPlatforms}
                      onChange={(e) => setCurrentPlatforms(e.target.value)}
                      placeholder="e.g. Airbnb, VRBO"
                      className="w-full border border-[#d5d2c8] rounded-xl px-4 py-3 text-sm text-[#2b2823] placeholder:text-[#a09a8e] outline-none focus:border-[#3d5a3e] transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={joinHost.isPending}
                  className="w-full bg-[#3d5a3e] hover:bg-[#2e4830] disabled:opacity-60 text-white rounded-xl py-3.5 text-sm font-medium transition-colors flex items-center justify-center gap-2"
                >
                  {joinHost.isPending ? 'Submitting...' : 'Join the Host Waitlist'}
                  {!joinHost.isPending && <ArrowRight size={16} />}
                </button>

                <p className="text-[10px] text-center text-[#a09a8e]">
                  By submitting, you agree to our <a href="/terms" className="underline">Terms of Service</a> and <a href="/privacy" className="underline">Privacy Policy</a>.
                </p>
              </form>
            </div>
          </section>
        </div>
      )}

      <Footer />
    </div>
  );
}
