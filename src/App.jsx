import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Explore from './pages/Explore'
import ParkDetail from './pages/ParkDetail'
import RoadTrips from './pages/RoadTrips'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#faf9f6]">
      <Navbar />
      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/explore/:state" element={<Explore />} />
          <Route path="/park/:parkId" element={<ParkDetail />} />
          <Route path="/road-trips" element={<RoadTrips />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
