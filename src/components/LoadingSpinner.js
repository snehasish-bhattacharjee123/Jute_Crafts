import React from 'react';

// Main Loading Spinner with 4 squares
const LoadingSpinner = ({ 
  variant = 'squares', 
  size = 'md', 
  color = 'gold',
  className = '',
  label = 'Loading...'
}) => {
  const sizeClasses = {
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    gold: 'bg-gold',
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    white: 'bg-white',
    dark: 'bg-gray-800'
  };

  // 4 Squares Loading Animation
  const FourSquares = () => (
    <div className={`inline-flex items-center justify-center ${className}`} role="status" aria-label={label}>
      <div className="grid grid-cols-2 gap-1">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`${sizeClasses[size]} ${colorClasses[color]} rounded-sm animate-square-pulse`}
            style={{
              animationDelay: `${i * 0.15}s`,
              animationDuration: '1.2s'
            }}
          />
        ))}
      </div>
    </div>
  );

  // Weaving Pattern Loading (inspired by rug weaving)
  const WeavingPattern = () => (
    <div className={`inline-flex items-center justify-center ${className}`} role="status" aria-label={label}>
      <div className="relative">
        {/* Horizontal threads */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[0, 1, 2].map((i) => (
            <div
              key={`h-${i}`}
              className={`w-12 h-0.5 ${colorClasses[color]} animate-weave-horizontal`}
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
        {/* Vertical threads */}
        <div className="flex justify-between">
          {[0, 1, 2].map((i) => (
            <div
              key={`v-${i}`}
              className={`w-0.5 h-12 ${colorClasses[color]} animate-weave-vertical`}
              style={{
                animationDelay: `${i * 0.2 + 0.1}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );

  // Fiber Spinning Animation
  const FiberSpin = () => (
    <div className={`inline-flex items-center justify-center ${className}`} role="status" aria-label={label}>
      <div className="relative">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`absolute w-1 h-6 ${colorClasses[color]} rounded-full animate-fiber-spin`}
            style={{
              transformOrigin: '50% 100%',
              transform: `rotate(${i * 60}deg)`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: '1.5s'
            }}
          />
        ))}
      </div>
    </div>
  );

  // Carpet Rolling Animation
  const CarpetRoll = () => (
    <div className={`inline-flex items-center justify-center ${className}`} role="status" aria-label={label}>
      <div className="flex gap-1">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`w-2 rounded-full ${colorClasses[color]} animate-carpet-roll`}
            style={{
              height: size === 'xs' ? '8px' : size === 'sm' ? '12px' : size === 'md' ? '16px' : size === 'lg' ? '24px' : '32px',
              animationDelay: `${i * 0.1}s`,
              animationDuration: '1.8s'
            }}
          />
        ))}
      </div>
    </div>
  );

  // Dots Pulse (modern alternative)
  const DotsPulse = () => (
    <div className={`inline-flex items-center justify-center space-x-2 ${className}`} role="status" aria-label={label}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-dot-pulse`}
          style={{
            animationDelay: `${i * 0.2}s`,
            animationDuration: '1.4s'
          }}
        />
      ))}
    </div>
  );

  // MKT Logo Loading Animation
  const MKTLogo = () => {
    const fontSize = {
      xs: 'text-sm',
      sm: 'text-base',
      md: 'text-lg',
      lg: 'text-2xl',
      xl: 'text-3xl'
    };

    const textColor = {
      gold: 'text-gold',
      primary: 'text-primary',
      secondary: 'text-secondary',
      white: 'text-white',
      dark: 'text-gray-800'
    };

    return (
      <div className={`inline-flex items-center justify-center ${className}`} role="status" aria-label={label}>
        <div className="relative">
          {/* MKT Letters with individual animations */}
          <div className="flex items-center font-heading font-bold tracking-wider">
            <span 
              className={`${fontSize[size]} ${textColor[color]} animate-mkt-letter-m transform-gpu`}
              style={{ animationDuration: '2s' }}
            >
              M
            </span>
            <span 
              className={`${fontSize[size]} ${textColor[color]} animate-mkt-letter-k transform-gpu`}
              style={{ animationDuration: '2s', animationDelay: '0.2s' }}
            >
              K
            </span>
            <span 
              className={`${fontSize[size]} ${textColor[color]} animate-mkt-letter-t transform-gpu`}
              style={{ animationDuration: '2s', animationDelay: '0.4s' }}
            >
              T
            </span>
          </div>
          
          {/* Underline animation */}
          <div className={`absolute -bottom-1 left-0 w-full h-0.5 ${colorClasses[color]} animate-mkt-underline transform-gpu`} />
          
          {/* Rotating dots around the logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 ${colorClasses[color]} rounded-full animate-mkt-orbit transform-gpu`}
                style={{
                  animationDuration: '3s',
                  animationDelay: `${i * 0.33}s`,
                  transformOrigin: size === 'xs' ? '12px' : size === 'sm' ? '16px' : size === 'md' ? '20px' : size === 'lg' ? '24px' : '32px'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Compact MKT Logo (smaller, simpler version)
  const MKTCompact = () => {
    const fontSize = {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl'
    };

    const textColor = {
      gold: 'text-gold',
      primary: 'text-primary',
      secondary: 'text-secondary',
      white: 'text-white',
      dark: 'text-gray-800'
    };

    return (
      <div className={`inline-flex items-center justify-center ${className}`} role="status" aria-label={label}>
        <div className={`${fontSize[size]} ${textColor[color]} font-heading font-bold animate-mkt-compact transform-gpu`}>
          MKT
        </div>
      </div>
    );
  };

  const variants = {
    mkt: MKTLogo,
    'mkt-compact': MKTCompact,
    squares: FourSquares,
    weaving: WeavingPattern,
    fiber: FiberSpin,
    carpet: CarpetRoll,
    dots: DotsPulse
  };

  const Component = variants[variant] || FourSquares;
  return <Component />;
};

// Full-screen loading overlay
export const LoadingOverlay = ({ 
  message = "Loading...", 
  variant = "squares",
  backdrop = true 
}) => (
  <div className={`fixed inset-0 z-[9999] flex items-center justify-center ${
    backdrop ? 'bg-black/50 backdrop-blur-sm' : 'bg-transparent'
  }`}>
    <div className="bg-white rounded-xl shadow-2xl p-8 mx-4 flex flex-col items-center space-y-4 max-w-sm w-full">
      <LoadingSpinner variant={variant} size="xl" color="gold" />
      <p className="text-textDark font-body text-lg text-center">{message}</p>
    </div>
  </div>
);

// Inline loading component for buttons, cards, etc.
export const InlineLoading = ({ 
  variant = "squares", 
  size = "sm", 
  color = "white",
  text = "",
  className = "" 
}) => (
  <div className={`inline-flex items-center space-x-2 ${className}`}>
    <LoadingSpinner variant={variant} size={size} color={color} />
    {text && <span className="text-sm font-medium">{text}</span>}
  </div>
);

// Image placeholder loading
export const ImagePlaceholder = ({ 
  className = "", 
  variant = "squares",
  aspectRatio = "auto" 
}) => (
  <div className={`bg-gray-200 animate-pulse flex items-center justify-center ${className}`} 
       style={{ aspectRatio }}>
    <LoadingSpinner variant={variant} size="lg" color="primary" />
  </div>
);

// Content skeleton with loading animation
export const ContentSkeleton = ({ lines = 3, avatar = false, className = "" }) => (
  <div className={`animate-pulse ${className}`}>
    <div className="flex items-center space-x-4">
      {avatar && <div className="w-12 h-12 bg-gray-300 rounded-full"></div>}
      <div className="flex-1 space-y-2">
        {[...Array(lines)].map((_, i) => (
          <div
            key={i}
            className="h-4 bg-gray-300 rounded"
            style={{
              width: i === lines - 1 ? '60%' : '100%'
            }}
          ></div>
        ))}
      </div>
    </div>
  </div>
);

export default LoadingSpinner;