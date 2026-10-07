export interface Room {
  id: string;
  name: string;
  category: 'Deluxe' | 'Executive' | 'Suite' | 'Family';
  priceSAR: number;
  image: string;
  shortDescription: string;
  fullDescription: string;
  sizeM2: number;
  bedType: string;
  occupancy: string;
  view: string;
  amenities: string[];
  featured?: boolean;
}

export interface AmenityItem {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  iconName: string;
  image: string;
  tagAr?: string;
  tagEn?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface HotelInfo {
  name: string;
  phone: string;
  displayPhone: string;
  email: string;
  addressAr: string;
  addressEn: string;
  city: string;
  country: string;
  checkIn: string;
  checkOut: string;
  currency: string;
}

export interface ReservationData {
  roomId: string;
  checkInDate: string;
  checkOutDate: string;
  guests: number;
  roomsCount: number;
  fullName: string;
  email: string;
  phone: string;
  specialRequests?: string;
}
