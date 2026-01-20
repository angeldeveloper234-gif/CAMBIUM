import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-8 text-center border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Cambium Desarrollos. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;