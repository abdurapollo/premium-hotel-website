import { useState, useRef, useEffect } from 'react';
import { Calendar, Users, ChevronDown, Sparkles, Check, AlertCircle } from 'lucide-react';

export interface BookingSearchParams {
  checkIn: string;
  checkOut: string;
  adults: number;
  childrenCount: number;
  nights: number;
}

interface BookingFormProps {
  onCheckAvailability: (params: BookingSearchParams) => void;
}

export default function BookingForm({ onCheckAvailability }: BookingFormProps) {
  // Default dates: Sat, 27 Sep 2025 to Sun, 28 Sep 2025 as requested in the brief
  const [checkIn, setCheckIn] = useState('2025-09-27');
  const [checkOut, setCheckOut] = useState('2025-09-28');
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [guestPickerOpen, setGuestPickerOpen] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const checkInInputRef = useRef<HTMLInputElement>(null);
  const checkOutInputRef = useRef<HTMLInputElement>(null);
  const guestPickerRef = useRef<HTMLDivElement>(null);

  // Close guest picker when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        guestPickerRef.current &&
        !guestPickerRef.current.contains(event.target as Node)
      ) {
        setGuestPickerOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatDateDisplay = (dateString: string) => {
    if (!dateString) return 'Select date';
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  const calculateNights = () => {
    const inDate = new Date(checkIn + 'T00:00:00');
    const outDate = new Date(checkOut + 'T00:00:00');
    const diffTime = outDate.getTime() - inDate.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const openDatePicker = (inputRef: React.RefObject<HTMLInputElement | null>) => {
    if (inputRef.current) {
      if ('showPicker' in HTMLInputElement.prototype && typeof inputRef.current.showPicker === 'function') {
        try {
          inputRef.current.showPicker();
        } catch {
          inputRef.current.focus();
        }
      } else {
        inputRef.current.focus();
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    if (!checkIn) {
      setValidationError('Please select a valid check-in date.');
      return;
    }
    if (!checkOut) {
      setValidationError('Please select a valid check-out date.');
      return;
    }

    const inDate = new Date(checkIn + 'T00:00:00');
    const outDate = new Date(checkOut + 'T00:00:00');

    if (outDate <= inDate) {
      setValidationError('Check-out date must be after check-in date.');
      return;
    }

    const nights = calculateNights();
    onCheckAvailability({
      checkIn,
      checkOut,
      adults,
      childrenCount,
      nights: nights > 0 ? nights : 1,
    });
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl lg:rounded-3xl p-4 sm:p-5 lg:p-6 shadow-2xl shadow-[#071A36]/20 border border-[#C9A24D]/30 transition-all duration-300"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3 lg:gap-4 items-center">
          {/* Field 1: Check In */}
          <div
            onClick={() => openDatePicker(checkInInputRef)}
            className="lg:col-span-3 bg-[#F8F7F3] hover:bg-[#F3F1EA] p-3 rounded-xl border border-neutral-200/80 hover:border-[#C9A24D]/60 transition-all cursor-pointer relative group"
          >
            <div className="flex items-center justify-between">
              <label className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#667085] cursor-pointer">
                Check In
              </label>
              <Calendar className="w-4 h-4 text-[#C9A24D] group-hover:scale-110 transition-transform" />
            </div>
            <div className="mt-1 flex items-center">
              <input
                ref={checkInInputRef}
                type="date"
                value={checkIn}
                onChange={(e) => {
                  setCheckIn(e.target.value);
                  setValidationError(null);
                }}
                className="w-full bg-transparent text-sm sm:text-base font-bold text-[#172238] focus:outline-none cursor-pointer"
              />
            </div>
            <p className="text-[11px] text-[#667085] mt-0.5 truncate">
              {formatDateDisplay(checkIn)}
            </p>
          </div>

          {/* Field 2: Check Out */}
          <div
            onClick={() => openDatePicker(checkOutInputRef)}
            className="lg:col-span-3 bg-[#F8F7F3] hover:bg-[#F3F1EA] p-3 rounded-xl border border-neutral-200/80 hover:border-[#C9A24D]/60 transition-all cursor-pointer relative group"
          >
            <div className="flex items-center justify-between">
              <label className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#667085] cursor-pointer">
                Check Out
              </label>
              <Calendar className="w-4 h-4 text-[#C9A24D] group-hover:scale-110 transition-transform" />
            </div>
            <div className="mt-1 flex items-center">
              <input
                ref={checkOutInputRef}
                type="date"
                value={checkOut}
                min={checkIn}
                onChange={(e) => {
                  setCheckOut(e.target.value);
                  setValidationError(null);
                }}
                className="w-full bg-transparent text-sm sm:text-base font-bold text-[#172238] focus:outline-none cursor-pointer"
              />
            </div>
            <p className="text-[11px] text-[#667085] mt-0.5 truncate">
              {formatDateDisplay(checkOut)}
            </p>
          </div>

          {/* Field 3: Guests Selector */}
          <div className="lg:col-span-3 relative" ref={guestPickerRef}>
            <div
              onClick={() => setGuestPickerOpen(!guestPickerOpen)}
              className="bg-[#F8F7F3] hover:bg-[#F3F1EA] p-3 rounded-xl border border-neutral-200/80 hover:border-[#C9A24D]/60 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <label className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#667085] cursor-pointer">
                  Guests
                </label>
                <Users className="w-4 h-4 text-[#C9A24D] group-hover:scale-110 transition-transform" />
              </div>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-sm sm:text-base font-bold text-[#172238] truncate">
                  {adults} {adults === 1 ? 'Adult' : 'Adults'}, {childrenCount}{' '}
                  {childrenCount === 1 ? 'Child' : 'Children'}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#667085] transition-transform duration-200 shrink-0 ml-1 ${
                    guestPickerOpen ? 'rotate-180 text-[#C9A24D]' : ''
                  }`}
                />
              </div>
              <p className="text-[11px] text-[#667085] mt-0.5">
                {adults + childrenCount} Guests • {calculateNights() > 0 ? calculateNights() : 1} Night(s)
              </p>
            </div>

            {/* Guest Popover Dropdown */}
            {guestPickerOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-neutral-200 p-4 z-50 animate-fade-in min-w-[260px]">
                <div className="space-y-4">
                  {/* Adults */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-[#172238]">Adults</p>
                      <p className="text-[10px] text-[#667085]">Ages 13 and above</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setAdults(Math.max(1, adults - 1));
                        }}
                        disabled={adults <= 1}
                        className="w-8 h-8 rounded-lg border border-neutral-200 text-[#172238] flex items-center justify-center font-bold hover:bg-neutral-100 disabled:opacity-40 cursor-pointer"
                      >
                        -
                      </button>
                      <span className="text-sm font-semibold w-4 text-center">
                        {adults}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setAdults(Math.min(6, adults + 1));
                        }}
                        disabled={adults >= 6}
                        className="w-8 h-8 rounded-lg border border-neutral-200 text-[#172238] flex items-center justify-center font-bold hover:bg-neutral-100 disabled:opacity-40 cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="flex items-center justify-between pt-2 border-t border-neutral-100">
                    <div>
                      <p className="text-xs font-semibold text-[#172238]">Children</p>
                      <p className="text-[10px] text-[#667085]">Ages 0 to 12</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setChildrenCount(Math.max(0, childrenCount - 1));
                        }}
                        disabled={childrenCount <= 0}
                        className="w-8 h-8 rounded-lg border border-neutral-200 text-[#172238] flex items-center justify-center font-bold hover:bg-neutral-100 disabled:opacity-40 cursor-pointer"
                      >
                        -
                      </button>
                      <span className="text-sm font-semibold w-4 text-center">
                        {childrenCount}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setChildrenCount(Math.min(4, childrenCount + 1));
                        }}
                        disabled={childrenCount >= 4}
                        className="w-8 h-8 rounded-lg border border-neutral-200 text-[#172238] flex items-center justify-center font-bold hover:bg-neutral-100 disabled:opacity-40 cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setGuestPickerOpen(false);
                    }}
                    className="w-full mt-2 py-2 bg-[#071A36] text-[#D8B867] rounded-xl text-xs font-semibold hover:bg-[#102747] transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Action: Gold Button Check Availability */}
          <div className="lg:col-span-3">
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase text-[#071A36] bg-[#C9A24D] hover:bg-[#D8B867] transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-[#C9A24D]/30 flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
            >
              <Sparkles className="w-4 h-4 text-[#071A36]" />
              <span>Check Availability</span>
            </button>
            <p className="text-[11px] text-[#667085] mt-1.5 text-center flex items-center justify-center gap-1">
              <Check className="w-3.5 h-3.5 text-[#C9A24D]" />
              <span className="font-medium text-[#172238]">Best Rate Direct Guarantee</span>
            </p>
          </div>
        </div>

        {/* Validation Error Feedback */}
        {validationError && (
          <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-xs text-red-700 animate-fade-in">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
            <span>{validationError}</span>
          </div>
        )}
      </form>
    </div>
  );
}
