// import React, { useState } from "react";
// import SEOHelmet from "./SEOHelmet";
// import { Link } from "react-router-dom";

// const CareGuide = () => {
//   const [activeTab, setActiveTab] = useState("daily");

//   const careGuideData = {
//     daily: {
//       title: "Daily & Weekly Maintenance",
//       content: [
//         {
//           title: "Regular Vacuuming",
//           icon: "🧹",
//           tips: [
//             "Vacuum weekly for normal traffic, 2-3 times weekly for high-traffic areas",
//             "Use suction-only mode without beater bars or rotating brushes",
//             "Vacuum in the direction of the fiber grain, then against it",
//             "Focus on edges and corners where dirt accumulates",
//             "For delicate areas, use a handheld vacuum with upholstery attachment"
//           ]
//         },
//         {
//           title: "Quick Cleaning Routine",
//           icon: "✨",
//           tips: [
//             "Shake out small rugs outdoors daily to remove surface dust",
//             "Use a soft-bristled brush weekly to gently remove embedded dirt",
//             "Inspect for stains, loose fibers, or wear patterns regularly",
//             "Ensure good airflow around and under the rug"
//           ]
//         }
//       ]
//     },
//     stains: {
//       title: "Stain Removal & Spot Cleaning",
//       content: [
//         {
//           title: "Immediate Response Protocol",
//           icon: "⚡",
//           tips: [
//             "Act quickly - Address spills within minutes to prevent permanent staining",
//             "Blot, don't rub - Use clean, white cloths to absorb liquid from outside in",
//             "Remove solids - Scrape away solid matter with a spoon or dull knife",
//             "Test first - Always test cleaning solutions in an inconspicuous area"
//           ]
//         },
//         {
//           title: "Natural Cleaning Solutions",
//           icon: "🌿",
//           tips: [
//             "General stains: Mix 1 tsp white vinegar + 1 tsp liquid dish soap + 1 cup warm water",
//             "Coffee/Tea: Cold water rinse, then vinegar solution",
//             "Wine: Salt absorption immediately, then cold water and vinegar solution",
//             "Oil-based: Sprinkle cornstarch, let sit 15 minutes, vacuum, then treat with dish soap solution",
//             "Pet accidents: Use enzyme-based cleaner specifically for natural fibers",
//             "Blood: Cold water only, never hot water which sets the protein"
//           ]
//         },
//         {
//           title: "What to Avoid",
//           icon: "🚫",
//           tips: [
//             "Harsh chemicals: Bleach, strong detergents, or chemical stain removers",
//             "Excessive water: Over-wetting can cause shrinkage and weakening",
//             "Heat treatment: Never use hot water or heat guns on natural fiber rugs",
//             "Rubbing: Aggressive scrubbing damages fiber structure"
//           ]
//         }
//       ]
//     },
//     environment: {
//       title: "Environmental Care",
//       content: [
//         {
//           title: "Sunlight Protection",
//           icon: "☀️",
//           tips: [
//             "Rotate rugs monthly to prevent uneven fading",
//             "Use UV-filtering blinds or curtains in sunny rooms",
//             "LED lights produce less heat and UV than incandescent bulbs",
//             "Ask about UV-resistant treatments for outdoor use"
//           ]
//         },
//         {
//           title: "Humidity & Moisture Control",
//           icon: "💧",
//           tips: [
//             "Maintain 30-50% relative humidity",
//             "Use dehumidifiers in basements or naturally humid environments",
//             "Ensure proper ventilation in enclosed spaces",
//             "Monitor humidity changes during weather transitions"
//           ]
//         },
//         {
//           title: "Temperature Stability",
//           icon: "🌡️",
//           tips: [
//             "Avoid placing rugs near heating/cooling vents",
//             "Ensure compatibility with underfloor heating systems",
//             "Keep stored rugs in climate-controlled environments"
//           ]
//         }
//       ]
//     },
//     professional: {
//       title: "Professional Cleaning & Storage",
//       content: [
//         {
//           title: "When to Call Professionals",
//           icon: "👨‍🔧",
//           tips: [
//             "Annual deep cleaning for high-traffic areas",
//             "Stubborn stains that home remedies can't remove",
//             "Water damage from flooding or major spills",
//             "Odor issues that persist after home treatment",
//             "Valuable rugs requiring specialized care"
//           ]
//         },
//         {
//           title: "Proper Storage",
//           icon: "📦",
//           tips: [
//             "Clean thoroughly before storage to prevent pest attraction",
//             "Ensure complete drying - no moisture remains",
//             "Roll rugs face-side in around an acid-free tube",
//             "Use breathable cotton sheets or muslin, never plastic",
//             "Store in cool, dry space with stable temperature (60-70°F)",
//             "Inspect every 3-6 months for pest damage or moisture"
//           ]
//         }
//       ]
//     },
//     fiber: {
//       title: "Care by Fiber Type",
//       content: [
//         {
//           title: "Jute Rugs",
//           icon: "🌾",
//           tips: [
//             "Naturally strong but avoid excessive moisture",
//             "Dry cleaning preferred for deep cleaning",
//             "Essential to dry quickly to prevent fiber weakening"
//           ]
//         },
//         {
//           title: "Sisal Rugs",
//           icon: "🪴",
//           tips: [
//             "Excellent for high-traffic areas",
//             "Can handle slightly more moisture than jute",
//             "Regular vacuuming prevents matting"
//           ]
//         },
//         {
//           title: "Banana Fiber Rugs",
//           icon: "🍌",
//           tips: [
//             "Natural antimicrobial properties - resistant to bacteria and odors",
//             "Gentle solutions work best",
//             "Protect from direct sunlight to maintain color"
//           ]
//         },
//         {
//           title: "Seagrass Rugs",
//           icon: "🌊",
//           tips: [
//             "Natural resistance to moisture",
//             "Can be wiped with damp cloth for surface cleaning",
//             "Versatile for various indoor/outdoor environments"
//           ]
//         },
//         {
//           title: "Cotton Blend Rugs",
//           icon: "🌸",
//           tips: [
//             "More forgiving of moisture than pure natural fibers",
//             "Small cotton rugs may be machine washable (check label)",
//             "Regular rotation prevents premature wear"
//           ]
//         }
//       ]
//     },
//     troubleshooting: {
//       title: "Troubleshooting Common Issues",
//       content: [
//         {
//           title: "Shedding",
//           icon: "🧵",
//           tips: [
//             "Normal process for new natural fiber rugs",
//             "Typically reduces after 3-6 months of regular vacuuming",
//             "Manage with gentle vacuuming and occasional soft brushing"
//           ]
//         },
//         {
//           title: "Loose Threads",
//           icon: "✂️",
//           tips: [
//             "Never pull loose threads - trim with sharp scissors close to the base",
//             "For significant fraying, consult rug restoration experts",
//             "Address small issues quickly to prevent larger problems"
//           ]
//         },
//         {
//           title: "Odor Management",
//           icon: "👃",
//           tips: [
//             "Baking soda treatment: Sprinkle, let sit overnight, vacuum thoroughly",
//             "Fresh air: Outdoor airing on dry, breezy days",
//             "Professional cleaning for persistent odors, especially pet-related"
//           ]
//         },
//         {
//           title: "Uneven Wear",
//           icon: "⚖️",
//           tips: [
//             "Regular rotation prevents uneven wear patterns",
//             "Use furniture placement to alter foot traffic patterns",
//             "Consult experts for significant wear issues"
//           ]
//         }
//       ]
//     }
//   };

//   const tabs = [
//     { id: "daily", label: "Daily Care", icon: "🏠" },
//     { id: "stains", label: "Stain Removal", icon: "🧽" },
//     { id: "environment", label: "Environment", icon: "🌍" },
//     { id: "professional", label: "Professional", icon: "👨‍🔧" },
//     { id: "fiber", label: "By Fiber Type", icon: "🌾" },
//     { id: "troubleshooting", label: "Troubleshooting", icon: "🔧" }
//   ];

//   const seasonalCalendar = [
//     {
//       season: "Spring (March-May)",
//       tasks: [
//         "Deep cleaning after winter",
//         "Inspect for moth or pest damage",
//         "Rotate rugs after heavy winter use",
//         "Professional cleaning for high-traffic pieces"
//       ]
//     },
//     {
//       season: "Summer (June-August)",
//       tasks: [
//         "Monitor humidity levels",
//         "Protect from excessive sunlight",
//         "Store winter rugs properly",
//         "Address any mold/mildew issues promptly"
//       ]
//     },
//     {
//       season: "Fall (September-November)",
//       tasks: [
//         "Prepare for increased indoor time",
//         "Deep vacuum before heating season",
//         "Check rug pads for wear",
//         "Professional inspection for valuable pieces"
//       ]
//     },
//     {
//       season: "Winter (December-February)",
//       tasks: [
//         "Monitor for salt damage near entries",
//         "Maintain proper humidity with heating systems",
//         "Regular vacuuming due to increased indoor traffic",
//         "Plan for spring deep cleaning"
//       ]
//     }
//   ];

//   return (
//     <>
//       <SEOHelmet
//         title="Complete Rug Care Guide - Natural Fiber Maintenance | MKT Rugs"
//         description="Comprehensive care instructions for handcrafted natural fiber rugs. Learn proper maintenance, cleaning, and storage techniques from MKT Rugs experts."
//         canonical="https://www.mktrugs.com/care-guide"
//         type="website"
//       />
      
//       <div className="min-h-screen bg-bgLight pt-8">
//         {/* Header Section */}
//         <section className="py-12 md:py-16 bg-gradient-to-r from-primary/5 to-gold/5">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <div className="inline-flex items-center gap-3 mb-4">
//               <span className="w-8 h-[2px] bg-gold"></span>
//               <span className="uppercase tracking-[0.3em] text-sm text-gold font-accent">
//                 Care Instructions
//               </span>
//               <span className="w-8 h-[2px] bg-gold"></span>
//             </div>
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-textDark mb-6">
//               Complete Rug Care Guide
//             </h1>
//             <p className="text-lg text-textDark/80 font-body leading-relaxed max-w-3xl mx-auto">
//               Essential care tips for your handcrafted natural fiber rugs. Proper maintenance 
//               ensures these beautiful pieces maintain their appearance and durability for years to come.
//             </p>
//           </div>
//         </section>

//         {/* Navigation Tabs */}
//         <section className="py-8 bg-white shadow-sm">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex flex-wrap justify-center gap-2 md:gap-4">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-body transition-all duration-200 ${
//                     activeTab === tab.id
//                       ? "bg-primary text-white shadow-md"
//                       : "bg-gray-100 text-textDark hover:bg-primary/10 hover:text-primary"
//                   }`}
//                 >
//                   <span className="text-lg">{tab.icon}</span>
//                   <span className="hidden sm:inline">{tab.label}</span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Content Section */}
//         <section className="py-12 md:py-16">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="mb-8">
//               <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-textDark mb-4 text-center">
//                 {careGuideData[activeTab].title}
//               </h2>
//             </div>
            
//             <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//               {careGuideData[activeTab].content.map((section, index) => (
//                 <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
//                   <div className="flex items-center gap-3 mb-4">
//                     <span className="text-2xl">{section.icon}</span>
//                     <h3 className="text-xl font-heading font-semibold text-textDark">
//                       {section.title}
//                     </h3>
//                   </div>
//                   <ul className="space-y-3">
//                     {section.tips.map((tip, tipIndex) => (
//                       <li key={tipIndex} className="flex items-start gap-3">
//                         <span className="text-primary text-sm mt-1">•</span>
//                         <span className="text-textDark/80 font-body text-sm leading-relaxed">
//                           {tip}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Seasonal Care Calendar */}
//         <section className="py-12 md:py-16 bg-white">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-12">
//               <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-textDark mb-4">
//                 Seasonal Care Calendar
//               </h2>
//               <p className="text-lg text-textDark/80 font-body leading-relaxed max-w-2xl mx-auto">
//                 Follow this seasonal guide to keep your rugs in optimal condition year-round.
//               </p>
//             </div>
            
//             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//               {seasonalCalendar.map((season, index) => (
//                 <div key={index} className="bg-gradient-to-br from-primary/5 to-gold/5 rounded-lg p-6 border border-gray-100">
//                   <h3 className="text-lg font-heading font-semibold text-textDark mb-4">
//                     {season.season}
//                   </h3>
//                   <ul className="space-y-2">
//                     {season.tasks.map((task, taskIndex) => (
//                       <li key={taskIndex} className="flex items-start gap-2">
//                         <span className="text-primary text-sm mt-1">✓</span>
//                         <span className="text-textDark/80 font-body text-sm leading-relaxed">
//                           {task}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Emergency Response */}
//         <section className="py-12 md:py-16 bg-red-50">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-12">
//               <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-textDark mb-4">
//                 Emergency Response Guide
//               </h2>
//               <p className="text-lg text-textDark/80 font-body leading-relaxed">
//                 Quick action steps for emergency situations.
//               </p>
//             </div>
            
//             <div className="grid gap-6 md:grid-cols-3">
//               <div className="bg-white rounded-lg p-6 border-l-4 border-blue-500">
//                 <h3 className="text-lg font-heading font-semibold text-textDark mb-3 flex items-center gap-2">
//                   <span>💧</span> Water Damage
//                 </h3>
//                 <ol className="space-y-2 text-sm text-textDark/80">
//                   <li>1. Remove water immediately with towels and wet/dry vacuum</li>
//                   <li>2. Increase air circulation with fans and dehumidifiers</li>
//                   <li>3. Contact restoration experts within 24-48 hours</li>
//                   <li>4. Dry completely within 48-72 hours to prevent mold</li>
//                 </ol>
//               </div>
              
//               <div className="bg-white rounded-lg p-6 border-l-4 border-orange-500">
//                 <h3 className="text-lg font-heading font-semibold text-textDark mb-3 flex items-center gap-2">
//                   <span>🔥</span> Fire/Smoke Damage
//                 </h3>
//                 <ol className="space-y-2 text-sm text-textDark/80">
//                   <li>1. Professional assessment required for all smoke-exposed textiles</li>
//                   <li>2. Avoid DIY attempts - smoke particles require specialized removal</li>
//                   <li>3. Professional ozone treatment may be necessary for odor elimination</li>
//                   <li>4. Document damage with photos for insurance</li>
//                 </ol>
//               </div>
              
//               <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
//                 <h3 className="text-lg font-heading font-semibold text-textDark mb-3 flex items-center gap-2">
//                   <span>🐛</span> Pest Infestation
//                 </h3>
//                 <ol className="space-y-2 text-sm text-textDark/80">
//                   <li>1. Identify pest type (moths, beetles, or other fabric-eating insects)</li>
//                   <li>2. Isolate affected rugs to prevent spread</li>
//                   <li>3. Professional treatment required for valuable or large rugs</li>
//                   <li>4. Address underlying humidity or cleanliness issues</li>
//                 </ol>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Support Contact */}
//         <section className="py-12 bg-gradient-to-r from-primary/5 to-gold/5">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-textDark mb-4">
//               Need Personalized Care Advice?
//             </h2>
//             <p className="text-lg text-textDark/80 font-body mb-6 leading-relaxed">
//               Our care specialists are available to provide fiber-specific care instructions 
//               and professional cleaning referrals in your area.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
//               <a
//                 href="https://wa.me/917778886215?text=Hi%20MKT%20RUGS,%20I%20need%20care%20advice%20for%20my%20rug."
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full font-body hover:bg-green-700 transition-colors duration-200"
//               >
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.588z"/>
//                 </svg>
//                 WhatsApp Care Team
//               </a>
//               <a
//                 href="mailto:care@mktrugs.com"
//                 className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-body hover:bg-primary/90 transition-colors duration-200"
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//                 Email Care Team
//               </a>
//               <a
//                 href="tel:+917778886215"
//                 className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-full font-body hover:bg-primary hover:text-white transition-all duration-200"
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                 </svg>
//                 Call Us
//               </a>
//             </div>
            
//             <p className="text-sm text-textDark/60 font-body">
//               Care Support Hours: Monday-Saturday, 10:00 AM - 6:00 PM IST
//             </p>
            
//             <div className="mt-8 pt-6 border-t border-textDark/10">
//               <p className="text-lg text-textDark font-body font-medium mb-2">
//                 Want more information about our rugs?
//               </p>
//               <Link 
//                 to="/faq" 
//                 className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-body transition-colors duration-200"
//               >
//                 Visit our FAQ page
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </Link>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default CareGuide;

import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SEOHelmet from "./SEOHelmet";

const CareGuide = () => {
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/Rug-Care-Guide.md")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load care guide");
        }
        return response.text();
      })
      .then((text) => {
        setMarkdown(text);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-bgLight flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-textDark/60 font-body">Loading care guide...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-bgLight flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <p className="text-red-600 font-body mb-4">Error: {error}</p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-primary text-white rounded-full font-body hover:bg-primary/90 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHelmet
        title="Complete Rug Care Guide | MKT Rugs"
        description="Comprehensive guide to maintaining and cleaning your natural fiber rugs. Expert tips for jute, sisal, banana fiber, seagrass, and cotton blend rugs."
        canonical="https://www.mktrugs.com/care-guide"
        type="article"
      />

      <div className="min-h-screen bg-bgLight pt-8">
        {/* Header */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-primary/5 to-gold/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-gold"></span>
              <span className="uppercase tracking-[0.3em] text-sm text-gold font-accent">
                Expert Care Instructions
              </span>
              <span className="w-8 h-[2px] bg-gold"></span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-textDark mb-6">
              Complete Rug Care Guide
            </h1>
            <p className="text-lg text-textDark/80 font-body leading-relaxed max-w-3xl mx-auto">
              Everything you need to know to maintain your handcrafted natural fiber rugs for decades of beauty.
            </p>
          </div>
        </section>

        {/* Markdown Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="prose prose-lg prose-slate max-w-none
              prose-headings:font-heading prose-headings:text-textDark
              prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-6 prose-h1:mt-8
              prose-h2:text-3xl prose-h2:font-semibold prose-h2:mb-4 prose-h2:mt-8 prose-h2:text-primary prose-h2:border-b prose-h2:border-gold/30 prose-h2:pb-2
              prose-h3:text-2xl prose-h3:font-semibold prose-h3:mb-3 prose-h3:mt-6 prose-h3:text-textDark
              prose-h4:text-xl prose-h4:font-semibold prose-h4:mb-2 prose-h4:mt-4 prose-h4:text-textDark/90
              prose-p:text-textDark/80 prose-p:font-body prose-p:leading-relaxed prose-p:mb-4
              prose-ul:my-4 prose-ul:space-y-2
              prose-li:text-textDark/80 prose-li:font-body prose-li:leading-relaxed
              prose-strong:text-textDark prose-strong:font-semibold
              prose-a:text-primary prose-a:no-underline hover:prose-a:text-primary/80 prose-a:transition-colors
              prose-code:text-primary prose-code:bg-primary/5 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
              prose-blockquote:border-l-4 prose-blockquote:border-gold prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-textDark/70
              prose-hr:border-gold/30 prose-hr:my-8
              prose-table:border-collapse prose-table:w-full
              prose-th:bg-primary/5 prose-th:p-3 prose-th:text-left prose-th:font-semibold prose-th:text-textDark
              prose-td:p-3 prose-td:border prose-td:border-gray-200 prose-td:text-textDark/80
            ">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markdown}
              </ReactMarkdown>
            </article>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-r from-primary/5 to-gold/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-textDark mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-textDark/80 font-body mb-6 leading-relaxed">
              Our care specialists are ready to help with personalized advice for your specific rug.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:care@mktrugs.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-body hover:bg-primary/90 transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
              <a
                href="https://wa.me/917778886215?text=Hi%20MKT%20RUGS,%20I%20need%20care%20advice%20for%20my%20rug."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full font-body hover:bg-green-700 transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary border-2 border-primary rounded-full font-body hover:bg-primary/5 transition-colors duration-200"
              >
                Contact Form
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareGuide;
