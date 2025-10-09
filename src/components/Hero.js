import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Hero = () => {
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
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 2s ease-in-out both;
        }

        @keyframes soft-breathe {
          0%, 100% { transform: scale(1); box-shadow: 0 0 10px rgba(192, 132, 87, 0.3); }
          50% { transform: scale(1.05); box-shadow: 0 0 20px rgba(192, 132, 87, 0.55); }
        }
        .animate-soft-breathe {
          animation: soft-breathe 3.5s ease-in-out infinite;
        }
      `}</style>

      <section
        id="hero"
        className="relative min-h-[100svh] flex items-center justify-center bg-cover bg-center animate-slide-in-left"
        style={{
          backgroundImage: "url('/images/main.jpg')",
          marginTop: "calc(var(--header-h, 0px) * -1)",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/50 to-secondary/30 backdrop-blur-[2px]"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-textLight mb-6 leading-tight animate-fade-in">
            Authentic, Handcrafted Rugs. <br className="hidden sm:block" />
            From Our Farm to Your Floor.
          </h1>

          <p className="text-lg sm:text-xl font-body text-textLight mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-150">
            Experience the journey where tradition weaves into timeless art.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-300">
            <Link to="/products">
              <Button variant="gold" className="hover:animate-pulse">
                Explore Our Collection
              </Button>
            </Link>

            <Link to="/about">
              <Button
                variant="secondary"
                className="border-2 !border-white !text-white hover:!bg-white hover:!text-secondary focus:!ring-white focus:ring-offset-secondary"
              >
                About Us
              </Button>
            </Link>

            {/* Highlighted Download Button */}
            <button
              type="button"
              onClick={scrollToContact}
              aria-label="Download brochure"
              className="relative px-6 py-3 rounded-full 
                         bg-[#A86533] text-white font-semibold text-base 
                         shadow-lg hover:shadow-xl transition-all duration-500 
                         hover:scale-105 animate-soft-breathe
                         focus-visible:outline-none focus-visible:ring-2 
                         focus-visible:ring-offset-2 focus-visible:ring-[#A86533]"
            >
              Download Brochure
              <span className="block text-xs text-white/80 mt-1">Free PDF</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
