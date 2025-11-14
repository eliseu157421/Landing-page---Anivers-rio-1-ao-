import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CtaButton from './components/CtaButton';
import FloatingNav from './components/FloatingNav';

// **ATENÇÃO:** Não há importação de InstagramGallery aqui. 
// O erro de módulo quebrado deve estar no build porque a Galeria 
// estava aninhada em outro componente, ou o Vercel estava buscando
// o componente quebrado.
// NÃO VAMOS ALTERAR NENHUMA IMPORTAÇÃO, pois nenhuma está visível.

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-sky-50 to-rose-50">
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="why-us">
          <WhyChooseUs />
          <Benefits />
        </section>
        <section id="cta" className="bg-white py-12 px-6">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Pronta para criar memórias inesquecíveis?
            </h2>
            <p className="text-lg text-brand-dark mb-8 max-w-2xl mx-auto">
              Vamos conversar sobre como podemos tornar o primeiro aniversário do seu filho um momento mágico e eterno.
            </p>
            <CtaButton />
          </div>
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>

        {/* ** Se a Galeria estivesse aqui, ela seria removida, mas não está. **
        */}

      </main>
      <div id="footer">
        <Footer />
      </div>
      <FloatingNav />
    </div>
  );
};

export default App;
