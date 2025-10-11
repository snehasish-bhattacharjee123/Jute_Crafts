import React, { useState } from 'react';
import LoadingSpinner, { 
  LoadingOverlay, 
  InlineLoading, 
  ImagePlaceholder, 
  ContentSkeleton 
} from './LoadingSpinner';

const LoadingDemo = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState('mkt');
  const [selectedSize, setSelectedSize] = useState('md');
  const [selectedColor, setSelectedColor] = useState('gold');

  const variants = [
    { id: 'mkt', name: 'MKT Logo', description: 'Brand logo with animated letters and orbiting dots' },
    { id: 'mkt-compact', name: 'MKT Compact', description: 'Compact rotating MKT logo - perfect for small spaces' },
    { id: 'squares', name: '4 Squares', description: 'Our signature 4-square loading animation' },
    { id: 'weaving', name: 'Weaving Pattern', description: 'Inspired by traditional rug weaving' },
    { id: 'fiber', name: 'Fiber Spinning', description: 'Rotating fibers animation' },
    { id: 'carpet', name: 'Carpet Roll', description: 'Rolling carpet effect' },
    { id: 'dots', name: 'Dots Pulse', description: 'Classic three dots pulse' },
  ];

  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
  const colors = ['gold', 'primary', 'secondary', 'white', 'dark'];

  return (
    <div className="min-h-screen bg-bgGrey py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-textDark mb-4">
            Loading Spinner Showcase
          </h1>
          <p className="text-xl text-textDark/70 max-w-3xl mx-auto">
            Unique loading animations inspired by our rug-making craft
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Variant Selection */}
            <div>
              <label className="block text-sm font-semibold text-textDark mb-3">
                Animation Style
              </label>
              <div className="space-y-2">
                {variants.map((variant) => (
                  <label key={variant.id} className="flex items-center">
                    <input
                      type="radio"
                      name="variant"
                      value={variant.id}
                      checked={selectedVariant === variant.id}
                      onChange={(e) => setSelectedVariant(e.target.value)}
                      className="mr-3"
                    />
                    <div>
                      <span className="font-medium text-textDark">{variant.name}</span>
                      <p className="text-sm text-textDark/60">{variant.description}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-semibold text-textDark mb-3">
                Size
              </label>
              <div className="space-y-2">
                {sizes.map((size) => (
                  <label key={size} className="flex items-center">
                    <input
                      type="radio"
                      name="size"
                      value={size}
                      checked={selectedSize === size}
                      onChange={(e) => setSelectedSize(e.target.value)}
                      className="mr-3"
                    />
                    <span className="font-medium text-textDark capitalize">{size}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <label className="block text-sm font-semibold text-textDark mb-3">
                Color Theme
              </label>
              <div className="space-y-2">
                {colors.map((color) => (
                  <label key={color} className="flex items-center">
                    <input
                      type="radio"
                      name="color"
                      value={color}
                      checked={selectedColor === color}
                      onChange={(e) => setSelectedColor(e.target.value)}
                      className="mr-3"
                    />
                    <span className="font-medium text-textDark capitalize">{color}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Live Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Spinner Preview */}
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <h3 className="text-xl font-semibold text-textDark mb-6">Live Preview</h3>
            <div className="flex justify-center items-center h-32 border-2 border-dashed border-gray-200 rounded-lg">
              <LoadingSpinner 
                variant={selectedVariant} 
                size={selectedSize} 
                color={selectedColor} 
              />
            </div>
            <div className="mt-4 text-sm text-textDark/60">
              {variants.find(v => v.id === selectedVariant)?.description}
            </div>
          </div>

          {/* Component Variations */}
          <div className="space-y-6">
            {/* Inline Loading */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-textDark mb-4">Inline Loading</h4>
              <div className="space-y-3">
                <button 
                  className="bg-gold text-white px-6 py-2 rounded-full font-medium"
                  disabled
                >
                  <InlineLoading variant={selectedVariant} size="sm" color="white" text="Processing..." />
                </button>
                <div>
                  <InlineLoading variant={selectedVariant} size="sm" color="primary" text="Saving changes..." />
                </div>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-textDark mb-4">Image Placeholder</h4>
              <ImagePlaceholder 
                className="w-full h-32 rounded-lg" 
                variant={selectedVariant}
                aspectRatio="2/1"
              />
            </div>

            {/* Content Skeleton */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-textDark mb-4">Content Skeleton</h4>
              <ContentSkeleton lines={3} avatar={true} />
            </div>
          </div>
        </div>

        {/* Overlay Demo */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowOverlay(true)}
            className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
          >
            Show Full-Screen Overlay
          </button>
        </div>

        {/* Usage Examples */}
        <div className="mt-16">
          <h2 className="text-2xl font-heading font-semibold text-textDark mb-8 text-center">
            Usage Examples
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Hero Image Loading */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-textDark mb-4">Hero Images</h4>
              <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                <LoadingSpinner variant="mkt" size="xl" color="gold" />
              </div>
              <p className="text-sm text-textDark/60 mt-2">MKT logo for brand consistency</p>
            </div>

            {/* Gallery Loading */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-textDark mb-4">Gallery Grid</h4>
              <div className="grid grid-cols-2 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-full h-20 bg-gray-100 rounded flex items-center justify-center">
                    <LoadingSpinner variant="mkt-compact" size="sm" color="primary" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-textDark/60 mt-2">Compact MKT for smaller spaces</p>
            </div>

            {/* Form Processing */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-textDark mb-4">Forms & Actions</h4>
              <div className="space-y-3">
                <div className="h-10 bg-gray-100 rounded flex items-center px-3">
                  <LoadingSpinner variant="mkt-compact" size="xs" color="secondary" />
                  <span className="ml-2 text-sm">Submitting...</span>
                </div>
                <div className="h-10 bg-gold text-white rounded flex items-center justify-center">
                  <LoadingSpinner variant="mkt-compact" size="sm" color="white" />
                </div>
              </div>
              <p className="text-sm text-textDark/60 mt-2">Perfect for buttons and inline loading</p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-screen overlay demo */}
      {showOverlay && (
        <LoadingOverlay 
          message="Loading your content..." 
          variant={selectedVariant}
          onClose={() => setShowOverlay(false)}
        />
      )}

      {/* Auto close overlay after 3 seconds */}
      {showOverlay && setTimeout(() => setShowOverlay(false), 3000)}
    </div>
  );
};

export default LoadingDemo;