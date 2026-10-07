import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Phone, Mail, CheckCircle2, BedDouble, Shield, ChevronDown } from 'lucide-react';
import { hotelRooms, hotelInfo } from '../data/hotelData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedRoomId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedRoomId,
}) => {
  const [selectedRoomId, setSelectedRoomId] = useState<string>(
    preSelectedRoomId || hotelRooms[0].id
  );

  // Default dates: tomorrow to +2 days
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const checkoutDay = new Date(today);
  checkoutDay.setDate(today.getDate() + 3);

  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState(formatDate(checkoutDay));
  const [adults, setAdults] = useState(2);
  const [roomsCount, setRoomsCount] = useState(1);
  const [fullName, setFullName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (preSelectedRoomId) {
      setSelectedRoomId(preSelectedRoomId);
    }
  }, [preSelectedRoomId]);

  if (!isOpen) return null;

  const currentRoom = hotelRooms.find((r) => r.id === selectedRoomId) || hotelRooms[0];

  // Calculate nights
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const diffTime = Math.max(1, checkOutDate.getTime() - checkInDate.getTime());
  const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
  const subtotal = currentRoom.priceSAR * nights * roomsCount;
  const vat = Math.round(subtotal * 0.15); // Saudi 15% VAT
  const totalSAR = subtotal + vat;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !guestPhone || !guestEmail) {
      alert('Please fill in your name, phone number, and email address.');
      return;
    }
    const randomRef = 'SMH-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#120722] border border-[#d4af37]/40 rounded-xl shadow-2xl overflow-hidden my-8">
        {/* Header Bar */}
        <div className="px-6 py-5 bg-gradient-to-r from-[#1c0b36] via-[#2a1052] to-[#1c0b36] border-b border-[#d4af37]/25 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-semibold tracking-widest text-[#d4af37] uppercase">
              Sumou Hotel Al Khobar
            </span>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#fcf6e5]">
              {isSubmitted ? 'Reservation Confirmed' : 'Reserve Your Stay'}
            </h3>
          </div>
          <button
            onClick={resetForm}
            className="p-1.5 text-[#b9a9d1] hover:text-white rounded-lg hover:bg-[#371457]/50 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          /* Confirmation Screen */
          <div className="p-6 sm:p-8 space-y-6 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#271043] border-2 border-[#d4af37] flex items-center justify-center text-[#d4af37]">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <span className="text-xs text-[#d4af37] font-semibold tracking-wider uppercase">
                Booking Reference
              </span>
              <p className="font-serif text-2xl sm:text-3xl font-bold text-[#f4db8a] tracking-widest">
                {bookingRef}
              </p>
              <p className="text-sm text-[#cebfdf] max-w-md mx-auto">
                Thank you, <strong className="text-white">{fullName}</strong>! Your stay request at Sumou Hotel Al Khobar has been registered. Our 24/7 reservations team will contact you shortly to confirm your room.
              </p>
            </div>

            {/* Summary Card */}
            <div className="bg-[#180a2d] border border-[#d4af37]/20 rounded-lg p-5 text-left space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between pb-2 border-b border-[#2b1050]">
                <span className="text-[#9e8cb8]">Room Selected:</span>
                <span className="font-semibold text-white">{currentRoom.name}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-[#2b1050]">
                <span className="text-[#9e8cb8]">Dates:</span>
                <span className="text-[#f4db8a]">
                  {checkIn} to {checkOut} ({nights} {nights === 1 ? 'night' : 'nights'})
                </span>
              </div>
              <div className="flex justify-between pb-2 border-b border-[#2b1050]">
                <span className="text-[#9e8cb8]">Guests & Rooms:</span>
                <span className="text-white">{adults} Guests · {roomsCount} Room</span>
              </div>
              <div className="flex justify-between pt-1 text-sm font-semibold text-[#f8eecd]">
                <span>Total Estimated (incl. 15% VAT):</span>
                <span className="text-[#f4db8a] tabular-nums font-bold">
                  {totalSAR.toLocaleString()} SAR
                </span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${hotelInfo.phone}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-[#250e3d] border border-[#d4af37]/40 text-sm font-medium text-[#f4db8a] hover:bg-[#321352] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Concierge: {hotelInfo.displayPhone}</span>
              </a>
              <button
                onClick={resetForm}
                className="px-6 py-2.5 rounded bg-gradient-to-r from-[#f4db8a] via-[#d4af37] to-[#b8912e] text-[#120722] text-sm font-semibold hover:from-[#fceec5] hover:to-[#c59b27] transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {/* Room Selector */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#e5d8f6] flex items-center justify-between">
                <span>Select Accommodation</span>
                <span className="text-[#d4af37] font-normal">
                  Starting at {currentRoom.priceSAR} SAR / night
                </span>
              </label>
              <div className="relative">
                <select
                  value={selectedRoomId}
                  onChange={(e) => setSelectedRoomId(e.target.value)}
                  className="w-full bg-[#1c0c34] border border-[#d4af37]/30 text-white rounded-lg px-3.5 py-2.5 text-sm appearance-none focus:outline-none focus:border-[#d4af37]"
                >
                  {hotelRooms.map((room) => (
                    <option key={room.id} value={room.id} className="bg-[#1c0c34] text-white">
                      {room.name} — {room.priceSAR} SAR/night ({room.bedType})
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-[#d4af37] absolute right-3 top-3.5 pointer-events-none" />
              </div>
            </div>

            {/* Dates & Guests Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#cfbfdf]">Check-In Date</label>
                <div className="relative">
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-[#1c0c34] border border-[#d4af37]/30 text-white rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:border-[#d4af37]"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#cfbfdf]">Check-Out Date</label>
                <div className="relative">
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-[#1c0c34] border border-[#d4af37]/30 text-white rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:border-[#d4af37]"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#cfbfdf]">Guests</label>
                <select
                  value={adults}
                  onChange={(e) => setAdults(Number(e.target.value))}
                  className="w-full bg-[#1c0c34] border border-[#d4af37]/30 text-white rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:border-[#d4af37]"
                >
                  <option value={1}>1 Guest</option>
                  <option value={2}>2 Guests</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4 Guests</option>
                  <option value={5}>5+ Guests (Family)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#cfbfdf]">Rooms Count</label>
                <select
                  value={roomsCount}
                  onChange={(e) => setRoomsCount(Number(e.target.value))}
                  className="w-full bg-[#1c0c34] border border-[#d4af37]/30 text-white rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:border-[#d4af37]"
                >
                  <option value={1}>1 Room</option>
                  <option value={2}>2 Rooms</option>
                  <option value={3}>3 Rooms</option>
                </select>
              </div>
            </div>

            {/* Guest Details */}
            <div className="pt-2 border-t border-[#29104b] space-y-4">
              <span className="text-xs font-semibold text-[#f4db8a] uppercase tracking-wider block">
                Guest Contact Details
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-[#cfbfdf]">Full Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Abdullah Al-Otaibi"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#1c0c34] border border-[#d4af37]/30 text-white placeholder-[#786591] rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:border-[#d4af37]"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-[#cfbfdf]">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+966 5X XXX XXXX"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full bg-[#1c0c34] border border-[#d4af37]/30 text-white placeholder-[#786591] rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:border-[#d4af37]"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#cfbfdf]">Email Address</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                  className="w-full bg-[#1c0c34] border border-[#d4af37]/30 text-white placeholder-[#786591] rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:border-[#d4af37]"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#cfbfdf]">Special Requests (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="High floor, early arrival, airport transfer, baby crib..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-[#1c0c34] border border-[#d4af37]/30 text-white placeholder-[#786591] rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:border-[#d4af37] resize-none"
                />
              </div>
            </div>

            {/* Price Breakdown Banner */}
            <div className="p-4 rounded-lg bg-[#1a0b32] border border-[#d4af37]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs text-[#a997c4] block">
                  {nights} {nights === 1 ? 'Night' : 'Nights'} × {roomsCount} Room · {currentRoom.name}
                </span>
                <span className="text-xs text-[#8a76a5]">
                  Subtotal: {subtotal.toLocaleString()} SAR + 15% VAT ({vat.toLocaleString()} SAR)
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs text-[#d4af37] block font-medium">Estimated Total</span>
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#f4db8a] tabular-nums">
                  {totalSAR.toLocaleString()} SAR
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2.5 text-sm text-[#bcaad3] hover:text-white transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 text-sm font-semibold text-[#140826] bg-gradient-to-r from-[#f4db8a] via-[#d4af37] to-[#b8912e] hover:from-[#fceec5] hover:to-[#c59b27] rounded-lg shadow-lg shadow-[#d4af37]/20 transition-all cursor-pointer"
              >
                Confirm Reservation
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
