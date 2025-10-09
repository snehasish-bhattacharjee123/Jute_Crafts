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
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center bg-cover bg-center animate-slide-in-left"
      style={{
        backgroundImage: "url('/images/main.jpg')",
        marginTop: "calc(var(--header-h, 0px) * -1)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 to-secondary/20 backdrop-blur-[2px]"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-textLight mb-6 leading-tight">
          Authentic, Handcrafted Rugs. From Our Farm to Your Floor.
        </h1>
        <p className="text-lg sm:text-xl font-body text-textLight mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience the journey where tradition weaves into timeless art. 
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
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
              Learn More
            </Button>
          </Link>
          <button
            type="button"
            onClick={scrollToContact}
            aria-label="Download brochure"
            className="px-5 py-3 rounded-full bg-gold text-secondary font-body hover:bg-gold/90 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-secondary shadow"
          >
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
