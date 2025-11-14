import React from 'react';
import CtaButton from './CtaButton';

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.287.468-1.152 4.211 4.352-1.141.435.258z" />
    </svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
    </svg>
);


const Footer: React.FC = () => {
  const phoneNumber = '5511919131319';
  const message = encodeURIComponent('Olá, bom dia! Eu vi seu anuncio no Instagram e gostaria de saber como funciona!');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <footer className="bg-brand-dark text-white py-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="font-sans text-3xl md:text-4xl font-bold mb-4">Vamos eternizar o primeiro aninho?</h2>
        <p className="text-lg text-brand-beige mb-10">Clique no botão abaixo para agendarmos uma conversa sem compromisso. <br /> Vou adorar conhecer sua família!</p>
        <div className="mb-12">
            <CtaButton />
        </div>

        <div className="flex items-center justify-center space-x-6">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-gold transition-colors duration-300">
                <WhatsAppIcon />
                <span className="sr-only">WhatsApp</span>
            </a>
            <a href="https://www.instagram.com/efesios_fotografia/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-gold transition-colors duration-300">
                <InstagramIcon />
                <span className="sr-only">Instagram</span>
            </a>
        </div>
        <p className="mt-10 text-brand-gold text-sm opacity-75">&copy; {new Date().getFullYear()} Efésios Fotografia. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;