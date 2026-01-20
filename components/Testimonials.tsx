import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="opiniones" className="py-24 bg-cambium-green text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
        <Quote size={200} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-cambium-wood text-sm font-bold tracking-[0.2em] uppercase mb-4">Reseñas</h2>
          <h3 className="text-3xl md:text-4xl font-serif">
            Lo que dicen nuestros clientes
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TESTIMONIALS.map((review, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm p-10 border border-white/10 hover:border-cambium-wood transition-colors duration-300">
              <div className="flex text-cambium-wood mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-200 text-lg leading-relaxed italic mb-8 font-serif">"{review.text}"</p>
              <div className="border-t border-white/10 pt-6">
                <h4 className="font-bold text-white uppercase tracking-wide">{review.name}</h4>
                <span className="text-xs text-cambium-wood/80 mt-1 block">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;