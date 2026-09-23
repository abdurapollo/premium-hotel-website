import { MapPin, Sparkles, Utensils } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface HeroProps {
  children?: React.ReactNode;
}

export default function Hero({ children }: HeroProps) {
  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-20 sm:pb-24 overflow-hidden bg-[#071A36]">
      {/* Background Image: Luxurious Hotel Exterior at Dusk/Night */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85"
          alt="The Oakridge Hotel Bangalore Exterior"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform animate-fade-in"
        />
        {/* Dark Navy Gradient Overlay for high text contrast & luxury depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A36]/95 via-[#071A36]/80 to-[#071A36]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071A36] via-transparent to-black/30" />
      </div>

      {/* Hero Content - Positioned toward the left */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-10 lg:py-16">
        <div className="max-w-2xl lg:max-w-3xl text-left">
          {/* Small uppercase label */}
          <div className="inline-flex items-center gap-2 mb-4 tracking-[0.28em] text-xs sm:text-sm font-semibold uppercase text-[#D8B867]">
            <span>STAY</span>
            <span className="text-[#C9A24D]/60">•</span>
            <span>RELAX</span>
            <span className="text-[#C9A24D]/60">•</span>
            <span>EXPLORE</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.08] mb-6 text-white text-balance">
            Your Perfect Stay <br />
            <span className="text-white/90">in </span>
            <span className="text-[#C9A24D] font-normal italic">Bangalore</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg lg:text-xl text-[#F8F7F3]/90 font-light leading-relaxed mb-10 max-w-xl">
            {HOTEL_INFO.description}
          </p>

          {/* 3 Feature Highlights with elegant line icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4 border-t border-white/15 max-w-2xl">
            {/* Highlight 1: Prime Location */}
            <div className="flex items-start gap-3 group">
              <div className="w-10 h-10 rounded-full bg-[#C9A24D]/15 border border-[#C9A24D]/40 flex items-center justify-center shrink-0 text-[#D8B867] group-hover:bg-[#C9A24D] group-hover:text-[#071A36] transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white tracking-wide">
                  Prime Location
                </h4>
                <p className="text-xs text-[#F8F7F3]/75 mt-0.5">
                  Near MG Road
                </p>
              </div>
            </div>

            {/* Highlight 2: Premium Comfort */}
            <div className="flex items-start gap-3 group">
              <div className="w-10 h-10 rounded-full bg-[#C9A24D]/15 border border-[#C9A24D]/40 flex items-center justify-center shrink-0 text-[#D8B867] group-hover:bg-[#C9A24D] group-hover:text-[#071A36] transition-colors">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white tracking-wide">
                  Premium Comfort
                </h4>
                <p className="text-xs text-[#F8F7F3]/75 mt-0.5">
                  Modern Rooms & Suites
                </p>
              </div>
            </div>

            {/* Highlight 3: Exceptional Dining */}
            <div className="flex items-start gap-3 group">
              <div className="w-10 h-10 rounded-full bg-[#C9A24D]/15 border border-[#C9A24D]/40 flex items-center justify-center shrink-0 text-[#D8B867] group-hover:bg-[#C9A24D] group-hover:text-[#071A36] transition-colors">
                <Utensils className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white tracking-wide">
                  Exceptional Dining
                </h4>
                <p className="text-xs text-[#F8F7F3]/75 mt-0.5">
                  Multi-cuisine Restaurant
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Booking Search Bar slot overlapping bottom */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mb-12 lg:-mb-16">
        {children}
      </div>
    </section>
  );
}
