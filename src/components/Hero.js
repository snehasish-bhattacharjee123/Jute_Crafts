import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Hero = ({ onDownloadClick }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const videoRef = useRef(null);
  
  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth <= 768;
      
      setIsMobile(isMobileDevice || (hasTouch && isSmallScreen));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Video loading handlers
  const handleVideoLoad = () => {
    console.log('Video loaded successfully');
    setVideoLoaded(true);
    setVideoError(false);
  };
  
  const handleVideoError = (error) => {
    console.log('Video error:', error);
    setVideoError(true);
    setVideoLoaded(false);
  };
  
  const handleVideoLoadStart = () => {
    console.log('Video loading started');
  };
  
  // Handle user interaction for mobile video playback
  const handleUserInteraction = () => {
    if (!userInteracted) {
      setUserInteracted(true);
      if (videoRef.current && isMobile) {
        videoRef.current.play().catch(console.log);
      }
    }
  };
  
  // Check video file availability and mobile-specific handling
  useEffect(() => {
    const checkVideoFile = async () => {
      try {
        const response = await fetch('/images/Mkt Promo V3.mp4', { method: 'HEAD' });
        if (!response.ok) {
          console.log('Video file not found, using fallback image');
          setVideoError(true);
          return;
        }
        
        // Check if we're on a slow connection (mobile data)
        if ('connection' in navigator) {
          const connection = navigator.connection;
          if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
            console.log('Slow connection detected, using fallback image');
            setVideoError(true);
            return;
          }
        }
        
        // For mobile devices, give preference to image on very slow connections
        if (isMobile && 'connection' in navigator) {
          const connection = navigator.connection;
          if (connection.downlink && connection.downlink < 1.5) {
            console.log('Slow mobile connection, using fallback image');
            setVideoError(true);
            return;
          }
        }
        
        console.log('Video file available and connection is suitable');
      } catch (error) {
        console.log('Error checking video file:', error);
        setVideoError(true);
      }
    };
    
    // Only check after mobile detection is complete
    if (isMobile !== undefined) {
      checkVideoFile();
    }
  }, [isMobile]);
  
  // Video loading timeout
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!videoLoaded && !videoError) {
        console.log('Video loading timeout, switching to fallback');
        setVideoError(true);
      }
    }, isMobile ? 8000 : 5000); // Longer timeout for mobile
    
    return () => clearTimeout(timeout);
  }, [videoLoaded, videoError, isMobile]);
  
  // Auto-play attempt for mobile after user interaction
  useEffect(() => {
    if (videoRef.current && videoLoaded && !videoError) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Auto-play was prevented, which is normal on mobile
          console.log('Auto-play prevented:', error);
        });
      }
    }
  }, [videoLoaded, videoError]);
  
  const scrollToContact = () => {
    try {
      const header = document.querySelector(".site-header.nav");
      const headerH = header ? header.offsetHeight : 0;
      const reduce =
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const targets = ["#get-in-touch", "#contact", "#site-footer"];
      let el = null;
      for (const sel of targets) {
        el = document.querySelector(sel);
        if (el) break;
      }
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - headerH - 8;
      window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
    } catch {
      const el =
        document.getElementById("get-in-touch") ||
        document.getElementById("site-footer");
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleDownloadClick = () => {
    if (onDownloadClick) {
      onDownloadClick();
    } else {
      scrollToContact();
    }
  };

  return (
    <>
      {/* Animations embedded in the component */}
      <style>{`
        @keyframes slide-in-left {
          0% { transform: translateX(-40px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in-left {
          animation: slide-in-left 1.8s ease-out both;
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1.2s ease-out both;
        }
        .animate-fade-in.delay-150 {
          animation-delay: 0.15s;
        }
        .animate-fade-in.delay-300 {
          animation-delay: 0.3s;
        }

        @keyframes soft-breathe {
          0%, 100% { 
            transform: scale(1); 
            box-shadow: 0 8px 25px rgba(192, 132, 87, 0.3);
          }
          50% { 
            transform: scale(1.02); 
            box-shadow: 0 12px 35px rgba(192, 132, 87, 0.5);
          }
        }
        .animate-soft-breathe {
          animation: soft-breathe 4s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(192, 132, 87, 0.4); }
          50% { box-shadow: 0 0 0 8px rgba(192, 132, 87, 0); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        /* Mobile touch improvements */
        @media (max-width: 640px) {
          .hero-button {
            min-height: 30px;
            font-size: 10px;
            padding: 3px 6px;
            gap: 2px;
          }
          
          .hero-button svg {
            width: 11px;
            height: 11px;
          }
          
          /* Minimize content overlay for better video visibility */
          .hero-content {
            padding: 6px;
          }
        }
        
        /* Tablet optimization */
        @media (min-width: 641px) and (max-width: 1024px) {
          .hero-button {
            min-height: 36px;
            font-size: 13px;
            padding: 6px 12px;
          }
          
          .hero-button svg {
            width: 14px;
            height: 14px;
          }
        }
        
        /* Extra small mobile optimization */
        @media (max-width: 360px) {
          .hero-button {
            font-size: 9px;
            padding: 2px 5px;
            min-height: 26px;
          }
          .hero-button svg {
            width: 10px;
            height: 10px;
          }
        }
        
        /* Video optimization for mobile */
        @media (max-width: 768px) {
          video {
            object-position: center;
            transform: scale(1.1); /* Slight zoom for mobile */
          }
          
          .hero-video-container {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
          }
        }
        
        /* Ensure video covers properly on all devices */
        .hero-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
        }
      `}</style>

      <section
        id="hero"
        className="relative min-h-[100svh] flex items-center justify-center overflow-hidden animate-slide-in-left pt-[calc(var(--header-h,80px))]"
        style={{
          marginTop: "calc(var(--header-h, 0px) * -1)",
        }}
        onClick={handleUserInteraction}
        onTouchStart={handleUserInteraction}
      >
        {/* Background Video with Mobile Optimization */}
        {!videoError && (
          <video
            ref={videoRef}
            className={`absolute inset-0 hero-video transition-opacity duration-500 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay={!isMobile}
            muted
            loop
            playsInline
            preload={isMobile ? "metadata" : "auto"}
            poster="/images/main.jpg"
            onLoadStart={handleVideoLoadStart}
            onLoadedData={handleVideoLoad}
            onError={handleVideoError}
            onCanPlay={handleVideoLoad}
            onLoadedMetadata={() => console.log('Video metadata loaded')}
            webkit-playsinline="true"
            x5-playsinline="true"
            x5-video-player-type="h5"
            x5-video-player-fullscreen="true"
          >
            <source src="/images/Mkt Promo V3.mp4" type="video/mp4" />
            <source src="/videos/hero-video.webm" type="video/webm" />
            {/* Fallback for browsers that don't support video */}
            Your browser does not support the video tag.
          </video>
        )}
        
        {/* Fallback Background Image */}
        {(videoError || (!videoLoaded && isMobile)) && (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/main.jpg')",
            }}
          />
        )}
        
        {/* Loading State */}
        {!videoLoaded && !videoError && (
          <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
               style={{
                 backgroundImage: "url('/images/main.jpg')",
               }}>
            <div className="bg-black/50 backdrop-blur-sm rounded-full p-4">
              <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        )}
        
        {/* Enhanced Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/60 via-secondary/40 to-transparent backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-2 sm:px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-textLight mb-2 sm:mb-3 md:mb-4 lg:mb-6 leading-tight animate-fade-in">
            <span className="block text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Authentic, Handcrafted Rugs</span>
            <span className="block text-gold text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-1">From Our Farm to Your Floor</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-body text-textLight/90 mb-3 sm:mb-4 md:mb-6 lg:mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-150">
            <span className="hidden md:inline">Experience the journey where tradition weaves into timeless art. </span>
            <span className="md:hidden">Handcrafted natural fiber rugs.</span>
            <span className="hidden lg:inline">Discover premium natural fiber rugs crafted by skilled artisans.</span>
          </p>

          <div className="flex flex-row gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 justify-center items-center animate-fade-in delay-300 flex-wrap">
            <div className="flex gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
            <Link to="/products">
              <Button 
                variant="gold" 
                className="hero-button px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-2 text-xs font-medium rounded-md md:rounded-lg hover:scale-105 transition-all duration-300 shadow focus-enhanced"
              >
                <span className="flex items-center justify-center gap-1">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span className="hidden md:inline">Explore Collection</span>
                  <span className="md:hidden">Products</span>
                </span>
              </Button>
            </Link>

            <Link to="/about">
              <Button
                variant="secondary"
                className="hero-button border-2 !border-white !text-white hover:!bg-white hover:!text-secondary focus:!ring-white focus:ring-offset-secondary px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-2 text-xs font-medium rounded-md md:rounded-lg transition-all duration-300 focus-enhanced"
              >
                <span className="flex items-center justify-center gap-1">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="hidden md:inline">About Us</span>
                  <span className="md:hidden">About</span>
                </span>
              </Button>
            </Link>

            </div>
            
            {/* Enhanced Download Button - Right Side */}
            <button
              type="button"
              onClick={handleDownloadClick}
              aria-label="Download brochure"
              className="hero-button relative px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-2 rounded-md md:rounded-lg 
                         bg-gradient-to-r from-[#A86533] to-[#C08457] text-white 
                         font-medium text-xs shadow 
                         hover:shadow-lg transition-all duration-300 
                         hover:scale-105
                         focus-visible:outline-none focus-visible:ring-2 
                         focus-visible:ring-[#A86533]/50 focus-visible:ring-offset-1
                         transform active:scale-95 group overflow-hidden focus-enhanced"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative flex items-center justify-center gap-0.5 sm:gap-1">
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="hidden md:inline">Download</span>
                <span className="md:hidden">PDF</span>
              </span>
            </button>
          </div>

          {/* Trust indicators - Minimized for mobile */}
          <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-12 animate-fade-in delay-500">
            <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 md:gap-4 lg:gap-6 text-textLight/70">
              <div className="flex items-center gap-0.5 sm:gap-1 text-xs sm:text-sm">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">15+ Years</span>
              </div>
              <div className="flex items-center gap-0.5 sm:gap-1 text-xs sm:text-sm">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Eco-Friendly</span>
              </div>
              <div className="flex items-center gap-0.5 sm:gap-1 text-xs sm:text-sm">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Global</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
