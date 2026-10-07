import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', labelAr: 'الرئيسية', path: '/' },
    { label: 'Rooms & Suites', labelAr: 'الغرف والأجنحة', path: '/rooms' },
    { label: 'About Us', labelAr: 'عن الفندق', path: '/about' },
    { label: 'Contact Us', labelAr: 'اتصل بنا', path: '/contact' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0e051a]/95 backdrop-blur-md border-b border-[#d4af37]/25 shadow-xl shadow-black/40 py-3.5'
          : 'bg-gradient-to-b from-[#0a0414]/90 via-[#0a0414]/60 to-transparent border-b border-[#d4af37]/15 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Zone 1: Single text wordmark */}
          <button
            onClick={() => handleLinkClick('/')}
            className="text-left group cursor-pointer focus:outline-none"
            aria-label="Sumou Hotel Al Khobar Home"
          >
            <span className="font-serif text-lg sm:text-xl lg:text-2xl font-bold tracking-wider text-[#f8eecd] group-hover:text-[#d4af37] transition-colors whitespace-nowrap">
              SUMOU HOTEL AL KHOBAR
            </span>
          </button>

          {/* Zone 2: 4 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((item) => {
              const isActive =
                item.path === '/'
                  ? currentPath === '/' || currentPath === '/home'
                  : currentPath.startsWith(item.path);

              return (
                <button
                  key={item.path}
                  onClick={() => handleLinkClick(item.path)}
                  className={`relative text-xs lg:text-sm tracking-wide font-medium transition-colors whitespace-nowrap cursor-pointer py-1 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#f4db8a] font-semibold'
                      : 'text-[#d6c9e8] hover:text-[#f8eecd]'
                  }`}
                >
                  <span className="font-['Cairo'] text-xs text-[#d4af37] font-semibold">{item.labelAr}</span>
                  <span className="text-[#a898bf] text-[10px]">·</span>
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${hotelInfo.phone}`}
              className="hidden lg:flex items-center gap-2 text-xs font-medium text-[#d6c9e8] hover:text-[#f4db8a] transition-colors px-3 py-1.5 rounded border border-[#d4af37]/20 hover:border-[#d4af37]/50"
              title="Call Front Desk"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="tabular-nums tracking-wider">{hotelInfo.displayPhone}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold tracking-wide text-[#140826] bg-gradient-to-r from-[#f4db8a] via-[#d4af37] to-[#b8912e] hover:from-[#fceec5] hover:via-[#dfbe4e] hover:to-[#c59b27] rounded shadow-md shadow-[#d4af37]/20 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
            >
              Book Now
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#e3d7fa] hover:text-[#d4af37] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#120624]/98 border-b border-[#d4af37]/30 backdrop-blur-xl px-4 pt-3 pb-6 transition-all duration-200 shadow-2xl">
          <nav className="flex flex-col space-y-3 pt-2">
            {navLinks.map((item) => {
              const isActive =
                item.path === '/'
                  ? currentPath === '/' || currentPath === '/home'
                  : currentPath.startsWith(item.path);

              return (
                <button
                  key={item.path}
                  onClick={() => handleLinkClick(item.path)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#371457]/50 text-[#f4db8a] border-l-2 border-[#d4af37]'
                      : 'text-[#e2d5f8] hover:text-[#ffffff] hover:bg-[#250d3d]/50'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="font-['Cairo'] text-xs font-semibold text-[#d4af37]">{item.labelAr}</span>
                </button>
              );
            })}

            <div className="pt-4 border-t border-[#d4af37]/20 flex flex-col gap-3">
              <a
                href={`tel:${hotelInfo.phone}`}
                className="flex items-center justify-center gap-2.5 py-2.5 px-4 rounded text-sm text-[#f4db8a] bg-[#220c3a] border border-[#d4af37]/30"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span className="tabular-nums">Call {hotelInfo.displayPhone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-4 text-center text-sm font-semibold text-[#140826] bg-gradient-to-r from-[#f4db8a] via-[#d4af37] to-[#b8912e] rounded shadow-lg shadow-[#d4af37]/25"
              >
                Book Your Stay
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
