import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/hotelData';
import ImageWithFallback from './ImageWithFallback';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlay, nextSlide]);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C9A24D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A24D] block mb-2">
            WHAT OUR GUESTS SAY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#172238] tracking-tight leading-tight">
            Loved by Travelers
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#667085] font-light">
            Genuine experiences from guests around the world who chose The Oakridge Bangalore.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative bg-[#F8F7F3] rounded-3xl p-8 sm:p-12 lg:p-16 border border-neutral-200/80 shadow-xl shadow-[#071A36]/5"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Large Decorative Quote Icon */}
          <div className="absolute top-6 right-8 sm:top-10 sm:right-12 text-[#C9A24D]/20">
            <Quote className="w-16 h-16 sm:w-24 sm:h-24" />
          </div>

          <div className="relative z-10">
            {/* 5-Star Rating */}
            <div className="flex items-center gap-1 mb-6 text-[#C9A24D]">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#172238] font-normal leading-relaxed italic mb-8 sm:mb-10 min-h-[90px] sm:min-h-[110px] transition-opacity duration-300">
              "{current.quote}"
            </blockquote>

            {/* Guest Details: Avatar, Name, Role */}
            <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-neutral-200">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#C9A24D] shadow-md shrink-0">
                  <ImageWithFallback
                    src={current.avatar}
                    alt={current.name}
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#172238] leading-tight">
                    {current.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#667085] mt-0.5">
                    {current.role}
                    {current.city && ` • ${current.city}`}
                  </p>
                </div>
              </div>

              {/* Prev / Next Navigation Arrows */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevSlide}
                  aria-label="Previous testimonial"
                  className="w-11 h-11 rounded-full border border-neutral-300 bg-white hover:bg-[#071A36] hover:text-white hover:border-[#071A36] text-[#172238] flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next testimonial"
                  className="w-11 h-11 rounded-full border border-neutral-300 bg-white hover:bg-[#071A36] hover:text-white hover:border-[#071A36] text-[#172238] flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? 'w-8 bg-[#C9A24D]'
                  : 'w-2.5 bg-neutral-300 hover:bg-neutral-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
