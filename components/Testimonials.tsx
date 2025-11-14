
import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    photoUrl: 'https://github.com/eliseu157421/Fotos-galeria-site/blob/main/IMG_5280-Aprimorado-NR.jpg?raw=true',
    name: 'Pamela - Mãe do Ibrahim',
    comment: 'Queremos agradecer de coração pelo trabalho incrível no aniversário do nosso filho. As fotos ficaram lindas! Você registrou cada momento com sensibilidade e carinho, dá pra sentir a alegria daquele dia em cada imagem.',
  },
  {
    photoUrl: 'https://github.com/eliseu157421/Fotos-galeria-site/blob/main/IMG_5915-Aprimorado-NR.jpg?raw=true',
    name: 'Robson- Pai do Pietro',
    comment: 'Eliseu, muito obrigado! Tudo ficou incrível, com qualidade em cada detalhe. Já deixa marcada a data do dia 18 de outubro para continuar registrando cada ciclo do meu filho.Agradeço pelo cuidado e pela dedicação.',
  },
  {
    photoUrl: 'https://github.com/eliseu157421/Fotos-galeria-site/blob/main/IMG_3208.jpg?raw=true',
    name: 'Sabrina - Mãe da Giovana',
    comment: 'As fotos ficaram incríveis! Você soube captar como ela é a leveza, as risadas e a emoção do momento. Cada imagem me faz lembrar desse dia especial',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-brand-beige py-20 px-6">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="font-sans text-3xl md:text-4xl font-bold mb-4 text-brand-dark">O que as mamães dizem</h2>
        <p className="text-lg text-brand-dark mb-12 max-w-2xl mx-auto">O carinho de quem confiou em meu trabalho para eternizar momentos únicos.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-brand-rose flex-shrink-0">
                <img 
                  src={testimonial.photoUrl} 
                  alt={`Foto de ${testimonial.name}`} 
                  className={
                    `w-full h-full object-cover` +
                    (testimonial.name === 'Pamela - Mãe do Ibrahim' 
                      ? ' transform scale-125 object-[center_25%]' 
                      : '')
                  }
                />
              </div>
              <p className="text-brand-dark italic mb-4 flex-grow">"{testimonial.comment}"</p>
              <h3 className="font-bold font-sans text-brand-dark text-lg">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;