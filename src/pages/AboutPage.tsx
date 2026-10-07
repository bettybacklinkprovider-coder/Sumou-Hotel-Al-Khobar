import React from 'react';
import { hotelInfo, hotelImages, whyChoosePoints } from '../data/hotelData';
import {
  Sparkles,
  ShieldCheck,
  Award,
  HeartHandshake,
  MapPin,
  Coffee,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="w-full pt-20">
      {/* =========================================================================
          ABOUT HERO BANNER
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#d4af37]/25 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={hotelImages.grandLobby}
            alt="Sumou Hotel Grand Ambience"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090412] via-[#140728]/90 to-[#090412]/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#d4af37] uppercase">
            Heritage & Hospitality
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            About Sumou Hotel Al Khobar
          </h1>
          <p className="text-sm sm:text-base text-[#cfbee4] max-w-2xl mx-auto leading-relaxed">
            Rooted in the authentic hospitality traditions of the Kingdom of Saudi Arabia, Sumou Hotel stands as an oasis of quiet luxury and personalized hospitality along the vibrant Al Khobar Corniche.
          </p>
        </div>
      </section>

      {/* =========================================================================
          OUR STORY & PHILOSOPHY
          ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Story Two-Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-widest text-[#d4af37] uppercase">
                Our Story
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Crafting Grandeur on Prince Turki Street
              </h2>
            </div>

            <p className="text-base text-[#cfbee4] leading-relaxed">
              Sumou Hotel Al Khobar was founded with a singular aspiration: to offer a sanctuary that honors the genuine generosity (karam) of Saudi culture while providing the uncompromising luxury expected by modern global travelers.
            </p>

            <p className="text-sm text-[#baa8d3] leading-relaxed">
              Positioned on Prince Turki Street in Al Kurnaish South, our hotel is located within effortless reach of Al Khobar's thriving commercial corridors, upscale coastal promenades, fine dining, and the gateway to Bahrain via King Fahd Causeway.
            </p>

            <div className="p-4 rounded-xl bg-[#16082b] border border-[#d4af37]/25 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#f4db8a]">
                <Award className="w-4 h-4 text-[#d4af37]" />
                <span>The Essence of 'Sumou'</span>
              </div>
              <p className="text-xs text-[#a896bf] leading-relaxed">
                In Arabic, <em>Sumou</em> represents elevation, prestige, and highness. It is our promise that every stay elevates your comfort and enriches your memories of the Eastern Province.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/35 shadow-2xl aspect-[4/3]">
              <img
                src={hotelImages.fineDining}
                alt="Sumou Hotel Dining Lounge"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e041c] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-5 left-6 right-6">
                <span className="text-xs font-semibold text-[#d4af37] tracking-wider uppercase">
                  Fine Dining & Lounges
                </span>
                <p className="font-serif text-lg font-bold text-white">
                  Arabic Coffee, Dates & International Cuisine
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hospitality Philosophy */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#150729] border border-[#d4af37]/30 shadow-xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold tracking-widest text-[#d4af37] uppercase">
              Our Hospitality Philosophy
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Three Pillars of the Sumou Experience
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#1d0b36] border border-[#d4af37]/20 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#2f1155] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-white">
                Authentic Karam
              </h4>
              <p className="text-xs text-[#b9a7d2] leading-relaxed">
                Warm Saudi hospitality begins the moment you step through our revolving doors with traditional welcoming refreshments and attentive care.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#1d0b36] border border-[#d4af37]/20 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#2f1155] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-white">
                Dark Purple & Gold Serenity
              </h4>
              <p className="text-xs text-[#b9a7d2] leading-relaxed">
                Our bespoke color harmony of deep royal purple and golden luxury was carefully engineered to provide restorative tranquility after a bustling day.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#1d0b36] border border-[#d4af37]/20 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#2f1155] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-white">
                Discreet 24/7 Professionalism
              </h4>
              <p className="text-xs text-[#b9a7d2] leading-relaxed">
                Whether arranging early breakfast setups, executive meetings, or late airport arrivals, our multilingual staff caters to your itinerary seamlessly.
              </p>
            </div>
          </div>
        </div>

        {/* Hotel Highlights & Milestones */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold tracking-widest text-[#d4af37] uppercase">
              Distinctive Highlights
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Why Discerning Guests Choose Sumou
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoosePoints.map((point) => (
              <div
                key={point.number}
                className="rounded-xl overflow-hidden bg-[#16082c] border border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all duration-300 shadow-lg flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0c0418]">
                    <img
                      src={point.image}
                      alt={point.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#16082c] via-transparent to-black/30" />
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-[#120524]/90 border border-[#d4af37]/40 font-serif text-xs font-bold text-[#f4db8a]">
                      {point.number}
                    </div>
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-[#1c0a33]/90 border border-[#d4af37]/35 text-[10px] font-['Cairo'] text-[#f4db8a]">
                      {point.badgeAr}
                    </div>
                  </div>

                  <div className="p-4 space-y-2">
                    <h4 className="font-['Cairo'] text-sm font-bold text-white group-hover:text-[#f4db8a] transition-colors leading-snug">
                      {point.titleAr}
                    </h4>
                    <p className="font-serif text-[11px] text-[#d4af37] uppercase tracking-wider font-semibold">
                      {point.title}
                    </p>
                    <p className="text-xs text-[#b7a5d0] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>

                <div className="px-4 py-2.5 border-t border-[#29104b] text-[10px] text-[#8e7da8] flex justify-between items-center">
                  <span className="font-['Cairo'] text-[#f4db8a]">{point.metricAr}</span>
                  <span className="uppercase">{point.metricLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#1f0b3b] via-[#2f1157] to-[#1f0b3b] border border-[#d4af37]/40 text-center space-y-6 shadow-2xl">
          <span className="text-xs font-semibold tracking-widest text-[#d4af37] uppercase">
            Your Coastal Retreat Awaits
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white max-w-2xl mx-auto">
            Experience the Regal Hospitality of Sumou Hotel Al Khobar
          </h2>
          <p className="text-sm text-[#cfbfe4] max-w-xl mx-auto">
            Book directly through our website to enjoy best rate assurance, room preferences, and immediate concierge assistance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-3.5 rounded text-sm font-semibold text-[#140826] bg-gradient-to-r from-[#f4db8a] via-[#d4af37] to-[#b8912e] hover:brightness-110 shadow-lg shadow-[#d4af37]/30 transition-all cursor-pointer"
            >
              Book Your Stay
            </button>
            <button
              onClick={() => onNavigate('/contact')}
              className="w-full sm:w-auto px-8 py-3.5 rounded text-sm font-semibold text-[#f4db8a] bg-[#220c3a] border border-[#d4af37]/40 hover:bg-[#321254] transition-all cursor-pointer"
            >
              Contact Our Front Desk
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
