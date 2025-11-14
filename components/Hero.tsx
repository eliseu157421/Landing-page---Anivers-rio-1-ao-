import React, { useState, useEffect } from 'react';

const initialImages = [
  {
    src: 'https://raw.githubusercontent.com/eliseu157421/Fotos-galeria-site/main/IMG_1810-Aprimorado-NR.jpg',
    alt: 'Bebê menina em ensaio fotográfico de primeiro aniversário com vestido rosa e cenário delicado.'
  },
  { src: 'https://github.com/eliseu157421/Fotos-galeria-site/blob/main/IMG_1829-Aprimorado-NR.jpg?raw=true', alt: 'Ensaio fotográfico de aniversário infantil.' },
  { src: 'https://github.com/eliseu157421/Fotos-galeria-site/blob/main/IMG_1829-Aprimorado-NR.jpg?raw=true', alt: 'Criança sorrindo durante festa de aniversário.' },
  { src: 'https://github.com/eliseu157421/Fotos-galeria-site/blob/main/IMG_1884.jpg?raw=true', alt: 'Bebê em cenário de primeiro aninho.' },
  { src: 'https://github.com/eliseu157421/Fotos-galeria-site/blob/main/IMG_3689-Aprimorado-NR.jpg?raw=true', alt: 'Detalhes de decoração de festa infantil.' },
  { src: 'https://github.com/eliseu157421/Fotos-galeria-site/blob/main/IMG_3698-Aprimorado-NR.jpg?raw=true', alt: 'Foto de família em aniversário de criança.' },
  { src: 'https://github.com/eliseu157421/Fotos-galeria-site/blob/main/IMG_4462-Aprimorado-NR.jpg?raw=true', alt: 'Criança se divertindo em sua festa de aniversário.' },
  { src: 'https://github.com/eliseu157421/Fotos-galeria-site/blob/main/IMG_4931.jpg?raw=true', alt: 'Bolo de aniversário infantil.' },
  { src: 'https://github.com/eliseu157421/Fotos-galeria-site/blob/main/IMG_5734-Aprimorado-NR.jpg?raw=true', alt: 'Menino brincando em sua festa de aniversário.' },
  { src: 'https://github.com/eliseu157421/Fotos-galeria-site/blob/main/IMG_5808-Aprimorado-NR.jpg?raw=true', alt: 'Momento espontâneo em aniversário infantil.' },
  { src: 'https://github.com/eliseu157421/Fotos-galeria-site/blob/main/IMG_5840-Aprimorado-NR.jpg?raw=true', alt: 'Menina sorrindo em sua festa de aniversário.' },
  { src: 'https://github.com/eliseu157421/Fotos-galeria-site/blob/main/IMG_7698-Aprimorado-NR.jpg?raw=true', alt: 'Fotografia profissional de aniversário de um ano.' },
  { src: 'https://github.com/eliseu157421/Fotos-galeria-site/blob/main/IMG_7812-Aprimorado-NR.jpg?raw=true', alt: 'Criança feliz em sua comemoração de aniversário.' }
];

// Fisher-Yates (aka Knuth) Shuffle
const shuffleArray = (array: typeof initialImages) => {
  let currentIndex = array.length,  randomIndex;
  const newArray = [...array];

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex], newArray[currentIndex]];
  }
  return newArray;
}

const heroImages = shuffleArray(initialImages);


const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, []);


  return (
    <section className="bg-transparent pt-2 px-4">
      <div className="container mx-auto max-w-4xl flex flex-col items-center text-center">
        <h2 className="font-sans text-2xl md:text-3xl font-bold leading-tight text-brand-dark mb-2">
          O primeiro ano do seu filho passa rápido, Registre!
        </h2>
        
        <div className="relative w-full max-w-lg aspect-square rounded-lg overflow-hidden shadow-lg">
          {heroImages.map((image, index) => (
             <img 
              key={`${image.src}-${index}`}
              src={image.src} 
              alt={image.alt}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;