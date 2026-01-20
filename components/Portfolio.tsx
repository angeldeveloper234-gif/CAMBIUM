import React from 'react';
import { PORTFOLIO_IMAGES } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="proyectos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-cambium-wood text-sm font-bold tracking-[0.2em] uppercase mb-3">Portfolio</h2>
            <p className="text-4xl font-serif text-cambium-dark">
              Nuestros Proyectos Recientes
            </p>
          </div>
          <p className="text-gray-500 max-w-md text-right hidden md:block">
            Cada pieza es diseñada y fabricada pensando en la durabilidad y la estética del espacio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_IMAGES.map((img, index) => (
            <div key={index} className="group relative overflow-hidden aspect-[4/5] bg-gray-100 cursor-pointer">
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-cambium-green/90 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-cambium-wood text-2xl font-serif mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{img.title}</h3>
                <p className="text-white text-sm uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">Ver detalle</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;