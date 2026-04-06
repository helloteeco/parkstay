/*
  DESIGN SYSTEM: Topographic Naturalism — ParkStay by Teeco
  Park data for mock-up. In production this would come from NPS API.
*/

export interface Park {
  id: string;
  name: string;
  state: string;
  stateCode: string;
  type: 'National Park' | 'National Monument' | 'National Forest' | 'National Seashore' | 'National Cave' | 'National River';
  tagline: string;
  description: string;
  image: string;
  rating: number;
  reviewCount: number;
  staysNearby: number;
  priceFrom: number;
  highlights: string[];
  activities: string[];
  bestSeason: string;
  visitors: string;
}

export interface StateInfo {
  code: string;
  name: string;
  parkCount: number;
}

export const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663297690482/HMPopTpKveWmE9BeR7FtzY/hero-mountains-6o5ZCBofRbpoyL94ofToeb.webp';
export const FAMILY_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663297690482/HMPopTpKveWmE9BeR7FtzY/family-hiking-KvMwpLYHygrjV6vd2ZUBLN.webp';

export const parks: Park[] = [
  {
    id: 'new-river-gorge',
    name: 'New River Gorge',
    state: 'West Virginia',
    stateCode: 'WV',
    type: 'National Park',
    tagline: 'America\'s Newest National Park',
    description: 'A rugged, whitewater river flowing northward through deep canyons, the New River is among the oldest rivers on the continent. The park encompasses over 70,000 acres of land along the New River, with some of the best whitewater rafting in the eastern United States.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663297690482/HMPopTpKveWmE9BeR7FtzY/new-river-gorge-QVbeUnWhm8dAzk5W9Az8Je.webp',
    rating: 4.8,
    reviewCount: 2340,
    staysNearby: 47,
    priceFrom: 89,
    highlights: ['Bridge Walk', 'Whitewater Rafting', 'Rock Climbing', 'Scenic Overlooks'],
    activities: ['Hiking', 'Rafting', 'Climbing', 'Fishing', 'Mountain Biking'],
    bestSeason: 'May - October',
    visitors: '1.6M annual visitors'
  },
  {
    id: 'yellowstone',
    name: 'Yellowstone',
    state: 'Wyoming',
    stateCode: 'WY',
    type: 'National Park',
    tagline: 'Where the Wild Things Are',
    description: 'The world\'s first national park, Yellowstone spans nearly 3,500 square miles of wilderness recreation area atop a volcanic hot spot. Home to dramatic canyons, alpine rivers, lush forests, hot springs, and gushing geysers including Old Faithful.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663297690482/HMPopTpKveWmE9BeR7FtzY/yellowstone-Ue5xM9jRjBXif7U6yR3Cwj.webp',
    rating: 4.9,
    reviewCount: 12450,
    staysNearby: 156,
    priceFrom: 129,
    highlights: ['Old Faithful', 'Grand Prismatic Spring', 'Yellowstone Lake', 'Mammoth Hot Springs'],
    activities: ['Hiking', 'Wildlife Watching', 'Camping', 'Photography', 'Fishing'],
    bestSeason: 'June - September',
    visitors: '4.8M annual visitors'
  },
  {
    id: 'mammoth-cave',
    name: 'Mammoth Cave',
    state: 'Kentucky',
    stateCode: 'KY',
    type: 'National Cave',
    tagline: 'The World\'s Longest Cave System',
    description: 'Mammoth Cave National Park preserves the cave system and a part of the Green River valley and hilly country of south central Kentucky. With more than 400 miles of surveyed passageways, Mammoth Cave is by far the world\'s longest known cave system.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663297690482/HMPopTpKveWmE9BeR7FtzY/mammoth-cave-NzAKkAj7mG7X67Fyg693Md.webp',
    rating: 4.7,
    reviewCount: 3210,
    staysNearby: 34,
    priceFrom: 75,
    highlights: ['Cave Tours', 'Underground River', 'Historic Entrance', 'Frozen Niagara'],
    activities: ['Cave Tours', 'Hiking', 'Canoeing', 'Camping', 'Horseback Riding'],
    bestSeason: 'Year-round (caves are 54°F always)',
    visitors: '2.1M annual visitors'
  },
  {
    id: 'great-smoky-mountains',
    name: 'Great Smoky Mountains',
    state: 'Tennessee',
    stateCode: 'TN',
    type: 'National Park',
    tagline: 'America\'s Most Visited National Park',
    description: 'Ridge upon ridge of forest straddles the border between North Carolina and Tennessee in Great Smoky Mountains National Park. World renowned for its diversity of plant and animal life, the beauty of its ancient mountains, and the quality of its remnants of Southern Appalachian mountain culture.',
    image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&auto=format',
    rating: 4.8,
    reviewCount: 18900,
    staysNearby: 234,
    priceFrom: 99,
    highlights: ['Clingmans Dome', 'Cades Cove', 'Roaring Fork', 'Newfound Gap'],
    activities: ['Hiking', 'Scenic Drives', 'Wildlife Watching', 'Waterfall Hikes', 'Fishing'],
    bestSeason: 'April - June, September - November',
    visitors: '12.1M annual visitors'
  },
  {
    id: 'grand-canyon',
    name: 'Grand Canyon',
    state: 'Arizona',
    stateCode: 'AZ',
    type: 'National Park',
    tagline: 'A Mile Deep, Millions of Years Old',
    description: 'The Grand Canyon, carved by the mighty Colorado River, is 277 miles long, up to 18 miles wide, and over a mile deep. Layered bands of colorful rock reveal millions of years of geological history, making it one of the most spectacular examples of erosion anywhere in the world.',
    image: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=800&auto=format',
    rating: 4.9,
    reviewCount: 15600,
    staysNearby: 89,
    priceFrom: 119,
    highlights: ['South Rim', 'Bright Angel Trail', 'Desert View Watchtower', 'Havasu Falls'],
    activities: ['Hiking', 'Mule Rides', 'River Rafting', 'Stargazing', 'Photography'],
    bestSeason: 'March - May, September - November',
    visitors: '6.3M annual visitors'
  },
  {
    id: 'zion',
    name: 'Zion',
    state: 'Utah',
    stateCode: 'UT',
    type: 'National Park',
    tagline: 'Where Sandstone Meets the Sky',
    description: 'Follow the paths where ancient native people and pioneers walked. Gaze up at massive sandstone cliffs of cream, pink, and red that soar into a brilliant blue sky. Experience wilderness in a narrow slot canyon. Zion\'s unique array of plants and animals will enchant you.',
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&auto=format',
    rating: 4.9,
    reviewCount: 9800,
    staysNearby: 67,
    priceFrom: 139,
    highlights: ['Angels Landing', 'The Narrows', 'Emerald Pools', 'Canyon Overlook'],
    activities: ['Hiking', 'Canyoneering', 'Rock Climbing', 'Scenic Drives', 'Stargazing'],
    bestSeason: 'March - May, September - November',
    visitors: '4.6M annual visitors'
  },
  {
    id: 'yosemite',
    name: 'Yosemite',
    state: 'California',
    stateCode: 'CA',
    type: 'National Park',
    tagline: 'The Crown Jewel of the Sierra Nevada',
    description: 'Not just a great valley, but a shrine to human foresight, the strength of granite, the power of glaciers, the persistence of life, and the tranquility of the High Sierra. Yosemite\'s granite cliffs, waterfalls, clear streams, and giant sequoia groves have inspired artists and adventurers for generations.',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&auto=format',
    rating: 4.9,
    reviewCount: 14200,
    staysNearby: 112,
    priceFrom: 149,
    highlights: ['Half Dome', 'El Capitan', 'Yosemite Falls', 'Glacier Point'],
    activities: ['Hiking', 'Rock Climbing', 'Photography', 'Camping', 'Stargazing'],
    bestSeason: 'May - September',
    visitors: '3.8M annual visitors'
  },
  {
    id: 'acadia',
    name: 'Acadia',
    state: 'Maine',
    stateCode: 'ME',
    type: 'National Park',
    tagline: 'Where Mountains Meet the Sea',
    description: 'Acadia National Park protects the natural beauty of the highest rocky headlands along the Atlantic coastline of the United States, an abundance of habitats, and a rich cultural heritage. Cadillac Mountain is the highest point on the North Atlantic coast.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format',
    rating: 4.8,
    reviewCount: 7600,
    staysNearby: 78,
    priceFrom: 109,
    highlights: ['Cadillac Mountain', 'Bass Harbor Lighthouse', 'Jordan Pond', 'Thunder Hole'],
    activities: ['Hiking', 'Biking', 'Kayaking', 'Tide Pooling', 'Sunrise Watching'],
    bestSeason: 'June - October',
    visitors: '3.9M annual visitors'
  },
  {
    id: 'shenandoah',
    name: 'Shenandoah',
    state: 'Virginia',
    stateCode: 'VA',
    type: 'National Park',
    tagline: 'Skyline Drive Through the Blue Ridge',
    description: 'Just 75 miles from the bustle of Washington, D.C., Shenandoah National Park is a land bursting with cascading waterfalls, spectacular vistas, fields of wildflowers, and quiet wooded hollows. With over 200,000 acres of protected lands, Shenandoah is a haven for outdoor enthusiasts.',
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&auto=format',
    rating: 4.7,
    reviewCount: 5400,
    staysNearby: 56,
    priceFrom: 95,
    highlights: ['Skyline Drive', 'Old Rag Mountain', 'Dark Hollow Falls', 'Big Meadows'],
    activities: ['Hiking', 'Scenic Drives', 'Camping', 'Fishing', 'Horseback Riding'],
    bestSeason: 'April - November',
    visitors: '1.6M annual visitors'
  },
  {
    id: 'rocky-mountain',
    name: 'Rocky Mountain',
    state: 'Colorado',
    stateCode: 'CO',
    type: 'National Park',
    tagline: 'Alpine Wilderness Above the Clouds',
    description: 'Rocky Mountain National Park\'s 415 square miles encompass and protect spectacular mountain environments. Enjoy Trail Ridge Road — which crests at over 12,000 feet — along with 300+ miles of hiking trails, wildflower meadows, and mountain lakes.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format',
    rating: 4.8,
    reviewCount: 8900,
    staysNearby: 98,
    priceFrom: 119,
    highlights: ['Trail Ridge Road', 'Bear Lake', 'Longs Peak', 'Alpine Visitor Center'],
    activities: ['Hiking', 'Scenic Drives', 'Wildlife Watching', 'Camping', 'Snowshoeing'],
    bestSeason: 'June - September',
    visitors: '4.3M annual visitors'
  },
  {
    id: 'glacier',
    name: 'Glacier',
    state: 'Montana',
    stateCode: 'MT',
    type: 'National Park',
    tagline: 'Crown of the Continent',
    description: 'With over 700 miles of trails, Glacier National Park is a hiker\'s paradise. Discover pristine forests, alpine meadows, rugged mountains, and spectacular lakes. Its diverse habitats are home to over 70 species of mammals and 260 species of birds.',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&auto=format',
    rating: 4.9,
    reviewCount: 6700,
    staysNearby: 45,
    priceFrom: 135,
    highlights: ['Going-to-the-Sun Road', 'Grinnell Glacier', 'Lake McDonald', 'Many Glacier'],
    activities: ['Hiking', 'Scenic Drives', 'Boating', 'Fishing', 'Backpacking'],
    bestSeason: 'July - September',
    visitors: '3.0M annual visitors'
  },
  {
    id: 'olympic',
    name: 'Olympic',
    state: 'Washington',
    stateCode: 'WA',
    type: 'National Park',
    tagline: 'Three Parks in One',
    description: 'With its incredible range of precipitation and elevation, Olympic National Park is home to several distinctly different ecosystems — from the lush Hoh Rain Forest to the snow-capped peaks of the Olympic Mountains to the rugged Pacific coastline.',
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800&auto=format',
    rating: 4.8,
    reviewCount: 5100,
    staysNearby: 52,
    priceFrom: 109,
    highlights: ['Hoh Rain Forest', 'Hurricane Ridge', 'Rialto Beach', 'Sol Duc Falls'],
    activities: ['Hiking', 'Beachcombing', 'Camping', 'Fishing', 'Tide Pooling'],
    bestSeason: 'June - September',
    visitors: '3.5M annual visitors'
  },
];

export const states: StateInfo[] = [
  { code: 'AZ', name: 'Arizona', parkCount: 3 },
  { code: 'CA', name: 'California', parkCount: 9 },
  { code: 'CO', name: 'Colorado', parkCount: 4 },
  { code: 'KY', name: 'Kentucky', parkCount: 1 },
  { code: 'ME', name: 'Maine', parkCount: 1 },
  { code: 'MT', name: 'Montana', parkCount: 1 },
  { code: 'TN', name: 'Tennessee', parkCount: 2 },
  { code: 'UT', name: 'Utah', parkCount: 5 },
  { code: 'VA', name: 'Virginia', parkCount: 2 },
  { code: 'WA', name: 'Washington', parkCount: 3 },
  { code: 'WV', name: 'West Virginia', parkCount: 1 },
  { code: 'WY', name: 'Wyoming', parkCount: 2 },
  { code: 'AK', name: 'Alaska', parkCount: 8 },
  { code: 'FL', name: 'Florida', parkCount: 3 },
  { code: 'HI', name: 'Hawaii', parkCount: 2 },
  { code: 'NC', name: 'North Carolina', parkCount: 2 },
  { code: 'SD', name: 'South Dakota', parkCount: 2 },
  { code: 'TX', name: 'Texas', parkCount: 2 },
  { code: 'DC', name: 'Washington D.C.', parkCount: 6 },
  { code: 'NM', name: 'New Mexico', parkCount: 2 },
];

export const parkTypes = [
  { label: 'National Parks', count: 63, icon: '🏔️' },
  { label: 'National Monuments', count: 129, icon: '🗿' },
  { label: 'National Forests', count: 154, icon: '🌲' },
  { label: 'National Seashores', count: 10, icon: '🏖️' },
  { label: 'National Battlefields', count: 11, icon: '⚔️' },
  { label: 'National Memorials', count: 31, icon: '🏛️' },
];

export function getParksForState(stateCode: string): Park[] {
  return parks.filter(p => p.stateCode === stateCode);
}

export function getParkById(id: string): Park | undefined {
  return parks.find(p => p.id === id);
}

export function getFeaturedParks(): Park[] {
  return parks.slice(0, 6);
}

export function searchParks(query: string): Park[] {
  const q = query.toLowerCase();
  return parks.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.state.toLowerCase().includes(q) ||
    p.type.toLowerCase().includes(q) ||
    p.highlights.some(h => h.toLowerCase().includes(q))
  );
}
