import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import SEOHelmet from './SEOHelmet';

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [squareView, setSquareView] = useState(true);
  const [showMeta, setShowMeta] = useState(true);
  const [shareCopied, setShareCopied] = useState(false);
  const [loadingImages, setLoadingImages] = useState(new Set());
  const [failedImages, setFailedImages] = useState(new Set());
  const [isLoading, setIsLoading] = useState(false);
  const lastTapRef = useRef(0);
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'products', name: 'Products' },
    { id: 'facilities', name: 'Facilities' },
    { id: 'craftsmanship', name: 'Craftsmanship' },
    { id: 'community', name: 'community' }
  ];

  const galleryImages = [
    { id: 1, src: '/images/Elma Geometric Jute Rug _ Natural.jpg', alt: 'Jute rug geometric', category: 'products', title: 'Premium Jute Rugs' },
    { id: 2, src: '/images/flat-lay-monochromatic-assortment-textiles.jpg', alt: 'Weaving textures', category: 'community', title: 'Artisan Weaving' },
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

  // Optimize filtered images with useMemo to prevent unnecessary re-calculations
  const filteredImages = useMemo(() => {
    if (selectedCategory === 'all') {
      return galleryImages;
    }
    return galleryImages.filter(img => img.category === selectedCategory);
  }, [selectedCategory]);

  // Optimize modal functions with useCallback and enhanced functionality
  const openModal = useCallback((image) => {
    setSelectedImage(image);
    setSquareView(true);
    setShowMeta(true);
    // Enhanced body scroll prevention
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
    // Store scroll position for restoration
    document.body.setAttribute('data-scroll-y', scrollY.toString());
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
    // Enhanced body scroll restoration
    const scrollY = document.body.getAttribute('data-scroll-y');
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflow = '';
    document.body.removeAttribute('data-scroll-y');
    // Restore scroll position
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY, 10));
    }
  }, []);

  // Image loading handlers
  const handleImageLoad = useCallback((imageId) => {
    setLoadingImages(prev => {
      const newSet = new Set(prev);
      newSet.delete(imageId);
      return newSet;
    });
  }, []);

  const handleImageError = useCallback((imageId) => {
    setFailedImages(prev => new Set([...prev, imageId]));
    setLoadingImages(prev => {
      const newSet = new Set(prev);
      newSet.delete(imageId);
      return newSet;
    });
  }, []);

  const handleImageLoadStart = useCallback((imageId) => {
    setLoadingImages(prev => new Set([...prev, imageId]));
  }, []);

  const handleShare = useCallback(async () => {
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
  }, [selectedImage]);

  // Enhanced keyboard navigation
  useEffect(() => {
    if (!selectedImage) return;
    
    const onKey = (e) => {
      switch (e.key) {
        case 'Escape':
          closeModal();
          break;
        case ' ':
        case 'Enter':
          if (e.target === document.body || e.target.tagName === 'DIV') {
            e.preventDefault();
            setSquareView(v => !v);
          }
          break;
        case 'i':
        case 'I':
          setShowMeta(v => !v);
          break;
        case 'f':
        case 'F':
          setSquareView(v => !v);
          break;
        case 's':
        case 'S':
          handleShare();
          break;
        default:
          break;
      }
    };
    
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedImage, closeModal, handleShare]);

  // Handle category change with loading state
  const handleCategoryChange = useCallback((categoryId) => {
    setIsLoading(true);
    setSelectedCategory(categoryId);
    // Simulate a small delay for smoother UX
    setTimeout(() => setIsLoading(false), 300);
  }, []);

  return (
    <div className="min-h-screen bg-bgGrey">
      <SEOHelmet
        title="Rug Gallery — Natural Fibres & Craft | MKT Rugs"
        description="Browse our gallery of handcrafted rugs, facilities, and artisan craftsmanship in natural fibres."
        canonical="https://www.mktrugs.com/gallery"
      />
      
      {/* Hero section with header compensation */}
      <section 
        className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] min-h-[400px] max-h-[800px]"
        style={{ marginTop: "calc(var(--header-h, 0px) * -1)" }}
      >
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
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                disabled={isLoading}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed ${
                  selectedCategory === category.id
                    ? 'bg-primary text-textLight shadow-lg transform scale-105'
                    : 'bg-white text-textDark hover:bg-primary hover:text-textLight shadow-md hover:scale-105 hover:shadow-lg'
                }`}
                aria-pressed={selectedCategory === category.id}
              >
                {isLoading && selectedCategory === category.id ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                    <span>{category.name}</span>
                  </div>
                ) : (
                  category.name
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-8 bg-bgGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Loading state */}
          {isLoading && (
            <div className="flex justify-center items-center py-12">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                <span className="text-textDark font-medium">Loading images...</span>
              </div>
            </div>
          )}
          
          {/* Gallery grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 transition-opacity duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
            {filteredImages.map(image => {
              const isImageLoading = loadingImages.has(image.id);
              const hasImageFailed = failedImages.has(image.id);
              
              return (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
                  onClick={() => !hasImageFailed && openModal(image)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${image.title} in gallery`}
                  onKeyDown={(e) => {
                    if ((e.key === 'Enter' || e.key === ' ') && !hasImageFailed) {
                      e.preventDefault();
                      openModal(image);
                    }
                  }}
                >
                  {/* Loading skeleton */}
                  {isImageLoading && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                      <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                    </div>
                  )}
                  
                  {/* Error state */}
                  {hasImageFailed && (
                    <div className="w-full h-64 bg-gray-100 flex flex-col items-center justify-center text-gray-400">
                      <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">Failed to load</span>
                    </div>
                  )}
                  
                  {/* Image */}
                  {!hasImageFailed && (
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-300 ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
                      loading="lazy"
                      onLoadStart={() => handleImageLoadStart(image.id)}
                      onLoad={() => handleImageLoad(image.id)}
                      onError={() => handleImageError(image.id)}
                    />
                  )}
                  
                  {/* Hover overlay */}
                  {!hasImageFailed && (
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                      <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                        <h3 className="text-textLight text-lg sm:text-xl font-semibold mb-2 font-heading">
                          {image.title}
                        </h3>
                        <p className="text-textLight/90 font-body text-sm sm:text-base">
                          Click to view larger
                        </p>
                        <div className="mt-2 inline-flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                          <span className="text-xs font-medium">Expand</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* No results */}
          {filteredImages.length === 0 && !isLoading && (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-4 text-gray-300">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-textDark mb-2">No images found</h3>
              <p className="text-textDark/70">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

     
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[10000] p-3 sm:p-4 transition-all duration-300 ease-out" 
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
        >
          <div
            className="relative w-full max-w-7xl mx-auto transform transition-all duration-300 ease-out scale-100 opacity-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Enhanced centered title */}
            <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 z-10 px-2">
              <div className="px-4 py-2 sm:px-5 sm:py-3 rounded-xl bg-black/90 backdrop-blur-md text-white text-sm sm:text-base font-semibold shadow-xl border border-white/20 max-w-xs sm:max-w-md truncate">
                {selectedImage.title || 'Untitled'}
              </div>
            </div>

            {/* Enhanced controls with better mobile touch targets */}
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 flex items-center gap-2 sm:gap-3">
              {/* View toggle button */}
              <button
                type="button"
                onClick={() => setSquareView(v => !v)}
                aria-label={squareView ? 'Show full image' : 'Show cropped view'}
                title={squareView ? 'Show full (contain)' : 'Show square (cover)'}
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full text-white bg-black/70 backdrop-blur-md border border-white/30 hover:bg-black/80 hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/60 shadow-xl"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V5a1 1 0 011-1h3M4 16v3a1 1 0 001 1h3M20 8V5a1 1 0 00-1-1h-3M20 16v3a1 1 0 01-1 1h-3"/>
                </svg>
              </button>

              {/* Details toggle button */}
              <button
                type="button"
                onClick={() => setShowMeta(v => !v)}
                aria-label={showMeta ? 'Hide details' : 'Show details'}
                title={showMeta ? 'Hide details' : 'Show details'}
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full text-white bg-black/70 backdrop-blur-md border border-white/30 hover:bg-black/80 hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/60 shadow-xl"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="6"></circle>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35"></path>
                  <path strokeLinecap="round" d="M11 8v6M8 11h6"></path>
                </svg>
              </button>

              {/* Share button */}
              <button
                type="button"
                onClick={handleShare}
                aria-label="Share image"
                title="Share image"
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full text-white bg-black/70 backdrop-blur-md border border-white/30 hover:bg-black/80 hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/60 shadow-xl"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7M16 6l-4-4m0 0L8 6m4-4v16"/>
                </svg>
              </button>

              {/* Enhanced close button */}
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close gallery"
                title="Close gallery"
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full text-white bg-gradient-to-br from-primary/90 to-primary backdrop-blur-md border border-white/30 hover:from-primary hover:to-primary/80 hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/60 shadow-xl"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            {/* Enhanced image viewer */}
            <div className={`mx-auto transition-all duration-300 ease-out ${
              squareView 
                ? 'w-[88vw] sm:w-[75vw] md:w-[65vw] lg:w-[55vw] max-w-[650px] aspect-square' 
                : 'w-[92vw] sm:w-[88vw] md:w-[82vw] lg:w-[75vw] max-w-[1300px] max-h-[80vh]'
            }`}>
              <div className="w-full h-full bg-gradient-to-br from-black/30 to-black/60 rounded-xl overflow-hidden flex items-center justify-center border border-white/20 shadow-2xl backdrop-blur-sm">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className={`transition-all duration-300 ease-out ${
                    squareView 
                      ? 'w-full h-full object-cover cursor-zoom-out' 
                      : 'max-w-full max-h-full object-contain cursor-zoom-in'
                  }`}
                  onDoubleClick={() => setSquareView(v => !v)}
                  onTouchStart={() => {
                    const now = Date.now();
                    if (now - lastTapRef.current < 300) { setSquareView(v => !v); }
                    lastTapRef.current = now;
                  }}
                  loading="eager"
                  draggable={false}
                />
              </div>
            </div>

            {/* Enhanced metadata section */}
            {showMeta && (
              <div className="mt-4 sm:mt-6 bg-gradient-to-br from-black/90 to-black/80 backdrop-blur-md rounded-xl p-4 sm:p-6 text-white border border-white/20 shadow-xl">
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="font-bold text-base sm:text-lg text-gold">{selectedImage.title}</h3>
                  {selectedImage.alt && (
                    <p className="text-sm sm:text-base text-white/90 font-body leading-relaxed">{selectedImage.alt}</p>
                  )}
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/20 rounded-full capitalize font-medium border border-primary/30">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                      {selectedImage.category}
                    </span>
                    <span className="text-white/70 flex items-center gap-1.5">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                      Double-tap to zoom
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Enhanced share toast */}
            {shareCopied && (
              <div className="fixed bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-[10001] px-5 py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold shadow-xl border border-green-400/30 backdrop-blur-sm transform transition-all duration-300 ease-out">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Link copied to clipboard
                </div>
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
                <a href="/contact" className="inline-flex">
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