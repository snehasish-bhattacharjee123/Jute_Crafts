import React, { useEffect, useRef, useState } from "react";
import SEOHelmet from "./SEOHelmet";
import { Link } from "react-router-dom";
import Button from "./Button";

function ProductHeroSlider() {
  const slides = [
    {
      src: "/images/main.jpg",
      alt: "Assorted natural fibre rugs hanging and styled",
    },
    { src: "/images/carpet.jpg", alt: "Natural jute carpet close-up texture" },
    {
      src: "/images/Elma Geometric Jute Rug _ Natural.jpg",
      alt: "Geometric jute rug in living space",
    },
  ];
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      4000
    );
    return () => clearInterval(timerRef.current);
  }, [paused, slides.length]);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section
      className="relative h-[45vh] sm:h-[50vh] lg:h-[60vh] min-h-[400px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-secondary/20 to-secondary/60" />
      {/* Headline + CTA + USPs */}
      <div className="absolute inset-0 flex items-center pt-12 sm:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-xl sm:text-4xl lg:text-6xl font-heading font-semibold text-white leading-tight break-words">
              Material Mastery — From Farm to Floor
            </h1>
            <p className="mt-2 sm:mt-4 text-white/90 font-body max-w-xl text-xs sm:text-base leading-relaxed">
              Passion for innovative natural fibre products handed down 4
              generations. Jute, banana, sea grass and more on soil. Cotton for
              softness, wool for volume, and linen for finesse.
            </p>
            <div className="mt-3 sm:mt-5 flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Link to="/gallery">
                <Button variant="gold" className="w-full sm:w-auto text-sm sm:text-base">Visit Our Gallery</Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="secondary"
                  className="w-full sm:w-auto text-sm sm:text-base !border-white !text-white hover:!bg-white hover:!text-secondary"
                >
                  Contact
                </Button>
              </Link>
            </div>
            {/* USP badges */}
            <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2 text-[10px] sm:text-sm text-white/90">
              <span className="inline-flex items-center gap-1.5 px-2 sm:px-3 py-1 rounded-full bg-black/30 ring-1 ring-white/20">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2l3 7h7l-5.5 4 2.5 7-7-4.5L5 20l2.5-7L2 9h7z" />
                </svg>
                Handmade
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 sm:px-3 py-1 rounded-full bg-black/30 ring-1 ring-white/20">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 22s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z" />
                </svg>
                Eco-friendly
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 sm:px-3 py-1 rounded-full bg-black/30 ring-1 ring-white/20">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
                Durable
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 sm:px-3 py-1 rounded-full bg-black/30 ring-1 ring-white/20">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
                Custom Sizes
              </span>
            </div>
          </div>
        </div>
      </div>

      <button
        aria-label="Previous"
        onClick={prev}
        className="hidden sm:block absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        aria-label="Next"
        onClick={next}
        className="hidden sm:block absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
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
      anchor?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
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
      el?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    } catch {}
    // If you locked background scroll in openModal, also revert it here:
    // try { document.body.style.overflow = ''; } catch {}
  };

  useEffect(() => {
    if (!selectedImage) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedImage]);

  const handleShare = async () => {
    if (!selectedImage) return;
    const url = window.location.origin + selectedImage.src;
    try {
      if (navigator.share) {
        await navigator.share({
          title: selectedImage.title || "Product Image",
          url,
        });
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
    // Bengal Folk Craft — heritage jute/sisal craftsmanship
    bengal: [
      "/images/Jute Boucle Rug.jpg",
      "/images/Elma Geometric Jute Rug _ Natural.jpg",
      "/images/Naturals Basket.jpg",
    ],
    // Coastal Wave — indoor/outdoor, coastal tones and practical textures
    coastal: [
      "/images/Eco-Friendly DIY Natural Fiber Rugs for Home.jpg",
      "/images/Summer Novelty Coir Doormat _ The Company Store.jpg",
      "/images/Rugs to complete a room_ #serenaandlily.jpg",
    ],
    // Banana Bloom — banana fibre narratives (using natural fibre placeholders)
    banana: [
      "/images/carpet.jpg",
      "/images/download (6).jpg",
      "/images/download (7).jpg",
    ],
    // EarthBound — earthy wool and jute blends
    earthbound: [
      "/images/Hart in Terracotta.jpg",
      "/images/download.jpg",
      "/images/White Natural Jute Rug, Hand Braided Rug, Jute Rug, Warm Rug, Custom Area Rug, Yoga Mat Indoor Rug.jpg",
    ],
    // Spectrum Weaves — jacquard/CAD driven designs
    spectrum: [
      "/images/flat-lay-monochromatic-assortment-textiles.jpg",
      "/images/download (2).jpg",
      "/images/download (5).jpg",
    ],
  };

  const TextBlock = ({
    title,
    description,
    bullets = [],
    tagline,
    items = [],
  }) => (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-3">
        <div className="hidden sm:block h-px bg-gray-300 flex-1 mr-3" />
        <h3 className="text-lg sm:text-xl font-heading tracking-wide text-textDark font-semibold">
          {title}
        </h3>
        <div className="hidden sm:block h-px bg-gray-300 flex-1 ml-3" />
      </div>
      {tagline && (
        <p className="text-sm font-semibold text-secondary/90 mb-2 font-body">
          {tagline}
        </p>
      )}
      {bullets && bullets.length > 0 ? (
        <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-textDark/80 leading-relaxed font-body">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      ) : (
        <p className="text-sm sm:text-base text-textDark/80 leading-relaxed font-body">
          {description}
        </p>
      )}
      {items.length > 0 && (
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
          {items.map((src, i) => (
            <div
              key={i}
              onClick={(e) =>
                openModal(
                  { src, alt: `${title} ${i + 1}`, title },
                  e.currentTarget
                )
              }
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
      <SEOHelmet
        title="Rug Collections — Bengal Folk Craft, Coastal Wave, Banana Bloom | MKT Rugs"
        description="Explore handcrafted rug collections: Bengal Folk Craft, Coastal Wave, Banana Bloom, EarthBound, Spectrum Weaves."
        canonical="https://www.mktrugs.com/products"
      />
      <ProductHeroSlider />

      <section className="bg-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
          <div className="md:col-span-3">
            <h2 className="text-2xl sm:text-3xl font-heading text-textDark">
              <span className="font-semibold">Place of Origin Advantage</span> —
              Within 50km of our office
            </h2>
          </div>
          <div className="md:col-span-2 text-textDark/80 font-body leading-relaxed">
            Sourcing spans a 150km farm supply chain that breathes local air,
            tastes tannin-fed looms and regulates price shocks better than any
            consortium. Integrated global partnerships with rotating
            cross-trained units.
          </div>
        </div>
      </section>

      {/* Alternating image/text layout inspired by the reference */}
      <section className="py-6 sm:py-10">
        <div className="max-w-7xl mx-auto px-0 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
            {/* Row 1: Large image + Text — Bengal Folk Craft */}
            <div className="md:col-span-7">
              <img
                src={"/images/carpet.jpg"}
                alt="Hand-braided natural fibre texture"
                loading="lazy"
                className="w-full h-60 sm:h-72 lg:h-96 object-cover rounded cursor-zoom-in"
                onClick={(e) =>
                  openModal(
                    {
                      src: "/images/carpet.jpg",
                      alt: "Hand-braided natural fibre texture",
                      title: "Bengal Folk Craft",
                    },
                    e.currentTarget
                  )
                }
              />
            </div>
            <div className="md:col-span-5">
              <TextBlock
                title="Bengal Folk Craft"
                tagline="Heritage braids from the looms of Bengal"
                bullets={[
                  "Hand-braided jute and sisal, rooted in Bengal traditions",
                  "Earth-warm palettes and robust textures for daily living",
                  "From cottage looms to export-grade finishing",
                  "Sourced and crafted within our eastern India cluster",
                ]}
                items={thumbs.bengal}
              />
            </div>

            {/* Row 2: Text + Large image — Coastal Wave Collection */}
            <div className="md:col-span-5 order-2 md:order-none">
              <TextBlock
                title="Coastal Wave Collection"
                tagline="Sea-breeze hues, indoor–outdoor ease"
                bullets={[
                  "All-weather weaves in coastal neutrals and ocean blues",
                  "Easy-care textures designed for patios and shore homes",
                  "PET and coir options for durability and quick dry-down",
                  "Ripple patterns inspired by tidal lines and dune grasses",
                ]}
                items={thumbs.coastal}
              />
            </div>
            <div className="md:col-span-7 order-1 md:order-none">
              <img
                src={"/images/Eco-Friendly DIY Natural Fiber Rugs for Home.jpg"}
                alt="Coastal-ready indoor/outdoor weave in patio setting"
                loading="lazy"
                className="w-full h-60 sm:h-72 lg:h-96 object-cover rounded cursor-zoom-in"
                onClick={(e) =>
                  openModal(
                    {
                      src: "/images/Eco-Friendly DIY Natural Fiber Rugs for Home.jpg",
                      alt: "Coastal-ready indoor/outdoor weave in patio setting",
                      title: "Coastal Wave Collection",
                    },
                    e.currentTarget
                  )
                }
              />
            </div>

            <div className="md:col-span-7">
              <img
                src={"/images/Elma Geometric Jute Rug _ Natural.jpg"}
                alt="Banana-blend flatweave in warm interior"
                loading="lazy"
                className="w-full h-60 sm:h-72 lg:h-96 object-cover rounded cursor-zoom-in"
                onClick={(e) =>
                  openModal(
                    {
                      src: "/images/Elma Geometric Jute Rug _ Natural.jpg",
                      alt: "Banana-blend flatweave in warm interior",
                      title: "Banana Bloom Collection",
                    },
                    e.currentTarget
                  )
                }
              />
            </div>
            <div className="md:col-span-5">
              <TextBlock
                title="Banana Bloom Collection"
                tagline="Banana fibre stories, spun with sunshine"
                bullets={[
                  "Banana fibre yarns blended for supple strength",
                  "Naturally variegated tones with organic sheen",
                  "Plant-forward textures with low VOC finishing",
                  "Sustainably sourced within our 50–150 km belt",
                ]}
                items={thumbs.banana}
              />
            </div>

            <div className="md:col-span-5 order-2 md:order-none">
              <TextBlock
                title="EarthBound Collection"
                tagline="Grounded blends of wool and jute"
                bullets={[
                  "Cushy wool piles anchored by hardy jute warps",
                  "Earth-tone palettes for calm, restorative rooms",
                  "Thermal comfort with everyday durability",
                  "Hand-finished edges for heirloom longevity",
                ]}
                items={thumbs.earthbound}
              />
            </div>
            <div className="md:col-span-7 order-1 md:order-none">
              <img
                src={"/images/Hart in Terracotta.jpg"}
                alt="Wool–jute blend rug adding warmth to living area"
                loading="lazy"
                className="w-full h-60 sm:h-72 lg:h-96 object-cover rounded cursor-zoom-in"
                onClick={(e) =>
                  openModal(
                    {
                      src: "/images/Hart in Terracotta.jpg",
                      alt: "Wool–jute blend rug adding warmth to living area",
                      title: "EarthBound Collection",
                    },
                    e.currentTarget
                  )
                }
              />
            </div>

            <div className="md:col-span-7">
              <img
                src={"/images/flat-lay-monochromatic-assortment-textiles.jpg"}
                alt="Jacquard patterns in monochrome study"
                loading="lazy"
                className="w-full h-60 sm:h-72 lg:h-96 object-cover rounded cursor-zoom-in"
                onClick={(e) =>
                  openModal(
                    {
                      src: "/images/flat-lay-monochromatic-assortment-textiles.jpg",
                      alt: "Jacquard patterns in monochrome study",
                      title: "Spectrum Weaves Collection",
                    },
                    e.currentTarget
                  )
                }
              />
            </div>
            <div className="md:col-span-5">
              <TextBlock
                title="Spectrum Weaves Collection"
                tagline="CAD-driven motifs, precision-woven"
                bullets={[
                  "Digitally guided looms render crisp geometric fields",
                  "Tone-on-tone and contrast palettes for modern spaces",
                  "Premium yarn selections for definition and drape",
                  "Studio-to-loom pipeline for rapid sampling",
                ]}
                items={thumbs.spectrum}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Image Modal (similar to Gallery) */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm md:backdrop-blur flex items-center justify-center z-[9999] p-4"
          onClick={closeModal}
        >
          <div
            className="relative"
            role="dialog"
            aria-modal="true"
            aria-label="Product image viewer"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title centered at top like reference */}
            <div
              className="fixed left-1/2 -translate-x-1/2 z-[10000]"
              style={{ top: "calc(env(safe-area-inset-top) + 10px)" }}
            >
              <div className="px-3 py-1 rounded bg-black/60 text-white text-[13px] md:text-sm font-semibold shadow-sm">
                {selectedImage.title || "Untitled"}
              </div>
            </div>

            {/* Controls at top-right (icons updated to match requested set) */}
            <div
              className="fixed z-[10000] flex items-center gap-2 md:gap-2.5"
              style={{
                top: "calc(env(safe-area-inset-top) + 10px)",
                right: "calc(env(safe-area-inset-right) + 12px)",
              }}
            >
              {/* Fullscreen corners icon for view toggle */}
              <button
                type="button"
                tabIndex={0}
                onClick={() => setSquareView((v) => !v)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSquareView((v) => !v);
                  }
                }}
                aria-label="Zoom"
                title={
                  squareView ? "Show full (contain)" : "Show square (cover)"
                }
                className="inline-flex items-center justify-center h-11 w-11 p-2.5 rounded-full text-white bg-black/40 hover:bg-black/50 ring-1 ring-white/20 shadow-[0_1px_2px_rgba(0,0,0,0.5)] focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8V5a1 1 0 011-1h3M4 16v3a1 1 0 001 1h3M20 8V5a1 1 0 00-1-1h-3M20 16v3a1 1 0 01-1 1h-3"
                  />
                </svg>
              </button>

              {/* Magnify with plus icon for Details toggle */}
              <button
                type="button"
                tabIndex={0}
                onClick={() => setShowMeta((v) => !v)}
                aria-label="Details"
                title={showMeta ? "Hide details" : "Show details"}
                className="inline-flex items-center justify-center h-11 w-11 p-2.5 rounded-full text-white bg-black/40 hover:bg-black/50 ring-1 ring-white/20 shadow-[0_1px_2px_rgba(0,0,0,0.5)] focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="6"></circle>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35"
                  ></path>
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
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7M16 6l-4-4m0 0L8 6m4-4v16"
                  />
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
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div
              className={
                squareView
                  ? "w-[90vw] max-w-[640px] aspect-square"
                  : "w-[92vw] max-w-[1100px] max-h-[80vh]"
              }
            >
              <div className="w-full h-full bg-black/40 rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className={
                    squareView
                      ? "w-full h-full object-cover cursor-zoom-out"
                      : "max-w-full max-h-full object-contain cursor-zoom-in"
                  }
                  onDoubleClick={() => setSquareView((v) => !v)}
                  onTouchStart={() => {
                    const now = Date.now();
                    if (now - lastTapRef.current < 300) {
                      setSquareView((v) => !v);
                    }
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
            <h2 className="text-2xl sm:text-3xl font-heading text-textDark">
              Why Exporters & Importers Choose MKT Rugs
            </h2>
            <div className="mx-auto mt-3 w-24 h-1 bg-gold" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Shortest Lead Time in the Category — Integrated production means 35% faster FOB dispatch.",
                name: "Export Partner",
              },
              {
                quote:
                  "Multiple Labs in Demand — Co-create SKUs with in-house CAD studio; MOQ as low as 50 sqm.",
                name: "Design Studio",
              },
              {
                quote:
                  "Transparent Costing — Line item quotes shield from currency swings. SEDEX-SMETA certified.",
                name: "Import House",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-bgGrey rounded-lg p-6 border border-gray-100 shadow-sm"
              >
                <svg
                  className="w-6 h-6 text-gold mb-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7 7h4v10H5V9a2 2 0 012-2zm10 0h4v10h-6V9a2 2 0 012-2z" />
                </svg>
                <p className="text-textDark/90 font-body">{t.quote}</p>
                <div className="mt-3 text-sm text-secondary font-semibold">
                  {t.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="md:hidden fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        <a href="/contact" className="shadow-lg">
          <Button variant="gold" className="rounded-full px-4 py-3">
            Contact
          </Button>
        </a>
        <a href="/enquiry" className="shadow-lg">
          <Button
            variant="secondary"
            className="rounded-full px-4 py-3 !border-white !text-white hover:!bg-white hover:!text-secondary"
          >
            Get a Quote
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Product;


