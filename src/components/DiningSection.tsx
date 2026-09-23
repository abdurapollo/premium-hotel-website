import { ArrowRight, Utensils, Award } from 'lucide-react';
import { DINING_HIGHLIGHTS } from '../data/hotelData';
import ImageWithFallback from './ImageWithFallback';

interface DiningSectionProps {
  onViewMenu: (category?: string) => void;
}

export default function DiningSection({ onViewMenu }: DiningSectionProps) {
  return (
    <section id="dining" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Premium Restaurant Image */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#071A36]/15 border border-[#C9A24D]/20">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
                alt="The Oakridge Fine Dining Restaurant"
                className="w-full h-[380px] sm:h-[480px] lg:h-[540px] object-cover group-hover:scale-105 transition-transform duration-700"
                containerClassName="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A36]/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Award / Chef Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#071A36]/90 backdrop-blur-md border border-[#C9A24D]/30 text-white flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#C9A24D]/20 flex items-center justify-center text-[#D8B867] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D8B867]">
                    Michelin-Trained Master Chef
                  </h4>
                  <p className="text-[11px] text-[#F8F7F3]/80">
                    Artisanal heritage flavors meets contemporary culinary craft
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Gold Accent Frame Behind */}
            <div className="hidden sm:block absolute -top-4 -left-4 -z-10 w-full h-full border-2 border-[#C9A24D]/30 rounded-3xl" />
          </div>

          {/* Right Column: Header, Copy, View Menu Button & 3 Food Cards */}
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A24D] block mb-2">
              DINING
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#172238] tracking-tight leading-tight text-balance">
              A Culinary Journey <br />
              <span className="italic font-medium">at Our Restaurant</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#667085] font-light leading-relaxed max-w-xl">
              Indulge in a delightful selection of local and international cuisines, prepared with the finest ingredients.
            </p>

            <div className="mt-6 mb-10">
              <button
                onClick={() => onViewMenu()}
                className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C9A24D] text-[#071A36] hover:bg-[#D8B867] transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#C9A24D]/20 cursor-pointer transform hover:-translate-y-0.5"
              >
                <Utensils className="w-4 h-4" />
                <span>View Menu</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Below/Right: 3 Small Food Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 pt-4 border-t border-neutral-100">
              {DINING_HIGHLIGHTS.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => onViewMenu(item.title)}
                  className="group bg-[#F8F7F3] hover:bg-white rounded-2xl overflow-hidden border border-neutral-200/70 hover:border-[#C9A24D]/40 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col"
                >
                  <div className="relative h-32 overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={`${item.title} ${item.subtitle}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      containerClassName="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div className="p-3.5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-serif text-base font-semibold text-[#172238] group-hover:text-[#C9A24D] transition-colors leading-tight">
                        {item.title} <br />
                        <span className="font-sans font-normal text-xs text-[#667085]">{item.subtitle}</span>
                      </h4>
                      <p className="text-[11px] text-[#667085] mt-1.5 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#C9A24D] mt-3 group-hover:underline">
                      Explore dishes <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
