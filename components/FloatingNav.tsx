
import React, { useState, useEffect, useCallback } from 'react';

const sectionIds = ['hero', 'why-us', 'cta', 'testimonials', 'footer'];

const ArrowUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
);

const ArrowDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

const FloatingNav: React.FC = () => {
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    const handleScroll = useCallback(() => {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        let activeIndex = 0;
        
        for (let i = sectionIds.length - 1; i >= 0; i--) {
            const section = document.getElementById(sectionIds[i]);
            if (section && section.offsetTop <= scrollPosition) {
                activeIndex = i;
                break;
            }
        }
        setCurrentSectionIndex(activeIndex);

    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    const scrollToSection = (index: number) => {
        const section = document.getElementById(sectionIds[index]);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const navigateToPreviousSection = () => {
        if (currentSectionIndex > 0) {
            scrollToSection(currentSectionIndex - 1);
        }
    };

    const navigateToNextSection = () => {
        if (currentSectionIndex < sectionIds.length - 1) {
            scrollToSection(currentSectionIndex + 1);
        }
    };
    
    const isFirstSection = currentSectionIndex === 0;
    const isLastSection = currentSectionIndex === sectionIds.length - 1;

    return (
        <div className="fixed bottom-5 right-5 z-50 flex flex-col space-y-2">
            <button
                onClick={navigateToPreviousSection}
                disabled={isFirstSection}
                className="bg-brand-rose text-white p-2 rounded-full shadow-lg hover:bg-opacity-80 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Ir para seção anterior"
            >
                <ArrowUpIcon />
            </button>
            <button
                onClick={navigateToNextSection}
                disabled={isLastSection}
                className="bg-brand-rose text-white p-2 rounded-full shadow-lg hover:bg-opacity-80 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Ir para próxima seção"
            >
                <ArrowDownIcon />
            </button>
        </div>
    );
};

export default FloatingNav;