// components/MetaPixel.tsx (Versão CORRIGIDA para AMBIENTE VITE/REACT)

import React, { useEffect } from 'react';
// As importações de 'next/script' e 'next/router' FORAM REMOVIDAS.

// O ID será 1890814624867929, vindo da Vercel
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID; 

export const MetaPixel: React.FC = () => {
    
    // O useEffect executa o código JavaScript do Pixel apenas uma vez, após a renderização.
    useEffect(() => {
        if (!FB_PIXEL_ID) {
            console.warn("Meta Pixel ID não encontrado. O rastreamento está desabilitado.");
            return;
        }

        // Se o Pixel já estiver no window (em caso de Fast Refresh ou re-montagem), evita reinicializar
        if ((window as any).fbq) {
             (window as any).fbq('track', 'PageView');
             return;
        }

        // --- Código de Injeção do Script (o código base que você recebeu da Meta) ---
        
        const pixelCode = `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
        `;
        
        // Cria o elemento <script> e o insere no <head>
        const script = document.createElement('script');
        script.innerHTML = pixelCode;
        document.head.appendChild(script);

    }, []); // O array vazio [] garante que o código execute APENAS NA MONTAGEM

    if (!FB_PIXEL_ID) return null; 

    // O código noscript é retornado como um componente React normal.
    return (
        <noscript>
            <img 
                height="1" 
                width="1" 
                style={{ display: 'none' }} 
                src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
                alt="Meta Pixel Noscript"
            />
        </noscript>
    );
};
