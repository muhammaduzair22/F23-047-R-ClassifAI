import { useEffect, useState } from 'react';

const useScrollAnimation = (sectionId, threshold = 20) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById(sectionId);

            if (!section) {
                // Guard clause: Return early if the element is not found
                return;
            }

            const sectionOffset = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const scrollPosition = window.scrollY;
            const viewportHeight = window.innerHeight;

            const isSectionEnteringViewport = scrollPosition + viewportHeight > 1900;

            setIsVisible(isSectionEnteringViewport);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial scroll position

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sectionId, threshold]);

    return isVisible;
};

export default useScrollAnimation;
