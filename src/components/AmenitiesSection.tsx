import {
  Wifi,
  Waves,
  Dumbbell,
  UtensilsCrossed,
  BellRing,
  Briefcase,
  Users,
  Car,
  ArrowRight,
} from 'lucide-react';
import { AMENITIES } from '../data/hotelData';

interface AmenitiesSectionProps {
  onExploreAmenities: () => void;
}

export default function AmenitiesSection({ onExploreAmenities }: AmenitiesSectionProps) {
  // Mapping icons to amenities
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wifi':
        return <Wifi className="w-6 h-6 text-white stroke-[1.75]" />;
      case 'Waves':
        return <Waves className="w-6 h-6 text-white stroke-[1.75]" />;
      case 'Dumbbell':
        return <Dumbbell className="w-6 h-6 text-white stroke-[1.75]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6 text-white stroke-[1.75]" />;
      case 'BellRing':
        return <BellRing className="w-6 h-6 text-white stroke-[1.75]" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-white stroke-[1.75]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-white stroke-[1.75]" />;
      case 'Car':
        return <Car className="w-6 h-6 text-white stroke-[1.75]" />;
      default:
        return <Waves className="w-6 h-6 text-white stroke-[1.75]" />;
    }
  };

  return (
    <section id="amenities" className="relative py-28 sm:py-36 overflow-hidden bg-[#071A36]">
      {/* Background Image: Luxurious Swimming Pool at Dusk */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=2000&q=85"
          alt="The Oakridge Infinity Swimming Pool"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-60"
        />
        {/* Dark Navy Overlay for optimal text contrast and mood */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A36]/95 via-[#071A36]/90 to-[#071A36]/75" />
        <div className="absolute inset-0 bg-[#071A36]/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-5 text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D8B867] block mb-2">
              AMENITIES
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-tight text-balance">
              Everything You Need <br />
              <span className="text-[#C9A24D] italic font-medium">for a Memorable Stay</span>
            </h2>

            <p className="mt-5 text-base sm:text-lg text-[#F8F7F3]/85 font-light leading-relaxed max-w-lg">
              From fine dining to modern facilities, we ensure your stay is comfortable, convenient and delightful.
            </p>

            {/* Gold outlined button */}
            <div className="mt-8">
              <button
                onClick={onExploreAmenities}
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#D8B867] border-2 border-[#C9A24D] hover:bg-[#C9A24D] hover:text-[#071A36] transition-all duration-300 shadow-lg cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Explore All Amenities</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Clean White Line Icon Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {AMENITIES.map((amenity) => (
                <div
                  key={amenity.id}
                  onClick={onExploreAmenities}
                  className="group bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/15 hover:border-[#C9A24D]/60 rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col items-center text-center cursor-pointer transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 group-hover:bg-[#C9A24D] flex items-center justify-center transition-colors duration-300 mb-3.5 text-white group-hover:text-[#071A36]">
                    {getIcon(amenity.iconName)}
                  </div>
                  <h4 className="text-xs sm:text-sm font-medium tracking-wide text-white group-hover:text-[#D8B867] transition-colors leading-snug">
                    {amenity.title}
                  </h4>
                  <span className="text-[10px] text-white/50 tracking-wider uppercase mt-1">
                    {amenity.highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
