import { useEffect, useState } from 'react';

export default function useHideOnScroll() {
  const [hideNav, setHideNav] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setHideNav(currentY > prevScrollY && currentY > 100);
      setPrevScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  return hideNav;
}
