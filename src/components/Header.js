// import React, { useEffect, useState, useRef } from "react";
// import { NavLink } from "react-router-dom";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [overHero, setOverHero] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [mounted, setMounted] = useState(false);
//   const headerRef = useRef(null);

//   // ✅ Update CSS var for header height
//   useEffect(() => {
//     const setH = () => {
//       const h = headerRef.current?.offsetHeight || 0;
//       document.documentElement.style.setProperty("--header-h", `${h}px`);
//     };
//     setH();
//     window.addEventListener("resize", setH);
//     return () => window.removeEventListener("resize", setH);
//   }, []);

//   // ✅ Observe hero visibility
//   useEffect(() => {
//     const hero = document.querySelector("#hero");
//     if (!hero) {
//       setOverHero(false);
//       return;
//     }

//     const io = new IntersectionObserver(
//       ([entry]) => setOverHero(entry.isIntersecting),
//       {
//         root: null,
//         threshold: 0.1,
//       }
//     );

//     io.observe(hero);
//     return () => io.disconnect();
//   }, []);

//   // ✅ Track scroll position
//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 80);
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // ✅ Smooth mount animation
//   useEffect(() => {
//     const t = setTimeout(() => setMounted(true), 80);
//     return () => clearTimeout(t);
//   }, []);

//   // ✅ Classes for transparent vs glassmorphism
//   const headerClasses =
//     overHero && !scrolled
//       ? "bg-transparent text-white"
//       : "bg-white/80 backdrop-blur-md text-gray-900 shadow";

//   return (
//     <header
//       ref={headerRef}
//       className={`site-header fixed top-0 left-0 right-0 w-full z-[100] ${headerClasses} ${
//         mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
//       } transition-all duration-500 ease-out`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4">
//           {/* Logo */}
//           <div className="flex-shrink-0 flex items-center gap-3">
//             <img
//               src="/images/MKT Rugs_1 PNG.png"
//               alt="MKT RUGS Logo"
//               className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
//             />
//             <div className="leading-tight">
//               <div className="text-xl sm:text-2xl md:text-3xl font-heading font-bold tracking-wide">
//                 MKT RUGS
//               </div>
//               <div className="hidden sm:block text-[10px] sm:text-xs md:text-sm font-body uppercase tracking-widest">
//                 From Farm to Floor
//               </div>
//             </div>
//           </div>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex space-x-8">
//             {["/", "/about", "/products", "/gallery", "/contact"].map(
//               (path, i) => {
//                 const labels = [
//                   "Home",
//                   "About Us",
//                   "Products",
//                   "Gallery",
//                   "Contact",
//                 ];
//                 return (
//                   <NavLink
//                     key={path}
//                     to={path}
//                     end={path === "/"}
//                     className={({ isActive }) =>
//                       `font-body text-sm md:text-base uppercase py-2 transition-transform duration-200 ${
//                         isActive
//                           ? "border-b-2 border-current"
//                           : "hover:scale-110"
//                       }`
//                     }
//                   >
//                     {labels[i]}
//                   </NavLink>
//                 );
//               }
//             )}
//           </nav>

//           {/* Mobile button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="hover:scale-110 transition-transform duration-200 focus:outline-none"
//               aria-label="Toggle menu"
//             >
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {isOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {isOpen && (
//           <>
//             <div
//               className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[90]"
//               onClick={() => setIsOpen(false)}
//             />
//             <div className="md:hidden absolute top-full left-0 w-full z-[100]">
//               <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-md border-t border-primary/20 shadow-lg">
//                 {["/", "/about", "/products", "/gallery", "/contact"].map(
//                   (path, i) => {
//                     const labels = [
//                       "Home",
//                       "About Us",
//                       "Products",
//                       "Gallery",
//                       "Contact",
//                       "Why Us",
//                     ];
//                     return (
//                       <NavLink
//                         key={path}
//                         to={path}
//                         end={path === "/"}
//                         onClick={() => setIsOpen(false)}
//                         className={({ isActive }) =>
//                           `block px-3 py-2 font-body text-base uppercase transition-transform duration-200 ${
//                             isActive
//                               ? "border-l-4 border-current pl-2"
//                               : "hover:translate-x-2"
//                           }`
//                         }
//                       >
//                         {labels[i]}
//                       </NavLink>
//                     );
//                   }
//                 )}
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  // ✅ Check screen size
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Update CSS var for header height
  useEffect(() => {
    const setHeaderHeight = () => {
      const h = headerRef.current?.offsetHeight || 0;
      document.documentElement.style.setProperty("--header-h", `${h}px`);
    };
    setHeaderHeight();
    window.addEventListener("resize", setHeaderHeight);
    return () => window.removeEventListener("resize", setHeaderHeight);
  }, []);

  // ✅ Pages that should have transparent header initially
  const pagesWithTransparentHeader = [
    "/",
    "/about",
    "/products",
    "/gallery",
    "/why-us",
    "/blog",
    "/contact",
  ];

  const hasTransparentHeaderForPath = (pathname) => {
    if (pagesWithTransparentHeader.includes(pathname)) return true;
    // Handle dynamic routes like /blog/:id
    if (pathname.startsWith("/blog/")) return true;
    return false;
  };

  // ✅ Scroll listener (for pages with transparent header)
  useEffect(() => {
    const hasTransparentHeader = hasTransparentHeaderForPath(location.pathname);
    if (!hasTransparentHeader) return;

    const onScroll = () => {
      const should = window.scrollY > 5;
      setScrolled(should);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  // ✅ Sync with route change
  useLayoutEffect(() => {
    const hasTransparentHeader = hasTransparentHeaderForPath(location.pathname);
    if (!hasTransparentHeader) {
      setScrolled(true);
    } else {
      const currentlyScrolled = window.scrollY > 5;
      setScrolled(currentlyScrolled);
    }
  }, [location.pathname]);

  // ✅ Fade-in mount
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  // ✅ Inline styles (conditional)
  const hasTransparentHeader = hasTransparentHeaderForPath(location.pathname);
  const shouldBeTransparent = hasTransparentHeader && !isMobile && !scrolled;

  const inlineStyle = {
    backgroundColor: shouldBeTransparent
      ? "transparent"
      : "rgba(255,255,255,1)",
    color: shouldBeTransparent ? "#FAFAFF" : "#230903",
    boxShadow: shouldBeTransparent ? "none" : "0 6px 18px rgba(15,15,15,0.08)",
    transition:
      "background-color 0.5s ease, color 0.5s ease, box-shadow 0.5s ease",
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/products", label: "Products" },
    { path: "/gallery", label: "Gallery" },
    { path: "/why-us", label: "Why Us" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Skip navigation link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-md z-[9999] focus-enhanced"
      >
        Skip to main content
      </a>

      <header
        ref={headerRef}
        style={inlineStyle}
        className={`fixed top-0 left-0 right-0 w-full z-[100] ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4 md:py-5">
            {/* ✅ Logo Section */}
            <div className="flex-shrink-0 flex items-center gap-2 sm:gap-3 md:gap-4">
              <img
                src="/images/MKT Rugs_1 PNG.png"
                alt="MKT RUGS Logo"
                className="h-16 sm:h-18 md:h-20 lg:h-24 xl:h-28 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
              <div className="leading-tight">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold tracking-wide">
                  <span style={{ color: "#603813" }}>M</span>
                  <span style={{ color: "#1C7A67" }}>K</span>
                  <span style={{ color: "#603813" }}>T RUGS</span>
                </div>

                {/* ✅ Updated tagline */}
                <div
                  className="hidden sm:block text-xs sm:text-sm md:text-base lg:text-lg font-serif italic tracking-wide"
                  style={{
                    color: "#1C7A67",
                    fontFamily: "'Playfair Display', 'Times New Roman', serif",
                    fontStyle: "italic",
                    fontWeight: "500",
                    letterSpacing: "0.05em",
                  }}
                >
                  From Farm to Floor
                </div>
              </div>
            </div>

            {/* ✅ Desktop Nav */}
            <nav className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8">
              {navLinks.map(({ path, label }) => (
                <NavLink
                  key={path}
                  to={path}
                  end={path === "/"}
                  className={({ isActive }) =>
                    `font-body text-sm md:text-base lg:text-base uppercase py-2 transition-transform duration-200 focus-enhanced ${
                      isActive
                        ? "border-b-2 border-current"
                        : "hover:scale-110 hover:text-primary"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            {/* ✅ Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="touch-target hover:scale-110 transition-transform duration-200 focus:outline-none focus-enhanced p-2 rounded-lg hover:bg-white/10 active:bg-white/20"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <svg
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* ✅ Mobile Nav Drawer */}
          {isOpen && (
            <>
              <div
                className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[90]"
                onClick={() => setIsOpen(false)}
              />
              <div
                id="mobile-menu"
                className="md:hidden absolute top-full left-0 w-full z-[100]"
              >
                <div className="px-3 pt-3 pb-4 space-y-2 bg-white border-t border-gray-200 shadow-lg">
                  {navLinks.map(({ path, label }) => (
                    <NavLink
                      key={path}
                      to={path}
                      end={path === "/"}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block touch-target px-4 py-3 font-body text-sm sm:text-base uppercase transition-all duration-200 focus-enhanced rounded-lg text-gray-700 ${
                          isActive
                            ? "bg-primary/10 border-l-4 border-primary text-primary font-semibold"
                            : "hover:translate-x-1 hover:bg-gray/5 hover:text-primary active:bg-primary/10"
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
