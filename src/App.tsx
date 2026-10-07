/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { RoomDetailModal } from './components/RoomDetailModal';
import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { Room } from './types';
import { hotelRooms } from './data/hotelData';

export default function App() {
  // Normalize initial path
  const getInitialPath = () => {
    const path = window.location.pathname.toLowerCase();
    if (path === '/rooms' || path.startsWith('/rooms')) return '/rooms';
    if (path === '/about' || path.startsWith('/about')) return '/about';
    if (path === '/contact' || path.startsWith('/contact')) return '/contact';
    return '/';
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingRoomId, setBookingRoomId] = useState<string | undefined>(undefined);
  const [selectedRoomDetail, setSelectedRoomDetail] = useState<Room | null>(null);

  // Sync with browser history popstate
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getInitialPath());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update page title & scroll to top when path changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    let titleSuffix = 'Luxury Hotel & Suites in Saudi Arabia';
    if (currentPath === '/rooms') {
      titleSuffix = 'Rooms & Suites | Sumou Hotel Al Khobar';
    } else if (currentPath === '/about') {
      titleSuffix = 'About Us & Heritage | Sumou Hotel Al Khobar';
    } else if (currentPath === '/contact') {
      titleSuffix = 'Contact Us & Location | Sumou Hotel Al Khobar';
    }
    document.title = `Sumou Hotel Al Khobar | ${titleSuffix}`;
  }, [currentPath]);

  const handleNavigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
    }
  };

  const handleOpenBooking = (roomId?: string) => {
    setBookingRoomId(roomId);
    setIsBookingOpen(true);
  };

  const handleViewRoomDetails = (room: Room) => {
    setSelectedRoomDetail(room);
  };

  const handleBookFromDetail = (roomId: string) => {
    setSelectedRoomDetail(null);
    handleOpenBooking(roomId);
  };

  return (
    <div className="min-h-screen bg-[#090412] text-[#f4effa] flex flex-col selection:bg-[#d4af37]/35 selection:text-[#fbf2d8]">
      {/* Sticky Luxury Navbar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content: 4 Separate Pages */}
      <main className="flex-1 w-full">
        {currentPath === '/rooms' && (
          <RoomsPage
            onOpenBooking={handleOpenBooking}
            onViewRoomDetails={handleViewRoomDetails}
          />
        )}

        {currentPath === '/about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentPath === '/contact' && <ContactPage />}

        {(currentPath === '/' || currentPath === '/home') && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
            onViewRoomDetails={handleViewRoomDetails}
          />
        )}
      </main>

      {/* Luxury Footer across all pages */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Reservation Drawer / Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preSelectedRoomId={bookingRoomId}
      />

      {/* Room Detail Modal */}
      <RoomDetailModal
        room={selectedRoomDetail}
        onClose={() => setSelectedRoomDetail(null)}
        onBookRoom={handleBookFromDetail}
      />
    </div>
  );
}
