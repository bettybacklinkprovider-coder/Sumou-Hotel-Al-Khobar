import React from 'react';
import {
  Wifi,
  Clock,
  BedDouble,
  UtensilsCrossed,
  Car,
  Wind,
  Coffee,
  Users,
  ShieldCheck,
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Check,
  ChevronRight,
  Calendar,
  KeyRound,
  Maximize2,
  Tv,
  Bath,
  Compass,
} from 'lucide-react';

interface Props {
  name: string;
  className?: string;
}

export const AmenityIcon: React.FC<Props> = ({ name, className = 'w-5 h-5' }) => {
  switch (name) {
    case 'Wifi':
      return <Wifi className={className} />;
    case 'Clock':
      return <Clock className={className} />;
    case 'BedDouble':
      return <BedDouble className={className} />;
    case 'UtensilsCrossed':
      return <UtensilsCrossed className={className} />;
    case 'Car':
      return <Car className={className} />;
    case 'Wind':
      return <Wind className={className} />;
    case 'Coffee':
      return <Coffee className={className} />;
    case 'Users':
      return <Users className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'MapPin':
      return <MapPin className={className} />;
    case 'Phone':
      return <Phone className={className} />;
    case 'Mail':
      return <Mail className={className} />;
    case 'Check':
      return <Check className={className} />;
    case 'ChevronRight':
      return <ChevronRight className={className} />;
    case 'Calendar':
      return <Calendar className={className} />;
    case 'KeyRound':
      return <KeyRound className={className} />;
    case 'Maximize2':
      return <Maximize2 className={className} />;
    case 'Tv':
      return <Tv className={className} />;
    case 'Bath':
      return <Bath className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    default:
      return <Sparkles className={className} />;
  }
};
