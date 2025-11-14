// components/MetaPixel.tsx (Versão CORRIGIDA para AMBIENTE VITE/REACT)

import React, { useEffect } from 'react';

// O ID virá da Vercel: NEXT_PUBLIC_FACEBOOK_PIXEL_ID
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID; 

export const MetaPixel: React.FC = () => {
    
    // O useEffect é usado para injetar o código JavaScript do Pixel uma única vez
    useEffect(() => {
        if (!FB_PIXEL_ID) {
            console.log("Meta Pixel ID não encontrado. Verifique a variável de ambiente.");
            return;
        }

        // Se o Pixel já existir (o script já foi carregado), apenas garante o PageView
        if ((window as any).fbq) {
            (window as any).fbq('track', 'PageView');
            return;
        }

        // --- Código de Injeção do Script ---
        
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
        
        // Cria e anexa o elemento <script> ao <head> do documento
        const script = document.createElement('script');
        script.innerHTML = pixelCode;
        document.head.appendChild(script);

    }, []); // O array vazio garante que o código execute apenas na montagem

    if (!FB_PIXEL_ID) return null; 

    // O código noscript é retornado como um componente React
    return (
        <noscript>
            <img 
                height="1" 
                width="1" 
                style={{ display: 'none' }} 
                src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
                alt="Meta Pixel"
            />
        </noscript>
    );
};
