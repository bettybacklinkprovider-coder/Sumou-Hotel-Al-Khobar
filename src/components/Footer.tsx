import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#07020d] text-[#c9bddb] border-t border-[#d4af37]/25 relative overflow-hidden">
      {/* Subtle gold top glow line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-[#f8eecd]">
              SUMOU HOTEL AL KHOBAR
            </h3>
            <p className="text-xs text-[#d4af37] tracking-widest uppercase">
              فندق سمو الخبر · Luxury Hospitality
            </p>
            <p className="text-sm leading-relaxed text-[#b4a4cb] max-w-md pt-2">
              Sumou Hotel Al Khobar invites you to experience refined Arabian luxury on Prince Turki Street, seconds from the Corniche. Thoughtfully designed suites, world-class amenities, and attentive 24/7 hospitality.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#d4af37]/80">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              <span>Certified Saudi Tourism Hospitality Excellence</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-[#f4db8a] tracking-widest uppercase pb-2 border-b border-[#371457]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('/')}
                  className="hover:text-[#f4db8a] transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/rooms')}
                  className="hover:text-[#f4db8a] transition-colors cursor-pointer text-left"
                >
                  Rooms & Suites
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/about')}
                  className="hover:text-[#f4db8a] transition-colors cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="hover:text-[#f4db8a] transition-colors cursor-pointer text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold text-[#f4db8a] tracking-widest uppercase pb-2 border-b border-[#371457]">
              Hotel Information
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-[#e5d8f6] font-arabic leading-snug">
                    {hotelInfo.addressAr}
                  </p>
                  <p className="text-xs text-[#9d8bb7] mt-0.5">
                    {hotelInfo.addressEn}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a
                  href={`tel:${hotelInfo.phone}`}
                  className="text-sm text-[#f4db8a] hover:underline tabular-nums"
                >
                  {hotelInfo.displayPhone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span className="text-xs text-[#b4a4cb]">{hotelInfo.email}</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-[#b4a4cb] pt-1">
                <Clock className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Check-in 14:00 · Check-out 12:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#260f3d] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8e7da8]">
          <p>
            © {new Date().getFullYear()} Sumou Hotel Al Khobar. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>Al Khobar, Eastern Province, KSA</span>
            <span aria-hidden="true">·</span>
            <span>All Rates in Saudi Riyals (SAR)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
