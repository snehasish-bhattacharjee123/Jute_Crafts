import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [overHero, setOverHero] = useState(true); // start true so it's transparent at top
  const [mounted, setMounted] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const setH = () => {
      const h = headerRef.current?.offsetHeight || 0;
      document.documentElement.style.setProperty("--header-h", `${h}px`);
    };
    setH();
    window.addEventListener("resize", setH);
    return () => window.removeEventListener("resize", setH);
  }, []);

  useEffect(() => {
    const hero = document.querySelector("#hero");
    if (!hero) {
      setOverHero(false);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        setOverHero(entry.isIntersecting);
      },
      { root: null, threshold: 0, rootMargin: "-64px 0px 0px 0px" }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  // ✅ Tailwind classes for transparent vs solid
  const headerClasses = overHero
    ? "bg-transparent text-white"
    : "bg-white/90 backdrop-blur-md shadow text-gray-900";

  return (
    <header
      ref={headerRef}
      className={`site-header fixed top-0 left-0 right-0 w-full z-[100] ${headerClasses} ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
      } transition-all duration-300 ease-out`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <img
              src="/images/MKT Rugs_1 PNG.png"
              alt="MKT RUGS Logo"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain"
            />
            <div className="leading-tight">
              <div className="text-xl sm:text-2xl md:text-3xl font-heading font-bold tracking-wide">
                MKT RUGS
              </div>
              <div className="hidden sm:block text-[10px] sm:text-xs md:text-sm font-body uppercase tracking-widest">
                From Farm to Floor
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {["/", "/about", "/products", "/gallery", "/contact"].map(
              (path, i) => {
                const labels = ["Home", "About Us", "Products", "Gallery", "Contact"];
                return (
                  <NavLink
                    key={path}
                    to={path}
                    end={path === "/"}
                    className={({ isActive }) =>
                      `font-body text-sm md:text-base uppercase py-2 transition-transform duration-200 ${
                        isActive
                          ? "border-b-2 border-current"
                          : "hover:scale-110"
                      }`
                    }
                  >
                    {labels[i]}
                  </NavLink>
                );
              }
            )}
          </nav>

          {/* Mobile button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:scale-110 transition-transform duration-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[90]"
              onClick={() => setIsOpen(false)}
            />
            <div className="md:hidden absolute top-full left-0 w-full z-[100]">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-md border-t border-primary/20 shadow-lg">
                {["/", "/about", "/products", "/gallery", "/contact"].map(
                  (path, i) => {
                    const labels = [
                      "Home",
                      "About Us",
                      "Products",
                      "Gallery",
                      "Contact",
                    ];
                    return (
                      <NavLink
                        key={path}
                        to={path}
                        end={path === "/"}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `block px-3 py-2 font-body text-base uppercase transition-transform duration-200 ${
                            isActive
                              ? "border-l-4 border-current pl-2"
                              : "hover:translate-x-2"
                          }`
                        }
                      >
                        {labels[i]}
                      </NavLink>
                    );
                  }
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
