// import React, { useEffect } from 'react';

// const ExpoPopup = ({ isOpen, onClose }) => {
//   useEffect(() => {
//     if (isOpen) {
//       // Auto-hide after 10 seconds
//       const timer = setTimeout(() => {
//         onClose();
//       }, 10000);

//       // Add keyboard event listener
//       const handleKeyDown = (event) => {
//         if (event.key === 'Escape') {
//           onClose();
//         }
//       };

//       document.addEventListener('keydown', handleKeyDown);

//       return () => {
//         clearTimeout(timer);
//         document.removeEventListener('keydown', handleKeyDown);
//       };
//     }
//   }, [isOpen, onClose]);

//   // Prevent body scroll when popup is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }

//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-[9999] flex items-center justify-center">
//       {/* Backdrop */}
//       <div
//         className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 cursor-pointer"
//         onClick={onClose}
//         role="button"
//         tabIndex={-1}
//         aria-label="Close popup by clicking outside"
//         onKeyDown={(e) => {
//           if (e.key === 'Enter' || e.key === ' ') {
//             e.preventDefault();
//             onClose();
//           }
//         }}
//       />

//       {/* Popup Content */}
//       <div className="relative bg-gradient-to-br from-[#f5f2ed] via-[#f0ebe0] to-[#ebe4d7] rounded-2xl shadow-2xl max-w-lg w-full mx-4 sm:mx-6 transform transition-all duration-300 scale-100 animate-popup-in border-2 border-[#c49b63]/20 max-h-[90vh] overflow-y-auto">

//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="mobile-touch focus-enhanced absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-8 h-8 sm:w-10 sm:h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg z-10"
//           aria-label="Close popup"
//         >
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>

//         {/* Popup Content */}
//         <div className="p-4 sm:p-6 text-center">
//           {/* Company Logo and Info */}
//           <div className="mb-4 sm:mb-6">
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-3">
//               {/* Logo Placeholder - Replace with actual logo */}
//               <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#c49b63] rounded-lg flex items-center justify-center flex-shrink-0">
//                 <span className="text-white font-bold text-lg sm:text-xl">MK</span>
//               </div>
//               <div className="text-center sm:text-left">
//                 <h2 className="text-xl sm:text-2xl font-bold text-[#2b1d1d] tracking-tight">MKT RUGS</h2>
//                 <p className="text-[#c49b63] font-medium italic text-sm sm:text-base">From Farm to Floor</p>
//                 <p className="text-xs text-[#4a3a3a] mt-1">An ISO 9001:2015 Certified Company</p>
//               </div>
//               {/* QR Code Placeholder - Hidden on very small screens */}
//               <div className="hidden xs:flex w-12 h-12 sm:w-16 sm:h-16 bg-white border-2 border-[#2b1d1d] rounded items-center justify-center flex-shrink-0">
//                 <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#2b1d1d] opacity-80 rounded-sm grid grid-cols-4 gap-px p-1">
//                   {[...Array(16)].map((_, i) => (
//                     <div key={i} className={`bg-white ${Math.random() > 0.5 ? 'opacity-100' : 'opacity-0'}`} />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Event Title */}
//           <div className="mb-4 sm:mb-6">
//             <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2b1d1d] mb-2 leading-tight">
//               49<sup className="text-sm sm:text-base md:text-lg">TH</sup> INDIA{' '}
//               <span className="text-[#4a9b8e]">CARPET</span>
//             </div>
//             <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2b1d1d] mb-3">EXPO</div>

//             {/* Date */}
//             <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#2b1d1d] mb-4">
//               11<sup className="text-xs sm:text-sm">TH</sup> - 14<sup className="text-xs sm:text-sm">TH</sup> OCTOBER, 2025
//             </div>

//             {/* Visit Us Button */}
//             <div className="inline-block mobile-touch bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-bold text-lg sm:text-xl shadow-lg transform hover:scale-105 transition-transform duration-200 focus-enhanced">
//               VISIT US
//             </div>
//           </div>

//           {/* Location Info */}
//           <div className="mb-4 sm:mb-6">
//             <h3 className="text-lg sm:text-xl font-bold text-[#2b1d1d] mb-2">LOCATION:</h3>
//             <p className="text-base sm:text-lg text-[#4a3a3a] leading-tight">
//               Bhadohi, Uttar Pradesh,<br />
//               India
//             </p>
//           </div>

//           {/* Venue and Stall Info */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
//             <div className="text-center sm:text-left">
//               <h4 className="font-bold text-[#2b1d1d] mb-1 text-sm sm:text-base">VENUE:</h4>
//               <p className="text-xs sm:text-sm text-[#4a3a3a] leading-tight">
//                 Carpet Expo Mart, Bhadohi
//               </p>
//             </div>
//             <div className="text-center sm:text-left">
//               <h4 className="font-bold text-[#2b1d1d] mb-1 text-sm sm:text-base">STALL NO.</h4>
//               <p className="text-xs sm:text-sm text-[#4a3a3a] leading-tight">
//                 UH-22, (2nd Floor Hall)
//               </p>
//             </div>
//           </div>

//           {/* Contact Info */}
//           <div className="border-t border-[#c49b63]/30 pt-3 sm:pt-4">
//             <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm text-[#4a3a3a]">
//               <div className="flex items-center gap-1 sm:gap-2">
//                 <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                 </svg>
//                 <span>+91 777 888 6215</span>
//               </div>
//               <div className="flex items-center gap-1 sm:gap-2">
//                 <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//                 <span className="truncate">contact@mktrugs.com</span>
//               </div>
//               <div className="hidden sm:flex items-center gap-2">
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
//                 </svg>
//                 <span>www.mktrugs.com</span>
//               </div>
//             </div>
//           </div>

//           {/* Auto-hide timer indicator */}
//           <div className="mt-3 sm:mt-4 text-xs text-[#4a3a3a]/60">
//             Auto-closes in 10s • Tap outside to close
//           </div>
//         </div>

//         {/* Decorative Corner Elements */}
//         <div className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 w-4 h-4 sm:w-6 sm:h-6 border-l-2 border-t-2 sm:border-l-4 sm:border-t-4 border-[#c49b63] rounded-tl-lg"></div>
//         <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 border-r-2 border-t-2 sm:border-r-4 sm:border-t-4 border-[#c49b63] rounded-tr-lg"></div>
//         <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-4 h-4 sm:w-6 sm:h-6 border-l-2 border-b-2 sm:border-l-4 sm:border-b-4 border-[#c49b63] rounded-bl-lg"></div>
//         <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 border-r-2 border-b-2 sm:border-r-4 sm:border-b-4 border-[#c49b63] rounded-br-lg"></div>
//       </div>
//     </div>
//   );
// };

// export default ExpoPopup;

// ----------------------------------------

import React, { useEffect } from "react";

const ExpoPopup = ({ isOpen, onClose, imageSrc }) => {
  // Auto-close after 10 seconds + Esc key
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => onClose(), 10000);

      const handleKeyDown = (event) => {
        if (event.key === "Escape") onClose();
      };
      document.addEventListener("keydown", handleKeyDown);

      return () => {
        clearTimeout(timer);
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm cursor-pointer transition-opacity duration-300"
        onClick={onClose}
        role="button"
        aria-label="Close popup by clicking outside"
      />

      {/* Popup container */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#c49b63]/30 
        transform animate-[fadeZoom_0.4s_ease-out]
        w-[80vw] sm:w-[65vw] md:w-[45vw] max-w-md"
      >
        {/* Close Button (inside the popup now) */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 bg-red-600 hover:bg-red-700 
          text-white rounded-full flex items-center justify-center shadow-lg transition duration-200 z-20 border border-white/70"
          aria-label="Close popup"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Image */}
        <img
          src={imageSrc}
          alt="Expo Banner"
          className="w-full h-auto object-contain select-none rounded-2xl"
        />

        {/* Footer note */}
        <div className="text-center py-2 text-xs text-[#4a3a3a]/60 bg-[#f8f5ef]">
          Auto-closes in 10s • Tap outside or press Esc to close
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes fadeZoom {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default ExpoPopup;
