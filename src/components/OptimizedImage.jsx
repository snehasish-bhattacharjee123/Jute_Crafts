import React, { useState, useRef, useEffect } from 'react';

const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  placeholder = 'blur',
  quality = 85,
  sizes = '100vw',
  priority = false,
  onLoad,
  onError,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = (e) => {
    setIsLoaded(true);
    onLoad?.(e);
  };

  const handleError = (e) => {
    setHasError(true);
    onError?.(e);
  };

  // Generate WebP alternative if possible
  const getOptimizedSrc = (originalSrc) => {
    if (!originalSrc) return originalSrc;
    
    // If it's already WebP or if it doesn't contain image extensions, return as-is
    if (originalSrc.includes('.webp') || !originalSrc.match(/\.(jpg|jpeg|png)$/i)) {
      return originalSrc;
    }
    
    // Try to generate WebP version (this would depend on your build setup)
    // For now, we'll return the original src
    return originalSrc;
  };

  // Placeholder while loading
  const PlaceholderDiv = () => (
    <div
      className={`bg-gray-200 animate-pulse flex items-center justify-center ${className}`}
      style={{ width, height }}
      aria-label="Loading image"
    >
      <svg
        className="w-8 h-8 text-gray-400"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );

  // Error fallback
  if (hasError) {
    return (
      <div
        className={`bg-gray-100 flex items-center justify-center border border-gray-200 ${className}`}
        style={{ width, height }}
        aria-label="Failed to load image"
      >
        <svg
          className="w-8 h-8 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    );
  }

  return (
    <div ref={imgRef} className="relative">
      {!isLoaded && !hasError && <PlaceholderDiv />}
      
      {(isInView || priority) && (
        <img
          src={getOptimizedSrc(src)}
          alt={alt || ''}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          width={width}
          height={height}
          loading={priority ? 'eager' : loading}
          sizes={sizes}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      )}
    </div>
  );
};

// Enhanced alt text generator for different image types
export const generateAltText = {
  product: (productName, category) => 
    `${productName} - ${category} rug by MKT Rugs, handcrafted natural fibre carpet`,
  
  gallery: (description, location) => 
    `${description} showcasing MKT Rugs craftsmanship ${location ? `in ${location}` : ''}`,
  
  facility: (area, activity) => 
    `MKT Rugs ${area} facility ${activity ? `showing ${activity}` : ''}`,
  
  team: (name, role) => 
    `${name}, ${role} at MKT Rugs, handcrafted rug manufacturer`,
  
  process: (step, material) => 
    `${step} process using ${material} at MKT Rugs manufacturing facility`,
};

export default OptimizedImage;