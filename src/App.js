import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import BackToTop from './components/BackToTop';

const AboutUs = lazy(() => import('./components/AboutUs'));
const Gallery = lazy(() => import('./components/Gallery'));
const ContactUs = lazy(() => import('./components/ContactUs'));
const Product = lazy(() => import('./components/Product'));
const Card = lazy(() => import('./components/Card'));
const Button = lazy(() => import('./components/Button'));
const Enquiry = lazy(() => import('./components/Enquiry'));

function App() {
  
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('reveal-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.01, rootMargin: '0px 0px -10% 0px' });

    const observeAll = () => {
      document.querySelectorAll('.reveal:not(.reveal-visible)').forEach((el) => io.observe(el));
    };

    const revealInViewportNow = () => {
      document.querySelectorAll('.reveal:not(.reveal-visible)').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.9) {
          el.classList.add('reveal-visible');
          io.unobserve(el);
        }
      });
    };

   
    observeAll();
    revealInViewportNow();

    const mo = new MutationObserver(() => {
      observeAll();
      revealInViewportNow();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    const onResizeScroll = () => revealInViewportNow();
    window.addEventListener('load', onResizeScroll);
    window.addEventListener('resize', onResizeScroll);
    window.addEventListener('scroll', onResizeScroll, { passive: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      window.removeEventListener('load', onResizeScroll);
      window.removeEventListener('resize', onResizeScroll);
      window.removeEventListener('scroll', onResizeScroll);
    };
  }, []);
  return (
    <Router>
      <div className="min-h-screen bg-bgGrey">
        <Header />

        <ErrorBoundary>
        <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
          <Routes>
          <Route path="/" element={
            <>
              <Hero />

              
              <section id="about" className="py-12 md:py-16 bg-bgLight">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  
                  <div className="text-center mb-12 reveal">
                    <div className="inline-flex items-center gap-3 mb-3">
                      <span className="w-8 h-[2px] bg-gold"></span>
                      <span className="uppercase tracking-[0.3em] text-sm text-gold font-accent">Our Craftsmanship</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-heading font-semibold text-textDark">
                      Natural Fibre Rugs & Carpets
                    </h2>
                    <ul className="font-body text-base sm:text-lg text-textDark/80 max-w-3xl mx-auto mt-4 leading-relaxed grid gap-2 text-left list-disc list-inside">
                      <li>Eco-friendly, sustainable jute and natural fibres</li>
                      <li>Handcrafted quality by skilled artisans</li>
                      <li>Custom sizes, blends and patterns for projects</li>
                    </ul>
                  </div>

                   
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start reveal">
                    
                    <div className="grid grid-cols-2 gap-6">
                      <img src="/images/download (2).jpg" alt="Artisan pouring beans" className="w-full h-48 sm:h-56 object-cover rounded-lg shadow" />
                      <img src="/images/carpet.jpg" alt="Rug texture" className="w-full h-48 sm:h-56 object-cover rounded-lg shadow" />
                      <img src="/images/Elma Geometric Jute Rug _ Natural.jpg" alt="Geometric jute" className="w-full h-48 sm:h-56 object-cover rounded-lg shadow" />
                      <img src="/images/Naturals Basket.jpg" alt="Natural basket" className="w-full h-48 sm:h-56 object-cover rounded-lg shadow" />
                    </div>

                    
                    <div className="space-y-8">
                      
                      <div className="flex items-start gap-4 reveal">
                        <div className="shrink-0 w-10 h-10 rounded-full bg-gold/20 text-secondary flex items-center justify-center">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18M3 17h18"/></svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-heading text-textDark">Sustainable Materials</h3>
                          <p className="text-textDark/80 font-body">Responsibly sourced jute and natural fibres for eco-conscious interiors.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 reveal">
                        <div className="shrink-0 w-10 h-10 rounded-full bg-gold/20 text-secondary flex items-center justify-center">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3 0 2.25 3 5 3 5s3-2.75 3-5c0-1.657-1.343-3-3-3z"/></svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-heading text-textDark">Handcrafted Quality</h3>
                          <p className="text-textDark/80 font-body">Skilled artisans weave each piece with care and precision.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 reveal">
                        <div className="shrink-0 w-10 h-10 rounded-full bg-gold/20 text-secondary flex items-center justify-center">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2 4 4 8-8 2 2-10 10z"/></svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-heading text-textDark">Custom Sizes & Designs</h3>
                          <p className="text-textDark/80 font-body">Bespoke sizes, blends and patterns to match your project.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 reveal">
                        <div className="shrink-0 w-10 h-10 rounded-full bg-gold/20 text-secondary flex items-center justify-center">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"/></svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-heading text-textDark">Reliable Lead Times</h3>
                          <p className="text-textDark/80 font-body">Efficient production across our facilities to meet schedules.</p>
                        </div>
                      </div>

                      
                      <div className="pt-2 reveal">
                        <div className="flex flex-col sm:flex-row gap-3">
                          <a href="/products" className="inline-flex">
                            <button className="px-5 py-3 rounded-full bg-gold text-secondary font-body hover:bg-gold/90 transition">Explore Products</button>
                          </a>
                          <a href="/contact" className="inline-flex">
                            <button className="px-5 py-3 rounded-full border border-primary text-primary font-body hover:bg-primary/5 transition">Contact</button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              
              <section id="products" className="py-12 md:py-16 bg-bgGrey">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-textDark mb-4">
                      Our Product Collection
                    </h2>
                    <p className="font-body text-lg text-textDark max-w-2xl mx-auto leading-relaxed">
                      Discover our range of premium jute products designed for modern living.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card
                      title="SISAL RUGS"
                      description="Durable and natural sisal fiber rugs that add texture and warmth to any space. Perfect for high-traffic areas with their stain-resistant properties."
                      image="/images/download (4).jpg"
                      badge="Editor’s Pick"
                      featured
                    />
                    <Card
                      title="JUTE RUGS"
                      description="Handwoven jute rugs featuring natural fibers and traditional craftsmanship. Eco-friendly and biodegradable with a unique rustic charm."
                      image="/images/Jute Boucle Rug.jpg"
                      badge="Best Seller"
                      featured
                    />
                    <Card
                      title="JACQUARD RUGS"
                      description="Intricate jacquard woven rugs with detailed patterns and designs. Perfect for adding elegance and sophistication to your interior spaces."
                      image="/images/download.jpg"
                    />
                    <Card
                      title="WOOL RUGS"
                      description="Luxurious wool rugs that provide superior comfort and insulation. Naturally stain-resistant and available in various pile heights and textures."
                      image="/images/download (3).jpg"
                      badge="New"
                    />
                    <Card
                      title="Indoor/Outdoor Collection"
                      description="Versatile rugs designed for both indoor and outdoor use. Weather-resistant materials that maintain their beauty in any environment."
                      image="/images/Beige Contemporary Polka Dotted Handwoven Rectangular Luxury Rugs - 250 cm x 350 cm.jpg"
                      badge="Eco-Friendly"
                    />
                    <Card
                      title="DOOR MATS"
                      description="Functional and stylish door mats that protect your floors while welcoming guests. Available in various sizes and materials for every entryway."
                      image="/images/Otirač Boja bež - SINSAY - 7661Z-08X.jpg"
                    />
                  </div>

                  <div className="text-center mt-12">
                    <Button variant="gold">
                      View Full Collection
                    </Button>
                  </div>
                </div>
              </section>

                
              <section id="facilities" className="py-12 md:py-16 bg-bgLight">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col md:flex-row items-center">
                    
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center mb-8 md:mb-0">
                      <div className="relative max-w-md mx-auto">
                        
                        <img
                          src="/images/White Natural Jute Rug, Hand Braided Rug, Jute Rug, Warm Rug, Custom Area Rug, Yoga Mat Indoor Rug.jpg"
                          alt="Rolled mats in basket"
                          className="w-full h-80 md:h-96 object-contain rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        />
                        
                        <img
                          src="/images/flat-lay-monochromatic-assortment-textiles.jpg"
                          alt="Wooden cabinet with decor"
                          className="w-3/4 md:w-2/3 mt-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mx-auto"
                        />
                        
                        <div className="absolute bottom-0 left-4 md:left-0 w-20 h-14 md:w-24 md:h-16 bg-secondary rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"></div>
                      </div>
                    </div>

                    
                    <div className="w-full md:w-1/2 px-4 md:px-8 flex flex-col justify-center">
                      
                      <h3 className="uppercase tracking-widest text-sm text-textDark text-center mb-4 font-accent">
                        IN HARMONY WITH NATURE
                      </h3>

                      
                      <div className="flex items-center mb-6">
                        <div className="border-t border-primary w-1/4 md:w-1/3 mx-2"></div>
                        <h2 className="text-xl md:text-2xl font-semibold text-textDark text-center font-heading">
                          ABOUT MKT RUGS
                        </h2>
                        <div className="border-t border-primary w-1/4 md:w-1/3 mx-2"></div>
                      </div>

                      
                      <p className="text-textDark leading-relaxed text-justify md:text-left mb-6 font-body">
                        MKT RUGS is a manufacturer and exporter of rugs and carpets — FROM FARM TO FLOOR. We blend
                        traditional craftsmanship with modern processes to deliver premium natural fibre products for
                        interior projects worldwide. Based in Kolkata, India, we serve B2B clients including interior
                        designers, exporters and wholesalers.
                      </p>

                      
                      <div className="mb-6 flex justify-center md:justify-start">
                        <Button variant="secondary" className="flex items-center space-x-2">
                          <span>Download Brochure</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </Button>
                      </div>

                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <img
                          src="/images/Summer Novelty Coir Doormat _ The Company Store.jpg"
                          alt="Product thumbnail 1"
                          className="rounded-lg shadow-sm hover:shadow-md hover:scale-105 cursor-pointer transition-all duration-300"
                        />
                        <img
                          src="/images/carpet.jpg"
                          alt="Product thumbnail 2"
                          className="rounded-lg shadow-sm hover:shadow-md hover:scale-105 cursor-pointer transition-all duration-300"
                        />
                        <img
                          src="/images/Hart in Terracotta.jpg"
                          alt="Product thumbnail 3"
                          className="rounded-lg shadow-sm hover:shadow-md hover:scale-105 cursor-pointer transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              
              <section id="contact" className="py-12 md:py-16 bg-bgLight">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-textDark mb-4">
                    Get In Touch
                  </h2>
                  <p className="font-body text-lg text-textDark mb-8 leading-relaxed">
                    Ready to bring the beauty of natural jute into your home? Contact us today for custom orders and inquiries.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/contact" className="inline-flex"><Button variant="gold">Contact Us</Button></a>
                  </div>
                </div>
              </section>
            </>
          } />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/products" element={<Product />} />
          <Route path="/enquiry" element={<Enquiry />} />
        </Routes>
        </Suspense>
        </ErrorBoundary>

        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
