import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Room, ROOMS } from '../data/hotelData';
import RoomCard from './RoomCard';

interface RoomsSectionProps {
  onSelectRoom: (room: Room) => void;
}

export default function RoomsSection({ onSelectRoom }: RoomsSectionProps) {
  const [showAllRooms, setShowAllRooms] = useState(false);

  // Default 3 rooms vs all rooms
  const displayedRooms = showAllRooms ? ROOMS : ROOMS.filter((r) => r.featured);

  return (
    <section id="rooms" className="py-24 sm:py-32 bg-[#F8F7F3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block with Left side text & View All Rooms link */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-8">
            {/* Small uppercase tag */}
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A24D] block mb-2">
              OUR ROOMS
            </span>

            {/* Editorial Serif Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#172238] tracking-tight leading-tight text-balance">
              Comfortable Stays, <br className="hidden sm:inline" />
              <span className="italic font-medium">Thoughtfully Designed</span>
            </h2>

            {/* Supporting Text */}
            <p className="mt-4 text-base sm:text-lg text-[#667085] max-w-2xl font-light leading-relaxed">
              Choose from our range of well-appointed rooms and suites, crafted for your comfort and convenience.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            {/* View All Rooms button / link */}
            <button
              onClick={() => setShowAllRooms(!showAllRooms)}
              className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-[#172238] hover:text-[#C9A24D] transition-colors pb-1 border-b border-[#172238] hover:border-[#C9A24D] cursor-pointer"
            >
              <span>{showAllRooms ? 'Show Featured Only' : 'View All Rooms'}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform text-[#C9A24D]" />
            </button>
          </div>
        </div>

        {/* 3 Room Cards Grid (or 5 if expanded) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedRooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onSelectRoom={onSelectRoom}
            />
          ))}
        </div>

        {/* Extra Perks Banner under Rooms */}
        <div className="mt-14 bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#C9A24D]/10 border border-[#C9A24D]/30 flex items-center justify-center shrink-0 text-[#C9A24D]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-[#172238]">
                Direct Booking Privileges
              </h4>
              <p className="text-xs sm:text-sm text-[#667085] mt-0.5">
                Enjoy 10% complimentary dining credit, priority early check-in, and flexible cancellation.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectRoom(ROOMS[0])}
            className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#071A36] text-white hover:bg-[#102747] transition-colors whitespace-nowrap cursor-pointer shadow-sm"
          >
            Reserve with Direct Perks
          </button>
        </div>
      </div>
    </section>
  );
}
