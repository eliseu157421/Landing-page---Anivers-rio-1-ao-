// components/MetaPixel.tsx

import Script from 'next/script';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

// O ID será 1890814624867929, vindo da Vercel
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID; 

// Função para rastrear PageView em mudanças de rota (SPA)
const handleRouteChange = () => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'PageView');
  }
};

export const MetaPixel = () => {
  const router = useRouter();

  useEffect(() => {
    // Escuta a mudança de rota no Next.js para rastrear SPA
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  if (!FB_PIXEL_ID) return null; // Não renderiza se a Vercel não forneceu o ID

  return (
    <>
      {/* 1. Script de Inicialização e PageView (Principal) */}
      <Script
        id="fb-pixel-init"
        strategy="afterInteractive" 
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView'); // PageView inicial
          `,
        }}
      />

      {/* 2. Código Noscript (Para navegadores sem JS ou bloqueadores) */}
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{ display: 'none' }} 
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          alt="Meta Pixel"
        />
      </noscript>
    </>
  );
};
