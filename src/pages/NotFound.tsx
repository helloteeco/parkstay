import { Link } from 'wouter';
import { Compass } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center topo-pattern">
        <div className="text-center px-4">
          <Compass size={48} className="text-[#d5d2c8] mx-auto mb-6" />
          <h1 className="font-serif text-5xl font-bold text-[#2b2823] mb-3">404</h1>
          <h2 className="font-serif text-xl font-semibold text-[#2b2823] mb-2">Trail Not Found</h2>
          <p className="text-[#787060] mb-8 max-w-sm mx-auto">
            Looks like you've wandered off the trail. Let's get you back to exploring.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#3d5a3e] hover:bg-[#2e4830] text-white rounded-xl px-6 py-3 text-sm font-medium transition-colors no-underline"
          >
            Back to Base Camp
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
