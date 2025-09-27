import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

function ProductHeroSlider() {
  const slides = [
    { src: '/images/main.jpg', alt: 'Assorted natural fibre rugs hanging and styled' },
    { src: '/images/carpet.jpg', alt: 'Natural jute carpet close-up texture' },
    { src: '/images/Elma Geometric Jute Rug _ Natural.jpg', alt: 'Geometric jute rug in living space' },
  ];
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4000);
    return () => clearInterval(timerRef.current);
  }, [paused, slides.length]);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section
      className="relative min-h-[60vh] sm:min-h-[50vh] lg:min-h-[60vh]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-secondary/20 to-secondary/60" />
      {/* Headline + CTA + USPs */}
      <div className="absolute inset-0 flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-heading font-semibold text-white leading-tight break-words">
              Sustainable Rugs, Handcrafted for Generations
            </h1>
            <p className="mt-3 sm:mt-4 text-white/90 font-body max-w-xl text-sm sm:text-base">
              Timeless textures in natural fibres — made to last and designed for modern living.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <Link to="/products"><Button variant="gold">Explore Collection</Button></Link>
              <Link to="/contact"><Button variant="secondary" className="!border-white !text-white hover:!bg-white hover:!text-secondary">Contact</Button></Link>
            </div>
            {/* USP badges */}
            <div className="mt-4 flex flex-wrap gap-2 text-xs sm:text-sm text-white/90">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 ring-1 ring-white/20"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3 7h7l-5.5 4 2.5 7-7-4.5L5 20l2.5-7L2 9h7z"/></svg>Handmade</span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 ring-1 ring-white/20"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z"/></svg>Eco-friendly</span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 ring-1 ring-white/20"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>Durable</span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 ring-1 ring-white/20"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>Custom Sizes</span>
            </div>
          </div>
        </div>
      </div>
     
      <button aria-label="Previous" onClick={prev} className="hidden sm:block absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
      </button>
      <button aria-label="Next" onClick={next} className="hidden sm:block absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
      </button>
    </section>
  );
}

function Product() {
  // Modal state for viewing images larger (similar to Gallery)
  const [selectedImage, setSelectedImage] = useState(null);
  const [squareView, setSquareView] = useState(true);
  const [showMeta, setShowMeta] = useState(true);
  // Keep a handle to the clicked element so we can scroll it into view
  const [anchorEl, setAnchorEl] = useState(null);
  const [shareCopied, setShareCopied] = useState(false);
  const lastTapRef = useRef(0);

  const openModal = (image, anchor = null) => {
    setSelectedImage(image);
    setSquareView(true);
    setShowMeta(true);
    setAnchorEl(anchor);
    // Scroll the page to the clicked section so it remains behind the overlay
    try {
      anchor?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    } catch {}
    // If you prefer locking background scroll, uncomment below:
    // try { document.body.style.overflow = 'hidden'; } catch {}
  };
  const closeModal = () => {
    const el = anchorEl;
    setSelectedImage(null);
    setAnchorEl(null);
    // Restore/ensure the same section stays centered after closing
    try {
      el?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    } catch {}
    // If you locked background scroll in openModal, also revert it here:
    // try { document.body.style.overflow = ''; } catch {}
  };

  useEffect(() => {
    if (!selectedImage) return;
    const onKey = (e) => { if (e.key === 'Escape') closeModal(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedImage]);


  const handleShare = async () => {
    if (!selectedImage) return;
    const url = window.location.origin + selectedImage.src;
    try {
      if (navigator.share) {
        await navigator.share({ title: selectedImage.title || 'Product Image', url });
      } else {
        await navigator.clipboard.writeText(url);
        setShareCopied(true);
        setTimeout(() => setShareCopied(false), 1500);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const thumbs = {
    sisal: [
      '/images/Jute Boucle Rug.jpg',
      '/images/download (6).jpg',
      '/images/Elma Geometric Jute Rug _ Natural.jpg'
    ],
    jute: [
      '/images/White Natural Jute Rug, Hand Braided Rug, Jute Rug, Warm Rug, Custom Area Rug, Yoga Mat Indoor Rug.jpg',
      '/images/Naturals Basket.jpg',
      '/images/download (4).jpg',
      '/images/download (7).jpg'
    ],
    jacquard: [
      '/images/download (2).jpg',
      '/images/download (3).jpg',
      '/images/download (5).jpg'
    ],
    wool: [
      '/images/Hart in Terracotta.jpg',
      '/images/download.jpg',
      '/images/download (1).jpg'
    ],
    outdoor: [
      '/images/Beige Contemporary Polka Dotted Handwoven Rectangular Luxury Rugs - 250 cm x 350 cm.jpg',
      '/images/Summer Novelty Coir Doormat _ The Company Store.jpg'
    ],
    mats: [
      '/images/Otirač Boja bež - SINSAY - 7661Z-08X.jpg',
      '/images/Rugs to complete a room_ #serenaandlily.jpg'
    ]
  };

  const TextBlock = ({ title, description, bullets = [], tagline, items = [] }) => (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-3">
        <div className="hidden sm:block h-px bg-gray-300 flex-1 mr-3" />
        <h3 className="text-lg sm:text-xl font-heading tracking-wide text-textDark font-semibold">
          {title}
        </h3>
        <div className="hidden sm:block h-px bg-gray-300 flex-1 ml-3" />
      </div>
      {tagline && (<p className="text-sm font-semibold text-secondary/90 mb-2 font-body">{tagline}</p>)}
      {bullets && bullets.length > 0 ? (
        <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-textDark/80 leading-relaxed font-body">
          {bullets.map((b, i) => (<li key={i}>{b}</li>))}
        </ul>
      ) : (
        <p className="text-sm sm:text-base text-textDark/80 leading-relaxed font-body">{description}</p>
      )}
      {items.length > 0 && (
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
          {items.map((src, i) => (
            <div
              key={i}
              onClick={(e) => openModal({ src, alt: `${title} ${i + 1}`, title }, e.currentTarget)}
              className="group relative overflow-hidden rounded h-16 sm:h-20 cursor-zoom-in"
            >
              <img
                src={src}
                alt={`${title} ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105 will-change-transform"
              />
              <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-bgGrey pb-28 md:pb-0">
     
      <ProductHeroSlider />

     
      <section className="bg-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
          <div className="md:col-span-3">
            <h2 className="text-2xl sm:text-3xl font-heading text-textDark">
              Passion for innovative natural fibre products handed down <span className="font-semibold">4 generations</span>
            </h2>
          </div>
          <div className="md:col-span-2 text-textDark/80 font-body leading-relaxed">
            We have a portfolio of products that showcases a spectrum of natural fiber floor coverings — tufted &
            woven coir mat, rubber mat, jute, sisal & wool blended rugs, 100% Recycled PET rugs & runners.
          </div>
        </div>
      </section>

      {/* Alternating image/text layout inspired by the reference */}
      <section className="py-6 sm:py-10">
        <div className="max-w-7xl mx-auto px-0 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
            {/* Row 1: Large image + Text (Sisal) */}
            <div className="md:col-span-7">
              <img
                src={'/images/carpet.jpg'}
                alt="Close-up of sisal weave texture"
                loading="lazy"
                className="w-full h-60 sm:h-72 lg:h-96 object-cover rounded cursor-zoom-in"
                onClick={(e) => openModal({ src: '/images/carpet.jpg', alt: 'Close-up of sisal weave texture', title: 'SISAL RUGS' }, e.currentTarget)}
              />
            </div>
            <div className="md:col-span-5">
              <TextBlock
                title="SISAL RUGS"
                tagline="Tough, Stylish, Timeless"
                bullets={["Natural Agave fibre with rich golden hue","Highly durable for high-traffic areas","Dyed, spun and woven into premium textures"]}
                items={thumbs.sisal}
              />
            </div>

            {/* Row 2: Text (Jute) + Large image */}
            <div className="md:col-span-5 order-2 md:order-none">
              <TextBlock
                title="JUTE RUGS"
                tagline="Warmth of Nature"
                bullets={["100% eco-friendly & biodegradable","Sustainably harvested and processed","Handwoven for durability & elegance"]}
                items={thumbs.jute}
              />
            </div>
            <div className="md:col-span-7 order-1 md:order-none">
              <img
                src={'/images/Elma Geometric Jute Rug _ Natural.jpg'}
                alt="Jute rug arranged in modern living room"
                loading="lazy"
                className="w-full h-60 sm:h-72 lg:h-96 object-cover rounded cursor-zoom-in"
                onClick={(e) => openModal({ src: '/images/Elma Geometric Jute Rug _ Natural.jpg', alt: 'Jute rug arranged in modern living room', title: 'JUTE RUGS' }, e.currentTarget)}
              />
            </div>

            
            <div className="md:col-span-7">
              <img
                src={'/images/flat-lay-monochromatic-assortment-textiles.jpg'}
                alt="Flat lay of jacquard textile patterns"
                loading="lazy"
                className="w-full h-60 sm:h-72 lg:h-96 object-cover rounded cursor-zoom-in"
                onClick={(e) => openModal({ src: '/images/flat-lay-monochromatic-assortment-textiles.jpg', alt: 'Flat lay of jacquard textile patterns', title: 'JACQUARD RUGS' }, e.currentTarget)}
              />
            </div>
            <div className="md:col-span-5">
              <TextBlock
                title="JACQUARD RUGS"
                tagline="Intricate Patterns, Premium Feel"
                bullets={["Digitally controlled looms","Blend of wool, sisal and jute","Soft, durable, and refined"]}
                items={thumbs.jacquard}
              />
            </div>

             <div className="md:col-span-5 order-2 md:order-none">
              <TextBlock
                title="WOOL RUGS"
                tagline="Luxury Underfoot"
                bullets={["Premium wool from New Zealand & India","Soft, insulating, and naturally flame-retardant","Available in diverse textures and piles"]}
                items={thumbs.wool}
              />
            </div>
            <div className="md:col-span-7 order-1 md:order-none">
              <img
                src={'/images/Beige Contemporary Polka Dotted Handwoven Rectangular Luxury Rugs - 250 cm x 350 cm.jpg'}
                alt="Beige handwoven wool rug with dotted pattern"
                loading="lazy"
                className="w-full h-60 sm:h-72 lg:h-96 object-cover rounded cursor-zoom-in"
                onClick={(e) => openModal({ src: '/images/Beige Contemporary Polka Dotted Handwoven Rectangular Luxury Rugs - 250 cm x 350 cm.jpg', alt: 'Beige handwoven wool rug with dotted pattern', title: 'WOOL RUGS' }, e.currentTarget)}
              />
            </div>

           
            <div className="md:col-span-7">
              <img
                src={'/images/Eco-Friendly DIY Natural Fiber Rugs for Home.jpg'}
                alt="Outdoor-friendly PET rugs styled in patio"
                loading="lazy"
                className="w-full h-60 sm:h-72 lg:h-96 object-cover rounded cursor-zoom-in"
                onClick={(e) => openModal({ src: '/images/Eco-Friendly DIY Natural Fiber Rugs for Home.jpg', alt: 'Outdoor-friendly PET rugs styled in patio', title: 'INDOOR/OUTDOOR COLLECTION' }, e.currentTarget)}
              />
            </div>
            <div className="md:col-span-5">
              <TextBlock
                title="INDOOR/OUTDOOR COLLECTION"
                tagline="Weather-Ready Style"
                bullets={["Constructed from durable PET yarns","Stain-resistant and easy to clean","Versatile designs for any setting"]}
                items={thumbs.outdoor}
              />
            </div>

            
            <div className="md:col-span-5 order-2 md:order-none">
              <TextBlock
                title="DOOR MATS"
                tagline="Welcome, Without the Mess"
                bullets={["Woven & tufted coir options","Natural rubber and vinyl-backed variants","Effective dirt trapping with style"]}
                items={thumbs.mats}
              />
            </div>
            <div className="md:col-span-7 order-1 md:order-none">
              <img
                src={'/images/Otirač Boja bež - SINSAY - 7661Z-08X.jpg'}
                alt="Assorted decorative doormats in beige tones"
                loading="lazy"
                className="w-full h-60 sm:h-72 lg:h-96 object-cover rounded cursor-zoom-in"
                onClick={(e) => openModal({ src: '/images/Otirač Boja bež - SINSAY - 7661Z-08X.jpg', alt: 'Assorted decorative doormats in beige tones', title: 'DOOR MATS' }, e.currentTarget)}
              />
            </div>
        </div>
      </div>
    </section>

    {/* Product Image Modal (similar to Gallery) */}
    {selectedImage && (
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm md:backdrop-blur flex items-center justify-center z-[9999] p-4" onClick={closeModal}>
        <div className="relative" role="dialog" aria-modal="true" aria-label="Product image viewer" onClick={(e) => e.stopPropagation()}>
          {/* Title centered at top like reference */}
          <div
            className="fixed left-1/2 -translate-x-1/2 z-[10000]"
            style={{ top: 'calc(env(safe-area-inset-top) + 10px)' }}
          >
            <div className="px-3 py-1 rounded bg-black/60 text-white text-[13px] md:text-sm font-semibold shadow-sm">
              {selectedImage.title || 'Untitled'}
            </div>
          </div>

          {/* Controls at top-right (icons updated to match requested set) */}
          <div
            className="fixed z-[10000] flex items-center gap-2 md:gap-2.5"
            style={{ top: 'calc(env(safe-area-inset-top) + 10px)', right: 'calc(env(safe-area-inset-right) + 12px)' }}
          >
            {/* Fullscreen corners icon for view toggle */}
            <button
              type="button"
              tabIndex={0}
              onClick={() => setSquareView(v => !v)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSquareView(v => !v); } }}
              aria-label="Zoom"
              title={squareView ? 'Show full (contain)' : 'Show square (cover)'}
              className="inline-flex items-center justify-center h-11 w-11 p-2.5 rounded-full text-white bg-black/40 hover:bg-black/50 ring-1 ring-white/20 shadow-[0_1px_2px_rgba(0,0,0,0.5)] focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V5a1 1 0 011-1h3M4 16v3a1 1 0 001 1h3M20 8V5a1 1 0 00-1-1h-3M20 16v3a1 1 0 01-1 1h-3"/>
              </svg>
            </button>

            {/* Magnify with plus icon for Details toggle */}
            <button
              type="button"
              tabIndex={0}
              onClick={() => setShowMeta(v => !v)}
              aria-label="Details"
              title={showMeta ? 'Hide details' : 'Show details'}
              className="inline-flex items-center justify-center h-11 w-11 p-2.5 rounded-full text-white bg-black/40 hover:bg-black/50 ring-1 ring-white/20 shadow-[0_1px_2px_rgba(0,0,0,0.5)] focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="6"></circle>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35"></path>
                <path strokeLinecap="round" d="M11 8v6M8 11h6"></path>
              </svg>
            </button>

            {/* Share arrow */}
            <button
              type="button"
              tabIndex={0}
              onClick={handleShare}
              aria-label="Share"
              title="Share"
              className="inline-flex items-center justify-center h-11 w-11 p-2.5 rounded-full text-white bg-black/40 hover:bg-black/50 ring-1 ring-white/20 shadow-[0_1px_2px_rgba(0,0,0,0.5)] focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7M16 6l-4-4m0 0L8 6m4-4v16"/>
              </svg>
            </button>

            {/* Close */}
            <button
              type="button"
              tabIndex={0}
              onClick={closeModal}
              aria-label="Close"
              title="Close"
              className="inline-flex items-center justify-center h-11 w-11 p-2.5 rounded-full text-white bg-primary/90 hover:bg-primary ring-1 ring-white/20 shadow focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>

          <div className={squareView ? 'w-[90vw] max-w-[640px] aspect-square' : 'w-[92vw] max-w-[1100px] max-h-[80vh]'}>
            <div className="w-full h-full bg-black/40 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className={squareView ? 'w-full h-full object-cover cursor-zoom-out' : 'max-w-full max-h-full object-contain cursor-zoom-in'}
                onDoubleClick={() => setSquareView(v => !v)}
                onTouchStart={() => {
                  const now = Date.now();
                  if (now - lastTapRef.current < 300) { setSquareView(v => !v); }
                  lastTapRef.current = now;
                }}
              />
            </div>
          </div>

          {showMeta && (
            <div className="mt-4 bg-black/50 rounded-lg p-3 text-textLight">
              {selectedImage.alt && (
                <p className="text-sm font-body">{selectedImage.alt}</p>
              )}
            </div>
          )}

          {shareCopied && (
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[10000] px-3 py-1.5 rounded-full bg-black/70 text-white text-sm shadow">
              Copied
            </div>
          )}
        </div>
      </div>
    )}

    {/* Removed duplicate alternating section */}

    {/* CTA */}
    {/* <section className="py-12 sm:py-16 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-textLight mb-4">
          Need something bespoke?
        </h2>
        <p className="text-base sm:text-lg text-textLight/90 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
          We craft custom sizes, blends and designs to match your interior palette and performance needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link to="/enquiry"><Button variant="gold">Request Quote</Button></Link>
          <Link to="/contact"><Button variant="secondary" className="!border-white !text-white hover:!bg-white hover:!text-secondary">Contact Us</Button></Link>
        </div>
      </div>
    </section> */}

    {/* Testimonials */}
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-heading text-textDark">What our customers say</h2>
          <div className="mx-auto mt-3 w-24 h-1 bg-gold" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{
            quote: 'The jute rug quality is superb — durable and beautiful.', name: 'A. Desai'
          },{
            quote: 'Custom sizes delivered on time for our project.', name: 'Interior Studio'
          },{
            quote: 'Eco-friendly materials with premium finish — love it.', name: 'R. Kapoor'
          }].map((t,i)=> (
            <div key={i} className="bg-bgGrey rounded-lg p-6 border border-gray-100 shadow-sm">
              <svg className="w-6 h-6 text-gold mb-2" viewBox="0 0 24 24" fill="currentColor"><path d="M7 7h4v10H5V9a2 2 0 012-2zm10 0h4v10h-6V9a2 2 0 012-2z"/></svg>
              <p className="text-textDark/90 font-body">{t.quote}</p>
              <div className="mt-3 text-sm text-secondary font-semibold">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    
    <div className="md:hidden fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      <a href="/contact" className="shadow-lg"><Button variant="gold" className="rounded-full px-4 py-3">Contact</Button></a>
      <a href="/enquiry" className="shadow-lg"><Button variant="secondary" className="rounded-full px-4 py-3 !border-white !text-white hover:!bg-white hover:!text-secondary">Get a Quote</Button></a>
    </div>
    </div>
  );
}

export default Product;