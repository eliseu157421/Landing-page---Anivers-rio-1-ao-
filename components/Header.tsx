import React from 'react';

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round"></line>
    </svg>
);


const Header: React.FC = () => {
  return (
    <header className="pt-4 pb-2 flex flex-col items-center justify-center bg-transparent text-center">
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white mb-2 shadow-lg">
        <img 
          src="https://github.com/eliseu157421/Fotos-galeria-site/blob/main/perfill.jpg?raw=true" 
          alt="Logotipo da Efésios Fotografia" 
          className="w-full h-full object-cover" 
        />
      </div>
      <h1 className="font-sans text-xl md:text-2xl font-bold text-brand-dark tracking-wide mb-1">
        Efésios Fotografia
      </h1>
      <p className="text-xs text-gray-500 tracking-wider mb-1">Fotografia de Aniversários</p>
       <a 
        href="https://www.instagram.com/efesios_fotografia/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-flex items-center text-brand-dark hover:bg-brand-rose hover:text-white transition-colors duration-300 font-medium text-xs px-2.5 py-0.5 border border-brand-rose rounded-full"
      >
        <InstagramIcon />
        Siga no Instagram
      </a>
    </header>
  );
};

export default Header;