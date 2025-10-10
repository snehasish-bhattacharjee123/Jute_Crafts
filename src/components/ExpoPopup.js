import React, { useEffect } from 'react';

const ExpoPopup = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Auto-hide after 10 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Popup Content */}
      <div className="relative bg-gradient-to-br from-[#f5f2ed] via-[#f0ebe0] to-[#ebe4d7] rounded-2xl shadow-2xl max-w-lg w-full mx-4 transform transition-all duration-300 scale-100 animate-popup-in border-2 border-[#c49b63]/20">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg z-10"
          aria-label="Close popup"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Popup Content */}
        <div className="p-6 text-center">
          {/* Company Logo and Info */}
          <div className="mb-4">
            <div className="flex items-center justify-center gap-4 mb-3">
              {/* Logo Placeholder - Replace with actual logo */}
              <div className="w-16 h-16 bg-[#c49b63] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">MK</span>
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-bold text-[#2b1d1d] tracking-tight">MKT RUGS</h2>
                <p className="text-[#c49b63] font-medium italic">From Farm to Floor</p>
                <p className="text-xs text-[#4a3a3a] mt-1">An ISO 9001:2015 Certified Company</p>
              </div>
              {/* QR Code Placeholder */}
              <div className="w-16 h-16 bg-white border-2 border-[#2b1d1d] rounded flex items-center justify-center">
                <div className="w-12 h-12 bg-[#2b1d1d] opacity-80 rounded-sm grid grid-cols-4 gap-px p-1">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className={`bg-white ${Math.random() > 0.5 ? 'opacity-100' : 'opacity-0'}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Event Title */}
          <div className="mb-6">
            <div className="text-4xl font-bold text-[#2b1d1d] mb-2">
              49<sup className="text-lg">TH</sup> INDIA{' '}
              <span className="text-[#4a9b8e]">CARPET</span>
            </div>
            <div className="text-4xl font-bold text-[#2b1d1d] mb-3">EXPO</div>
            
            {/* Date */}
            <div className="text-2xl font-bold text-[#2b1d1d] mb-4">
              11<sup className="text-sm">TH</sup> - 14<sup className="text-sm">TH</sup> OCTOBER, 2025
            </div>

            {/* Visit Us Button */}
            <div className="inline-block bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white px-8 py-3 rounded-lg font-bold text-xl shadow-lg transform hover:scale-105 transition-transform duration-200">
              VISIT US
            </div>
          </div>

          {/* Location Info */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#2b1d1d] mb-2">LOCATION:</h3>
            <p className="text-lg text-[#4a3a3a] leading-tight">
              Bhadohi, Uttar Pradesh,<br />
              India
            </p>
          </div>

          {/* Venue and Stall Info */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="font-bold text-[#2b1d1d] mb-1">VENUE:</h4>
              <p className="text-sm text-[#4a3a3a] leading-tight">
                Carpet Expo Mart, Bhadohi
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[#2b1d1d] mb-1">STALL NO.</h4>
              <p className="text-sm text-[#4a3a3a] leading-tight">
                UH-22, (2nd Floor Hall)
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="border-t border-[#c49b63]/30 pt-4">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-[#4a3a3a]">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 777 888 6215</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@mktrugs.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
                <span>www.mktrugs.com</span>
              </div>
            </div>
          </div>

          {/* Auto-hide timer indicator */}
          <div className="mt-4 text-xs text-[#4a3a3a]/60">
            This popup will close automatically in 10 seconds
          </div>
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute -top-2 -left-2 w-6 h-6 border-l-4 border-t-4 border-[#c49b63] rounded-tl-lg"></div>
        <div className="absolute -top-2 -right-2 w-6 h-6 border-r-4 border-t-4 border-[#c49b63] rounded-tr-lg"></div>
        <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-4 border-b-4 border-[#c49b63] rounded-bl-lg"></div>
        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-4 border-b-4 border-[#c49b63] rounded-br-lg"></div>
      </div>
    </div>
  );
};

export default ExpoPopup;