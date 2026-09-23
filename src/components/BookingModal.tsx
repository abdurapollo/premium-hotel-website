import { useState } from 'react';
import { X, Check, Bed, Calendar, Users, ShieldCheck, Sparkles, CheckCircle, Printer } from 'lucide-react';
import { Room, ROOMS } from '../data/hotelData';
import { BookingSearchParams } from './BookingForm';
import ImageWithFallback from './ImageWithFallback';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoom?: Room | null;
  searchParams?: BookingSearchParams | null;
}

export default function BookingModal({
  isOpen,
  onClose,
  initialRoom,
  searchParams,
}: BookingModalProps) {
  const [selectedRoom, setSelectedRoom] = useState<Room>(
    initialRoom || ROOMS[0]
  );

  const checkInDate = searchParams?.checkIn || '2025-09-27';
  const checkOutDate = searchParams?.checkOut || '2025-09-28';
  const nights = searchParams?.nights || 1;
  const adults = searchParams?.adults || 2;
  const childrenCount = searchParams?.childrenCount || 0;

  // Form states
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState('');

  if (!isOpen) return null;

  // Pricing math
  const basePrice = selectedRoom.price * nights;
  const directDiscount = Math.round(basePrice * 0.1); // 10% direct booking discount
  const discountedBase = basePrice - directDiscount;
  const taxes = Math.round(discountedBase * 0.18); // 18% GST
  const grandTotal = discountedBase + taxes;

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestEmail) return;

    const randomId = 'OKR-2025-' + Math.floor(1000 + Math.random() * 9000);
    setBookingId(randomId);
    setIsConfirmed(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#C9A24D]/30 my-8">
        {/* Header */}
        <div className="bg-[#071A36] text-white px-6 sm:px-8 py-5 flex items-center justify-between border-b border-[#C9A24D]/30">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#D8B867] font-semibold block">
              Reservation Summary
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-wide">
              {isConfirmed ? 'Booking Confirmed' : 'Complete Your Reservation'}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[78vh] overflow-y-auto">
          {!isConfirmed ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left / Top: Room Selection & Breakdown */}
              <div className="lg:col-span-6 space-y-5">
                {/* Room Preview Card */}
                <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-[#F8F7F3]">
                  <div className="relative h-44">
                    <ImageWithFallback
                      src={selectedRoom.image}
                      alt={selectedRoom.name}
                      className="w-full h-full object-cover"
                      containerClassName="w-full h-full"
                    />
                    <div className="absolute top-3 left-3 bg-[#071A36]/80 text-[#D8B867] text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                      {selectedRoom.category}
                    </div>
                  </div>

                  <div className="p-4">
                    <h4 className="font-serif text-lg font-bold text-[#172238]">
                      {selectedRoom.name}
                    </h4>
                    <p className="text-xs text-[#667085] mt-0.5">
                      {selectedRoom.bed} • {selectedRoom.size} • {selectedRoom.view}
                    </p>

                    {/* Change Room Dropdown */}
                    <div className="mt-3 pt-3 border-t border-neutral-200">
                      <label className="text-[11px] font-semibold text-[#667085] block mb-1">
                        Select Room Type:
                      </label>
                      <select
                        value={selectedRoom.id}
                        onChange={(e) => {
                          const found = ROOMS.find((r) => r.id === e.target.value);
                          if (found) setSelectedRoom(found);
                        }}
                        className="w-full py-2 px-3 text-xs font-semibold bg-white border border-neutral-300 rounded-lg focus:outline-none focus:border-[#C9A24D] cursor-pointer"
                      >
                        {ROOMS.map((r) => (
                          <option key={r.id} value={r.id}>
                            {r.name} — ₹{r.price.toLocaleString('en-IN')}/night
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Stay Dates & Guests summary */}
                <div className="bg-[#F8F7F3] p-4 rounded-xl space-y-2 text-xs">
                  <div className="flex items-center justify-between text-[#172238]">
                    <span className="flex items-center gap-1.5 text-[#667085]">
                      <Calendar className="w-3.5 h-3.5 text-[#C9A24D]" />
                      Dates
                    </span>
                    <span className="font-semibold">
                      {checkInDate} to {checkOutDate} ({nights} {nights === 1 ? 'night' : 'nights'})
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[#172238]">
                    <span className="flex items-center gap-1.5 text-[#667085]">
                      <Users className="w-3.5 h-3.5 text-[#C9A24D]" />
                      Guests
                    </span>
                    <span className="font-semibold">
                      {adults} Adults, {childrenCount} Children
                    </span>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="border border-neutral-200 rounded-xl p-4 space-y-2 text-xs">
                  <div className="flex justify-between text-[#667085]">
                    <span>Room Rate ({nights} {nights === 1 ? 'night' : 'nights'} × ₹{selectedRoom.price.toLocaleString('en-IN')})</span>
                    <span>₹{basePrice.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#C9A24D]" />
                      Direct Booking 10% Discount
                    </span>
                    <span>-₹{directDiscount.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-[#667085]">
                    <span>Taxes & GST (18%)</span>
                    <span>₹{taxes.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="pt-2 border-t border-neutral-200 flex justify-between text-sm font-bold text-[#172238]">
                    <span>Total Payable</span>
                    <span className="text-[#C9A24D] text-base">
                      ₹{grandTotal.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Guest Information Form */}
              <div className="lg:col-span-6">
                <form onSubmit={handleConfirmBooking} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#172238] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#F8F7F3] rounded-xl text-sm border border-neutral-200 focus:border-[#C9A24D] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#172238] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="priya.sharma@example.com"
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#F8F7F3] rounded-xl text-sm border border-neutral-200 focus:border-[#C9A24D] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#172238] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#F8F7F3] rounded-xl text-sm border border-neutral-200 focus:border-[#C9A24D] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#172238] mb-1">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="High floor, quiet corner, early arrival, etc."
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#F8F7F3] rounded-xl text-xs border border-neutral-200 focus:border-[#C9A24D] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl text-[11px] text-amber-900 flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C9A24D] shrink-0 mt-0.5" />
                    <span>
                      <strong>Pay at Hotel:</strong> No advance payment required today. Free cancellation up to 24 hours prior to check-in.
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-semibold text-xs tracking-wider uppercase text-[#071A36] bg-[#C9A24D] hover:bg-[#D8B867] transition-all duration-200 shadow-lg cursor-pointer transform hover:-translate-y-0.5"
                  >
                    Confirm & Reserve Room
                  </button>
                </form>
              </div>
            </div>
          ) : (
            /* Confirmation Voucher State */
            <div className="text-center py-6 px-2 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-9 h-9" />
              </div>

              <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                Reservation Successful
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#172238] mt-1 mb-2">
                We Look Forward to Welcoming You
              </h4>
              <p className="text-xs sm:text-sm text-[#667085] max-w-md mx-auto mb-6">
                Your confirmation voucher has been sent to <strong>{guestEmail}</strong>.
              </p>

              {/* Voucher Box */}
              <div className="bg-[#F8F7F3] border-2 border-dashed border-[#C9A24D]/40 rounded-2xl p-6 text-left max-w-lg mx-auto mb-6 text-xs space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-neutral-200">
                  <span className="text-[#667085]">Booking Reference:</span>
                  <span className="font-mono font-bold text-sm text-[#071A36] bg-[#C9A24D]/20 px-2.5 py-0.5 rounded">
                    {bookingId}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#667085]">Guest Name:</span>
                  <span className="font-semibold text-[#172238]">{guestName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#667085]">Room Reserved:</span>
                  <span className="font-semibold text-[#172238]">{selectedRoom.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#667085]">Check-in / Check-out:</span>
                  <span className="font-semibold text-[#172238]">{checkInDate} — {checkOutDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#667085]">Total Guaranteed Amount:</span>
                  <span className="font-bold text-[#C9A24D] text-sm">
                    ₹{grandTotal.toLocaleString('en-IN')} (Pay at Hotel)
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={handlePrint}
                  className="px-5 py-2.5 rounded-full border border-neutral-300 text-xs font-semibold text-[#172238] hover:bg-neutral-100 flex items-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Voucher</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-[#071A36] text-white text-xs font-semibold hover:bg-[#102747] cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
