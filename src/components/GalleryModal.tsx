import { useState } from 'react';
import { X, Sparkles, Filter } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/hotelData';
import ImageWithFallback from './ImageWithFallback';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookNow?: () => void;
}

export default function GalleryModal({
  isOpen,
  onClose,
  onBookNow,
}: GalleryModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  if (!isOpen) return null;

  const categories = ['All', 'Exterior', 'Rooms', 'Suites', 'Dining', 'Amenities', 'Wellness'];

  const filteredImages =
    selectedCategory === 'All'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === selectedCategory);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="relative bg-white rounded-3xl max-w-5xl w-full overflow-hidden shadow-2xl border border-[#C9A24D]/30 my-8">
        {/* Header */}
        <div className="bg-[#071A36] text-white px-6 sm:px-8 py-6 flex items-center justify-between border-b border-[#C9A24D]/30">
          <div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#D8B867] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Visual Showcase</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide mt-1">
              Photo Gallery
            </h3>
            <p className="text-xs text-[#F8F7F3]/75 mt-0.5">
              Explore the timeless elegance and contemporary architecture of The Oakridge Bangalore
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close gallery"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Filters */}
        <div className="bg-[#F8F7F3] px-6 sm:px-8 py-3.5 border-b border-neutral-200 overflow-x-auto flex items-center gap-2">
          <Filter className="w-4 h-4 text-[#C9A24D] mr-1 shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#071A36] text-[#D8B867] shadow-sm'
                  : 'text-[#667085] hover:text-[#172238] hover:bg-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setActivePhoto(image.url)}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-neutral-100 h-64"
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  containerClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-[#D8B867] font-semibold block mb-0.5">
                    {image.category}
                  </span>
                  <h4 className="font-serif text-base font-medium leading-snug">
                    {image.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#667085]">
              Experience these spaces in person with our exclusive direct booking privileges.
            </p>
            {onBookNow && (
              <button
                onClick={() => {
                  onClose();
                  onBookNow();
                }}
                className="px-6 py-2.5 rounded-full bg-[#C9A24D] text-[#071A36] text-xs font-semibold uppercase tracking-wider hover:bg-[#D8B867] transition-colors cursor-pointer shadow-sm"
              >
                Book Your Stay
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Expanded Lightbox */}
      {activePhoto && (
        <div
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
        >
          <button
            onClick={() => setActivePhoto(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={activePhoto}
            alt="Expanded view"
            referrerPolicy="no-referrer"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
