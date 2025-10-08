// import React, { useState } from "react";
// import SEOHelmet from "./SEOHelmet";

// const FAQ = () => {
//   const [openSections, setOpenSections] = useState({});

//   const toggleSection = (sectionId) => {
//     setOpenSections(prev => ({
//       ...prev,
//       [sectionId]: !prev[sectionId]
//     }));
//   };

//   const faqSections = [
//     {
//       id: "materials",
//       title: "Materials & Quality",
//       questions: [
//         {
//           question: "What materials do you use in your handcrafted rugs?",
//           answer: "At MKT Rugs, we specialize in premium natural fiber rugs crafted from sustainably sourced materials including:\n• Jute rugs - Hand-spun from Bengali jute fibers for durability and natural texture\n• Sisal rugs - Strong, eco-friendly fibers perfect for high-traffic areas\n• Banana fiber rugs - Sustainable and naturally antimicrobial\n• Cotton blends - For softness and comfort in residential spaces\n• Wool blends - Premium quality for luxury applications\n• Seagrass rugs - Water-resistant and ideal for coastal environments\n\nAll our natural fiber rugs are processed using traditional hand-spinning, hand-braiding, and hand-twisting techniques passed down through generations of artisans in West Bengal, India."
//         },
//         {
//           question: "Are your rugs eco-friendly and sustainable?",
//           answer: "Yes, absolutely. MKT Rugs is committed to sustainable manufacturing:\n• 100% natural fibers sourced within a 150km radius of our facilities\n• Zero harmful chemicals in our processing methods\n• Biodegradable materials that won't harm the environment\n• Fair trade practices supporting over 1,000 artisan families\n• Carbon-neutral shipping options available for bulk orders\n• Take-back programs for end-of-life rug recycling"
//         },
//         {
//           question: "What quality certifications do you have?",
//           answer: "MKT Rugs maintains the highest quality standards with:\n• ISO 9001:2015 Quality Management System certification\n• SEDEX-SMETA social compliance certification\n• GOTS-aligned processes for organic materials\n• CEPC recognition from the Carpet Export Promotion Council\n• 5-step quality control process for every handcrafted rug\n• NFC-tagged products for authenticity verification"
//         }
//       ]
//     },
//     {
//       id: "ordering",
//       title: "Ordering & Customization",
//       questions: [
//         {
//           question: "What is your minimum order quantity (MOQ)?",
//           answer: "Our flexible MOQ depends on the product type:\n• Standard collections: 50 square meters minimum\n• Custom designs: 100 square meters minimum\n• Sample orders: Available in 5-10 piece quantities\n• Bulk orders: No maximum limit with competitive pricing tiers"
//         },
//         {
//           question: "Can you create custom rug designs?",
//           answer: "Yes! MKT Rugs offers comprehensive customization services:\n• In-house CAD studio for digital design development\n• Color matching to your specific requirements\n• Size customization from small accent pieces to large commercial installations\n• Pattern modification of existing designs\n• Brand integration with logos or specific motifs\n• Material combinations to meet performance requirements\n\nCustom design process: Design consultation → CAD rendering → Sample approval → Production → Quality control → Shipping"
//         },
//         {
//           question: "How long does it take to fulfill custom orders?",
//           answer: "Our integrated production system ensures faster delivery:\n• Sample production: 7-14 business days\n• Standard orders: 21-35 business days\n• Custom designs: 35-45 business days\n• Bulk orders (500+ sqm): 45-60 business days\n\nNote: MKT Rugs delivers orders 35% faster than traditional supply chains through our integrated \"Farm to Floor\" approach."
//         },
//         {
//           question: "Do you provide product samples?",
//           answer: "Yes, we offer multiple sampling options:\n• Digital swatches via email (free)\n• Physical samples (4\" x 4\") - $15 per sample, refundable with orders over $500\n• Sample sets of popular collections - $75 per set\n• Loan samples (12\" x 12\") for qualified B2B clients - returnable within 30 days"
//         }
//       ]
//     },
//     {
//       id: "shipping",
//       title: "Shipping & Logistics",
//       questions: [
//         {
//           question: "Which countries do you ship to?",
//           answer: "MKT Rugs exports handcrafted rugs to five continents:\n• North America: USA, Canada, Mexico\n• Europe: All EU countries, UK, Norway, Switzerland\n• Asia-Pacific: Australia, New Zealand, Japan, Singapore, South Korea\n• Middle East: UAE, Saudi Arabia, Qatar, Kuwait\n• South America: Brazil, Chile, Argentina"
//         },
//         {
//           question: "What are your shipping methods and costs?",
//           answer: "We offer flexible shipping solutions:\n• Sea freight (most economical): 25-45 days transit\n• Air freight (fastest): 5-10 days transit\n• Express courier (for samples): 3-7 days transit\n• FOB pricing available from Kolkata port\n• CIF pricing with insurance included\n• Door-to-door delivery in major cities\n\nShipping costs calculated based on volume, weight, destination, and urgency. Contact our export team for detailed quotations."
//         },
//         {
//           question: "How do you package rugs for international shipping?",
//           answer: "Our export-grade packaging ensures safe delivery:\n• Moisture-resistant wrapping for sea freight protection\n• Reinforced cardboard tubes for rolled rugs\n• Wooden crates for flat-packed premium rugs\n• Individual poly-wrapping for hygiene protection\n• Clear labeling with handling instructions\n• Documentation packets for customs clearance"
//         }
//       ]
//     },
//     {
//       id: "payment",
//       title: "Payments & Terms",
//       questions: [
//         {
//           question: "What payment methods do you accept?",
//           answer: "MKT Rugs accepts various B2B payment methods:\n• Letter of Credit (L/C) - Most secure for large orders\n• Wire transfer (T/T) - 30% advance, 70% before shipment\n• Trade finance through authorized banks\n• PayPal for smaller orders and samples\n• Western Union for urgent sample payments"
//         },
//         {
//           question: "What are your payment terms?",
//           answer: "Standard payment terms for export orders:\n• New clients: 50% advance, 50% before shipment\n• Established clients: 30% advance, 70% against shipping documents\n• Large orders (1000+ sqm): Letter of Credit preferred\n• Sample orders: 100% advance payment required"
//         },
//         {
//           question: "Do you offer trade credit?",
//           answer: "Yes, qualified B2B clients can apply for trade credit:\n• Credit evaluation based on business history and references\n• Net 30 terms available after 6 months of successful transactions\n• Extended terms for volume commitments\n• Credit insurance available through our partner banks"
//         }
//       ]
//     },
//     {
//       id: "warranty",
//       title: "Returns & Warranty",
//       questions: [
//         {
//           question: "What is your return policy?",
//           answer: "MKT Rugs stands behind every handcrafted rug:\n• Quality guarantee: Free replacement for manufacturing defects within 30 days\n• Sample returns: Physical samples returnable within 15 days for full refund\n• Bulk order issues: Case-by-case evaluation with fair resolution\n• Damage claims: Must be reported within 48 hours of delivery with photographic evidence"
//         },
//         {
//           question: "Do you offer warranties on your rugs?",
//           answer: "Yes, we provide comprehensive warranties:\n• 1-year warranty against manufacturing defects\n• Color-fastness guarantee for 6 months under normal use\n• Structural integrity warranty for 2 years\n• Artisan craftsmanship guarantee - we'll repair minor issues free of charge\n\nWarranty excludes normal wear, misuse, or damage from improper care."
//         },
//         {
//           question: "What if my order arrives damaged?",
//           answer: "Our damage resolution process:\n1. Immediate notification - Contact us within 48 hours\n2. Photo documentation - Send clear images of damaged items\n3. Assessment - Our team evaluates the damage extent\n4. Resolution options: Replacement, repair, or partial refund\n5. Fast-track replacement - Priority production for verified damage claims"
//         }
//       ]
//     },
//     {
//       id: "care",
//       title: "Product Care & Maintenance",
//       questions: [
//         {
//           question: "How should I care for natural fiber rugs?",
//           answer: "Proper care extends the life of your handcrafted rugs:\n• Regular vacuuming with low suction to prevent fiber damage\n• Immediate spill cleanup with clean, dry cloths\n• Professional cleaning annually for high-traffic areas\n• Rotation every 3-6 months for even wear\n• Humidity control - maintain 30-50% relative humidity\n• Direct sunlight protection to prevent fading\n\nFor detailed care instructions, see our comprehensive Rug Care Guide."
//         },
//         {
//           question: "Are your rugs suitable for high-traffic commercial areas?",
//           answer: "Yes, many of our natural fiber rugs are designed for commercial use:\n• Sisal rugs - Excellent for offices and retail spaces\n• Jute rugs with reinforced backing - Perfect for hotels and restaurants\n• Cotton-blend rugs - Ideal for healthcare and educational facilities\n• Custom backing options available for enhanced durability"
//         },
//         {
//           question: "Can natural fiber rugs be used outdoors?",
//           answer: "Our indoor/outdoor collections are specifically designed for versatility:\n• Weather-resistant treatments for outdoor use\n• Mold and mildew resistance for humid environments\n• UV protection to prevent color fading\n• Quick-dry materials for easy maintenance\n• Coastal Wave Collection - Specially designed for outdoor applications"
//         }
//       ]
//     }
//   ];

//   return (
//     <>
//       <SEOHelmet
//         title="FAQ - Handcrafted Natural Fiber Rugs | MKT Rugs"
//         description="Get answers to frequently asked questions about MKT Rugs' handcrafted natural fiber rugs, custom orders, shipping, and care instructions."
//         canonical="https://www.mktrugs.com/faq"
//         type="website"
//       />
      
//       <div className="min-h-screen bg-bgLight pt-8">
//         {/* Header Section */}
//         <section className="py-12 md:py-16 bg-gradient-to-r from-primary/5 to-gold/5">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <div className="inline-flex items-center gap-3 mb-4">
//               <span className="w-8 h-[2px] bg-gold"></span>
//               <span className="uppercase tracking-[0.3em] text-sm text-gold font-accent">
//                 Help Center
//               </span>
//               <span className="w-8 h-[2px] bg-gold"></span>
//             </div>
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-textDark mb-6">
//               Frequently Asked Questions
//             </h1>
//             <p className="text-lg text-textDark/80 font-body leading-relaxed max-w-2xl mx-auto">
//               Find answers to common questions about our handcrafted natural fiber rugs, 
//               ordering process, shipping, and care instructions.
//             </p>
//           </div>
//         </section>

//         {/* FAQ Sections */}
//         <section className="py-12 md:py-16">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="space-y-8">
//               {faqSections.map((section) => (
//                 <div key={section.id} className="bg-white rounded-lg shadow-sm border border-gray-100">
//                   <button
//                     onClick={() => toggleSection(section.id)}
//                     className="w-full px-6 py-4 text-left bg-gradient-to-r from-primary/5 to-gold/5 rounded-t-lg hover:from-primary/10 hover:to-gold/10 transition-all duration-200"
//                   >
//                     <div className="flex items-center justify-between">
//                       <h2 className="text-xl font-heading font-semibold text-textDark">
//                         {section.title}
//                       </h2>
//                       <svg
//                         className={`w-5 h-5 text-primary transform transition-transform duration-200 ${
//                           openSections[section.id] ? "rotate-180" : ""
//                         }`}
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M19 9l-7 7-7-7"
//                         />
//                       </svg>
//                     </div>
//                   </button>
                  
//                   {openSections[section.id] && (
//                     <div className="px-6 py-4">
//                       <div className="space-y-6">
//                         {section.questions.map((item, index) => (
//                           <div key={index} className="border-l-4 border-gold pl-4">
//                             <h3 className="text-lg font-heading font-medium text-textDark mb-3">
//                               {item.question}
//                             </h3>
//                             <div className="text-textDark/80 font-body leading-relaxed whitespace-pre-line">
//                               {item.answer}
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section className="py-12 bg-gradient-to-r from-primary/5 to-gold/5">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-textDark mb-4">
//               Still Have Questions?
//             </h2>
//             <p className="text-lg text-textDark/80 font-body mb-6 leading-relaxed">
//               Our customer service team is here to help with any additional questions about your handcrafted rug needs.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <a
//                 href="mailto:contact@mktrugs.com"
//                 className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-body hover:bg-primary/90 transition-colors duration-200"
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//                 Email Us
//               </a>
//               <a
//                 href="https://wa.me/917778886215?text=Hi%20MKT%20RUGS,%20I%20have%20an%20enquiry."
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full font-body hover:bg-green-700 transition-colors duration-200"
//               >
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.588z"/>
//                 </svg>
//                 WhatsApp
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
//             <p className="text-sm text-textDark/60 font-body mt-4">
//               Business Hours: Monday-Saturday, 10:00 AM - 6:00 PM IST
//             </p>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default FAQ;

import React, { useState } from "react";
import SEOHelmet from "./SEOHelmet";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What materials are your rugs made from?",
      answer:
        "All MKT Rugs are handcrafted from 100% natural fibers such as jute, sisal, cotton, wool, and banana fiber — sustainably sourced and eco-friendly.",
    },
    {
      question: "Can I customize my rug design?",
      answer:
        "Yes! You can choose colors, sizes, and patterns. Our design team provides CAD previews before production for your approval.",
    },
    {
      question: "What is your minimum order quantity (MOQ)?",
      answer:
        "Standard collections start at 50 sqm, while custom orders begin at 100 sqm. Sample pieces are also available on request.",
    },
    {
      question: "How long does production and shipping take?",
      answer:
        "Typical orders are completed within 3–6 weeks. Shipping times vary based on your location and selected delivery method.",
    },
    {
      question: "Do you provide international shipping?",
      answer:
        "Yes, we export worldwide through reliable shipping partners with full tracking and insurance options.",
    },
    {
      question: "What is your return policy?",
      answer:
        "If you receive a damaged or defective item, notify us within 48 hours with photos. We’ll arrange a replacement or refund promptly.",
    },
  ];

  return (
    <>
      <SEOHelmet
        title="FAQ - MKT Rugs | Handcrafted Natural Fiber Rugs"
        description="Frequently asked questions about MKT Rugs — handcrafted natural fiber rugs, custom designs, shipping, and care."
        canonical="https://www.mktrugs.com/faq"
        type="website"
      />

      <div className="min-h-screen bg-white py-16">
        {/* Header */}
        <header className="max-w-3xl mx-auto text-center px-4 mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 text-lg">
            Find quick answers about our products, customization, and order process.
          </p>
        </header>

        {/* FAQ Accordion */}
        <section className="max-w-3xl mx-auto px-4 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm"
            >
              <button
                className="w-full flex justify-between items-center px-5 py-4 text-left text-gray-800 font-medium hover:bg-gray-50 transition"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? "rotate-180 text-primary" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 bg-gray-50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Contact */}
        <section className="max-w-3xl mx-auto px-4 text-center mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-6">
            We’re happy to help! Reach out to our support team below.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:contact@mktrugs.com"
              className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition"
            >
              Email Us
            </a>
            <a
              href="https://wa.me/917778886215?text=Hi%20MKT%20Rugs,%20I%20have%20an%20enquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition"
            >
              WhatsApp
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Business Hours: Mon–Sat, 10 AM – 6 PM IST
          </p>
        </section>
      </div>
    </>
  );
};

export default FAQ;
