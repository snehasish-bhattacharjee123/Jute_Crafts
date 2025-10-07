import React, { useState, useEffect, useRef } from 'react';
import SEOHelmet from './SEOHelmet';

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [squareView, setSquareView] = useState(true); // default open as square
  const [showMeta, setShowMeta] = useState(true);
  const [shareCopied, setShareCopied] = useState(false);
  const lastTapRef = useRef(0);
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'products', name: 'Products' },
    { id: 'facilities', name: 'Facilities' },
    { id: 'craftsmanship', name: 'Craftsmanship' }
  ];

  const galleryImages = [
    { id: 1, src: '/images/Elma Geometric Jute Rug _ Natural.jpg', alt: 'Jute rug geometric', category: 'products', title: 'Premium Jute Rugs' },
    { id: 2, src: '/images/flat-lay-monochromatic-assortment-textiles.jpg', alt: 'Weaving textures', category: 'craftsmanship', title: 'Artisan Weaving' },
    { id: 3, src: '/images/Hart in Terracotta.jpg', alt: 'Wool rug terracotta', category: 'products', title: 'Luxury Wool Rugs' },
    { id: 4, src: '/images/Jute Boucle Rug.jpg', alt: 'Sisal/jute texture', category: 'products', title: 'Sisal & Jute Rugs' },
    { id: 5, src: '/images/background-zoom-calls-with-cozy-living-room.jpg', alt: 'Studio/facility', category: 'facilities', title: 'State-of-the-Art Facility' },
    { id: 6, src: '/images/Summer Novelty Coir Doormat _ The Company Store.jpg', alt: 'Door mats', category: 'products', title: 'Designer Door Mats' },
    { id: 7, src: '/images/download (2).jpg', alt: 'Jacquard weaving', category: 'craftsmanship', title: 'Jacquard Weaving Process' },
    { id: 8, src: '/images/download (3).jpg', alt: 'Quality check', category: 'facilities', title: 'Quality Control Center' },
    { id: 9, src: '/images/download (4).jpg', alt: 'Natural fiber processing', category: 'craftsmanship', title: 'Natural Fiber Processing' },
    { id: 10, src: '/images/Beige Contemporary Polka Dotted Handwoven Rectangular Luxury Rugs - 250 cm x 350 cm.jpg', alt: 'Beige dotted rug', category: 'products', title: 'Contemporary Rugs' },
    { id: 11, src: '/images/Eco-Friendly DIY Natural Fiber Rugs for Home.jpg', alt: 'Eco-friendly fibers', category: 'products', title: 'Eco-friendly Rugs' },
    { id: 12, src: '/images/carpet.jpg', alt: 'Carpet close-up', category: 'products', title: 'Natural Carpets' },
  ];

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openModal = (image) => {
    setSelectedImage(image);
    setSquareView(true);
    setShowMeta(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
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
        await navigator.share({ title: selectedImage.title || 'Gallery Image', url });
      } else {
        await navigator.clipboard.writeText(url);
        setShareCopied(true);
        setTimeout(() => setShareCopied(false), 1500);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen bg-bgGrey">
      <SEOHelmet
        title="Rug Gallery — Natural Fibres & Craft | MKT Rugs"
        description="Browse our gallery of handcrafted rugs, facilities, and artisan craftsmanship in natural fibres."
        canonical="https://www.mktrugs.com/gallery"
      />
      
      <section className="relative h-[40vh] sm:h-[50vh] lg:h-[60vh]">
        <img
          src="/images/background-zoom-calls-with-cozy-living-room.jpg"
          alt="Gallery hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex items-end h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 text-center w-full">
            <h1 className="text-4xl sm:text-5xl font-heading font-semibold text-white mb-3">
              Our Gallery
            </h1>
            <p className="text-white/90 max-w-3xl mx-auto leading-relaxed font-body">
              Explore our world of natural fibers, traditional craftsmanship, and modern design excellence.
            </p>
          </div>
        </div>
      </section>

     
      <section className="py-8 bg-bgGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-textLight shadow-lg'
                    : 'bg-white text-textDark hover:bg-primary hover:text-textLight shadow-md'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-8 bg-bgGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map(image => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openModal(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-textLight text-xl font-semibold mb-2 font-heading">
                      {image.title}
                    </h3>
                    <p className="text-textLight font-body">
                      Click to view larger
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      {selectedImage && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm md:backdrop-blur flex items-center justify-center z-[10000] p-4" onClick={closeModal}>
          <div
            className="relative"
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image viewer"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Centered title */}
            <div
              className="fixed left-1/2 -translate-x-1/2 z-[10000]"
              style={{ top: 'calc(env(safe-area-inset-top) + 10px)' }}
            >
              <div className="px-3 py-1 rounded bg-black/60 text-white text-[13px] md:text-sm font-semibold shadow-sm">
                {selectedImage.title || 'Untitled'}
              </div>
            </div>

            {/* Controls: View toggle, Details, Share, Close (icons updated) */}
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

              {/* Magnify with plus icon for Details toggle (per request) */}
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

            {/* Image viewer */}
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
              <div className="mt-4 bg-black/60 rounded-lg p-3 text-white">
                {selectedImage.alt && (
                  <p className="text-sm font-body">{selectedImage.alt}</p>
                )}
              </div>
            )}

            {/* Share toast */}
            {shareCopied && (
              <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[10000] px-3 py-1.5 rounded-full bg-black/70 text-white text-sm shadow">
                Copied
              </div>
            )}
          </div>
        </div>
      )}

      
      <section className="relative py-16 sm:py-20">
       
        <div className="absolute inset-0">
          <img src="/images/Hart in Terracotta.jpg" alt="Natural fibre rug styled" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/60 to-secondary/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-textLight">
                Bring Natural Elegance to Your Space
              </h2>
              <p className="mt-3 sm:mt-4 text-textLight/90 max-w-xl font-body">
                Handcrafted rugs in sustainable fibres — designed for modern living, made to last.
              </p>

             
              <div className="mt-5 flex flex-wrap gap-2 text-xs sm:text-sm">
                <span className="px-3 py-1 rounded-full bg-white/10 text-white ring-1 ring-white/20">Eco‑friendly</span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white ring-1 ring-white/20">Handwoven</span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white ring-1 ring-white/20">Custom Sizes</span>
              </div>

             
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="/enquiry" className="inline-flex">
                  <button className="rounded-full bg-gold text-secondary px-6 py-3 font-medium shadow hover:bg-gold/90 transition">
                    Request a Quote
                  </button>
                </a>
                <a href="/products" className="inline-flex">
                  <button className="rounded-full border border-white text-white px-6 py-3 font-medium hover:bg-white hover:text-secondary transition">
                    View Products
                  </button>
                </a>
              </div>
            </div>

           
            <div className="hidden lg:grid grid-cols-2 gap-4">
              <img src="/images/Elma Geometric Jute Rug _ Natural.jpg" alt="Geometric jute rug" className="w-full h-40 xl:h-48 object-cover rounded-lg shadow" />
              <img src="/images/Naturals Basket.jpg" alt="Natural fibres and basket" className="w-full h-40 xl:h-48 object-cover rounded-lg shadow" />
              <img src="/images/flat-lay-monochromatic-assortment-textiles.jpg" alt="Textile flat lay" className="w-full h-40 xl:h-48 object-cover rounded-lg shadow col-span-2" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;