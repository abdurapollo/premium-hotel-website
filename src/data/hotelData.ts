export interface Room {
  id: string;
  name: string;
  category: string;
  bed: string;
  size: string;
  view: string;
  price: number;
  featured: boolean;
  image: string;
  description: string;
  amenities: string[];
  maxGuests: number;
}

export interface Amenity {
  id: string;
  title: string;
  iconName: string;
  description: string;
  hours?: string;
  highlight?: string;
}

export interface DiningCategory {
  title: string;
  subtitle: string;
  image: string;
  tag: string;
  description: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'South Indian' | 'North Indian' | 'Continental' | 'Beverages & Wine';
  price: number;
  description: string;
  isVeg: boolean;
  isChefSpecial?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  city: string;
  rating: number;
  avatar: string;
  date: string;
}

export interface LocationHighlight {
  distance: string;
  place: string;
  description: string;
}

export const HOTEL_INFO = {
  name: "THE OAKRIDGE",
  subtitle: "HOTEL & SUITES",
  location: "BANGALORE",
  tagline: "STAY • RELAX • EXPLORE",
  headlineMain: "Your Perfect Stay",
  headlineAccent: "in Bangalore",
  description:
    "Modern comfort, warm hospitality and a prime location make The Oakridge Hotel & Suites the ideal choice for business and leisure travelers in Bangalore.",
  address: "48 Mahatma Gandhi Road, Bangalore, Karnataka 560001, India",
  phone: "+91 80 4968 0000",
  email: "reservations@theoakridgebangalore.com",
  checkInTime: "14:00",
  checkOutTime: "12:00",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=MG+Road+Bangalore+Karnataka+India",
};

export const ROOMS: Room[] = [
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    category: "Deluxe",
    bed: "King Bed",
    size: "24 sqm",
    view: "City View",
    price: 4500,
    featured: true,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
    description: "Thoughtfully crafted with warm teak woodwork, ergonomic workstation, plush king bedding and panoramic views of Bangalore's bustling skyline.",
    amenities: ["King Bed", "High-Speed Wi-Fi", "49-inch Smart TV", "Rain Shower", "Work Desk", "Coffee Maker", "City View"],
    maxGuests: 2,
  },
  {
    id: "executive-room",
    name: "Executive Room",
    category: "Executive",
    bed: "King Bed",
    size: "32 sqm",
    view: "City View",
    price: 5800,
    featured: true,
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
    description: "Generously spaced for business executives featuring club lounge privileges, bespoke Italian marble bath, espresso bar and complimentary laundry service.",
    amenities: ["King Bed", "Club Lounge Access", "High-Speed Wi-Fi", "55-inch Smart TV", "Marble Bathroom", "Espresso Machine", "Dedicated Workspace"],
    maxGuests: 3,
  },
  {
    id: "suite",
    name: "Suite",
    category: "Suite",
    bed: "King Bed",
    size: "52 sqm",
    view: "Living Area",
    price: 8500,
    featured: true,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    description: "The pinnacle of urban luxury featuring an expansive private living parlor, guest powder room, soaking tub with skyline vistas, and 24/7 personalized butler service.",
    amenities: ["King Bed", "Separate Living Salon", "Deep Soaking Tub", "Butler Service", "Complimentary Mini-Bar", "Walk-in Wardrobe", "Executive Dining Table"],
    maxGuests: 4,
  },
  {
    id: "presidential-suite",
    name: "Oakridge Presidential Suite",
    category: "Presidential",
    bed: "Grand King Bed",
    size: "96 sqm",
    view: "Panoramic Skyline",
    price: 18500,
    featured: false,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
    description: "An architectural masterpiece with double-height ceiling, private boardroom, curated art pieces, Jacuzzi, and complimentary chauffeured airport transfers.",
    amenities: ["Private Jacuzzi", "Boardroom Table", "Chauffeured BMW Transfer", "Personal Chef Service", "Full Bar Setup", "Bang & Olufsen Sound"],
    maxGuests: 4,
  },
  {
    id: "studio-suite",
    name: "Garden Studio Suite",
    category: "Studio",
    bed: "King Bed",
    size: "44 sqm",
    view: "Cubbon Park Greenery",
    price: 7200,
    featured: false,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    description: "Tranquil botanical oasis featuring private glass sunroom balcony facing the serene tree canopy of Cubbon Park, kitchenette, and organic linen furnishings.",
    amenities: ["Private Balcony", "Kitchenette", "Deep Bathtub", "Organic Bath Amenities", "Daily Fresh Fruit Basket", "Bose Speaker"],
    maxGuests: 2,
  },
];

export const AMENITIES: Amenity[] = [
  {
    id: "wifi",
    title: "Free Wi-Fi",
    iconName: "Wifi",
    description: "Ultra-fast Gigabit Wi-Fi throughout all rooms, suites, meeting spaces and pool terrace.",
    hours: "24/7 Unlimited",
    highlight: "Gigabit Speed",
  },
  {
    id: "pool",
    title: "Swimming Pool",
    iconName: "Waves",
    description: "Heated rooftop infinity pool with temperature control, sun terrace and panoramic city views.",
    hours: "06:00 - 21:00",
    highlight: "Rooftop Infinity",
  },
  {
    id: "fitness",
    title: "Fitness Center",
    iconName: "Dumbbell",
    description: "Equipped with state-of-the-art TechnoGym cardio, free weights, and certified personal trainers.",
    hours: "24 Hours Daily",
    highlight: "TechnoGym Pro",
  },
  {
    id: "dining",
    title: "Multi-cuisine Restaurant",
    iconName: "UtensilsCrossed",
    description: "Award-winning fine dining serving authentic South Indian, North Indian royal cuisine, and Continental classics.",
    hours: "06:30 - 23:30",
    highlight: "Chef Curated",
  },
  {
    id: "roomservice",
    title: "24/7 Room Service",
    iconName: "BellRing",
    description: "Prompt in-room dining service crafted by our master culinary brigade delivered warm to your suite.",
    hours: "24/7 Always Available",
    highlight: "Fast In-Room Delivery",
  },
  {
    id: "business",
    title: "Business Center",
    iconName: "Briefcase",
    description: "High-tech executive workstations, private call pods, color laser printing, and secretarial support.",
    hours: "07:00 - 23:00",
    highlight: "Executive Pods",
  },
  {
    id: "banquet",
    title: "Conference & Banquet Halls",
    iconName: "Users",
    description: "Elegant pillarless ballroom accommodating up to 350 guests for conferences, gala dinners and celebrations.",
    hours: "Reservations Required",
    highlight: "Up to 350 Guests",
  },
  {
    id: "transfer",
    title: "Airport Transfer",
    iconName: "Car",
    description: "Chauffeured luxury Mercedes & BMW fleet available for seamless airport pick-up and drop-off.",
    hours: "On-demand 24/7",
    highlight: "Luxury Fleet",
  },
];

export const DINING_HIGHLIGHTS: DiningCategory[] = [
  {
    title: "South Indian",
    subtitle: "Specialties",
    tag: "Traditional Heritage",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80",
    description: "Crisp ghee roast dosas, fluffy steamed idlis, Chettinad spiced gravies and fragrant filter coffee.",
  },
  {
    title: "Continental",
    subtitle: "Favorites",
    tag: "European Bistro",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    description: "Wood-fired artisanal sourdough, pan-seared Norwegian salmon, handcrafted pasta and classic steaks.",
  },
  {
    title: "Authentic",
    subtitle: "North Indian",
    tag: "Royal Awadhi & Mughlai",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
    description: "Slow-simmered Dal Makhani, saffron infused Dum Biryani, succulent tandoor kebabs and butter naan.",
  },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "m1",
    name: "Oakridge Mysore Masala Dosa",
    category: "South Indian",
    price: 420,
    description: "Crisp golden crepe smeared with spicy red garlic-chili paste, stuffed with spiced potato mash, served with trio of artisanal chutneys.",
    isVeg: true,
    isChefSpecial: true,
  },
  {
    id: "m2",
    name: "Chettinad Pepper Chicken",
    category: "South Indian",
    price: 750,
    description: "Tender chicken morsels slow-tossed in freshly cracked Tellicherry black pepper, shallots, and fragrant curry leaves.",
    isVeg: false,
    isChefSpecial: true,
  },
  {
    id: "m3",
    name: "Steamed Kanchipuram Idli Platter",
    category: "South Indian",
    price: 380,
    description: "Traditional tempered idlis infused with cumin, ginger and crushed peppercorns, served with drumstick sambar.",
    isVeg: true,
  },
  {
    id: "m4",
    name: "Royal Dal Makhani 18-Hour",
    category: "North Indian",
    price: 580,
    description: "Black lentils slow-cooked overnight on gentle charcoal embers, enriched with fresh dairy butter and cream.",
    isVeg: true,
    isChefSpecial: true,
  },
  {
    id: "m5",
    name: "Awadhi Gosht Dum Biryani",
    category: "North Indian",
    price: 890,
    description: "Aged long-grain Basmati rice and prime tender mutton cuts sealed in clay handi with saffron and rose water.",
    isVeg: false,
    isChefSpecial: true,
  },
  {
    id: "m6",
    name: "Paneer Tikka Angara",
    category: "North Indian",
    price: 550,
    description: "Farm-fresh cottage cheese cubes marinated in Kashmiri chili and hung curd, charred over fragrant tandoor coals.",
    isVeg: true,
  },
  {
    id: "m7",
    name: "Pan-Seared Norwegian Salmon",
    category: "Continental",
    price: 1250,
    description: "Crispy skin Atlantic salmon served over saffron risotto, tender asparagus spears, and lemon caper emulsion.",
    isVeg: false,
    isChefSpecial: true,
  },
  {
    id: "m8",
    name: "Wild Mushroom & Truffle Fettuccine",
    category: "Continental",
    price: 780,
    description: "House-made egg fettuccine with Porcini and Portobello ragout, finished with aged Parmigiano Reggiano and black truffle oil.",
    isVeg: true,
  },
  {
    id: "m9",
    name: "Oakridge Signature Filter Kaapi",
    category: "Beverages & Wine",
    price: 240,
    description: "Heritage blend of Chikmagalur Arabica and Robusta beans brewed in traditional brass filter with frothy creamy milk.",
    isVeg: true,
  },
  {
    id: "m10",
    name: "Sula Dindori Reserve Shiraz",
    category: "Beverages & Wine",
    price: 950,
    description: "Glass of full-bodied Indian red wine with aromas of lush berries, vanilla, and gentle oak spice.",
    isVeg: true,
  },
];

export const LOCATION_HIGHLIGHTS: LocationHighlight[] = [
  {
    distance: "2 km",
    place: "MG Road",
    description: "The vibrant heart of Bangalore with premier shopping malls, colonial architecture, and metro connectivity.",
  },
  {
    distance: "5 km",
    place: "Bangalore Palace",
    description: "Majestic Tudor-style royal residence set amid lush green grounds in central Bangalore.",
  },
  {
    distance: "8 km",
    place: "Bangalore Airport Express Hub",
    description: "Seamless flyover corridor access to Kempegowda International Airport and Cantt Railway Station.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "The Oakridge Hotel made our Bangalore trip truly special. Great location, excellent service and very comfortable rooms. Highly recommended!",
    name: "Priya Sharma",
    role: "Business Traveler",
    city: "Mumbai",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    date: "Stayed September 2025",
  },
  {
    id: "t2",
    quote: "Exceptional luxury in the heart of Bangalore. The rooftop pool offers breathtaking skyline views at sunset, and the South Indian breakfast was the best I've tasted in Karnataka.",
    name: "Rajesh Menon",
    role: "Managing Director, Tech Ventures",
    city: "Singapore",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    date: "Stayed August 2025",
  },
  {
    id: "t3",
    quote: "The Executive Room was pristine and quiet for my remote work meetings. The staff anticipates every need with warmth and discretion. Will definitely return.",
    name: "David Harrison",
    role: "Senior Consultant",
    city: "London, UK",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    date: "Stayed July 2025",
  },
  {
    id: "t4",
    quote: "A five-star experience from arrival to departure. Fast check-in, spacious suites with thoughtful attention to detail, and prime proximity to MG Road.",
    name: "Anita Desai",
    role: "Architectural Designer",
    city: "New Delhi",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    date: "Stayed June 2025",
  },
];

export const GALLERY_IMAGES = [
  {
    title: "Grand Facade at Twilight",
    category: "Exterior",
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Infinity Rooftop Pool",
    category: "Amenities",
    url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Presidential Living Salon",
    category: "Suites",
    url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "The Oakridge Restaurant",
    category: "Dining",
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Executive King Room",
    category: "Rooms",
    url: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Aura Wellness Spa & Lounge",
    category: "Wellness",
    url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
  },
];
