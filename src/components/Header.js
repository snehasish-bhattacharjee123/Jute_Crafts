import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [overHero, setOverHero] = useState(false);
  const [mounted, setMounted] = useState(false);

  
  useEffect(() => {
    const hero = document.querySelector('#home');
    if (!hero) { setOverHero(false); return; }

    const io = new IntersectionObserver(
      ([entry]) => {
        setOverHero(entry.isIntersecting);
      },
      { root: null, threshold: 0.01, rootMargin: '-80px 0px 0px 0px' }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const headerClasses = overHero
    ? 'bg-secondary/10 supports-[backdrop-filter]:bg-secondary/10 backdrop-blur-sm shadow-none'
    : 'bg-bgLight/95 backdrop-blur supports-[backdrop-filter]:bg-bgLight/90 shadow-md';

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${headerClasses} ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'} transform ease-out`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <img src="/images/MKT Rugs_1 PNG.png" alt="MKT RUGS Logo" className="h-12 sm:h-14 md:h-16 w-auto object-contain" />
            <div className="leading-tight">
              <div className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-secondary tracking-wide">MKT RUGS</div>
              <div className="hidden sm:block text-[10px] sm:text-xs md:text-sm text-primary font-body uppercase tracking-widest">From Farm to Floor</div>
            </div>
          </div>

        
          <nav className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) => `font-body text-base uppercase py-2 transition-all duration-300 transform ${isActive ? 'text-primary font-semibold' : 'text-textDark hover:text-secondary hover:scale-110'}`}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `font-body text-base uppercase py-2 transition-all duration-300 transform ${isActive ? 'text-primary font-semibold' : 'text-textDark hover:text-secondary hover:scale-110'}`}
            >
              About Us
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) => `font-body text-base uppercase py-2 transition-all duration-300 transform ${isActive ? 'text-primary font-semibold' : 'text-textDark hover:text-secondary hover:scale-110'}`}
            >
              Products
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) => `font-body text-base uppercase py-2 transition-all duration-300 transform ${isActive ? 'text-primary font-semibold' : 'text-textDark hover:text-secondary hover:scale-110'}`}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `font-body text-base uppercase py-2 transition-all duration-300 transform ${isActive ? 'text-primary font-semibold' : 'text-textDark hover:text-secondary hover:scale-110'}`}
            >
              Contact
            </NavLink>
          </nav>

          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-textDark hover:text-secondary hover:scale-110 transition-all duration-300 transform focus:outline-none"
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
              <NavLink to="/" end className={({isActive}) => `block px-3 py-2 font-body text-base uppercase transition-all duration-300 transform ${isActive ? 'text-primary font-semibold' : 'text-textDark hover:text-secondary hover:translate-x-2'}`}>
                Home
              </NavLink>
              <NavLink to="/about" className={({isActive}) => `block px-3 py-2 font-body text-base uppercase transition-all duration-300 transform ${isActive ? 'text-primary font-semibold' : 'text-textDark hover:text-secondary hover:translate-x-2'}`}>
                About Us
              </NavLink>
              <NavLink to="/products" className={({isActive}) => `block px-3 py-2 font-body text-base uppercase transition-all duration-300 transform ${isActive ? 'text-primary font-semibold' : 'text-textDark hover:text-secondary hover:translate-x-2'}`}>
                Products
              </NavLink>
              <NavLink to="/gallery" className={({isActive}) => `block px-3 py-2 font-body text-base uppercase transition-all duration-300 transform ${isActive ? 'text-primary font-semibold' : 'text-textDark hover:text-secondary hover:translate-x-2'}`}> 
                Gallery
              </NavLink>
              <NavLink to="/contact" className={({isActive}) => `block px-3 py-2 font-body text-base uppercase transition-all duration-300 transform ${isActive ? 'text-primary font-semibold' : 'text-textDark hover:text-secondary hover:translate-x-2'}`}> 
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