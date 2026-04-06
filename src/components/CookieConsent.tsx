/*
  CookieConsent: Banner shown on first visit.
  "Accept All" loads analytics; "Reject Non-Essential" blocks analytics.
  Preference stored in a cookie.
*/
import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

const COOKIE_KEY = 'parkstay_cookie_consent';

type ConsentValue = 'accepted' | 'rejected' | null;

function getConsent(): ConsentValue {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_KEY}=([^;]*)`));
  if (match) return match[1] as ConsentValue;
  return null;
}

function setConsent(value: 'accepted' | 'rejected') {
  // Set cookie for 1 year
  const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${COOKIE_KEY}=${value}; expires=${expires}; path=/; SameSite=Lax`;
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show if no consent has been given yet
    const consent = getConsent();
    if (!consent) {
      // Small delay so it doesn't flash immediately on page load
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setConsent('accepted');
    setVisible(false);
    // Analytics scripts would be loaded here in production
  };

  const handleReject = () => {
    setConsent('rejected');
    setVisible(false);
    // Ensure no analytics scripts are loaded
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl border border-[#e5e3da] p-5 md:p-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#3d5a3e]/8 flex items-center justify-center shrink-0">
            <Cookie size={20} className="text-[#3d5a3e]" />
          </div>
          <div className="flex-1">
            <h3 className="font-serif text-base font-semibold text-[#2b2823] mb-1">Cookie Preferences</h3>
            <p className="text-sm text-[#787060] leading-relaxed mb-4">
              We use essential cookies to make ParkStay work. We'd also like to use analytics cookies to understand how you use the site so we can improve it.{' '}
              <a href="/privacy" className="text-[#3d5a3e] underline">Learn more</a>
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleAccept}
                className="bg-[#3d5a3e] hover:bg-[#2e4830] text-white rounded-xl px-5 py-2.5 text-sm font-medium transition-colors"
              >
                Accept All
              </button>
              <button
                onClick={handleReject}
                className="bg-[#f5f4f0] hover:bg-[#e5e3da] text-[#2b2823] rounded-xl px-5 py-2.5 text-sm font-medium transition-colors"
              >
                Reject Non-Essential
              </button>
            </div>
          </div>
          <button
            onClick={handleReject}
            className="w-8 h-8 rounded-full hover:bg-[#f5f4f0] flex items-center justify-center shrink-0 transition-colors"
            aria-label="Close cookie banner"
          >
            <X size={16} className="text-[#787060]" />
          </button>
        </div>
      </div>
    </div>
  );
}
