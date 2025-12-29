import React, { useEffect, useRef, useState } from "react";
import SEOHelmet from "./SEOHelmet";
import { Link } from "react-router-dom";
import Button from "./Button";
import { ImagePlaceholder } from "./LoadingSpinner";

function ProductHeroSlider() {
  const slides = [
    {
      src: "/images/product_b1.jpg",
      alt: "Assorted natural fibre rugs hanging and styled",
    },
    { src: "/images/MKT Earth bound collection (3).jpg", alt: "Natural jute carpet close-up texture" },
    {
      src: "/images/Costal wave collection (1).jpg",
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
      className="relative h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] min-h-[600px] max-h-[900px] pt-[calc(var(--header-h,80px))]"
      style={{ marginTop: "calc(var(--header-h, 0px) * -1)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <img
        key={slides[index]?.src}
        src={slides[index]?.src}
        alt={slides[index]?.alt}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-100"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        width="1920"
        height="1080"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-secondary/20 to-secondary/60" />
      {/* Headline + CTA + USPs */}
      <div className="absolute inset-0 flex items-center pt-12 sm:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-heading font-semibold text-white leading-tight break-words">
              <span className="block text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                Material Mastery
              </span>
              <span className="block sm:hidden text-xs text-gold/90 mt-0.5">
                From Farm to Floor
              </span>
              <span className="hidden sm:block text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gold/90 mt-0.5">
                From Farm to Floor
              </span>
            </h1>
            <div className="mt-2 sm:mt-3 md:mt-4 flex flex-row gap-1.5 sm:gap-2 md:gap-3 justify-start">
              <Link to="/gallery">
                <Button
                  variant="gold"
                  className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-xs sm:text-sm md:text-base font-normal min-h-[26px] sm:min-h-[32px] md:min-h-[40px] focus-enhanced touch-target"
                >
                  <svg
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="hidden md:inline">Gallery</span>
                  <span className="md:hidden">View</span>
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="secondary"
                  className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-xs sm:text-sm md:text-base font-normal min-h-[26px] sm:min-h-[32px] md:min-h-[40px] !border-white !text-white hover:!bg-white hover:!text-secondary focus-enhanced touch-target"
                >
                  <svg
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="hidden md:inline">Contact</span>
                  <span className="md:hidden">Call</span>
                </Button>
              </Link>
            </div>
            {/* USP badges - Fully responsive */}
            <div className="mt-3 sm:mt-4 md:mt-6 flex flex-wrap gap-1 sm:gap-1.5 md:gap-2 text-xs sm:text-sm text-white/90">
              <span className="inline-flex items-center gap-1 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-md bg-black/30 ring-1 ring-white/20 backdrop-blur-sm">
                <svg
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2l3 7h7l-5.5 4 2.5 7-7-4.5L5 20l2.5-7L2 9h7z" />
                </svg>
                <span className="text-xs sm:text-sm">Handmade</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-md bg-black/30 ring-1 ring-white/20">
                <svg
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 22s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z" />
                </svg>
                <span className="text-xs sm:text-sm">Eco</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-md bg-black/30 ring-1 ring-white/20">
                <svg
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
                <span className="text-xs sm:text-sm">Durable</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-md bg-black/30 ring-1 ring-white/20">
                <svg
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
                <span className="text-xs sm:text-sm">Custom</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced round navigation arrows for mobile */}
      <button
        aria-label="Previous"
        onClick={prev}
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 
                   w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 
                   bg-white/80 backdrop-blur-sm border border-white/40 rounded-full 
                   flex items-center justify-center text-secondary 
                   hover:bg-white hover:scale-110 active:scale-95
                   transition-all duration-300 shadow-lg hover:shadow-xl
                   group focus-enhanced z-20"
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transform group-hover:-translate-x-0.5 transition-transform"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        aria-label="Next"
        onClick={next}
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 
                   w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 
                   bg-white/80 backdrop-blur-sm border border-white/40 rounded-full 
                   flex items-center justify-center text-secondary 
                   hover:bg-white hover:scale-110 active:scale-95
                   transition-all duration-300 shadow-lg hover:shadow-xl
                   group focus-enhanced z-20"
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transform group-hover:translate-x-0.5 transition-transform"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
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

  // Accessibility: Respect user's motion preferences
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = mediaQuery.matches;

    const handleChange = (e) => {
      prefersReducedMotion.current = e.matches;
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

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
      "/images/MOCKUP_4 (4) (1).jpg",
      "/images/MOCKUP_4 (3).jpg",
      "/images/MOCKUP_4.jpg",
    ],
    // Coastal Wave — indoor/outdoor, coastal tones and practical textures
    coastal: [
      "/images/Costal wave collection (2).jpg",
      "/images/Costal wave collection (3).jpg",
      "/images/Costal wave collection (1).jpg",
    ],
    // Banana Bloom — banana fibre narratives (using natural fibre placeholders)
    banana: [
      "/images/carpet.jpg",
      "/images/download (6).jpg",
      "/images/download (7).jpg",
    ],
    // EarthBound — earthy wool and jute blends
    earthbound: [
      "/images/MKT Earth bound collection (1).jpg",
      "/images/MKT Earth bound collection (6).jpg",
      "/images/MKT Earth bound collection (4).jpg",
    ],
    // Spectrum Weaves — jacquard/CAD driven designs
    spectrum: [
      "/images/flat-lay-monochromatic-assortment-textiles.jpg",
      "/images/download (2).jpg",
      "/images/download (5).jpg",
    ],
    // Majestic Tufts — luxurious hand-tufted wool rugs
    majestic: [
      "/images/Image_3 (1).jpg",
      "/images/Image_2 (1).jpg",
      "/images/Image_4 (1).jpg",
    ],
  };

  const TextBlock = ({
    title,
    description,
    bullets = [],
    tagline,
    items = [],
  }) => (
    <div className="bg-white p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
        <div className="hidden md:block h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1 mr-4" />
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading tracking-wide text-textDark font-bold text-center md:text-left">
          {title}
        </h3>
        <div className="hidden md:block h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1 ml-4" />
      </div>
      {tagline && (
        <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-secondary/90 mb-2 sm:mb-3 md:mb-4 font-body italic">
          {tagline}
        </p>
      )}
      {bullets && bullets.length > 0 ? (
        <ul className="space-y-1.5 sm:space-y-2 md:space-y-3 text-xs sm:text-sm md:text-base lg:text-lg text-textDark/80 leading-relaxed font-body mb-3 sm:mb-4 md:mb-6">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 sm:gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold rounded-full mt-1.5 sm:mt-2"></span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-textDark/80 leading-relaxed font-body mb-3 sm:mb-4 md:mb-6">
          {description}
        </p>
      )}
      {items.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
          {items.map((src, i) => (
            <div
              key={i}
              onClick={(e) =>
                openModal(
                  { src, alt: `${title} ${i + 1}`, title },
                  e.currentTarget
                )
              }
              className="group relative touch-target overflow-hidden rounded-lg h-16 sm:h-20 md:h-24 lg:h-28 cursor-zoom-in shadow-sm hover:shadow-md transition-all duration-300 focus-enhanced"
              role="button"
              tabIndex={0}
              aria-label={`View ${title} image ${i + 1}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openModal(
                    { src, alt: `${title} ${i + 1}`, title },
                    e.currentTarget
                  );
                }
              }}
            >
              <img
                src={src}
                alt={`${title} ${i + 1} - MKT Rugs handcrafted collection`}
                className="responsive-img w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110 will-change-transform"
                loading="lazy"
                decoding="async"
                width="600"
                height="600"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="6"></circle>
                  <path d="M21 21l-4.35-4.35"></path>
                  <path strokeLinecap="round" d="M11 8v6M8 11h6"></path>
                </svg>
              </div>
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
      {/* Hero slider with header compensation */}
      <div style={{ marginTop: "calc(var(--header-h, 0px) * -1)" }}>
        <ProductHeroSlider />
      </div>

      <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8 items-start">
          <div className="md:col-span-3">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading text-textDark mb-3 sm:mb-4 md:mb-0">
              <span className="font-semibold">Place of Origin Advantage</span>
              <span className="block sm:inline">
                {" "}
                — Within 150km of our Manufacturing Unit
              </span>
            </h2>
          </div>
          <div className="md:col-span-2 text-textDark/80 font-body leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl">
            The most exquisite quality, straight from the source. Our
            hyper-local supply chain is our promise of purity and lasting
            beauty.
          </div>
        </div>
      </section>

      {/* Alternating image/text layout - Fully responsive */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {/* Row 1: Large image + Text — Bengal Folk Craft */}
            <div className="md:col-span-7">
              <img
                src={"/images/Bengal Folk (1).png"}
                alt="Hand-braided natural fibre texture - Bengal Folk Craft collection by MKT Rugs"
                loading="lazy"
                decoding="async"
                width="1920"
                height="1080"
                className="responsive-img w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] object-cover rounded-lg cursor-zoom-in shadow-lg hover:shadow-xl transition-all duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 60vw"
                onClick={(e) =>
                  openModal(
                    {
                      src: "/images/Bengal Folk (1).png",
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
                  "Hand-braided jute yarn which is rooted in Bengal traditions",
                  "Earth-warm palettes and robust textures for daily living",
                  "From cottage looms to export-grade finishing",
                  "Fully hand stiched crafted by Bengal Artisans",
                ]}
                items={thumbs.bengal}
              />
            </div>

            {/* Row 2: Text + Large image — Coastal Wave Collection */}
            <div className="md:col-span-5 order-2 md:order-none">
              <TextBlock
                title="Coastal Wave Collection"
                tagline="Fiber that come from Costal Area"
                bullets={[
                  "Costal fiber like Sisal, Seagrass, Banana Fiber",
                  "Options for durability and quick dry-down",
                  "Ripple patterns inspired by tidal lines and grasses",
                ]}
                items={thumbs.coastal}
              />
            </div>
            <div className="md:col-span-7 order-1 md:order-none">
              <img
                src={"/images/Costal wave collection.jpg"}
                alt="Coastal-ready indoor/outdoor weave in patio setting"
                loading="lazy"
                decoding="async"
                width="1920"
                height="1080"
                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] object-cover rounded-lg cursor-zoom-in shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={(e) =>
                  openModal(
                    {
                      src: "/images/Costal wave collection.jpg",
                      alt: "Coastal-ready indoor/outdoor weave in patio setting",
                      title: "Coastal Wave Collection",
                    },
                    e.currentTarget
                  )
                }
              />
            </div>

            {/* <div className="md:col-span-7">
              <img
                src={"/images/Elma Geometric Jute Rug _ Natural.jpg"}
                alt="Banana-blend flatweave in warm interior"
                loading="lazy"
                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] object-cover rounded-lg cursor-zoom-in shadow-lg hover:shadow-xl transition-all duration-300"
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
            </div> */}
            {/* <div className="md:col-span-5">
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
            </div> */}

            <div className="md:col-span-5 order-2 md:order-none">
              <TextBlock
                title="EarthBound Collection"
                tagline="Rugs that Braided by Hand, Stitched with Machines"
                bullets={[
                  "Blending modern precision with tradition",
                  "Earth-tone palettes for calm, restorative rooms",
                  "Thermal comfort light weight and with everyday durability",
                  "Artisanal Jute Rugs braided by hand, Stitched with Machines",
                ]}
                items={thumbs.earthbound}
              />
            </div>
            <div className="md:col-span-7 order-1 md:order-none">
              <img
                src={"/images/MKT Earth bound collection (3).jpg"}
                alt="Wool–jute blend rug adding warmth to living area"
                loading="lazy"
                decoding="async"
                width="1920"
                height="1080"
                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] object-cover rounded-lg cursor-zoom-in shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={(e) =>
                  openModal(
                    {
                      src: "/images/MKT Earth bound collection (3).jpg",
                      alt: "Wool–jute blend rug adding warmth to living area",
                      title: "EarthBound Collection",
                    },
                    e.currentTarget
                  )
                }
              />
            </div>

            {/* <div className="md:col-span-7">
              <img
                src={"/images/flat-lay-monochromatic-assortment-textiles.jpg"}
                alt="Jacquard patterns in monochrome study"
                loading="lazy"
                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] object-cover rounded-lg cursor-zoom-in shadow-lg hover:shadow-xl transition-all duration-300"
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
                  "Premium yarn selections for definition and drape",
                  "Vibrant play of colours hand woven into rugs",
                  "Spectrum of Colours that brighten every space",
                ]}
                items={thumbs.spectrum}
              />
            </div> */}

            {/* Row 6: Text + Large image — Majestic Tufts Collection */}
            <div className="md:col-span-5 order-2 md:order-none">
              <TextBlock
                title="Majestic Tufts"
                tagline="Luxurious hand-tufted wool rugs"
                bullets={[
                  "Crafted for Comfort, Warmth and Grandeur",
                  "Premium hand-tufted wool construction",
                  "Exquisite textures that elevate any space",
                  "Timeless elegance meets contemporary design",
                ]}
                items={thumbs.majestic}
              />
            </div>
            <div className="md:col-span-7 order-1 md:order-none">
              <img
                src={"/images/Image_5 (1).jpg"}
                alt="Luxurious hand-tufted wool rug in elegant setting"
                loading="lazy"
                decoding="async"
                width="1920"
                height="1080"
                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] object-cover rounded-lg cursor-zoom-in shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={(e) =>
                  openModal(
                    {
                      src: "/images/Image_5 (1).jpg",
                      alt: "Luxurious hand-tufted wool rug in elegant setting",
                      title: "Majestic Tufts",
                    },
                    e.currentTarget
                  )
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Image Modal - Enhanced responsiveness */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm md:backdrop-blur flex items-center justify-center z-[9999] p-2 sm:p-4"
          onClick={closeModal}
        >
          <div
            className="relative"
            role="dialog"
            aria-modal="true"
            aria-label="Product image viewer"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title centered at top - responsive */}
            <div
              className="fixed left-1/2 -translate-x-1/2 z-[10000] px-2 sm:px-0"
              style={{ top: "calc(env(safe-area-inset-top) + 8px)" }}
            >
              <div className="px-2 py-0.5 sm:px-3 sm:py-1 rounded bg-black/60 text-white text-xs sm:text-sm md:text-base font-semibold shadow-sm">
                {selectedImage.title || "Untitled"}
              </div>
            </div>

            {/* Controls at top-right - responsive sizing */}
            <div
              className="fixed z-[10000] flex items-center gap-1.5 sm:gap-2 md:gap-2.5 pr-2 sm:pr-0"
              style={{
                top: "calc(env(safe-area-inset-top) + 8px)",
                right: "calc(env(safe-area-inset-right) + 8px)",
              }}
            >
              {/* Fullscreen corners icon for view toggle - responsive */}
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
                className="inline-flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 p-2 sm:p-2.5 rounded-full text-white bg-black/40 hover:bg-black/50 ring-1 ring-white/20 shadow-[0_1px_2px_rgba(0,0,0,0.5)] focus:outline-none focus:ring-2 focus:ring-white/40 touch-target"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
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

              {/* Magnify with plus icon for Details toggle - responsive */}
              <button
                type="button"
                tabIndex={0}
                onClick={() => setShowMeta((v) => !v)}
                aria-label="Details"
                title={showMeta ? "Hide details" : "Show details"}
                className="inline-flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 p-2 sm:p-2.5 rounded-full text-white bg-black/40 hover:bg-black/50 ring-1 ring-white/20 shadow-[0_1px_2px_rgba(0,0,0,0.5)] focus:outline-none focus:ring-2 focus:ring-white/40 touch-target"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
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

              {/* Share arrow - responsive */}
              <button
                type="button"
                tabIndex={0}
                onClick={handleShare}
                aria-label="Share"
                title="Share"
                className="inline-flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 p-2 sm:p-2.5 rounded-full text-white bg-black/40 hover:bg-black/50 ring-1 ring-white/20 shadow-[0_1px_2px_rgba(0,0,0,0.5)] focus:outline-none focus:ring-2 focus:ring-white/40 touch-target"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
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

              {/* Close - responsive with enhanced touch target */}
              <button
                type="button"
                tabIndex={0}
                onClick={closeModal}
                aria-label="Close"
                title="Close"
                className="inline-flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 p-2 sm:p-2.5 rounded-full text-white bg-primary/90 hover:bg-primary ring-1 ring-white/20 shadow focus:outline-none focus:ring-2 focus:ring-white/40 touch-target"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
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
                  ? "w-[88vw] sm:w-[90vw] max-w-[480px] sm:max-w-[640px] aspect-square"
                  : "w-[94vw] sm:w-[92vw] max-w-[800px] sm:max-w-[1100px] max-h-[75vh] sm:max-h-[80vh]"
              }
            >
              <div className="w-full h-full bg-black/40 rounded-md sm:rounded-lg overflow-hidden flex items-center justify-center">
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
                  loading="eager"
                  decoding="async"
                  width="1920"
                  height="1080"
                />
              </div>
            </div>

            {showMeta && (
              <div className="mt-3 sm:mt-4 bg-black/50 rounded-md sm:rounded-lg p-2.5 sm:p-3 text-textLight mx-2 sm:mx-0">
                {selectedImage.alt && (
                  <p className="text-xs sm:text-sm md:text-base font-body">
                    {selectedImage.alt}
                  </p>
                )}
              </div>
            )}

            {shareCopied && (
              <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-[10000] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-black/70 text-white text-xs sm:text-sm shadow">
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
          <Link to="/enquiry"><Button variant="gold" className="w-full sm:w-auto text-sm sm:text-base px-4 py-2.5 sm:px-6 sm:py-3">Request Quote</Button></Link>
          <Link to="/contact"><Button variant="secondary" className="w-full sm:w-auto text-sm sm:text-base px-4 py-2.5 sm:px-6 sm:py-3 !border-white !text-white hover:!bg-white hover:!text-secondary">Contact Us</Button></Link>
        </div>
      </div>
    </section> */}

      {/* Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gold/10 rounded-full mb-3 sm:mb-4">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-gold"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2l3 7h7l-5.5 4 2.5 7-7-4.5L5 20l2.5-7L2 9h7z" />
              </svg>
              <span className="text-xs sm:text-sm md:text-base font-semibold text-gold tracking-wide uppercase">
                Trusted Worldwide
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-textDark mb-3 sm:mb-4">
              Why Exporters & Importers Choose MKT Rugs
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-textDark/70 max-w-3xl mx-auto leading-relaxed font-body">
              Discover why global partners trust us for their natural fiber
              needs
            </p>
            <div className="mx-auto mt-4 sm:mt-6 w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-gold via-primary to-secondary rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
                  "Transparent Costing — Line item quotes shield from currency swings. ISO-9001,CEPC certified.",
                name: "Import House",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-bgGrey to-white rounded-xl p-4 sm:p-6 md:p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-gold"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M7 7h4v10H5V9a2 2 0 012-2zm10 0h4v10h-6V9a2 2 0 012-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs sm:text-sm md:text-base font-semibold text-secondary/90 mb-1 sm:mb-2">
                      {t.name}
                    </div>
                    <div className="flex text-gold text-xs sm:text-sm mb-1 sm:mb-2">
                      {[...Array(5)].map((_, starIndex) => (
                        <svg
                          key={starIndex}
                          className="w-3 h-3 sm:w-4 sm:h-4 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3 7h7l-5.5 4 2.5 7-7-4.5L5 20l2.5-7L2 9h7z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-textDark/90 font-body text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed italic">
                  "{t.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Mobile FAB - Better responsiveness */}
      <div className="md:hidden fixed bottom-3 sm:bottom-4 right-3 sm:right-4 z-50 flex flex-col gap-1.5 sm:gap-2">
        <a
          href="/contact"
          className="group shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Contact us"
        >
          <Button
            variant="gold"
            className="rounded-full px-2.5 py-2 sm:px-3 sm:py-2.5 text-xs sm:text-sm font-semibold group-hover:scale-105 transition-transform duration-300 touch-target"
          >
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 sm:mr-1.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
            <span className="hidden sm:inline">Contact</span>
            <span className="sm:hidden">Call</span>
          </Button>
        </a>
        <a
          href="/enquiry"
          className="group shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Get a quote"
        >
          <Button
            variant="secondary"
            className="rounded-full px-2.5 py-2 sm:px-3 sm:py-2.5 text-xs sm:text-sm font-semibold !border-2 !border-primary !text-primary hover:!bg-primary hover:!text-white group-hover:scale-105 transition-all duration-300 touch-target"
          >
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 sm:mr-1.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span className="hidden sm:inline">Quote</span>
            <span className="sm:hidden">Get</span>
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Product;
