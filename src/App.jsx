import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Home from './pages/Home.jsx';
import Explore from './pages/Explore.jsx';
import ParkDetail from './pages/ParkDetail.jsx';
import RoadTrips from './pages/RoadTrips.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontFamily: "'Raleway', sans-serif",
            fontSize: '0.875rem',
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:state" element={<Explore />} />
        <Route path="/park/:parkId" element={<ParkDetail />} />
        <Route path="/road-trips" element={<RoadTrips />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
