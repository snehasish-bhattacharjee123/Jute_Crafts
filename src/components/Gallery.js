import React, { useState, useEffect } from 'react';

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [squareView, setSquareView] = useState(true); // default open as square
  const [showMeta, setShowMeta] = useState(true);

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
    const onKey = (e) => { if (e.key === 'Escape') closeModal(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleShare = async () => {
    if (!selectedImage) return;
    const url = window.location.origin + selectedImage.src;
    try {
      if (navigator.share) {
        await navigator.share({ title: selectedImage.title || 'Gallery Image', url });
      } else {
        await navigator.clipboard.writeText(url);
        alert('Image link copied to clipboard');
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen bg-bgGrey">
      
      <section className="relative h-[32vh] sm:h-[40vh] lg:h-[50vh]">
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
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="relative" onClick={e => e.stopPropagation()}>
            {}
            <div className="absolute -top-14 left-1/2 -translate-x-1/2 flex items-center gap-2">
              <button onClick={() => setSquareView(!squareView)} aria-label="Toggle View" title={squareView ? 'Full View' : 'Square View'} className="w-10 h-10 rounded-full bg-white/95 text-textDark shadow hover:bg-white flex items-center justify-center">
                {squareView ? (
                  
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 3H5a2 2 0 00-2 2v3m0 8v3a2 2 0 002 2h3m8 0h3a2 2 0 002-2v-3M21 8V5a2 2 0 00-2-2h-3"/></svg>
                ) : (
                  
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="5" y="5" width="14" height="14" rx="1"/></svg>
                )}
              </button>
              <button onClick={handleShare} aria-label="Share" title="Share" className="w-10 h-10 rounded-full bg-white/95 text-textDark shadow hover:bg-white flex items-center justify-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7M16 6l-4-4m0 0L8 6m4-4v16"/></svg>
              </button>
              <button onClick={() => setShowMeta(!showMeta)} aria-label="Toggle Details" title={showMeta ? 'Hide Details' : 'Show Details'} className="w-10 h-10 rounded-full bg-white/95 text-textDark shadow hover:bg-white flex items-center justify-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M12 18.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"/></svg>
              </button>
              <button onClick={closeModal} aria-label="Close" title="Close" className="w-10 h-10 rounded-full bg-primary text-textLight shadow hover:bg-primary/90 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>

            
            <div className={squareView ? 'w-[90vw] max-w-[640px] aspect-square' : 'w-[92vw] max-w-[1100px] max-h-[80vh]'}>
              <div className="w-full h-full bg-black/40 rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className={squareView ? 'w-full h-full object-cover' : 'max-w-full max-h-full object-contain'}
                />
              </div>
            </div>

           
            {showMeta && (
              <div className="mt-4 bg-black/60 rounded-lg p-4 text-textLight">
                <h3 className="text-lg font-heading font-semibold">{selectedImage.title || 'Untitled'}</h3>
                {selectedImage.description && (
                  <p className="text-sm font-body mt-1">{selectedImage.description}</p>
                )}
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