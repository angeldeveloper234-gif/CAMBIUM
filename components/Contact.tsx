import React from 'react';
import { MapPin, Phone, Mail, Facebook, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-cambium-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-cambium-wood text-sm font-bold tracking-[0.2em] uppercase mb-4">Contacto</h2>
            <h3 className="text-4xl font-serif mb-8">Inicia tu proyecto</h3>
            <p className="text-gray-400 mb-12 text-lg font-light">
              Estamos listos para asesorarte. Contáctanos por WhatsApp, teléfono o visítanos en nuestro taller para recibir una cotización personalizada.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white/5 group-hover:bg-cambium-wood/20 transition-colors mr-6">
                  <MapPin className="w-6 h-6 text-cambium-wood" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Dirección</h4>
                  <p className="text-gray-400">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white/5 group-hover:bg-cambium-wood/20 transition-colors mr-6">
                  <Phone className="w-6 h-6 text-cambium-wood" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Teléfono / WhatsApp</h4>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-400 hover:text-white transition-colors block">
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                  <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="text-cambium-wood text-sm mt-1 inline-flex items-center hover:underline">
                    Enviar mensaje <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white/5 group-hover:bg-cambium-wood/20 transition-colors mr-6">
                  <Mail className="w-6 h-6 text-cambium-wood" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Email</h4>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-400 hover:text-white transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
              
              <div className="pt-8">
                 <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gray-400 hover:text-cambium-wood transition-colors">
                    <Facebook className="w-6 h-6 mr-3" />
                    Síguenos en Facebook
                 </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[500px] w-full bg-gray-800 relative group overflow-hidden border border-white/10">
             <iframe 
               src={CONTACT_INFO.mapUrl} 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy"
               title="Ubicación de Cambium Desarrollos"
               className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
             ></iframe>
             <div className="absolute inset-0 pointer-events-none border-4 border-white/5"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;