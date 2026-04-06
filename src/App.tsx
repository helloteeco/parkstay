import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import ParkDetail from "./pages/ParkDetail";
import RoadTrips from "./pages/RoadTrips";
import HostInterestForm from "./components/HostInterestForm";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import DoNotSell from "./pages/DoNotSell";
import CookieConsent from "@/components/CookieConsent";
import LaunchModal from "@/components/LaunchModal";
import FloatingWaitlistCTA from "@/components/FloatingWaitlistCTA";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/explore" component={Explore} />
      <Route path="/explore/:state" component={Explore} />
      <Route path="/park/:parkId" component={ParkDetail} />
      <Route path="/road-trips" component={RoadTrips} />
      <Route path="/list-your-property" component={HostInterestForm} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/do-not-sell" component={DoNotSell} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
          <LaunchModal />
          <FloatingWaitlistCTA />
          <CookieConsent />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
