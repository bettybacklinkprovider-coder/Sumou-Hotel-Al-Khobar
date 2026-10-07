import React from 'react';
import { X, Check, BedDouble, Users, Maximize2, Compass, Phone } from 'lucide-react';
import { Room } from '../types';
import { hotelInfo } from '../data/hotelData';

interface RoomDetailModalProps {
  room: Room | null;
  onClose: () => void;
  onBookRoom: (roomId: string) => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  onClose,
  onBookRoom,
}) => {
  if (!room) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-3xl bg-[#110620] border border-[#d4af37]/35 rounded-xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col">
        {/* Top bar with close */}
        <div className="relative h-64 sm:h-72 w-full shrink-0 overflow-hidden">
          <img
            src={room.image}
            alt={room.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#110620] via-[#110620]/40 to-black/30" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:text-[#d4af37] hover:bg-black/80 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge & Title on Image */}
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[11px] font-semibold tracking-widest text-[#d4af37] uppercase">
              {room.category} Class
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white drop-shadow-md">
              {room.name}
            </h2>
          </div>
        </div>

        {/* Scrollable content body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          {/* Key specs row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 px-4 rounded-lg bg-[#1a0a30] border border-[#d4af37]/20 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-[#d7c8eb]">
              <Maximize2 className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span>{room.sizeM2} m² Area</span>
            </div>
            <div className="flex items-center gap-2 text-[#d7c8eb]">
              <BedDouble className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span>{room.bedType}</span>
            </div>
            <div className="flex items-center gap-2 text-[#d7c8eb]">
              <Users className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span>{room.occupancy}</span>
            </div>
            <div className="flex items-center gap-2 text-[#d7c8eb]">
              <Compass className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span>{room.view}</span>
            </div>
          </div>

          {/* Full description */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-[#f4db8a] uppercase tracking-wider">
              Room Overview
            </h4>
            <p className="text-sm leading-relaxed text-[#c6b6dc]">
              {room.fullDescription}
            </p>
          </div>

          {/* Amenities checklist */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#f4db8a] uppercase tracking-wider">
              Included In-Room Amenities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.amenities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#e0d3f3]">
                  <div className="w-4 h-4 rounded-full bg-[#270e44] border border-[#d4af37]/40 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-[#d4af37]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer sticky CTA bar */}
        <div className="p-4 sm:p-6 bg-[#16082b] border-t border-[#d4af37]/25 flex items-center justify-between gap-4 shrink-0">
          <div>
            <span className="text-xs text-[#9d8bb7] block">Rate from</span>
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-2xl font-bold text-[#f4db8a] tabular-nums">
                {room.priceSAR}
              </span>
              <span className="text-xs font-semibold text-[#d4af37]">SAR / Night</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${hotelInfo.phone}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded text-xs text-[#d6c9e8] hover:text-[#f4db8a] border border-[#d4af37]/20"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Inquire</span>
            </a>
            <button
              onClick={() => {
                onClose();
                onBookRoom(room.id);
              }}
              className="px-6 py-2.5 text-sm font-semibold text-[#120722] bg-gradient-to-r from-[#f4db8a] via-[#d4af37] to-[#b8912e] hover:from-[#fceec5] hover:to-[#c59b27] rounded shadow-lg shadow-[#d4af37]/25 transition-all cursor-pointer"
            >
              Book This Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
