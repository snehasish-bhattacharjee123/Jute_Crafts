import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center bg-cover bg-center animate-slide-in-left" style={{backgroundImage: "url('/images/main.jpg')"}}>
    
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 to-secondary/20 backdrop-blur-[2px]"></div>

      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-textLight mb-6 leading-tight">
          Sustainable Jute Rugs Manufacturer
        </h1>
        <p className="text-lg sm:text-xl font-body text-textLight mb-8 max-w-2xl mx-auto leading-relaxed">
          Crafting premium organic jute products with traditional craftsmanship and modern sustainability. Experience the warmth and beauty of natural fibers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button variant="gold" className="hover:animate-pulse">
            Explore Our Collection
          </Button>
          <Button
            variant="secondary"
            className="border-2 !border-white !text-white hover:!bg-white hover:!text-secondary focus:!ring-white focus:ring-offset-secondary"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;