import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Hero = ({ onDownloadClick }) => {
  const scrollToContact = () => {
    try {
      const header = document.querySelector(".site-header.nav");
      const headerH = header ? header.offsetHeight : 0;
      const reduce =
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const targets = ["#get-in-touch", "#contact", "#site-footer"];
      let el = null;
      for (const sel of targets) {
        el = document.querySelector(sel);
        if (el) break;
      }
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - headerH - 8;
      window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
    } catch {
      const el =
        document.getElementById("get-in-touch") ||
        document.getElementById("site-footer");
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleDownloadClick = () => {
    if (onDownloadClick) {
      onDownloadClick();
    } else {
      scrollToContact();
    }
  };

  return (
    <>
      {/* Animations embedded in the component */}
      <style>{`
        @keyframes slide-in-left {
          0% { transform: translateX(-40px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in-left {
          animation: slide-in-left 1.8s ease-out both;
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1.2s ease-out both;
        }
        .animate-fade-in.delay-150 {
          animation-delay: 0.15s;
        }
        .animate-fade-in.delay-300 {
          animation-delay: 0.3s;
        }

        @keyframes soft-breathe {
          0%, 100% { 
            transform: scale(1); 
            box-shadow: 0 8px 25px rgba(192, 132, 87, 0.3);
          }
          50% { 
            transform: scale(1.02); 
            box-shadow: 0 12px 35px rgba(192, 132, 87, 0.5);
          }
        }
        .animate-soft-breathe {
          animation: soft-breathe 4s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(192, 132, 87, 0.4); }
          50% { box-shadow: 0 0 0 8px rgba(192, 132, 87, 0); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        /* Mobile touch improvements */
        @media (max-width: 640px) {
          .hero-button {
            min-height: 48px;
            min-width: 120px;
          }
        }
      `}</style>

      <section
        id="hero"
        className="relative min-h-[100svh] flex items-center justify-center bg-cover bg-center bg-fixed animate-slide-in-left"
        style={{
          backgroundImage: "url('/images/main.jpg')",
          marginTop: "calc(var(--header-h, 0px) * -1)",
        }}
      >
        {/* Enhanced Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/60 via-secondary/40 to-transparent backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-heading font-bold text-textLight mb-4 sm:mb-6 leading-tight animate-fade-in">
            Authentic, Handcrafted Rugs.
            <br className="hidden sm:block" />
            <span className="text-gold">From Our Farm to Your Floor.</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl font-body text-textLight/90 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-150">
            Experience the journey where tradition weaves into timeless art. 
            <span className="hidden sm:inline">Discover premium natural fiber rugs crafted by skilled artisans.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in delay-300">
            <Link to="/products" className="w-full sm:w-auto">
              <Button 
                variant="gold" 
                className="hero-button w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Explore Collection
                </span>
              </Button>
            </Link>

            <Link to="/about" className="w-full sm:w-auto">
              <Button
                variant="secondary"
                className="hero-button w-full sm:w-auto border-2 !border-white !text-white hover:!bg-white hover:!text-secondary focus:!ring-white focus:ring-offset-secondary px-8 py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  About Us
                </span>
              </Button>
            </Link>

            {/* Enhanced Download Button */}
            <button
              type="button"
              onClick={handleDownloadClick}
              aria-label="Download brochure"
              className="hero-button relative w-full sm:w-auto px-8 py-4 rounded-full 
                         bg-gradient-to-r from-[#A86533] to-[#C08457] text-white 
                         font-bold text-base sm:text-lg shadow-xl 
                         hover:shadow-2xl transition-all duration-500 
                         hover:scale-105 animate-soft-breathe animate-pulse-glow
                         focus-visible:outline-none focus-visible:ring-4 
                         focus-visible:ring-[#A86533]/50 focus-visible:ring-offset-2
                         transform active:scale-95 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Brochure
              </span>
              <span className="relative block text-xs text-white/90 mt-1 font-medium">
                Free Instant Access
              </span>
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 sm:mt-16 animate-fade-in delay-500">
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-textLight/70">
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">100% Eco-Friendly</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Global Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
