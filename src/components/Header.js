import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [overHero, setOverHero] = useState(false);
  const [mounted, setMounted] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const setH = () => {
      const h = headerRef.current?.offsetHeight || 0;
      document.documentElement.style.setProperty('--header-h', `${h}px`);
    };
    setH();
    window.addEventListener('resize', setH);
    return () => window.removeEventListener('resize', setH);
  }, []);

  
  useEffect(() => {
    const hero = document.querySelector('#hero');
    if (!hero) { setOverHero(false); return; }

    const io = new IntersectionObserver(
      ([entry]) => {
        setOverHero(entry.isIntersecting);
      },
      { root: null, threshold: 0, rootMargin: '-64px 0px 0px 0px' }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);


  const headerClasses = overHero
    ? 'nav--overlay nav--light'
    : 'nav--solid nav--dark';

  return (
    <header ref={headerRef} className={`site-header nav fixed top-0 left-0 right-0 w-full z-[100] ${headerClasses} ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'} transition-[background,border-color,box-shadow,color] duration-200 ease-out`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <img src="/images/MKT Rugs_1 PNG.png" alt="MKT RUGS Logo" className="h-12 sm:h-14 md:h-16 w-auto object-contain" />
            <div className="leading-tight">
              <div className="nav__brand text-xl sm:text-2xl md:text-3xl font-heading font-bold tracking-wide">MKT RUGS</div>
              <div className="hidden sm:block text-[10px] sm:text-xs md:text-sm text-primary font-body uppercase tracking-widest">From Farm to Floor</div>
            </div>
          </div>

        
          <nav className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) => `nav__link font-body text-sm md:text-base uppercase py-2 transition-transform duration-200 ${isActive ? 'is-active' : 'hover:scale-110'}`}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `nav__link font-body text-sm md:text-base uppercase py-2 transition-transform duration-200 ${isActive ? 'is-active' : 'hover:scale-110'}`}
            >
              About Us
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) => `nav__link font-body text-sm md:text-base uppercase py-2 transition-transform duration-200 ${isActive ? 'is-active' : 'hover:scale-110'}`}
            >
              Products
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) => `nav__link font-body text-sm md:text-base uppercase py-2 transition-transform duration-200 ${isActive ? 'is-active' : 'hover:scale-110'}`}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `nav__link font-body text-sm md:text-base uppercase py-2 transition-transform duration-200 ${isActive ? 'is-active' : 'hover:scale-110'}`}
            >
              Contact
            </NavLink>
          </nav>

          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:scale-110 transition-transform duration-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

      
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-bgLight border-t border-primary/20">
              <NavLink to="/" end onClick={() => setIsOpen(false)} className={({isActive}) => `nav__link block px-3 py-2 font-body text-base uppercase transition-transform duration-200 ${isActive ? 'is-active' : 'hover:translate-x-2'}`}>
                Home
              </NavLink>
              <NavLink to="/about" onClick={() => setIsOpen(false)} className={({isActive}) => `nav__link block px-3 py-2 font-body text-base uppercase transition-transform duration-200 ${isActive ? 'is-active' : 'hover:translate-x-2'}`}>
                About Us
              </NavLink>
              <NavLink to="/products" onClick={() => setIsOpen(false)} className={({isActive}) => `nav__link block px-3 py-2 font-body text-base uppercase transition-transform duration-200 ${isActive ? 'is-active' : 'hover:translate-x-2'}`}>
                Products
              </NavLink>
              <NavLink to="/gallery" onClick={() => setIsOpen(false)} className={({isActive}) => `nav__link block px-3 py-2 font-body text-base uppercase transition-transform duration-200 ${isActive ? 'is-active' : 'hover:translate-x-2'}`}>
                Gallery
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={({isActive}) => `nav__link block w-full text-left px-3 py-2 font-body text-base uppercase transition-transform duration-200 ${isActive ? 'is-active' : 'hover:translate-x-2'}`}
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;