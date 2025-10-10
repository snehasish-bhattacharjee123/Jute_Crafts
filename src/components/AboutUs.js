import React, { useState, useEffect, useRef, useCallback } from "react";
import SEOHelmet from "./SEOHelmet";
import Button from "./Button";

// Smooth scroll utility with enhanced options
const smoothScrollTo = (element, options = {}) => {
  if (element && element.scrollIntoView) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
      ...options,
    });
  }
};

// Enhanced Certificates Grid with direct PDF opening (no modal)
function CertificatesGrid() {
  const [visibleCerts, setVisibleCerts] = useState(new Set());
  const observerRef = useRef(null);
  const certRefs = useRef([]);
  
  const certs = [
    {
      src: "/images/HOME_1.jpg",
      alt: "ISO 9001:2015",
      desc: "Quality Management System (ISO 9001:2015) certified units.",
      pdf: "Jute_Crafts/public/images/MKT RUGS ISO 9001-2015.pdf",
    },
    {
      src: "/images/HOME_2.jpg",
      alt: "CEPC Logo",
      desc: "Recognized by the Carpet Export Promotion Council (CEPC).",
      pdf: "/images/MKT RUGS CEPC Membership.pdf",
    },
  ];

  // Enhanced intersection observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: [0.1, 0.3, 0.5],
      rootMargin: "-5% 0px -5% 0px",
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.dataset.certIndex);
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          setVisibleCerts((prev) => new Set([...prev, index]));
        }
      });
    }, observerOptions);

    certRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.setAttribute('data-cert-index', index);
        observerRef.current.observe(ref);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Direct PDF opening function
  const openCertificate = useCallback((cert) => {
    if (cert.pdf) {
      window.open(cert.pdf, '_blank', 'noopener,noreferrer');
    }
  }, []);

  return (
    <div className="space-y-4">
      {/* Certificate Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {certs.map((cert, index) => {
          const isVisible = visibleCerts.has(index);
          const delay = `delay-${index * 100}`;
          
          return (
            <div
              key={index}
              ref={(el) => (certRefs.current[index] = el)}
              className={`group relative bg-white rounded-xl p-6 border-2 border-gold/20 shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden ${
                isVisible 
                  ? `opacity-100 translate-y-0 scale-100 ${delay}` 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              onClick={() => openCertificate(cert)}
              role="button"
              tabIndex={0}
              aria-label={`View ${cert.alt} certificate PDF`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openCertificate(cert);
                }
              }}
            >
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gold/5 group-hover:bg-gold/10 transition-all duration-300"></div>
              
              {/* Certificate image */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-4 p-3 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-all duration-300 group-hover:scale-110">
                  <img
                    src={cert.src}
                    alt={cert.alt}
                    className="w-full h-full object-contain filter drop-shadow-sm"
                    loading="lazy"
                  />
                </div>
                
                {/* Certificate name */}
                <h4 className="text-lg font-heading font-semibold text-textDark mb-2 group-hover:text-primary transition-colors duration-300">
                  {cert.alt}
                </h4>
                
                {/* Description */}
                <p className="text-sm text-textDark/70 font-body leading-relaxed mb-4">
                  {cert.desc}
                </p>
                
                {/* PDF button */}
                <div className="flex items-center gap-2 px-4 py-2 bg-gold text-white rounded-full text-sm font-semibold group-hover:bg-gold/90 transform group-hover:scale-105 transition-all duration-300">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14,2 14,8 20,8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10,9 9,9 8,9" />
                  </svg>
                  View Certificate
                </div>
              </div>
              
              {/* Hover indicator */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <svg className="w-5 h-5 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Info text */}
      <p className="text-center text-sm text-textDark/60 font-body italic">
        Click on any certificate to view the PDF document
      </p>
    </div>
  );
}

// Enhanced Hero Slider with smooth animations and better responsiveness
function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const intervalRef = useRef(null);
  
  const images = [
    "/images/B_5.jpg",
    "/images/B_6.jpg",
    "/images/B_2.jpg",
    "/images/B_1.jpg",
    "/images/B_7.jpg",
    // "/images/B_3.jpg",
    "/images/B_4.jpg",
  ];

  // Enhanced auto-play with pause/resume functionality
  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  }, [images.length]);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (isPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    return () => stopAutoPlay();
  }, [isPlaying, startAutoPlay, stopAutoPlay]);

  // Image preloading for better performance
  useEffect(() => {
    images.forEach((src, index) => {
      const img = new Image();
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, index]));
      };
      img.src = src;
    });
  }, [images]);

  // Enhanced smooth scroll to story section
  const scrollToStory = useCallback((e) => {
    e.preventDefault();
    const storyElement = document.getElementById('story');
    if (storyElement) {
      smoothScrollTo(storyElement, {
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  // Navigation functions
  const goToSlide = useCallback((index) => {
    setActiveIndex(index);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 3000); // Resume after 3 seconds
  }, []);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  return (
    <section 
      className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] min-h-[400px] max-h-[900px] overflow-hidden"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      aria-label="Hero carousel showcasing craftsmanship"
    >
      {/* Image slides */}
      {images.map((image, index) => {
        const isActive = index === activeIndex;
        const isLoaded = loadedImages.has(index);
        
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              isActive ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            style={{
              transform: isActive ? 'scale(1)' : 'scale(1.05)',
            }}
          >
            {/* Loading placeholder */}
            {!isLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-gold/30 border-t-gold rounded-full animate-spin"></div>
              </div>
            )}
            
            <img
              src={image}
              alt={`Craftsmanship showcase ${index + 1}`}
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              loading={index <= 1 ? 'eager' : 'lazy'} // Load first two images eagerly
            />
          </div>
        );
      })}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 rounded-full mb-6">
              <span className="text-sm font-semibold text-white tracking-wide uppercase">
                Heritage & Excellence
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white leading-tight">
              <span className="block">Witness the Craftsmanship</span>
              <span className="block text-gold">of Bengal</span>
            </h1>
          </div>
          
          {/* Subtitle */}
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/90 font-body leading-relaxed max-w-2xl mx-auto">
            From Farm to Floor — Authentic handcrafted rugs from West Bengal, 
            where tradition meets modern excellence.
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/products" 
              className="inline-flex items-center justify-center px-8 py-3 bg-gold text-white rounded-full font-semibold hover:bg-gold/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
              Explore Products
            </a>
            <a 
              href="/enquiry" 
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-white border-2 border-white rounded-full font-semibold hover:bg-white hover:text-secondary transform hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
              Get Quote
            </a>
          </div>
        </div>
      </div>

      {/* Navigation arrows (desktop only) */}
      <button
        onClick={prevSlide}
        className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
        aria-label="Previous image"
      >
        <svg className="w-6 h-6 transform group-hover:-translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15,18 9,12 15,6"></polyline>
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
        aria-label="Next image"
      >
        <svg className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9,18 15,12 9,6"></polyline>
        </svg>
      </button>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <button
          onClick={scrollToStory}
          className="group inline-flex flex-col items-center text-white/80 hover:text-white transition-all duration-300 transform hover:scale-105"
          aria-label="Scroll to our story section"
        >
          <span className="text-xs tracking-widest uppercase font-semibold mb-2 group-hover:text-gold transition-colors duration-300">Discover Our Story</span>
          <div className="flex flex-col items-center">
            <div className="w-px h-8 bg-white/50 mb-2"></div>
            <svg
              className="w-6 h-6 animate-bounce group-hover:text-gold transition-colors duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>
      </div>

      {/* Enhanced slide indicators */}
      <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 flex justify-center">
        <div className="flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full border border-white/20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative transition-all duration-300 ${
                index === activeIndex 
                  ? "w-8 h-3 bg-gold rounded-full" 
                  : "w-3 h-3 bg-white/40 rounded-full hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === activeIndex && (
                <div className="absolute inset-0 bg-gold rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </div>
      
      {/* Play/Pause indicator */}
      <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-2 bg-black/20 backdrop-blur-sm rounded-full border border-white/20">
        <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
          isPlaying ? 'bg-green-400 animate-pulse' : 'bg-yellow-400'
        }`}></div>
        <span className="text-xs text-white/80 font-medium">
          {isPlaying ? 'Auto' : 'Paused'}
        </span>
      </div>
    </section>
  );
}

// Enhanced AboutUs main component with optimized animations
function AboutUs() {
  // Enhanced intersection observer state
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const observerRef = useRef(null);
  const sectionRefs = useRef([]);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Enhanced intersection observer for smooth animations
  useEffect(() => {
    const observerOptions = {
      threshold: [0.1, 0.2, 0.3],
      rootMargin: '-5% 0px -10% 0px',
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.dataset.sectionId;
        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
          setVisibleSections((prev) => new Set([...prev, sectionId]));
        }
      });
    }, observerOptions);

    // Observe all sections
    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.setAttribute('data-section-id', `section-${index}`);
        observerRef.current.observe(ref);
      }
    });

    // Fallback for older reveal system
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => {
      if (observerRef.current && !el.dataset.sectionId) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Enhanced milestone data with better descriptions
  const milestones = [
    {
      year: "2008",
      title: "Foundation of Excellence",
      text: "Our journey began as Maa Kali Traders, a small yarn-making company with 10 Ton Monthly Capacity",
      img: "/images/download.jpg",
      side: "left",
      icon: "🌱",
      category: "Foundation"
    },
    {
      year: "2011",
      title: "Capacity Expansion",
      text: "Monthly Hand-made Yarn making Capacity increased beyond 50 Ton Monthly",
      img: "/images/download (3).jpg",
      side: "right",
      icon: "📈",
      category: "Growth"
    },
    {
      year: "2016",
      title: "Infrastructure Development",
      text: "We built 2 company godowns for increased storage capacity",
      img: "/images/Jute Boucle Rug.jpg",
      side: "left",
      icon: "🏭",
      category: "Infrastructure"
    },
    {
      year: "2017",
      title: "Industry Evolution",
      text: "We evolved into an integrated carpet manufacturing company",
      img: "/images/carpet.jpg",
      side: "right",
      icon: "🔄",
      category: "Transformation"
    },
    {
      year: "2019",
      title: "Technology Integration",
      text: "Installed 10,000 square metre capacity Stitching Machines for Bulk Production",
      img: "/images/flat-lay-monochromatic-assortment-textiles.jpg",
      side: "left",
      icon: "⚡",
      category: "Innovation"
    },
    {
      year: "2022",
      title: "Production Milestone",
      text: "Monthly Hand-made Yarn making capacity exceeded 100 Metric Tons",
      img: "/images/Naturals Basket.jpg",
      side: "right",
      icon: "🎯",
      category: "Achievement"
    },
    {
      year: "2024",
      title: "Global Reach",
      text: "MKT Rugs was established, specializing in B2B export operations from Gopalnagar, West Bengal, India",
      img: "/images/Beige Contemporary Polka Dotted Handwoven Rectangular Luxury Rugs - 250 cm x 350 cm.jpg",
      side: "left",
      icon: "🌍",
      category: "Global Expansion"
    },
  ];
  
  // Enhanced timeline state management
  const [visibleMilestones, setVisibleMilestones] = useState(new Set());
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);
  const timelineSectionRef = useRef(null);
  const milestoneRefs = useRef([]);

  // Enhanced milestone intersection observer
  useEffect(() => {
    const milestoneObserverOptions = {
      threshold: [0.1, 0.3, 0.5, 0.7],
      rootMargin: '-10% 0px -10% 0px',
    };

    const milestoneObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.dataset.milestoneIndex);
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          setVisibleMilestones((prev) => new Set([...prev, index]));
          if (entry.intersectionRatio >= 0.5) {
            setActiveTimelineIndex(index);
          }
        }
      });
    }, milestoneObserverOptions);

    milestoneRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.setAttribute('data-milestone-index', index);
        milestoneObserver.observe(ref);
      }
    });

    return () => milestoneObserver.disconnect();
  }, []);

  // Enhanced smooth progress calculation with requestAnimationFrame
  useEffect(() => {
    let ticking = false;
    
    const calculateProgress = () => {
      ticking = false;
      
      if (!timelineSectionRef.current) return;
      
      const section = timelineSectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      const viewCenter = scrollTop + windowHeight * 0.5;
      
      // Calculate progress based on section visibility
      if (viewCenter >= sectionTop && viewCenter <= sectionTop + sectionHeight) {
        const progress = Math.max(0, Math.min(1, 
          (viewCenter - sectionTop) / sectionHeight
        ));
        setScrollProgress(progress);
      } else if (viewCenter > sectionTop + sectionHeight) {
        setScrollProgress(1);
      } else {
        setScrollProgress(0);
      }
      
      // Calculate milestone visibility
      const milestoneElements = milestoneRefs.current.filter(Boolean);
      const milestonePositions = milestoneElements.map((el) => {
        if (!el) return Infinity;
        const elRect = el.getBoundingClientRect();
        return window.scrollY + elRect.top + elRect.height / 2;
      });
      
      // Find the most visible milestone
      let activeIndex = 0;
      milestonePositions.forEach((pos, index) => {
        if (pos <= viewCenter) {
          activeIndex = index;
        }
      });
      
      setActiveTimelineIndex(activeIndex);
    };
    
    const handleScroll = () => {
      if (!ticking && !prefersReducedMotion) {
        requestAnimationFrame(calculateProgress);
        ticking = true;
      } else if (prefersReducedMotion) {
        calculateProgress();
      }
    };
    
    // Initial calculation
    calculateProgress();
    
    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [prefersReducedMotion]);

  // Smooth scroll to milestone utility
  const scrollToMilestone = useCallback((index) => {
    const element = milestoneRefs.current[index];
    if (element) {
      smoothScrollTo(element, {
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-bgGrey">
      <SEOHelmet
        title="About MKT Rugs — From Farm to Floor | MKT Rugs"
        description="Learn about MKT Rugs: authentic handcrafted rugs from West Bengal, integrated production, and sustainable natural fibres."
        canonical="https://www.mktrugs.com/about"
      />
      {/* Hero Slider with header compensation */}
      <div
        style={{ marginTop: "calc(var(--header-h, 0px) * -1)" }}
      >
        <HeroSlider />
      </div>

      {/* Story Section */}
      <section 
        id="story" 
        ref={(el) => (sectionRefs.current[0] = el)}
        className={`py-16 md:py-20 bg-bgGrey transition-all duration-700 ${
          visibleSections.has('section-0') ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
        }`}
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Enhanced text content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-gold tracking-wide uppercase">
                  Our Heritage
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-textDark mb-8">
                Our History
              </h2>
              
              <div className="space-y-8">
                {[
                  {
                    year: "2008",
                    title: "Humble Beginnings",
                    text: "Our journey began as Maa Kali Traders, a yarn-making company with 10 Ton Monthly Capacity.",
                  },
                  {
                    year: "2017",
                    title: "Industrial Evolution", 
                    text: "We evolved into an integrated carpet manufacturing company.",
                  },
                  {
                    year: "2024",
                    title: "Global Excellence",
                    text: "MKT Rugs was established, specializing in B2B export operations from Gopalnagar, West Bengal, India.",
                  },
                ].map((item, index) => (
                  <div key={index} className="group relative">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-gold rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform duration-300">
                        {item.year.slice(-2)}
                      </div>
                      <div className="flex-1 pt-2">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl sm:text-2xl font-heading font-semibold text-textDark group-hover:text-primary transition-colors duration-300">
                            {item.title}
                          </h3>
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-semibold">
                            {item.year}
                          </span>
                        </div>
                        <p className="text-base sm:text-lg text-textDark/80 font-body leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-8 top-16 w-px h-8 bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
                
                <div className="pt-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="/enquiry" 
                      className="inline-flex items-center justify-center px-8 py-3 bg-gold text-white rounded-full font-semibold hover:bg-gold/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                      </svg>
                      Request a Quote
                    </a>
                    <a 
                      href="/products" 
                      className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-primary border-2 border-primary rounded-full font-semibold hover:bg-primary hover:text-white transform hover:scale-105 transition-all duration-300"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                      Explore Products
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative group">
                <img
                  src="/images/Naturals Basket.jpg"
                  alt="Traditional jute weaving showcasing our heritage"
                  className="rounded-lg shadow-lg w-full h-80 sm:h-96 lg:h-[32rem] object-cover group-hover:scale-[1.02] transition-all duration-300"
                  loading="lazy"
                />
                {/* Stats overlay */}
                <div className="absolute top-4 right-4 bg-white rounded-lg p-3 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gold">16+</div>
                    <div className="text-xs text-textDark/70 font-semibold">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Gallery removed per request */}

      {/* Milestones Timeline Section */}
      <section 
        ref={timelineSectionRef}
        className="py-20 md:py-28 bg-white"
        aria-label="Company milestones timeline"
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-primary tracking-wide uppercase">
                Our Journey
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-textDark mb-6">
              Milestones on the Global Loom
            </h2>
            
            <p className="text-lg md:text-xl text-textDark/70 max-w-3xl mx-auto leading-relaxed font-body">
              From making Jute braids to fully integrated carpet manufacturing —
              witness our evolution into a global leader.
            </p>
            
            <div className="mx-auto mt-6 w-24 h-1 bg-gold rounded-full"></div>
          </div>

          {/* Timeline Navigation (Desktop only) */}
          <div className="hidden lg:flex justify-center mb-12">
            <div className="flex items-center gap-2 p-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
              {milestones.map((milestone, index) => (
                <button
                  key={index}
                  onClick={() => scrollToMilestone(index)}
                  className={`group relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    visibleMilestones.has(index)
                      ? "bg-gold text-white shadow-md scale-105"
                      : "text-textDark/60 hover:text-textDark hover:bg-gray-100"
                  }`}
                  aria-label={`Go to ${milestone.year} milestone`}
                >
                  <span className="relative z-10">{milestone.year}</span>
                  {visibleMilestones.has(index) && (
                    <div className="absolute inset-0 bg-gold rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline container */}
          <div className="relative">
            {/* Progress Line (Desktop) */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
              <div className="absolute inset-0 bg-gray-200 rounded-full"></div>
              <div
                className="absolute top-0 left-0 w-full bg-gold rounded-full transition-all duration-1000 ease-out"
                style={{ height: `${scrollProgress * 100}%` }}
              ></div>
              {/* Animated progress indicator */}
              <div
                className="absolute w-6 h-6 bg-gold rounded-full border-4 border-white shadow-lg transition-all duration-300 ease-out"
                style={{
                  top: `${scrollProgress * 100}%`,
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  boxShadow: "0 0 20px rgba(209, 180, 119, 0.5)",
                }}
              ></div>
            </div>

            {/* Enhanced milestones */}
            <div className="space-y-16 md:space-y-24">
              {milestones.map((milestone, index) => {
                const isVisible = visibleMilestones.has(index);
                const isLeft = milestone.side === "left";
                const delay = `delay-${Math.min(index * 100, 500)}`;
                const animationClass = prefersReducedMotion 
                  ? 'opacity-100 translate-y-0 translate-x-0 scale-100'
                  : isVisible
                    ? `opacity-100 translate-y-0 translate-x-0 scale-100 ${delay}`
                    : 'opacity-0 translate-y-8 scale-95';

                return (
                  <div
                    key={index}
                    ref={(el) => (milestoneRefs.current[index] = el)}
                    className="relative"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                      {/* Image */}
                      <div
                        className={`${
                          isLeft ? "lg:order-1" : "lg:order-2"
                        } transition-all duration-700 ease-out transform ${animationClass}`}
                      >
                        <div className="group relative">
                          <figure className="relative">
                            <img
                              src={milestone.img}
                              alt={milestone.title}
                              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg group-hover:scale-[1.02] transition-all duration-300"
                              loading="lazy"
                            />
                            <figcaption className="absolute bottom-4 left-4 right-4 bg-black/60 text-white p-4 rounded opacity-0 group-hover:opacity-100 transition-all duration-300">
                              <h4 className="font-heading font-semibold text-lg mb-1">{milestone.title}</h4>
                              <p className="text-sm font-body leading-relaxed">{milestone.text}</p>
                            </figcaption>
                          </figure>
                        </div>
                      </div>

                      {/* Content */}
                      <div
                        className={`${
                          isLeft ? "lg:order-2" : "lg:order-1"
                        } transition-all duration-700 ease-out transform ${animationClass}`}
                      >
                        <div className="relative">
                          {/* Category badge */}
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 text-gold rounded-full text-sm font-semibold mb-4">
                            <span>{milestone.icon}</span>
                            <span>{milestone.category}</span>
                          </div>

                          {/* Year badge */}
                          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gold rounded-full mb-6 shadow-md">
                            <span className="text-white font-bold text-2xl tracking-wider">
                              {milestone.year}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-textDark mb-4 lg:mb-6 leading-tight">
                            {milestone.title}
                          </h3>

                          {/* Description */}
                          <p className="text-base sm:text-lg lg:text-xl text-textDark/80 leading-relaxed font-body mb-6">
                            {milestone.text}
                          </p>

                          {/* Progress indicator for mobile */}
                          <div className="lg:hidden flex items-center gap-2 mb-4">
                            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gold transition-all duration-1000 ease-out"
                                style={{
                                  width: `${((index + 1) / milestones.length) * 100}%`,
                                }}
                              ></div>
                            </div>
                            <span className="text-sm text-textDark/60 font-semibold whitespace-nowrap">
                              {index + 1} of {milestones.length}
                            </span>
                          </div>

                        </div>
                      </div>
                    </div>

                    {/* Timeline dot (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div
                        className={`w-8 h-8 rounded-full border-4 border-white shadow-lg transition-all duration-500 ${
                          isVisible ? "bg-gold scale-125" : "bg-gray-300 scale-100"
                        }`}
                      >
                        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs">
                          {milestone.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-bgLight reveal">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-textDark mb-4">
        Our Values
      </h2>
      <p className="text-lg text-textDark max-w-2xl mx-auto leading-relaxed font-body">
        Quality is at the heart of everything we do.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
      {/* 1️⃣ Quality */}
      <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-md mx-auto">
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-textLight"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-textDark mb-4 font-heading">
          Quality
        </h3>
        <p className="text-textDark font-body text-lg leading-relaxed">
          Every product undergoes a 5-step quality control process to ensure
          the highest standards of excellence.
        </p>
      </div>

      {/* 2️⃣ Sustainability */}
      <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-md mx-auto">
        <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 1.343-3 3 0 2 3 5 3 5s3-3 3-5c0-1.657-1.343-3-3-3zM12 4v1m0 14v1m8-8h1M4 12H3m15.364 6.364l.707.707M6.343 6.343l-.707-.707m12.728 0l.707-.707M6.343 17.657l-.707.707"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-textDark mb-4 font-heading">
          Sustainability
        </h3>
        <p className="text-textDark font-body text-lg leading-relaxed">
          We prioritize eco-friendly materials and responsible production to
          protect our planet for future generations.
        </p>
      </div>

      {/* 3️⃣ Craftsmanship */}
      <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-md mx-auto">
        <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-textDark mb-4 font-heading">
          Craftsmanship
        </h3>
        <p className="text-textDark font-body text-lg leading-relaxed">
          Our skilled artisans blend traditional weaving with modern design
          precision to create timeless, high-quality rugs.
        </p>
      </div>
    </div>
  </div>
</section>


      <section className="py-20 bg-bgGrey reveal">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div>
        <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-textDark mb-4">
          Our Facilities
        </h2>
        <div className="w-24 h-1 bg-gold mb-8"></div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-6 mb-10">
          {[
            { value: "150 MT", label: "Monthly Yarn Manufacturing Capacity" },
            { value: "20,000+", label: "Monthly Carpet Making Capacity (sqm)" },
            { value: "6", label: "Owned Manufacturing Facilities" },
            {
              value: "✓",
              label:
                "Integrated Facility – From Raw Fibre Processing to Carpet Manufacturing",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl font-heading text-secondary mb-2">
                {item.value}
              </div>
              <div className="text-sm text-textDark/80 font-body leading-relaxed">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Certificates */}
        <CertificatesGrid />
      </div>

      {/* Right Image */}
      <div className="flex justify-center items-center">
        <div className="relative">
          <div className="absolute inset-0 -translate-x-4 -translate-y-4 bg-gold/10 rounded-2xl blur-md"></div>
          <img
            src="/images/flat-lay-monochromatic-assortment-textiles.jpg"
            alt="Craftsmanship and facilities"
            className="relative rounded-2xl w-full h-96 object-cover shadow-xl border border-white"
          />
        </div>
      </div>
    </div>
  </div>
</section>


      {false && (
        <section className="py-16 bg-white reveal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-textDark">
                Milestones on the Global Loom
              </h2>
              <div className="mx-auto mt-3 w-24 h-1 bg-gold"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-bgGrey rounded-lg p-6 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-heading font-semibold text-textDark mb-3">
                  Our footprint
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-textDark/90 font-body">
                  <li>
                    Supplying to global exporters, retailers and wholesalers.
                  </li>
                  <li>
                    11 facilities over 1.3M sq. ft. with certified social &
                    environmental compliance.
                  </li>
                  <li>End-to-end quality systems aligned to ISO 9001.</li>
                </ul>
              </div>
              <div className="bg-bgGrey rounded-lg p-6 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-heading font-semibold text-textDark mb-3">
                  Brands we serve
                </h3>
                <p className="text-textDark/90 font-body mb-3">
                  MKT Rugs today caters to many global exporters like:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm font-body">
                  {[
                    "The Home Depot",
                    "Walmart",
                    "Costco",
                    "Bed Bath & Beyond",
                    "Sam’s Club",
                    "Crate & Barrel",
                    "Pottery Barn",
                    "Target",
                    "Kohls",
                    "B&Q",
                    "Aldi",
                    "Lidi",
                  ].map((b) => (
                    <div
                      key={b}
                      className="bg-white border rounded px-3 py-2 text-textDark"
                    >
                      {b}
                    </div>
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
              The passionate individuals behind our success, dedicated to
              preserving tradition while embracing the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-48 h-48 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-textDark mb-2 font-heading">
                Rahul Sarder
              </h3>
              <p className="text-secondary font-medium mb-2">CEO</p>
              <p className="text-textDark font-body">
                Leading MKT Rugs with vision and dedication to excellence.
              </p>
            </div>

            <div className="text-center">
  <div className="w-48 h-48 bg-secondary/10 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
    <img
      src="/images/DSC01496.jpg" // <-- replace with your image path
      alt="Dattatreyo Paul"
      className="w-full h-full object-cover"
    />
  </div>
  <h3 className="text-xl font-semibold text-textDark mb-2 font-heading">
    Dattatreyo Paul
  </h3>
  <p className="text-secondary font-medium mb-2">
    Global Trade Manager
  </p>
  <p className="text-textDark font-body">
    Managing global trade operations and international partnerships.
  </p>
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
