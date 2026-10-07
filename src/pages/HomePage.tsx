import React, { useState } from 'react';
import {
  hotelInfo,
  hotelRooms,
  hotelAmenities,
  whyChoosePoints,
  hotelImages,
} from '../data/hotelData';
import { Room } from '../types';
import { AmenityIcon } from '../components/AmenityIcon';
import {
  MapPin,
  Phone,
  Calendar,
  Users,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Clock,
  Shield,
  Compass,
  ExternalLink,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenBooking: (roomId?: string) => void;
  onViewRoomDetails: (room: Room) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBooking,
  onViewRoomDetails,
}) => {
  // Quick availability bar state
  const [quickCheckIn, setQuickCheckIn] = useState('');
  const [quickCheckOut, setQuickCheckOut] = useState('');
  const [quickGuests, setQuickGuests] = useState('2');

  const featuredRooms = hotelRooms.slice(0, 3);

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking();
  };

  return (
    <div className="w-full">
      {/* =========================================================================
          SECTION 1 — LUXURY HERO
          ========================================================================= */}
      <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={hotelImages.heroExterior}
            alt="Sumou Hotel Al Khobar Luxury Exterior"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Deep Dark Purple Overlays & Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090412] via-[#120624]/85 to-[#090412]/75" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#100520]/50 to-[#090412]" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 pt-6">
          {/* Subtle gold luxury eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e0a35]/80 border border-[#d4af37]/40 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="font-['Cairo'] text-xs font-semibold text-[#f4db8a]">شارع الأمير تركي · كورنيش الخبر</span>
            <span aria-hidden="true" className="text-[#d4af37]/50">·</span>
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#f4db8a] uppercase">
              Sumou Hotel Al Khobar
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.15] drop-shadow-lg text-balance">
            Experience Luxury at{' '}
            <span className="text-gold-gradient block sm:inline">
              Sumou Hotel Al Khobar
            </span>
          </h1>

          <p className="font-['Cairo'] text-lg sm:text-xl text-[#f4db8a] font-semibold">
            عش تجربة الفخامة والراحة في قلب مدينة الخبر
          </p>

          {/* Short Welcoming Description */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#d8c8eb] font-normal leading-relaxed">
            Where regal Arabian hospitality meets contemporary coastal sophistication. Unwind in opulent suites overlooking the Arabian Gulf, minutes from premier Al Khobar shopping and waterfront promenades.
          </p>

          {/* Golden Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base font-semibold tracking-wider text-[#120722] bg-gradient-to-r from-[#f4db8a] via-[#d4af37] to-[#b8912e] hover:from-[#fceec5] hover:via-[#e2c151] hover:to-[#c59b27] rounded shadow-xl shadow-[#d4af37]/30 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
            >
              <span className="font-['Cairo'] text-sm font-bold">احجز إقامتك</span>
              <span className="text-[#120722]/50">·</span>
              <span>Book Your Stay</span>
            </button>
            <button
              onClick={() => onNavigate('/rooms')}
              className="w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base font-medium tracking-wider text-[#f5edff] bg-[#1d0b36]/80 hover:bg-[#2e1254] border border-[#d4af37]/45 rounded backdrop-blur-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
            >
              <span className="font-['Cairo'] text-sm">استكشف الغرف</span>
              <span className="text-[#d4af37]/50">·</span>
              <span>Explore Rooms</span>
            </button>
          </div>

          {/* Interactive Availability Bar */}
          <div className="pt-8 max-w-4xl mx-auto">
            <form
              onSubmit={handleQuickSearch}
              className="p-3 sm:p-4 rounded-xl bg-[#140826]/90 border border-[#d4af37]/30 backdrop-blur-xl shadow-2xl grid grid-cols-1 sm:grid-cols-4 gap-3 text-left"
            >
              <div className="p-2 rounded bg-[#1f0d3a]/60 border border-[#371457]">
                <div className="flex justify-between items-center text-[10px] font-bold text-[#d4af37]">
                  <span className="font-['Cairo']">تاريخ الدخول</span>
                  <span className="uppercase tracking-wider">Check-In</span>
                </div>
                <input
                  type="date"
                  value={quickCheckIn}
                  onChange={(e) => setQuickCheckIn(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm text-white focus:outline-none cursor-pointer mt-0.5"
                />
              </div>

              <div className="p-2 rounded bg-[#1f0d3a]/60 border border-[#371457]">
                <div className="flex justify-between items-center text-[10px] font-bold text-[#d4af37]">
                  <span className="font-['Cairo']">تاريخ المغادرة</span>
                  <span className="uppercase tracking-wider">Check-Out</span>
                </div>
                <input
                  type="date"
                  value={quickCheckOut}
                  onChange={(e) => setQuickCheckOut(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm text-white focus:outline-none cursor-pointer mt-0.5"
                />
              </div>

              <div className="p-2 rounded bg-[#1f0d3a]/60 border border-[#371457]">
                <div className="flex justify-between items-center text-[10px] font-bold text-[#d4af37]">
                  <span className="font-['Cairo']">النزلاء</span>
                  <span className="uppercase tracking-wider">Guests</span>
                </div>
                <select
                  value={quickGuests}
                  onChange={(e) => setQuickGuests(e.target.value)}
                  className="w-full bg-[#1f0d3a] text-xs sm:text-sm text-white focus:outline-none cursor-pointer mt-0.5"
                >
                  <option value="1">1 ضيف / 1 Adult</option>
                  <option value="2">2 ضيوف / 2 Adults</option>
                  <option value="3">3 ضيوف / 3 Adults</option>
                  <option value="4">عائلة / Family (4+)</option>
                </select>
              </div>

              <button
                type="submit"
                className="h-full min-h-[46px] rounded bg-gradient-to-r from-[#f4db8a] via-[#d4af37] to-[#b8912e] text-[#140826] font-semibold text-xs sm:text-sm tracking-wide hover:brightness-110 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span className="font-['Cairo'] font-bold">تحقق من التوفر</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — WELCOME TO SUMOU HOTEL
          ========================================================================= */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Description & Hospitality Ethos */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-widest text-[#d4af37] uppercase">
                Welcome to Sumou Hotel
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                A Haven of Refined Comfort & Authentic Saudi Warmth
              </h2>
            </div>

            <p className="text-base text-[#cfbfe4] leading-relaxed">
              Situated in the prestigious coastal heart of Al Khobar along Prince Turki Street, Sumou Hotel redefines Eastern Province hospitality. Each corner has been curated to inspire tranquility, whether you are traveling for executive enterprise, weekend seaside relaxation, or family discovery.
            </p>

            <p className="text-sm text-[#b49ecb] leading-relaxed">
              Immerse yourself in deeply plush interiors, ambient golden sconces, and personalized concierge care. From your swift arrival with complimentary valet service to peaceful nights nestled in bespoke bedding, Sumou Hotel ensures every moment is seamless.
            </p>

            {/* Feature points */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-[#160829] border border-[#d4af37]/25">
                <Clock className="w-5 h-5 text-[#d4af37] mb-2" />
                <h4 className="text-sm font-semibold text-white">24/7 Dedicated Care</h4>
                <p className="text-xs text-[#9f8db9] mt-1">
                  Around-the-clock front desk, concierge, and gourmet dining room service.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#160829] border border-[#d4af37]/25">
                <Compass className="w-5 h-5 text-[#d4af37] mb-2" />
                <h4 className="text-sm font-semibold text-white">Corniche Promenade</h4>
                <p className="text-xs text-[#9f8db9] mt-1">
                  A pleasant two-minute stroll to seaside walkways, cafes, and parks.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('/about')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#f4db8a] hover:text-white transition-colors cursor-pointer group"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Hotel Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/35 shadow-2xl shadow-black/60 aspect-[4/3] group">
              <img
                src={hotelImages.grandLobby}
                alt="Sumou Hotel Grand Lobby"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0418] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[11px] font-semibold text-[#d4af37] tracking-widest uppercase">
                  Grand Reception Lounge
                </span>
                <p className="font-serif text-lg text-white font-medium">
                  Sumou Hotel Al Khobar Lobby
                </p>
              </div>
            </div>

            {/* Overlapping small accent card */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 bg-[#16082b]/95 border border-[#d4af37]/40 rounded-xl p-5 shadow-2xl backdrop-blur-md max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2c104e] border border-[#d4af37] flex items-center justify-center text-[#d4af37] shrink-0 font-serif font-bold">
                  5★
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Eastern Province Luxury</p>
                  <p className="text-[11px] text-[#b6a4ce]">Prince Turki Street, Al Khobar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — ROOMS & SUITES
          ========================================================================= */}
      <section className="py-20 bg-[#0e051c] border-y border-[#d4af37]/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-widest text-[#d4af37] uppercase">
                Accommodations
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Rooms & Suites
              </h2>
              <p className="text-sm text-[#bcaad3] max-w-xl">
                Immaculately appointed sanctuaries designed with royal dark purple velvet, brushed brass illumination, and plush king bedding.
              </p>
            </div>

            <button
              onClick={() => onNavigate('/rooms')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-[#d4af37]/40 text-sm font-medium text-[#f4db8a] hover:bg-[#331354] transition-all cursor-pointer shrink-0 self-start md:self-auto"
            >
              <span>View All Rooms</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Room Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <div
                key={room.id}
                className="group rounded-xl overflow-hidden bg-[#16082b] border border-[#d4af37]/25 hover:border-[#d4af37]/60 shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16082b] via-transparent to-black/20" />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#0e041c]/80 backdrop-blur-sm border border-[#d4af37]/40 text-[11px] font-semibold text-[#f4db8a] tracking-wider uppercase">
                    {room.category}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#f4db8a] transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-xs text-[#a997c2] line-clamp-2 leading-relaxed">
                      {room.shortDescription}
                    </p>
                  </div>

                  {/* Key Amenities */}
                  <div className="space-y-1.5 pt-2 border-t border-[#29104b]">
                    <div className="text-[11px] text-[#cfbfe4] flex items-center justify-between">
                      <span>Bed: {room.bedType}</span>
                      <span>{room.sizeM2} m²</span>
                    </div>
                    <div className="text-[11px] text-[#9a86b3]">
                      View: {room.view}
                    </div>
                  </div>

                  {/* Pricing and Action CTA */}
                  <div className="pt-3 border-t border-[#29104b] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#8e7da8] block uppercase">From</span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif text-xl font-bold text-[#f4db8a] tabular-nums">
                          {room.priceSAR}
                        </span>
                        <span className="text-xs text-[#d4af37] font-medium">SAR/night</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onViewRoomDetails(room)}
                        className="px-3 py-1.5 rounded text-xs font-medium text-[#c8b7df] hover:text-white hover:bg-[#280f48] transition-colors cursor-pointer"
                      >
                        Details
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
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => onNavigate('/rooms')}
              className="px-8 py-3 rounded-lg bg-[#220d3d] border border-[#d4af37]/40 text-sm font-semibold text-[#f4db8a] hover:bg-[#2f1253] transition-all cursor-pointer shadow-lg"
            >
              View All 6 Rooms & Suites
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — HOTEL AMENITIES (WITH LUXURY IMAGES & ARABIC)
          ========================================================================= */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1e0a35] border border-[#d4af37]/35 text-xs text-[#f4db8a]">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="font-['Cairo'] font-semibold">مرافق وخدمات متكاملة</span>
            <span aria-hidden="true" className="text-[#d4af37]/50">·</span>
            <span className="tracking-widest uppercase">World-Class Facilities</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Hotel Amenities & Services
          </h2>
          <p className="font-['Cairo'] text-lg text-[#f4db8a] font-semibold">
            مرافق استثنائية لإقامة مريحة في فندق سمو الخبر
          </p>
          <p className="text-sm text-[#bcaad3] max-w-xl mx-auto">
            خدمات فندقية متطورة تلبي جميع متطلبات الراحة والرفاهية لرجال الأعمال والعائلات على كورنيش الخبر.
          </p>
        </div>

        {/* 8 Amenities Grid with Images, Arabic & English */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotelAmenities.map((amenity) => (
            <div
              key={amenity.id}
              className="rounded-xl overflow-hidden bg-[#150727] border border-[#d4af37]/25 hover:border-[#d4af37]/65 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Amenity Photography Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0d041a]">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#150727] via-[#150727]/30 to-black/30" />

                  {/* Icon Badge */}
                  <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-[#140624]/90 backdrop-blur-md border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37] shadow-lg group-hover:bg-[#d4af37] group-hover:text-[#120622] transition-colors">
                    <AmenityIcon name={amenity.iconName} className="w-4 h-4" />
                  </div>

                  {/* Arabic/English Pill Tag */}
                  {amenity.tagAr && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#18072d]/85 backdrop-blur-md border border-[#d4af37]/40 text-[10px] font-['Cairo'] font-semibold text-[#f4db8a] shadow">
                      {amenity.tagAr}
                    </div>
                  )}
                </div>

                {/* Card Content with Arabic & English */}
                <div className="p-5 space-y-3">
                  {/* Arabic Title */}
                  <div className="space-y-1 border-b border-[#2d114f] pb-3">
                    <h3 className="font-['Cairo'] text-base font-bold text-white group-hover:text-[#f4db8a] transition-colors leading-snug">
                      {amenity.titleAr}
                    </h3>
                    <p className="text-[11px] font-serif uppercase tracking-wider text-[#d4af37] font-semibold">
                      {amenity.title}
                    </p>
                  </div>

                  {/* Arabic Description */}
                  <p className="font-['Cairo'] text-xs text-[#ded1f3] leading-relaxed text-right dir-rtl">
                    {amenity.descriptionAr}
                  </p>

                  {/* English Description */}
                  <p className="text-[11px] text-[#9c89b7] leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Accent */}
              <div className="px-5 pb-4 pt-1 flex items-center justify-between text-[10px] text-[#8e7da8] border-t border-[#250d3d]">
                <span className="font-['Cairo'] text-[#d4af37]">فندق سمو الخبر</span>
                <span className="uppercase tracking-widest">{amenity.tagEn}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — WHY CHOOSE SUMOU HOTEL (WITH LUXURY IMAGES & ARABIC)
          ========================================================================= */}
      <section className="py-20 bg-[#0d041a] border-y border-[#d4af37]/20 relative overflow-hidden">
        {/* Subtle decorative background gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#3c1463]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1e0a35] border border-[#d4af37]/35 text-xs text-[#f4db8a]">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="font-['Cairo'] font-semibold">مميزات الإقامة الفاخرة</span>
              <span aria-hidden="true" className="text-[#d4af37]/50">·</span>
              <span className="tracking-widest uppercase">The Sumou Difference</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Why Choose Sumou Hotel
            </h2>
            <p className="font-['Cairo'] text-lg text-[#f4db8a] font-semibold">
              لماذا يختار الضيوف فندق سمو الخبر؟
            </p>
            <p className="text-sm text-[#bcaad3] max-w-xl mx-auto">
              موقع استثنائي على الكورنيش، طابع ملكي مميز، وأصالة الضيافة السعودية التي تمنحكم تجربة لا تُنسى.
            </p>
          </div>

          {/* 4 Cards with Images, Statistics, Arabic and English */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoosePoints.map((item) => (
              <div
                key={item.number}
                className="rounded-xl overflow-hidden bg-[#16082c] border border-[#d4af37]/25 hover:border-[#d4af37]/65 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 shadow-xl"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0c0418]">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#16082c] via-[#16082c]/30 to-black/35" />

                    {/* Number Badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#120524]/90 backdrop-blur-md border border-[#d4af37]/50 font-serif text-xs font-bold text-[#f4db8a] shadow-md">
                      {item.number}
                    </div>

                    {/* Metric pill */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#1d0b36]/90 backdrop-blur-md border border-[#d4af37]/40 text-right shadow">
                      <span className="font-serif text-xs font-bold text-[#f4db8a] block tabular-nums leading-tight">
                        {item.metric}
                      </span>
                      <span className="font-['Cairo'] text-[9px] text-[#cfbee4] block">
                        {item.metricLabelAr}
                      </span>
                    </div>

                    {/* Category Tag bottom on photo */}
                    <div className="absolute bottom-2.5 left-3">
                      <span className="font-['Cairo'] text-[10px] font-semibold text-[#f4db8a] bg-[#120522]/85 px-2 py-0.5 rounded border border-[#d4af37]/30">
                        {item.badgeAr}
                      </span>
                    </div>
                  </div>

                  {/* Card Content with Arabic & English */}
                  <div className="p-5 space-y-3">
                    <div className="space-y-1 border-b border-[#29104b] pb-2.5">
                      <h3 className="font-['Cairo'] text-base font-bold text-white group-hover:text-[#f4db8a] transition-colors leading-snug">
                        {item.titleAr}
                      </h3>
                      <p className="text-[11px] font-serif uppercase tracking-wider text-[#d4af37] font-semibold">
                        {item.title}
                      </p>
                    </div>

                    <p className="font-['Cairo'] text-xs text-[#ded1f3] leading-relaxed text-right dir-rtl">
                      {item.descriptionAr}
                    </p>

                    <p className="text-[11px] text-[#9e8cb6] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-5 py-3 border-t border-[#29104b] bg-[#120624]/60 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-1.5 text-[#d4af37]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="font-['Cairo'] font-semibold">ضيافة فندقية مضمونة</span>
                  </div>
                  <span className="text-[10px] text-[#8e7da8] uppercase tracking-wider">
                    {item.metricLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — LOCATION + CALL TO ACTION
          ========================================================================= */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-[#180a2f] via-[#210d3f] to-[#120524] border border-[#d4af37]/35 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle gold corner accent */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#d4af37]/10 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: CTA & Hotel Location Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-widest text-[#d4af37] uppercase">
                  Corniche Al Khobar, Saudi Arabia
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Book Your Stay at Sumou Hotel
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#cfbfe4] leading-relaxed">
                Whether arriving for a business summit in the Eastern Province or a restorative weekend with family near the Corniche, our team is ready to welcome you with authentic warmth.
              </p>

              {/* Location details card */}
              <div className="p-5 rounded-xl bg-[#120623]/80 border border-[#d4af37]/25 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-white font-medium leading-snug">
                      {hotelInfo.addressAr}
                    </p>
                    <p className="text-xs text-[#a795be] mt-0.5">
                      {hotelInfo.addressEn}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1 border-t border-[#2d1152]">
                  <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <a
                    href={`tel:${hotelInfo.phone}`}
                    className="text-sm text-[#f4db8a] font-semibold hover:underline tabular-nums"
                  >
                    Direct: {hotelInfo.displayPhone}
                  </a>
                  <span className="text-xs text-[#8e7da8]">· 24/7 Front Desk</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onOpenBooking()}
                  className="px-8 py-3.5 rounded text-sm font-semibold text-[#140826] bg-gradient-to-r from-[#f4db8a] via-[#d4af37] to-[#b8912e] hover:brightness-110 shadow-lg shadow-[#d4af37]/25 transition-all cursor-pointer text-center"
                >
                  Book Your Stay Now
                </button>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="px-8 py-3.5 rounded text-sm font-semibold text-[#f4db8a] bg-[#270f44] border border-[#d4af37]/40 hover:bg-[#35155c] transition-all cursor-pointer text-center"
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right Column: Google Maps Interactive Representation */}
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-[#d4af37]/35 shadow-xl bg-[#0f051c] flex flex-col">
                <div className="p-3 bg-[#17082e] border-b border-[#d4af37]/20 flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#f4db8a] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                    Interactive Map Guide
                  </span>
                  <a
                    href="https://maps.google.com/?q=Sumou+Hotel+Al+Khobar"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#baa9ce] hover:text-white flex items-center gap-1"
                  >
                    <span>Open Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="relative h-64 sm:h-72 w-full bg-[#120622] overflow-hidden">
                  {/* Styled Google Maps iframe representation with Al Khobar Corniche coordinates */}
                  <iframe
                    title="Sumou Hotel Al Khobar Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14309.843058866385!2d50.21000!3d26.28000!2m3!1f0!2f0!3f0!3m2!1i1024!2i786!4f13.1!3m3!1m2!1s0x3e49e83bd47cd80%3A0x0!2sAl%20Khobar%20Corniche%2C%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa"
                    className="w-full h-full border-0 filter contrast-105 brightness-95"
                    loading="lazy"
                    allowFullScreen
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-[#110521]/90 backdrop-blur-md border border-[#d4af37]/30 rounded-lg p-2.5 text-[11px] text-[#e0d3f3]">
                    <strong className="text-[#f4db8a] block">Sumou Hotel Al Khobar</strong>
                    <span>Prince Turki Street, Alkurnaish South, Al Khobar</span>
                  </div>
                </div>

                <div className="p-3 bg-[#150729] text-[11px] text-[#9f8db9] flex justify-between items-center">
                  <span>Coordinates: 26.28° N, 50.21° E</span>
                  <span className="text-[#d4af37]">Corniche Waterfront Area</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
