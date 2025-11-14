import React from 'react';

const galleryImages: { src: string; alt: string }[] = [
  {
    src: 'https://raw.githubusercontent.com/eliseu157421/Fotos-galeria-site/main/IMG_9333.jpg',
    alt: 'Menino sorrindo em sua festa de aniversário infantil.'
  },
  {
    src: 'https://raw.githubusercontent.com/eliseu157421/Fotos-galeria-site/main/IMG_9335-Aprimorado-NR.jpg',
    alt: 'Bebê em festa de aniversário com decoração de balões.'
  },
  {
    src: 'https://raw.githubusercontent.com/eliseu157421/Fotos-galeria-site/main/IMG_9339.jpg',
    alt: 'Criança brincando e sorrindo em sua festa de aniversário.'
  },
  {
    src: 'https://raw.githubusercontent.com/eliseu157421/Fotos-galeria-site/main/IMG_9345.jpg',
    alt: 'Detalhes da decoração colorida de uma festa infantil.'
  },
  {
    src: 'https://raw.githubusercontent.com/eliseu157421/Fotos-galeria-site/main/IMG_9348.jpg',
    alt: 'Família feliz celebrando aniversário de um ano do filho.'
  },
  {
    src: 'https://raw.githubusercontent.com/eliseu157421/Fotos-galeria-site/main/IMG_9352.jpg',
    alt: 'Bolo de aniversário temático de uma festa infantil.'
  },
  {
    src: 'https://raw.githubusercontent.com/eliseu157421/Fotos-galeria-site/main/IMG_9355.jpg',
    alt: 'Menina sorrindo para a foto em seu aniversário.'
  },
  {
    src: 'https://raw.githubusercontent.com/eliseu157421/Fotos-galeria-site/main/IMG_9363.jpg',
    alt: 'Bebê se divertindo e batendo palmas em sua festa.'
  },
  {
    src: 'https://raw.githubusercontent.com/eliseu157421/Fotos-galeria-site/main/IMG_9364.jpg',
    alt: 'Foto espontânea de criança brincando em festa de aniversário.'
  },
];

const InstagramGallery: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="font-sans text-3xl md:text-4xl font-bold mb-4 text-brand-dark">Momentos que postamos com carinho</h2>
        <p className="text-lg text-brand-dark mb-12">Acompanhe meu trabalho e inspire-se no Instagram.</p>

        {galleryImages.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.slice(0, 9).map((image, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-gray-100 border border-gray-200 rounded-lg p-8 text-center text-gray-500">
            <p>Novas fotos serão adicionadas em breve!</p>
          </div>
        )}


        <a 
          href="https://www.instagram.com/efesios_fotografia/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block mt-12 bg-transparent border-2 border-brand-rose text-brand-dark font-bold py-3 px-8 rounded-full hover:bg-brand-rose transition-colors duration-300"
        >
          Me siga no Instagram
        </a>
      </div>
    </section>
  );
};

export default InstagramGallery;