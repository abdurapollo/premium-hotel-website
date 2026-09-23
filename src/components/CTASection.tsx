import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface CTASectionProps {
  onBookNow: () => void;
}

export default function CTASection({ onBookNow }: CTASectionProps) {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden bg-[#071A36]">
      {/* Dark luxury background image with texture */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85"
          alt="The Oakridge Luxury Hotel"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter brightness-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A36] via-[#071A36]/90 to-[#102747]/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
          {/* Left: Hotel Logo Crest */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border border-[#C9A24D]/60 flex items-center justify-center bg-[#071A36]/80 text-[#C9A24D] shadow-inner">
              <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 text-[#C9A24D]">
                <path
                  d="M20 7C20 7 24 14 24 19C24 21.2 22.2 23 20 23C17.8 23 16 21.2 16 19C16 14 20 7 20 7Z"
                  fill="currentColor"
                />
                <path
                  d="M20 23C18 23 12 21 10 16C13.5 15.5 17.5 18 19 21.5C19.3 22.1 19.6 22.6 20 23Z"
                  fill="#D8B867"
                  opacity="0.85"
                />
                <path
                  d="M20 23C22 23 28 21 30 16C26.5 15.5 22.5 18 21 21.5C20.7 22.1 20.4 22.6 20 23Z"
                  fill="#D8B867"
                  opacity="0.85"
                />
                <path
                  d="M13 25C15.5 24 18 24 20 25C22 24 24.5 24 27 25C24.5 28 21.5 29 20 29C18.5 29 15.5 28 13 25Z"
                  fill="#C9A24D"
                />
              </svg>
            </div>
            <div className="text-left">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.18em] text-white block">
                {HOTEL_INFO.name}
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#D8B867] uppercase">
                {HOTEL_INFO.subtitle}
              </span>
            </div>
          </div>

          {/* Center: Headline & Subheading */}
          <div className="text-center lg:text-left flex-1 max-w-xl">
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-tight text-balance">
              Ready for a memorable stay?
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[#F8F7F3]/85 font-light">
              Book directly for the best rates and exclusive offers.
            </p>
            <div className="mt-3 flex items-center justify-center lg:justify-start gap-4 text-xs text-[#D8B867]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" /> Best Price Guarantee
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Free Cancellation
              </span>
            </div>
          </div>

          {/* Right: Gold Button */}
          <div className="shrink-0 w-full sm:w-auto text-center">
            <button
              onClick={onBookNow}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#071A36] bg-[#C9A24D] hover:bg-[#D8B867] transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#C9A24D]/30 transform hover:-translate-y-1 cursor-pointer whitespace-nowrap"
            >
              <span>Book Your Stay</span>
              <ArrowRight className="w-4 h-4 text-[#071A36]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
