import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-cambium-wood text-sm font-bold tracking-[0.2em] uppercase mb-3">Sobre Nosotros</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-cambium-dark mb-8 leading-tight">
              Calidad Artesanal y <br />
              <span className="italic text-cambium-green">Diseño Personalizado</span>
            </h3>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                En <strong>Cambium Desarrollos</strong> nos especializamos en el diseño y ejecución de proyectos de mobiliario personalizados. 
                Entendemos que cada hogar y negocio es único, por lo que no ofrecemos soluciones genéricas.
              </p>
              <p>
                Creamos muebles durables, funcionales y estéticamente cuidados, adaptados a cada espacio y necesidad específica de nuestros clientes.
              </p>
              <p>
                Acompañamos cada proyecto desde la idea inicial hasta la entrega final, con atención directa y materiales de calidad, 
                asegurando que el resultado supere tus expectativas.
              </p>
            </div>
          </div>
          <div className="relative h-[500px] w-full bg-gray-100">
             <img 
               src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1500&auto=format&fit=crop" 
               alt="Taller de muebles a medida" 
               className="w-full h-full object-cover shadow-2xl"
             />
             <div className="absolute -bottom-6 -left-6 bg-cambium-wood p-8 hidden md:block shadow-lg">
                <p className="text-cambium-green font-serif text-2xl font-bold">Atención Directa</p>
                <p className="text-cambium-green/80 mt-1">San Juan de los Lagos</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;