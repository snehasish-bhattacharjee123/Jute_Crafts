// Smooth scroll utility with enhanced options
export const smoothScrollTo = (element, options = {}) => {
  if (!element) return;

  // Handle different element types
  const targetElement = typeof element === 'string' 
    ? document.querySelector(element) 
    : element;

  if (!targetElement) return;

  // Default options
  const defaultOptions = {
    behavior: 'smooth',
    block: 'center',
    inline: 'nearest',
  };

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const scrollOptions = {
    ...defaultOptions,
    ...options,
    behavior: prefersReducedMotion ? 'auto' : (options.behavior || 'smooth'),
  };

  // Use scrollIntoView if available
  if (targetElement.scrollIntoView) {
    targetElement.scrollIntoView(scrollOptions);
  } else {
    // Fallback for older browsers
    try {
      const rect = targetElement.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetY = rect.top + scrollTop - (window.innerHeight / 2);
      
      window.scrollTo({
        top: targetY,
        behavior: scrollOptions.behavior
      });
    } catch (error) {
      // Ultimate fallback
      targetElement.scrollIntoView();
    }
  }
};

// Scroll to top utility
export const scrollToTop = (smooth = true) => {
  const prefersReducedMotion = window.matchMedia && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  window.scrollTo({
    top: 0,
    behavior: (smooth && !prefersReducedMotion) ? 'smooth' : 'auto'
  });
};

// Scroll to element by ID
export const scrollToId = (id, options = {}) => {
  const element = document.getElementById(id);
  if (element) {
    smoothScrollTo(element, options);
  }
};

// Get scroll position
export const getScrollPosition = () => {
  return {
    x: window.pageXOffset || document.documentElement.scrollLeft,
    y: window.pageYOffset || document.documentElement.scrollTop
  };
};

// Check if element is in viewport
export const isInViewport = (element, threshold = 0) => {
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
  return (
    rect.top >= -threshold &&
    rect.left >= -threshold &&
    rect.bottom <= windowHeight + threshold &&
    rect.right <= windowWidth + threshold
  );
};

// Smooth scroll with offset (useful for fixed headers)
export const smoothScrollWithOffset = (element, offset = 0, options = {}) => {
  if (!element) return;

  const targetElement = typeof element === 'string' 
    ? document.querySelector(element) 
    : element;

  if (!targetElement) return;

  const prefersReducedMotion = window.matchMedia && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  try {
    const rect = targetElement.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetY = rect.top + scrollTop - offset;
    
    window.scrollTo({
      top: targetY,
      behavior: prefersReducedMotion ? 'auto' : (options.behavior || 'smooth')
    });
  } catch (error) {
    // Fallback
    smoothScrollTo(targetElement, options);
  }
};