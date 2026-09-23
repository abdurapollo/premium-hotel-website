import { ArrowRight, Bed, Maximize2, Compass } from 'lucide-react';
import { Room } from '../data/hotelData';
import ImageWithFallback from './ImageWithFallback';

interface RoomCardProps {
  room: Room;
  onSelectRoom: (room: Room) => void;
}

export default function RoomCard({ room, onSelectRoom }: RoomCardProps) {
  return (
    <div
      onClick={() => onSelectRoom(room)}
      className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col cursor-pointer"
    >
      {/* Room Image Container with Zoom effect */}
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
        <ImageWithFallback
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          containerClassName="w-full h-full"
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-[#071A36]/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#C9A24D]/40 text-[11px] font-semibold tracking-wider text-[#D8B867] uppercase shadow-md">
          {room.category}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Room Name */}
          <h3 className="font-serif text-2xl font-normal text-[#172238] group-hover:text-[#C9A24D] transition-colors leading-snug">
            {room.name}
          </h3>

          {/* Room Details: King Bed | 24 sqm | City View */}
          <div className="mt-3 flex items-center flex-wrap gap-x-2.5 text-xs text-[#667085] font-medium">
            <span className="flex items-center gap-1.5">
              <Bed className="w-3.5 h-3.5 text-[#C9A24D]" />
              {room.bed}
            </span>
            <span className="text-neutral-300">•</span>
            <span className="flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-[#C9A24D]" />
              {room.size}
            </span>
            <span className="text-neutral-300">•</span>
            <span className="flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#C9A24D]" />
              {room.view}
            </span>
          </div>

          <p className="mt-3 text-sm text-[#667085] line-clamp-2 leading-relaxed font-light">
            {room.description}
          </p>
        </div>

        {/* Bottom Action: Price & Gold Book Now Button */}
        <div className="pt-5 mt-5 border-t border-neutral-100 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#667085] block font-semibold">
              From
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl sm:text-2xl font-bold text-[#172238]">
                ₹{room.price.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-[#667085] font-normal">/ night</span>
            </div>
          </div>

          {/* Gold Action Button */}
          <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-[#071A36] bg-[#C9A24D] group-hover:bg-[#D8B867] transition-all shadow-sm group-hover:shadow">
            <span>Book Now</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
}
