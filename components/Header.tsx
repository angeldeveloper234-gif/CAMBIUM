import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative w-full">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-cambium-green/95 backdrop-blur-sm border-b border-cambium-green shadow-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-white tracking-widest font-serif">
                CAMBIUM <span className="text-cambium-wood font-normal text-lg block sm:inline sm:ml-2">DESARROLLOS</span>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#inicio" className="text-gray-300 hover:text-cambium-wood transition-colors text-sm uppercase tracking-wider font-medium">Inicio</a>
              <a href="#servicios" className="text-gray-300 hover:text-cambium-wood transition-colors text-sm uppercase tracking-wider font-medium">Servicios</a>
              <a href="#proyectos" className="text-gray-300 hover:text-cambium-wood transition-colors text-sm uppercase tracking-wider font-medium">Proyectos</a>
              <a href="#opiniones" className="text-gray-300 hover:text-cambium-wood transition-colors text-sm uppercase tracking-wider font-medium">Opiniones</a>
              <a href="#contacto" className="text-gray-300 hover:text-cambium-wood transition-colors text-sm uppercase tracking-wider font-medium">Contacto</a>
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                className="bg-cambium-wood text-cambium-green px-5 py-2 rounded-none hover:bg-white transition-colors text-sm font-bold uppercase tracking-wide"
              >
                Cotizar
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-cambium-wood">
                {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-cambium-green border-t border-gray-700">
            <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col items-center">
              <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="block py-2 text-white hover:text-cambium-wood text-lg uppercase tracking-wide">Inicio</a>
              <a href="#servicios" onClick={() => setIsMenuOpen(false)} className="block py-2 text-white hover:text-cambium-wood text-lg uppercase tracking-wide">Servicios</a>
              <a href="#proyectos" onClick={() => setIsMenuOpen(false)} className="block py-2 text-white hover:text-cambium-wood text-lg uppercase tracking-wide">Proyectos</a>
              <a href="#opiniones" onClick={() => setIsMenuOpen(false)} className="block py-2 text-white hover:text-cambium-wood text-lg uppercase tracking-wide">Opiniones</a>
              <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="block py-2 text-white hover:text-cambium-wood text-lg uppercase tracking-wide">Contacto</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center bg-cambium-dark overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
             src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
             alt="Diseño de interiores y mobiliario" 
             className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-cambium-green/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-serif leading-tight">
            Diseño y fabricación <br />
            <span className="text-cambium-wood italic">de muebles a medida</span>
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-3xl mx-auto mb-10 font-light">
            En San Juan de los Lagos. Creamos muebles durables, funcionales y estéticamente cuidados, adaptados a cada espacio y necesidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold uppercase tracking-wider text-cambium-green bg-cambium-wood hover:bg-white transition-all duration-300 rounded-none"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Solicitar Cotización
            </a>
            <a 
              href={`tel:${CONTACT_INFO.phone}`}
              className="inline-flex items-center justify-center px-8 py-4 border border-white text-base font-bold uppercase tracking-wider text-white hover:bg-white hover:text-cambium-green transition-all duration-300 rounded-none"
            >
              <Phone className="w-5 h-5 mr-2" />
              Llamar Ahora
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;