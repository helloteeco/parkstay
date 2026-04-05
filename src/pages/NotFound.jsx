import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf9f6] px-4">
      <div className="text-center max-w-2xl">
        <h1 className="font-serif text-6xl text-[#2b2823] mb-4">404</h1>
        <h2 className="font-serif text-4xl text-[#2b2823] mb-4">Page Not Found</h2>
        <p className="text-[#787060] text-lg mb-8">
          Looks like we took a wrong trail. The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-8 py-3 bg-[#2b2823] text-[#e5e3da] rounded font-semibold hover:bg-[#1a1611] transition"
          >
            Go Home
          </Link>
          <Link
            to="/explore"
            className="px-8 py-3 border-2 border-[#2b2823] text-[#2b2823] rounded font-semibold hover:bg-[#f5f5f5] transition"
          >
            Explore Parks
          </Link>
        </div>
      </div>
    </div>
  )
}
