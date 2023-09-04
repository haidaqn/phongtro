import { useState, useEffect } from 'react';

export function useScroll() {
    const [scrollY, setScrollY] = useState(window.scrollY);
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollY;
}
