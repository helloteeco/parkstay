/*
  LaunchModal: First-visit announcement modal.
  Shows "ParkStay is launching soon" with two paths:
  - "I'm a Traveler" → opens WaitlistModal
  - "I'm a Host" → navigates to /list-your-property
  - "Share with a Friend" → native share or copy link
  Uses localStorage to only show once per visitor.
*/
import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mountain, Compass, Home, Sparkles, Share2, Check, Copy } from 'lucide-react';
import { toast } from 'sonner';
import WaitlistModal from './WaitlistModal';

const STORAGE_KEY = 'parkstay_launch_seen';

export default function LaunchModal() {
  const [showLaunch, setShowLaunch] = useState(false);
  const [showTravelerForm, setShowTravelerForm] = useState(false);
  const [copied, setCopied] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Small delay so the page renders first, then the modal appears
    const timer = setTimeout(() => {
      const seen = localStorage.getItem(STORAGE_KEY);
      if (!seen) {
        setShowLaunch(true);
      }
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setShowLaunch(false);
    localStorage.setItem(STORAGE_KEY, 'true');
  };

  const handleTraveler = () => {
    dismiss();
    setShowTravelerForm(true);
  };

  const handleHost = () => {
    dismiss();
    setLocation('/list-your-property');
  };

  const handleShare = async () => {
    const shareData = {
      title: 'ParkStay — Book Stays Near National Parks',
      text: 'Check out ParkStay — the first booking platform built around national parks. They\'re launching soon and you can join the waitlist for early access!',
      url: window.location.origin,
    };

    // Try native share (works on mobile and some desktop browsers)
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        toast.success('Thanks for sharing!');
        return;
      } catch (err) {
        // User cancelled or share failed — fall through to copy
        if ((err as Error).name === 'AbortError') return;
      }
    }

    // Fallback: copy link to clipboard
    try {
      await navigator.clipboard.writeText(
        `${shareData.text}\n\n${shareData.url}`
      );
      setCopied(true);
      toast.success('Link copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Could not copy link');
    }
  };

  return (
    <>
      <AnimatePresence>
        {showLaunch && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={dismiss}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="h-1.5 bg-gradient-to-r from-[#3d5a3e] via-[#5a7d5c] to-[#3d5a3e]" />

              {/* Header */}
              <div className="px-6 pt-8 pb-4 text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#3d5a3e]/10 flex items-center justify-center mx-auto mb-5">
                  <Mountain size={32} className="text-[#3d5a3e]" />
                </div>

                <div className="inline-flex items-center gap-1.5 bg-[#c4704b]/10 text-[#c4704b] rounded-full px-3 py-1 text-xs font-medium mb-4">
                  <Sparkles size={12} />
                  Launching Soon Due to Popular Demand
                </div>

                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#2b2823] mb-3 leading-tight">
                  Welcome to ParkStay
                </h2>
                <p className="text-sm text-[#787060] leading-relaxed max-w-sm mx-auto">
                  The first booking platform built around national parks. 
                  We're not live yet, but you can join the waitlist to get early access.
                </p>
              </div>

              {/* Divider */}
              <div className="mx-6 border-t border-[#e5e3da]" />

              {/* Two paths */}
              <div className="px-6 py-6">
                <p className="text-xs font-medium tracking-[0.1em] uppercase text-[#787060] text-center mb-4">
                  Tell us about you
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Traveler path */}
                  <button
                    onClick={handleTraveler}
                    className="group relative bg-[#faf9f6] hover:bg-[#3d5a3e] border border-[#e5e3da] hover:border-[#3d5a3e] rounded-xl p-5 text-left transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#3d5a3e]/10 group-hover:bg-white/20 flex items-center justify-center mb-3 transition-colors">
                      <Compass size={20} className="text-[#3d5a3e] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-serif text-base font-semibold text-[#2b2823] group-hover:text-white mb-1 transition-colors">
                      I'm a Traveler
                    </h3>
                    <p className="text-xs text-[#787060] group-hover:text-white/70 leading-relaxed transition-colors">
                      Get notified when stays near your favorite parks go live
                    </p>
                  </button>

                  {/* Host path */}
                  <button
                    onClick={handleHost}
                    className="group relative bg-[#faf9f6] hover:bg-[#3d5a3e] border border-[#e5e3da] hover:border-[#3d5a3e] rounded-xl p-5 text-left transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#3d5a3e]/10 group-hover:bg-white/20 flex items-center justify-center mb-3 transition-colors">
                      <Home size={20} className="text-[#3d5a3e] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-serif text-base font-semibold text-[#2b2823] group-hover:text-white mb-1 transition-colors">
                      I'm a Host
                    </h3>
                    <p className="text-xs text-[#787060] group-hover:text-white/70 leading-relaxed transition-colors">
                      List your property with the lowest fees in the industry
                    </p>
                  </button>
                </div>

                {/* Share with a friend */}
                <button
                  onClick={handleShare}
                  className="w-full mt-4 flex items-center justify-center gap-2 bg-[#2b2823] hover:bg-[#1a1815] text-white rounded-xl px-4 py-3 text-sm font-medium transition-colors"
                >
                  {copied ? (
                    <>
                      <Check size={16} />
                      Link Copied!
                    </>
                  ) : (
                    <>
                      <Share2 size={16} />
                      Share with a Friend
                    </>
                  )}
                </button>

                {/* Skip */}
                <button
                  onClick={dismiss}
                  className="w-full mt-3 text-xs text-[#a09a8e] hover:text-[#787060] transition-colors text-center py-2"
                >
                  Just browsing — let me explore first
                </button>
              </div>

              {/* Close button */}
              <button
                onClick={dismiss}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#f5f4f0] hover:bg-[#e5e3da] flex items-center justify-center transition-colors"
              >
                <X size={14} className="text-[#787060]" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Traveler waitlist form (opens after selecting "I'm a Traveler") */}
      <WaitlistModal
        isOpen={showTravelerForm}
        onClose={() => setShowTravelerForm(false)}
        source="launch_modal"
      />
    </>
  );
}
