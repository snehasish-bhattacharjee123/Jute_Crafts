import React, { useState, useEffect } from 'react';
import Button from './Button';


function CertificatesGrid() {
  const certs = [
    {src: '/images/certifications/iso9001.png', alt: 'ISO 9001', desc: 'Quality Management System (ISO 9001) certified units'},
    {src: '/images/certifications/sa8000.png', alt: 'SA 8000', desc: 'Social accountability certification for responsible practices'},
    {src: '/images/certifications/iso14001.png', alt: 'ISO 14001', desc: 'Environmental Management System (ISO 14001)'},
    {src: '/images/certifications/qms.png', alt: 'QMS', desc: 'Quality Management Systems across facilities'},
  ];
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(null);

  const onOpen = (c) => { setActive(c); setOpen(true); };
  const onClose = () => { setOpen(false); setActive(null); };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 items-center">
        {certs.map((c, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onOpen(c)}
            className="border border-gold/40 bg-white rounded-md p-3 text-center shadow-sm h-24 flex items-center justify-center hover:shadow hover:scale-[1.02] transition"
            aria-label={`Open ${c.alt} certificate`}
          >
            <img src={c.src} alt={`${c.alt} certificate`} className="max-h-16 w-auto object-contain" />
          </button>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4" role="dialog" aria-modal="true">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full overflow-hidden">
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="text-lg font-heading text-textDark">{active?.alt}</h3>
              <button onClick={onClose} aria-label="Close" className="p-1 rounded hover:bg-gray-100">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
            <div className="p-4 grid gap-3">
              <img src={active?.src} alt={`${active?.alt} large`} className="w-full h-40 object-contain" />
              <p className="text-sm text-textDark/80 font-body">{active?.desc}</p>
            </div>
            <div className="p-4 border-t flex justify-end">
              <button onClick={onClose} className="px-4 py-2 rounded bg-primary text-white hover:bg-primary/90">Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    '/images/B_1.jpg',
    '/images/B_2.jpg',
    '/images/B_3.jpg',
    '/images/B_4.jpg',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[65vh] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt="Hero Image"
            className="object-cover w-full h-full"
          />
        </div>
      ))}
      
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-secondary/25 to-secondary/60"></div>
     
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="text-center max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-textLight">
            Crafting a Sustainable Future, One Rug at a Time
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-textLight/90 font-body">
            From our family roots in Kolkata to homes worldwide.
          </p>
        </div>
      </div>
   
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <a href="#story" className="inline-flex items-center text-textLight/80 hover:text-textLight transition">
          <span className="mr-2 text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-5 h-5 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
        </a>
      </div>
    
      <div className="absolute bottom-0 left-0 w-full flex justify-center mb-2 sm:mb-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 mx-1 rounded-full ring-1 ring-white/30 ${
              index === activeIndex ? 'bg-gold' : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

function AboutUs() {
  
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  
  const milestones = [
    { year: '2006', text: 'Inception and early handloom operations', img: '/images/download.jpg', side: 'left' },
    { year: '2010', text: 'First export consignments; team expansion', img: '/images/download (3).jpg', side: 'right' },
    { year: '2015', text: 'ISO 9001 QMS adoption across units', img: '/images/Jute Boucle Rug.jpg', side: 'left' },
    { year: '2019', text: 'Facilities reach 1.0M+ sq. ft.', img: '/images/carpet.jpg', side: 'right' },
    { year: '2023', text: 'SA 8000 & ISO 14001 certifications in key factories', img: '/images/flat-lay-monochromatic-assortment-textiles.jpg', side: 'left' },
  ];
  const [lastVisible, setLastVisible] = React.useState(-1);
  const [percent, setPercent] = React.useState(0); // 0..100 continuous progress
  const itemRefs = React.useRef([]);
  
  useEffect(() => {
    let ticking = false;
    const compute = () => {
      ticking = false;
      const viewCenter = window.scrollY + window.innerHeight * 0.5; // abs Y
     
      const centers = itemRefs.current.map((el) => {
        if (!el) return Infinity;
        const rect = el.getBoundingClientRect();
        return window.scrollY + rect.top + rect.height / 2;
      });
      const total = centers.length;
      if (!total) { setPercent(0); setLastVisible(-1); return; }
      const baseIdx = 0; 

      
      let maxIdx = baseIdx;
      centers.forEach((c, idx) => {
        if (c <= viewCenter) maxIdx = Math.max(maxIdx, idx);
      });
      setLastVisible(maxIdx);

      
      const baseline = ((baseIdx + 1) / total) * 100; 
      const last = total - 1;
      if (viewCenter <= centers[baseIdx]) { setPercent(baseline); return; }
      if (viewCenter >= centers[last]) { setPercent(100); return; }
      
      let i = baseIdx;
      for (let k = baseIdx; k < last; k++) {
        if (viewCenter >= centers[k] && viewCenter <= centers[k+1]) { i = k; break; }
      }
      const a = centers[i];
      const b = centers[i+1];
      const t = b === a ? 0 : (viewCenter - a) / (b - a);
      const p = ((i + t + 1) / total) * 100; 
      setPercent(Math.max(baseline, Math.min(100, p)));
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(compute);
        ticking = true;
      }
    };
   
    compute();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-bgGrey">
      {/* Hero Slider */}
      <HeroSlider />

      
      <section id="story" className="py-16 bg-bgGrey reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-heading font-semibold text-textDark mb-2">Our Story — MKT RUGS</h2>
              <blockquote className="border-l-4 border-gold pl-4 italic text-textDark/80 font-accent mb-5">
                “Over 1.2M sq. ft. certified production space supporting artisans and responsible sourcing.”
              </blockquote>
              <div className="grid gap-6">
                <div>
                  <h3 className="text-xl font-heading text-textDark mb-2">Our Beginning</h3>
                  <ul className="list-disc list-inside text-textDark/90 font-body space-y-1">
                    <li>Started with a small handloom unit inspired by Kolkata’s weaving heritage.</li>
                    <li>Family-run ethos focused on natural fibres and fair craftsmanship.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-heading text-textDark mb-2">Our Mission</h3>
                  <ul className="list-disc list-inside text-textDark/90 font-body space-y-1">
                    <li>Design beautiful, durable rugs that are kind to the planet.</li>
                    <li>Empower local artisans and deliver reliable quality for global projects.</li>
                  </ul>
                </div>
                <div className="pt-2">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="/enquiry" className="inline-flex"><Button variant="gold">Request a Quote</Button></a>
                    <a href="/products" className="inline-flex"><Button variant="secondary">Shop Our Collection</Button></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/Naturals Basket.jpg"
                alt="Traditional jute weaving"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Gallery removed per request */}

     
      <section className="py-16 bg-white reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-textDark">Milestones</h2>
            <p className="text-textDark/70 font-body mt-2">A journey of craftsmanship and scale — FROM FARM TO FLOOR</p>
            <div className="mx-auto mt-3 w-24 h-1 bg-gold"></div>
          </div>

          {/* Timeline container */}
          <div className="relative">
            
            <div className="hidden md:flex justify-center pointer-events-none absolute inset-0 z-10">
              <div className="relative w-1 h-full">
                <div className="absolute inset-0 bg-primary/15" aria-hidden="true"></div>
                <div
                  className="absolute top-0 left-0 w-full transition-[height] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] bg-gradient-to-b from-gold via-primary to-primary"
                  style={{ height: `${percent}%` }}
                  aria-hidden="true"
                ></div>
                <div
                  className="absolute -ml-[10px] w-6 h-6 rounded-full ring-4 ring-white/50"
                  style={{ top: `calc(${percent}% - 12px)`, boxShadow: '0 0 24px 8px rgba(17,96,84,0.35)', background: '#116054' }}
                  aria-hidden="true"
                ></div>
              </div>
            </div>

            <div className="space-y-12">
              {milestones.map((m, idx) => {
                const inView = idx <= lastVisible || idx < 2; 
                const isLeft = m.side === 'left';
                const imgEnter = isLeft ? '-translate-x-12' : 'translate-x-12';
              
                const delays = ['delay-0','delay-100','delay-200','delay-300','delay-500'];
                const delayClass = delays[idx % delays.length];
                return (
                  <div
                    key={idx}
                    data-index={idx}
                    ref={(el) => (itemRefs.current[idx] = el)}
                    className="grid md:grid-cols-2 gap-8 items-center"
                  >
                   
                    <div
                      className={
                        (isLeft
                          ? ''
                          : 'md:order-2') +
                        ' transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ' + delayClass + ' ' +
                        (inView ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : `opacity-0 translate-y-8 scale-95 ${imgEnter}`)
                      }
                    >
                      <figure>
                        <img
                          src={m.img}
                          alt={m.text}
                          className="w-full h-64 object-cover object-top rounded-lg shadow hover:scale-105 hover:shadow-lg transition-transform duration-500 will-change-transform"
                        />
                        <figcaption className="text-xs text-textDark/70 mt-2 font-body">{m.text}</figcaption>
                      </figure>
                    </div>
                   
                    <div
                      className={
                        (isLeft
                          ? 'md:order-2'
                          : '') +
                        ' transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ' + delayClass + ' ' +
                        (inView ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-y-8')
                      }
                    >
                      <div className="bg-bgGrey border border-gray-100 rounded-lg p-5 shadow-sm">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-gold"></span>
                          <div className="text-textDark font-heading font-semibold">{m.year}</div>
                        </div>
                        <div className="text-textDark/90 font-body mt-2">Key milestone in our journey.</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-bgLight reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-textDark mb-4">
              Our Values
            </h2>
            <p className="text-lg text-textDark max-w-2xl mx-auto leading-relaxed font-body">
              These core principles guide everything we do, from sourcing to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-textDark mb-2 font-heading">Sustainability</h3>
              <p className="text-textDark font-body">Committed to eco-friendly practices and natural materials.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-textDark mb-2 font-heading">Quality</h3>
              <p className="text-textDark font-body">Every product undergoes rigorous quality control.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-textDark mb-2 font-heading">Community</h3>
              <p className="text-textDark font-body">Supporting local artisans and fair trade practices.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-textDark mb-2 font-heading">Innovation</h3>
              <p className="text-textDark font-body">Blending traditional techniques with modern design.</p>
            </div>
          </div>
        </div>
      </section>

    
      <section className="py-16 bg-bgGrey reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-textDark mb-4">
                Craftsmanship & Facilities
              </h2>
              <div className="w-24 h-1 bg-gold mb-6"></div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100">
                  <div className="text-2xl font-heading text-secondary">11</div>
                  <div className="text-xs text-textDark/70">Manufacturing Units</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100">
                  <div className="text-2xl font-heading text-secondary">1.2M+</div>
                  <div className="text-xs text-textDark/70">Sq. Ft. Production</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100 col-span-2 sm:col-span-1">
                  <div className="text-2xl font-heading text-secondary">ISO & SA 8000</div>
                  <div className="text-xs text-textDark/70">Certified Facilities</div>
                </div>
              </div>

             
              <CertificatesGrid />
            </div>
            <div>
              <img
                src="/images/flat-lay-monochromatic-assortment-textiles.jpg"
                alt="Craftsmanship and facilities"
                className="rounded-lg w-full h-80 object-cover shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {false && (
      
      <section className="py-16 bg-white reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-textDark">Milestones on the Global Loom</h2>
            <div className="mx-auto mt-3 w-24 h-1 bg-gold"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-bgGrey rounded-lg p-6 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-heading font-semibold text-textDark mb-3">Our footprint</h3>
              <ul className="list-disc pl-5 space-y-2 text-textDark/90 font-body">
                <li>Supplying to global exporters, retailers and wholesalers.</li>
                <li>11 facilities over 1.3M sq. ft. with certified social & environmental compliance.</li>
                <li>End-to-end quality systems aligned to ISO 9001.</li>
              </ul>
            </div>
            <div className="bg-bgGrey rounded-lg p-6 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-heading font-semibold text-textDark mb-3">Brands we serve</h3>
              <p className="text-textDark/90 font-body mb-3">MKT Rugs today caters to many global exporters like:</p>
              <div className="grid grid-cols-2 gap-2 text-sm font-body">
                {['The Home Depot','Walmart','Costco','Bed Bath & Beyond','Sam’s Club','Crate & Barrel','Pottery Barn','Target','Kohls','B&Q','Aldi','Lidi'].map((b)=> (
                  <div key={b} className="bg-white border rounded px-3 py-2 text-textDark">{b}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

     
      <section className="py-16 bg-bgGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-textDark mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-textDark max-w-2xl mx-auto leading-relaxed font-body">
              The passionate individuals behind our success, dedicated to preserving tradition while embracing the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="John Smith - CEO"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h3 className="text-xl font-semibold text-textDark mb-2 font-heading">John Smith</h3>
              <p className="text-secondary font-medium mb-2">CEO & Founder</p>
              <p className="text-textDark font-body">Leading the company with vision and dedication since 1970.</p>
            </div>

            <div className="text-center">
              <img
                src="/images/flat-lay-monochromatic-assortment-textiles.jpg"
                alt="Sarah Johnson - Design Director"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h3 className="text-xl font-semibold text-textDark mb-2 font-heading">Sarah Johnson</h3>
              <p className="text-secondary font-medium mb-2">Design Director</p>
              <p className="text-textDark font-body">Blending traditional patterns with contemporary aesthetics.</p>
            </div>

            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Michael Chen - Operations Manager"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h3 className="text-xl font-semibold text-textDark mb-2 font-heading">Michael Chen</h3>
              <p className="text-secondary font-medium mb-2">Operations Manager</p>
              <p className="text-textDark font-body">Ensuring sustainable practices throughout our supply chain.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-textLight mb-4">
            Join Our Journey
          </h2>
          <p className="text-lg sm:text-xl text-textLight mb-8 leading-relaxed">
            Experience the beauty of natural fibres — FROM FARM TO FLOOR.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/enquiry" className="inline-flex"><Button variant="gold">Request a Quote</Button></a>
            <a href="/products" className="inline-flex"><Button variant="secondary" className="border-gold text-textLight">Shop Our Collection</Button></a>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default AboutUs;