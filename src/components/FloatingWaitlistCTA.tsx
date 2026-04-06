/*
  FloatingWaitlistCTA: A persistent floating button that stays visible
  as users scroll. Opens the traveler waitlist modal.
  Hides when user is near the top of the page (hero has its own CTA).
*/
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell } from 'lucide-react';
import WaitlistModal from './WaitlistModal';

export default function FloatingWaitlistCTA() {
  const [showButton, setShowButton] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section (~600px)
      setShowButton(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showButton && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={() => setShowModal(true)}
            className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#3d5a3e] hover:bg-[#2e4830] text-white rounded-full pl-4 pr-5 py-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <Bell size={16} className="group-hover:animate-[wiggle_0.5s_ease-in-out]" />
            <span className="text-sm font-medium">Join the Waitlist</span>
          </motion.button>
        )}
      </AnimatePresence>

      <WaitlistModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        source="floating_cta"
      />
    </>
  );
}
