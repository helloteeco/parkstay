# ParkStay by Teeco - React Application

A complete React application for exploring national parks, finding accommodations, and planning road trips.

## Quick Start

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
parkstay/
├── src/
│   ├── App.jsx                    # Main router
│   ├── main.jsx                   # Entry point with BrowserRouter
│   ├── index.css                  # Global styles (Tailwind)
│   ├── components/
│   │   ├── Navbar.jsx             # Sticky navigation with mobile menu
│   │   ├── Footer.jsx             # Dark footer with links
│   │   ├── ParkCard.jsx           # Reusable park card
│   │   └── SearchBar.jsx          # Search functionality
│   ├── pages/
│   │   ├── Home.jsx               # Homepage (9 sections)
│   │   ├── Explore.jsx            # Parks explorer with filters
│   │   ├── ParkDetail.jsx         # Individual park page
│   │   ├── RoadTrips.jsx          # Curated road trips
│   │   └── NotFound.jsx           # 404 page
│   └── data/
│       ├── parks.js               # 12 parks with full data
│       └── roadTrips.js           # 4 curated road trips
├── vite.config.js                 # Vite + Tailwind config
├── tailwind.config.js             # Tailwind theme customization
├── index.html                     # HTML entry point
└── package.json                   # Dependencies
```

## Routes

- `/` - Home page
- `/explore` - All parks with filters
- `/explore/:state` - Parks filtered by state
- `/park/:parkId` - Individual park details
- `/road-trips` - Curated road trip itineraries
- `/*` - 404 Not Found

## Design System

### Colors
- **Background**: #faf9f6 (warm off-white)
- **Dark**: #2b2823 (charcoal)
- **Light Text**: #e5e3da (cream)
- **Muted**: #787060 (taupe)
- **Border**: #d5d2c8 (light taupe)
- **Accents**: Earth tones (#d4b896, #c9a876, etc.)

### Typography
- **Headings**: Source Serif Pro (Google Fonts)
- **Body**: System sans-serif

### Style Approach
- Tailwind CSS utilities only
- No custom CSS files
- Responsive design (mobile-first)
- Warm, editorial "Topographic Naturalism" aesthetic

## Key Features

- Fully responsive layout
- Search parks by name/location
- Filter parks by state and type
- Star ratings for parks
- Accommodation listings with pricing
- Nearby parks suggestions
- Curated multi-park road trips
- Sticky navigation and sidebars
- Mobile hamburger menu
- Breadcrumb navigation

## Data

### 12 Parks Included
Each park includes:
- Basic info (name, state, type, rating, fees)
- Full description
- 4 highlights
- 6+ activities
- 4 nearby stays with pricing
- Links to nearby parks

### 4 Road Trips
Each road trip includes:
- Title and description
- Duration and distance
- Number of parks
- Starting stay prices
- Route summary
- Park links

## Component Hierarchy

```
App
├── Navbar (sticky)
├── Routes
│   ├── Home
│   │   ├── SearchBar
│   │   └── ParkCard (x6)
│   ├── Explore
│   │   ├── Filter Sidebar
│   │   └── ParkCard (x12)
│   ├── ParkDetail
│   │   └── StayCard (x4)
│   ├── RoadTrips
│   └── NotFound
└── Footer (dark)
```

## Browser Compatibility

Built with modern React and Tailwind CSS. Works on:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Build Output

Production build is optimized and minified:
- HTML: 0.59 kB (gzip: 0.37 kB)
- CSS: 23.75 kB (gzip: 5.09 kB)
- JS: 280.12 kB (gzip: 84.38 kB)

## Future Enhancements

- Interactive US map for state selection
- User accounts and saved favorites
- Booking integration
- User reviews and ratings
- Weather forecasts for parks
- Trail difficulty ratings
- Permit requirements
- Accessibility improvements
