import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white py-4 px-6 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-white/20"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="font-bold tracking-wide text-sm hidden md:inline">Cotizar Proyecto</span>
    </a>
  );
};

export default FloatingWhatsApp;