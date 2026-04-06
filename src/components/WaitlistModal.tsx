/*
  WaitlistModal: Captures traveler interest when they search.
  Shows a branded modal with email capture and park preference.
  Saves to guest_waitlist via tRPC.
*/
import { useState } from 'react';
import { X, Mountain, Mail, CheckCircle2 } from 'lucide-react';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  parkName?: string;
  checkIn?: string;
  checkOut?: string;
  guestCount?: number;
  source?: string;
}

export default function WaitlistModal({
  isOpen,
  onClose,
  parkName,
  checkIn,
  checkOut,
  guestCount,
  source = 'hero_search',
}: WaitlistModalProps) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const joinGuest = trpc.waitlist.joinGuest.useMutation({
    onSuccess: () => {
      setSubmitted(true);
    },
    onError: (err) => {
      toast.error('Something went wrong', { description: err.message });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error('Please enter your email');
      return;
    }
    joinGuest.mutate({
      email: email.trim(),
      firstName: firstName.trim() || undefined,
      selectedPark: parkName || undefined,
      checkInDate: checkIn || undefined,
      checkOutDate: checkOut || undefined,
      guestCount: guestCount || undefined,
      source,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
        {/* Green header */}
        <div className="bg-[#3d5a3e] px-6 py-8 text-center">
          <Mountain size={32} className="text-white/80 mx-auto mb-3" />
          {submitted ? (
            <>
              <CheckCircle2 size={48} className="text-white mx-auto mb-3" />
              <h2 className="font-serif text-2xl font-semibold text-white mb-2">
                You're on the List!
              </h2>
              <p className="text-white/80 text-sm leading-relaxed">
                We'll notify you as soon as stays near {parkName || 'your destination'} are available.
              </p>
            </>
          ) : (
            <>
              <h2 className="font-serif text-2xl font-semibold text-white mb-2">
                {parkName
                  ? `Stays near ${parkName} are coming soon!`
                  : "We're launching soon!"}
              </h2>
              <p className="text-white/80 text-sm leading-relaxed">
                Be the first to know when vacation rentals near {parkName || 'your favorite parks'} go live on ParkStay.
              </p>
            </>
          )}
        </div>

        {/* Form body */}
        <div className="px-6 py-6">
          {submitted ? (
            <div className="text-center">
              <p className="text-sm text-[#787060] mb-4">
                Meanwhile, keep exploring parks and building your dream road trip itinerary.
              </p>
              <button
                onClick={onClose}
                className="bg-[#3d5a3e] hover:bg-[#2e4830] text-white rounded-xl px-6 py-3 text-sm font-medium transition-colors"
              >
                Keep Exploring
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium tracking-[0.08em] uppercase text-[#787060] mb-1.5">
                  First Name (optional)
                </label>
                <input
                  type="text"
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
                <div className="relative">
                  <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a09a8e]" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full border border-[#d5d2c8] rounded-xl pl-10 pr-4 py-3 text-sm text-[#2b2823] placeholder:text-[#a09a8e] outline-none focus:border-[#3d5a3e] transition-colors"
                  />
                </div>
              </div>

              {parkName && (
                <div className="bg-[#f5f4f0] rounded-xl px-4 py-3 flex items-center gap-3">
                  <Mountain size={16} className="text-[#3d5a3e] shrink-0" />
                  <div>
                    <p className="text-xs text-[#787060]">Interested in</p>
                    <p className="text-sm font-medium text-[#2b2823]">{parkName}</p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={joinGuest.isPending}
                className="w-full bg-[#3d5a3e] hover:bg-[#2e4830] disabled:opacity-60 text-white rounded-xl py-3 text-sm font-medium transition-colors"
              >
                {joinGuest.isPending ? 'Joining...' : 'Notify Me When Stays Go Live'}
              </button>

              <p className="text-[10px] text-center text-[#a09a8e]">
                We'll only email you about ParkStay updates. No spam, ever.
              </p>
            </form>
          )}
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
        >
          <X size={16} className="text-white" />
        </button>
      </div>
    </div>
  );
}
