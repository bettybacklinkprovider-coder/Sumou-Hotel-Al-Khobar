import React, { useState } from 'react';
import { hotelRooms, hotelInfo, hotelImages } from '../data/hotelData';
import { Room } from '../types';
import {
  BedDouble,
  Users,
  Maximize2,
  Sparkles,
  Check,
  Compass,
  ArrowRight,
  ShieldCheck,
  Filter,
} from 'lucide-react';

interface RoomsPageProps {
  onOpenBooking: (roomId?: string) => void;
  onViewRoomDetails: (room: Room) => void;
}

export const RoomsPage: React.FC<RoomsPageProps> = ({
  onOpenBooking,
  onViewRoomDetails,
}) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Suite' | 'Executive' | 'Deluxe' | 'Family'>('All');

  const filteredRooms = activeFilter === 'All'
    ? hotelRooms
    : hotelRooms.filter((r) => r.category === activeFilter);

  return (
    <div className="w-full pt-20">
      {/* =========================================================================
          ROOMS PAGE HERO BANNER
          ========================================================================= */}
      <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#d4af37]/25 overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0 z-0">
          <img
            src={hotelImages.royalSuite}
            alt="Sumou Hotel Rooms and Suites"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090412] via-[#150729]/90 to-[#090412]/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#d4af37] uppercase">
            Sanctuaries of Distinction
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Rooms & Suites
          </h1>
          <p className="text-sm sm:text-base text-[#cfbee4] max-w-2xl mx-auto leading-relaxed">
            Every room and suite at Sumou Hotel Al Khobar embodies authentic Saudi grandeur. Enjoy plush Egyptian cotton linens, dark purple velvet styling, marble bathrooms, and captivating views across Al Khobar and the Arabian Gulf.
          </p>

          <div className="pt-2 flex items-center justify-center gap-6 text-xs text-[#d4af37]">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> Best Rate Guaranteed
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> Complimentary Valet Parking
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FILTER BAR & ACCOMMODATION LIST
          ========================================================================= */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Filter Controls (Segmented Bar) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-[#2b114d]">
          <div>
            <h2 className="text-lg font-serif font-bold text-white">
              Available Accommodations
            </h2>
            <p className="text-xs text-[#9d8bb7]">
              Showing {filteredRooms.length} luxury choices in Al Khobar
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[#180a2d] border border-[#d4af37]/30 flex-wrap">
            {(['All', 'Suite', 'Executive', 'Deluxe', 'Family'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-[#f4db8a] to-[#d4af37] text-[#130723] font-semibold shadow-sm'
                    : 'text-[#d3c4e7] hover:text-white hover:bg-[#280f49]'
                }`}
              >
                {filter === 'All' ? 'All Rooms' : `${filter}s`}
              </button>
            ))}
          </div>
        </div>

        {/* Room Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="rounded-xl overflow-hidden bg-[#16082b] border border-[#d4af37]/25 hover:border-[#d4af37]/65 transition-all duration-300 shadow-xl group hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16082b] via-transparent to-black/30" />

                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0f041e]/85 backdrop-blur-sm border border-[#d4af37]/40 text-[11px] font-semibold text-[#f4db8a] uppercase tracking-wider">
                    {room.category}
                  </div>

                  {room.featured && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#35145b]/90 border border-[#d4af37] text-[10px] font-bold text-[#fceec5] tracking-wide uppercase flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#d4af37]" />
                      Signature
                    </div>
                  )}

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-[#e6d9f7]">
                    <span className="flex items-center gap-1">
                      <Maximize2 className="w-3.5 h-3.5 text-[#d4af37]" />
                      {room.sizeM2} m²
                    </span>
                    <span className="flex items-center gap-1">
                      <BedDouble className="w-3.5 h-3.5 text-[#d4af37]" />
                      {room.bedType}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#f4db8a] transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-xs text-[#a997c2] leading-relaxed line-clamp-2">
                      {room.shortDescription}
                    </p>
                  </div>

                  <div className="py-2.5 px-3 rounded-lg bg-[#1c0c34] border border-[#2d1150] space-y-1 text-[11px] text-[#cfbfe4]">
                    <div className="flex justify-between">
                      <span className="text-[#9684b0]">Occupancy:</span>
                      <span className="font-medium text-white">{room.occupancy}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9684b0]">View:</span>
                      <span className="font-medium text-white">{room.view}</span>
                    </div>
                  </div>

                  {/* Amenities highlights */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#d4af37] block">
                      Featured Amenities
                    </span>
                    <div className="grid grid-cols-2 gap-1 text-[11px] text-[#baa9cf]">
                      {room.amenities.slice(0, 4).map((am, i) => (
                        <div key={i} className="flex items-center gap-1.5 truncate">
                          <Check className="w-3 h-3 text-[#d4af37] shrink-0" />
                          <span className="truncate">{am}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Price & Buttons */}
              <div className="p-6 pt-3 border-t border-[#29104b] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#8e7da8] block uppercase">Per Night</span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-2xl font-bold text-[#f4db8a] tabular-nums">
                      {room.priceSAR}
                    </span>
                    <span className="text-xs font-semibold text-[#d4af37]">SAR</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onViewRoomDetails(room)}
                    className="px-3 py-2 rounded text-xs font-medium text-[#c8b7df] hover:text-white hover:bg-[#280f48] border border-[#371457] transition-colors cursor-pointer"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => onOpenBooking(room.id)}
                    className="px-4 py-2 rounded text-xs font-semibold text-[#140826] bg-gradient-to-r from-[#f4db8a] to-[#d4af37] hover:brightness-110 shadow-md transition-all cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Complimentary Privileges Banner */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-[#17082e] via-[#240e44] to-[#17082e] border border-[#d4af37]/35 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-2">
            <h4 className="font-serif text-base font-bold text-[#f4db8a]">
              Flexible Cancellation
            </h4>
            <p className="text-xs text-[#c1b0d7]">
              Cancel or modify your stay up to 24 hours prior to arrival with ease.
            </p>
          </div>

          <div className="space-y-2 border-y md:border-y-0 md:border-x border-[#3b1569] py-4 md:py-0">
            <h4 className="font-serif text-base font-bold text-[#f4db8a]">
              Direct Booking Privileges
            </h4>
            <p className="text-xs text-[#c1b0d7]">
              Enjoy early check-in preference and priority room assignments.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-serif text-base font-bold text-[#f4db8a]">
              24/7 Concierge Support
            </h4>
            <p className="text-xs text-[#c1b0d7]">
              Speak directly with our front desk team at any hour via phone or WhatsApp.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
