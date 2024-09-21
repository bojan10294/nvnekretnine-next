import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'components/Link';
import HamburgerIcon from 'components/Navigation/Hamburger';
import { navLinks } from 'components/const';
import useMediaQuery from 'lib/hooks/useMediaQuery';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const isMobile = useMediaQuery('lg', 'down');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fillNavigation = () =>
      window.addEventListener('scroll', () => setIsFilled(window.scrollY > 15));

    fillNavigation();
    return () => window.removeEventListener('scroll', fillNavigation);
  }, []);

  return (
    <header>
      <div
        className={`fixed duration-300 top-0 z-20 w-full ${
          isFilled || isMobile ? 'bg-gray-dark shadow-03' : ''
        }`}
      >
        <div className="container items-center justify-between w-full py-3 mx-auto lg:grid lg:grid-flow-col">
          <div className="flex items-center justify-between w-full">
            <Link className="flex" href="/">
              <Image
                alt="Logo"
                className="w-48 md:w-72"
                height={90}
                src="/img/Logo-White.svg"
                width={545}
              />
            </Link>
            <HamburgerIcon isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <div
            ref={ref}
            className="flex lg:!h-auto flex-col justify-between gap-10 overflow-hidden duration-300 lg:overflow-visible lg:flex-row"
            style={
              isOpen ? { height: ref.current?.scrollHeight } : { height: 0 }
            }
          >
            <nav className="pt-10 pb-4 lg:py-0">
              <ul className="grid gap-4 font-medium text-white lg:gap-8 lg:grid-flow-col">
                {navLinks.map(({ title, link }) => (
                  <li key={title}>
                    <Link className="py-1 uppercase" href={link} variant="link">
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className={`${isMobile ? 'h-16' : 'hidden'}`} />
    </header>
  );
};

export default Navigation;
