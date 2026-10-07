import React, { useState } from 'react';
import { hotelInfo, hotelFAQs } from '../data/hotelData';
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Car,
  ShieldCheck,
  Send,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [ticketId, setTicketId] = useState('');

  // FAQ Accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !message) {
      alert('Please fill out all required fields.');
      return;
    }
    const ref = 'INQ-' + Math.floor(10000 + Math.random() * 90000);
    setTicketId(ref);
    setIsSent(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="w-full pt-20">
      {/* =========================================================================
          CONTACT HERO BANNER
          ========================================================================= */}
      <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#d4af37]/25 bg-gradient-to-b from-[#16072b] to-[#090412] overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#d4af37] uppercase">
            We Are At Your Service
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Contact Sumou Hotel Al Khobar
          </h1>
          <p className="text-sm sm:text-base text-[#cfbee4] max-w-2xl mx-auto leading-relaxed">
            Our 24/7 hospitality team is ready to assist with reservations, event arrangements, executive inquiries, or bespoke requests on Prince Turki Street.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${hotelInfo.phone}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#f4db8a] via-[#d4af37] to-[#b8912e] text-[#130722] font-semibold text-sm shadow-lg shadow-[#d4af37]/20 hover:brightness-110 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now: {hotelInfo.displayPhone}</span>
            </a>
            <a
              href={`https://wa.me/966138303347`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#240e3f] border border-[#d4af37]/40 text-[#f4db8a] font-medium text-sm hover:bg-[#321356] transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONTACT FORM & DETAILS GRID
          ========================================================================= */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#140726] border border-[#d4af37]/30 shadow-2xl">
              <div className="space-y-2 mb-8">
                <span className="text-xs font-semibold tracking-widest text-[#d4af37] uppercase">
                  Send A Message
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Direct Guest Inquiries
                </h2>
                <p className="text-xs text-[#a997c2]">
                  Fill out the form below and our front desk will reply to you within 2 hours.
                </p>
              </div>

              {isSent ? (
                /* Success Message */
                <div className="p-8 text-center space-y-4 bg-[#1b0a32] border border-[#d4af37]/40 rounded-xl">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#2a104c] border-2 border-[#d4af37] flex items-center justify-center text-[#d4af37]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white">
                    Message Sent Successfully
                  </h3>
                  <p className="text-xs text-[#d4af37] font-semibold tracking-wider">
                    Inquiry Reference: {ticketId}
                  </p>
                  <p className="text-xs text-[#cebfdf] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{fullName}</strong>. Your message has been received by the Sumou Hotel Al Khobar management desk. For urgent requests, please dial directly at <strong className="text-[#f4db8a]">{hotelInfo.displayPhone}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSent(false);
                      setMessage('');
                    }}
                    className="px-6 py-2 rounded text-xs font-semibold text-[#140826] bg-gradient-to-r from-[#f4db8a] to-[#d4af37] hover:brightness-110 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#dcd0ee]">
                        Full Name <span className="text-[#d4af37]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-[#1e0c38] border border-[#d4af37]/35 text-white placeholder-[#786690] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#d4af37] transition-colors"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#dcd0ee]">
                        Phone Number <span className="text-[#d4af37]">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+966 5X XXX XXXX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#1e0c38] border border-[#d4af37]/35 text-white placeholder-[#786690] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#d4af37] transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#dcd0ee]">
                        Email Address <span className="text-[#d4af37]">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="your.email@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#1e0c38] border border-[#d4af37]/35 text-white placeholder-[#786690] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#d4af37] transition-colors"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#dcd0ee]">
                        Inquiry Subject
                      </label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full bg-[#1e0c38] border border-[#d4af37]/35 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#d4af37]"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Room Booking">Room Booking & Suites</option>
                        <option value="Corporate / Long Stay">Corporate / Long Stay</option>
                        <option value="Dining & Banqueting">Dining & Banqueting</option>
                        <option value="Airport Transfer">Airport Transfer Service</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#dcd0ee]">
                      Your Message <span className="text-[#d4af37]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="How may our hospitality team assist you today?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-[#1e0c38] border border-[#d4af37]/35 text-white placeholder-[#786690] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37] resize-none transition-colors"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-lg font-semibold text-sm text-[#140826] bg-gradient-to-r from-[#f4db8a] via-[#d4af37] to-[#b8912e] hover:brightness-110 shadow-lg shadow-[#d4af37]/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Sumou Hotel</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="p-6 rounded-2xl bg-[#16082c] border border-[#d4af37]/30 shadow-xl space-y-5">
              <h3 className="font-serif text-lg font-bold text-white border-b border-[#2d1150] pb-3">
                Hotel Location & Contacts
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#270e44] border border-[#d4af37]/35 flex items-center justify-center text-[#d4af37] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase text-[#d4af37] block">
                      Address
                    </span>
                    <p className="text-white font-arabic text-sm mt-0.5">
                      {hotelInfo.addressAr}
                    </p>
                    <p className="text-xs text-[#a391bc] mt-0.5">
                      {hotelInfo.addressEn}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#270e44] border border-[#d4af37]/35 flex items-center justify-center text-[#d4af37] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase text-[#d4af37] block">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${hotelInfo.phone}`}
                      className="text-white hover:text-[#f4db8a] font-semibold tabular-nums block text-sm"
                    >
                      {hotelInfo.displayPhone}
                    </a>
                    <span className="text-[11px] text-[#8e7da8]">
                      24 Hours · 7 Days a Week
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#270e44] border border-[#d4af37]/35 flex items-center justify-center text-[#d4af37] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase text-[#d4af37] block">
                      Email Inquiries
                    </span>
                    <span className="text-white text-xs">{hotelInfo.email}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Information Card */}
            <div className="p-6 rounded-2xl bg-[#16082c] border border-[#d4af37]/30 shadow-xl space-y-4">
              <h3 className="font-serif text-lg font-bold text-white border-b border-[#2d1150] pb-3">
                Key Business Information
              </h3>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-[#1f0d3a] border border-[#371457]">
                  <span className="text-[#a491bc] block text-[11px]">Check-In Time</span>
                  <strong className="text-white text-sm block mt-0.5">14:00 (2 PM)</strong>
                </div>

                <div className="p-3 rounded-lg bg-[#1f0d3a] border border-[#371457]">
                  <span className="text-[#a491bc] block text-[11px]">Check-Out Time</span>
                  <strong className="text-white text-sm block mt-0.5">12:00 (12 PM)</strong>
                </div>

                <div className="p-3 rounded-lg bg-[#1f0d3a] border border-[#371457]">
                  <span className="text-[#a491bc] block text-[11px]">Front Desk</span>
                  <strong className="text-white text-sm block mt-0.5">24/7 Active</strong>
                </div>

                <div className="p-3 rounded-lg bg-[#1f0d3a] border border-[#371457]">
                  <span className="text-[#a491bc] block text-[11px]">Valet Parking</span>
                  <strong className="text-white text-sm block mt-0.5">Complimentary</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          GOOGLE MAPS SECTION
          ========================================================================= */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#d4af37] uppercase">
              Location & Map
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Google Maps Location
            </h2>
            <p className="text-xs text-[#a997c2]">
              Prince Turki Street, Alkurnaish South, Al Khobar, Saudi Arabia
            </p>
          </div>

          <a
            href="https://maps.google.com/?q=Prince+Turki+Street+Al+Khobar+Saudi+Arabia"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#240e40] border border-[#d4af37]/40 text-xs font-semibold text-[#f4db8a] hover:bg-[#321356] transition-all"
          >
            <span>Open in Google Maps App</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="rounded-2xl overflow-hidden border border-[#d4af37]/35 shadow-2xl h-80 sm:h-96 relative">
          <iframe
            title="Google Maps Sumou Hotel Al Khobar Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14309.843058866385!2d50.21000!3d26.28000!2m3!1f0!2f0!3f0!3m2!1i1024!2i786!4f13.1!3m3!1m2!1s0x3e49e83bd47cd80%3A0x0!2sAl%20Khobar%20Corniche%2C%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa"
            className="w-full h-full border-0 filter contrast-105"
            loading="lazy"
            allowFullScreen
          />
          {/* Floating Address Bar */}
          <div className="absolute top-4 left-4 max-w-sm bg-[#120623]/95 backdrop-blur-md border border-[#d4af37]/40 rounded-xl p-4 shadow-2xl text-xs space-y-1">
            <span className="text-[10px] font-bold uppercase text-[#d4af37] tracking-wider block">
              Sumou Hotel Al Khobar
            </span>
            <p className="font-arabic text-white text-xs">{hotelInfo.addressAr}</p>
            <p className="text-[11px] text-[#b6a5ce]">{hotelInfo.addressEn}</p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAQ SECTION
          ========================================================================= */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold tracking-widest text-[#d4af37] uppercase">
            Guest Inquiries
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-[#a997c2]">
            Answers to common questions regarding check-in, parking, and services at Sumou Hotel.
          </p>
        </div>

        <div className="space-y-3">
          {hotelFAQs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl bg-[#150729] border border-[#d4af37]/25 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#200c3b]/50 transition-colors cursor-pointer"
                >
                  <span className="font-serif text-sm sm:text-base font-bold text-white">
                    {faq.question}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-[#2a104c] border border-[#d4af37]/35 flex items-center justify-center text-[#d4af37] shrink-0">
                    {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#cebfdf] leading-relaxed border-t border-[#2d1150]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
