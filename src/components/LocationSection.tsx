import { ArrowRight, MapPin, Navigation, Compass } from 'lucide-react';
import { HOTEL_INFO, LOCATION_HIGHLIGHTS } from '../data/hotelData';
import ImageWithFallback from './ImageWithFallback';

export default function LocationSection() {
  return (
    <section id="location" className="py-24 sm:py-32 bg-[#F8F7F3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Bangalore city / MG Road imagery + Map floating card */}
          <div className="lg:col-span-6 relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#071A36]/15 border border-[#C9A24D]/25">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80"
                alt="Bangalore MG Road and Skyline"
                className="w-full h-[360px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                containerClassName="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A36]/80 via-transparent to-black/20 pointer-events-none" />

              {/* Floating Address Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#071A36]/90 backdrop-blur-md border border-[#C9A24D]/30 text-white shadow-xl">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#C9A24D] text-[#071A36] flex items-center justify-center shrink-0 shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold tracking-wide text-white">
                      The Oakridge Hotel & Suites
                    </h4>
                    <p className="text-xs text-[#F8F7F3]/80 mt-0.5 leading-relaxed">
                      {HOTEL_INFO.address}
                    </p>
                    <div className="mt-2.5 flex items-center gap-3 text-[11px] text-[#D8B867]">
                      <span className="flex items-center gap-1 font-medium">
                        <Navigation className="w-3 h-3" />
                        5 mins walk from MG Road Metro
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Gold Accent Frame Behind */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 -z-10 w-full h-full border-2 border-[#C9A24D]/30 rounded-3xl" />
          </div>

          {/* Right Column: Header, Copy, 3 Highlights, View on Map */}
          <div className="lg:col-span-6">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A24D] block mb-2">
              OUR LOCATION
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#172238] tracking-tight leading-tight text-balance">
              In the Heart <br />
              <span className="italic font-medium">of Bangalore</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#667085] font-light leading-relaxed max-w-xl">
              Located in the bustling area of MG Road, our hotel offers easy access to major business hubs, shopping centers and tourist attractions.
            </p>

            {/* 3 Location Highlights */}
            <div className="mt-8 space-y-4">
              {LOCATION_HIGHLIGHTS.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-5 rounded-2xl border border-neutral-200/80 shadow-sm flex items-center gap-5 hover:border-[#C9A24D]/50 transition-colors"
                >
                  <div className="w-16 sm:w-20 py-2 rounded-xl bg-[#071A36] text-[#D8B867] flex flex-col items-center justify-center shrink-0">
                    <span className="font-serif text-lg sm:text-xl font-bold leading-none">
                      {highlight.distance}
                    </span>
                    <span className="text-[10px] text-white/70 uppercase tracking-widest mt-1">
                      Away
                    </span>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-[#172238] leading-tight">
                      {highlight.place}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#667085] mt-1 font-light leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* View on Map Link / Button */}
            <div className="mt-8">
              <a
                href={HOTEL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#071A36] text-white hover:bg-[#102747] hover:text-[#D8B867] transition-all duration-200 shadow-md cursor-pointer transform hover:-translate-y-0.5"
              >
                <Compass className="w-4 h-4 text-[#C9A24D]" />
                <span>View on Map</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-[#C9A24D]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
