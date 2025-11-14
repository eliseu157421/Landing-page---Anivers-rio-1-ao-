import React from 'react';

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.287.468-1.152 4.211 4.352-1.141.435.258z" />
    </svg>
);

const CtaButton: React.FC = () => {
  const handleClick = () => {
    const phoneNumber = '5511919131319';
    const message = encodeURIComponent('Olá, bom dia! Eu vi seu anuncio no Instagram e gostaria de saber como funciona!');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center justify-center bg-brand-green text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-opacity-90 hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-base whitespace-nowrap"
    >
      <WhatsAppIcon />
      Agende sua festa pelo Whatsapp
    </button>
  );
};

export default CtaButton;