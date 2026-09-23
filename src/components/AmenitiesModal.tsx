import {
  X,
  Wifi,
  Waves,
  Dumbbell,
  UtensilsCrossed,
  BellRing,
  Briefcase,
  Users,
  Car,
  Clock,
  Sparkles,
} from 'lucide-react';
import { AMENITIES, HOTEL_INFO } from '../data/hotelData';

interface AmenitiesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookNow?: () => void;
}

export default function AmenitiesModal({
  isOpen,
  onClose,
  onBookNow,
}: AmenitiesModalProps) {
  if (!isOpen) return null;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wifi':
        return <Wifi className="w-5 h-5 text-[#C9A24D]" />;
      case 'Waves':
        return <Waves className="w-5 h-5 text-[#C9A24D]" />;
      case 'Dumbbell':
        return <Dumbbell className="w-5 h-5 text-[#C9A24D]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-[#C9A24D]" />;
      case 'BellRing':
        return <BellRing className="w-5 h-5 text-[#C9A24D]" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-[#C9A24D]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#C9A24D]" />;
      case 'Car':
        return <Car className="w-5 h-5 text-[#C9A24D]" />;
      default:
        return <Waves className="w-5 h-5 text-[#C9A24D]" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="relative bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-[#C9A24D]/30 my-8">
        {/* Header */}
        <div className="bg-[#071A36] text-white px-6 sm:px-8 py-6 flex items-center justify-between border-b border-[#C9A24D]/30">
          <div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#D8B867] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Guest Services Directory</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide mt-1">
              Hotel Amenities & Experiences
            </h3>
            <p className="text-xs text-[#F8F7F3]/75 mt-0.5">
              Curated for utmost comfort, relaxation, and executive productivity
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close amenities"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Grid */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {AMENITIES.map((amenity) => (
              <div
                key={amenity.id}
                className="bg-[#F8F7F3] p-5 rounded-2xl border border-neutral-200 hover:border-[#C9A24D]/50 transition-colors flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#071A36] flex items-center justify-center shrink-0 shadow-sm">
                  {getIcon(amenity.iconName)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-serif text-base font-semibold text-[#172238]">
                      {amenity.title}
                    </h4>
                    <span className="text-[10px] uppercase tracking-wider text-[#C9A24D] font-bold bg-[#C9A24D]/10 px-2 py-0.5 rounded">
                      {amenity.highlight}
                    </span>
                  </div>

                  <p className="text-xs text-[#667085] mt-1.5 leading-relaxed font-light">
                    {amenity.description}
                  </p>

                  <div className="mt-3 flex items-center gap-1.5 text-[11px] text-[#172238] font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#C9A24D]" />
                    <span>Operating Hours: {amenity.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Callout */}
          <div className="bg-[#071A36] text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-serif text-lg font-bold text-white">
                Require Bespoke Concierge Assistance?
              </h4>
              <p className="text-xs text-white/75 mt-0.5">
                Our front desk is available 24/7 to coordinate airport limousine transfers, banquet bookings, or private city tours.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="px-5 py-2.5 rounded-full border border-white/30 text-xs font-semibold hover:border-white hover:text-white transition-colors whitespace-nowrap"
              >
                Call Concierge
              </a>
              {onBookNow && (
                <button
                  onClick={() => {
                    onClose();
                    onBookNow();
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#C9A24D] text-[#071A36] text-xs font-bold uppercase tracking-wider hover:bg-[#D8B867] transition-colors whitespace-nowrap cursor-pointer"
                >
                  Book Your Stay
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
