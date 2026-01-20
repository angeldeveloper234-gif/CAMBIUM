import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-cambium-green text-sm font-bold tracking-[0.2em] uppercase mb-4">Lo que hacemos</h2>
          <p className="text-4xl md:text-5xl font-serif text-cambium-dark">
            Soluciones a Medida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-cambium-wood group">
                <div className="flex items-center justify-center h-14 w-14 bg-cambium-green/10 text-cambium-green group-hover:bg-cambium-green group-hover:text-cambium-wood transition-colors duration-300 rounded-none mb-8">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-serif font-bold text-cambium-dark mb-4 group-hover:text-cambium-green transition-colors">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;