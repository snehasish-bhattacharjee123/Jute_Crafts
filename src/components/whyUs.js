// // src/pages/WhyUs.jsx
// import React from "react";
// // import heroImg from ""; // ✅ Move your image to src/assets/ (recommended structure)

// const WhyUs = () => {
//   const advantages = [
//     {
//       title: "From Farm to Floor",
//       desc: "We source raw jute and natural fibers within a 50 km radius — reducing carbon footprint while ensuring authentic, traceable craftsmanship.",
//       icon: "🌾",
//     },
//     {
//       title: "Eco-Friendly Production",
//       desc: "Our looms run on clean energy and every fiber is biodegradable. Sustainability is not a trend for us — it's tradition.",
//       icon: "🌱",
//     },
//     {
//       title: "Global Export Expertise",
//       desc: "Trusted by importers worldwide for transparent costing, SEDEX-SMETA compliance, and reliable logistics.",
//       icon: "🌍",
//     },
//     {
//       title: "Design Studio Collaboration",
//       desc: "Our in-house CAD studio lets you co-create bespoke rug patterns and textures — MOQ as low as 50 sqm.",
//       icon: "🎨",
//     },
//     {
//       title: "Skilled Artisans",
//       desc: "Generations of weavers bring unmatched precision to every weave — ensuring durability and timeless beauty.",
//       icon: "🧶",
//     },
//     {
//       title: "Shortest Lead Time",
//       desc: "Integrated production and close-knit sourcing mean 35% faster FOB dispatch times than industry average.",
//       icon: "⏱️",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#f8f5f2] text-[#3c2f2f] font-body">
//       {/* Hero Section */}
//       <section
//         className="relative bg-cover bg-center min-h-[50vh] flex items-center justify-center"
//         style={{ backgroundImage: "url('/images/Home_1.jpg')" }} // ✅ directly from /public
//       >
//         <div className="absolute inset-0 bg-black/50" />
//         <div className="relative z-10 text-center px-6">
//           <h1 className="text-3xl sm:text-5xl font-heading text-white font-semibold drop-shadow-lg">
//             Why Choose MKT Rugs
//           </h1>
//           <p className="mt-3 text-white/90 max-w-2xl mx-auto text-sm sm:text-base">
//             From Farm to Floor — Crafting sustainable, authentic rugs that bring
//             nature into your living space.
//           </p>
//         </div>
//       </section>

//       {/* Core Advantages */}
//       <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-2xl sm:text-3xl font-heading font-semibold mb-4 text-[#2b1d1d]">
//             The MKT Rugs Advantage
//           </h2>
//           <div className="w-20 h-1 bg-[#c49b63] mx-auto rounded-full" />
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {advantages.map((item, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6 text-center"
//             >
//               <div className="text-4xl mb-3">{item.icon}</div>
//               <h3 className="font-heading text-lg font-semibold mb-2 text-[#2b1d1d]">
//                 {item.title}
//               </h3>
//               <p className="text-sm text-[#4a3a3a]/90 leading-relaxed">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="bg-[#c49b63] text-white py-16 text-center">
//         <h2 className="text-2xl sm:text-3xl font-heading font-semibold mb-4">
//           Partner With Us
//         </h2>
//         <p className="max-w-2xl mx-auto text-white/90 mb-6 px-4">
//           Join hands with MKT Rugs to bring ethical craftsmanship and
//           sustainable luxury to global homes.
//         </p>
//         <a
//           href="/contact"
//           className="inline-block bg-white text-[#2b1d1d] font-semibold px-6 py-3 rounded-full hover:bg-[#f8f5f2] transition-colors duration-300"
//         >
//           Get in Touch
//         </a>
//       </section>
//     </div>
//   );
// };

// export default WhyUs;




// ---------------------------------3rd ---------------------

// src/pages/WhyUs.jsx
import React from "react";
import { Helmet } from "react-helmet"; // ✅ For SEO metadata

const advantages = [
  {
    title: "From Farm to Floor",
    desc: "We source raw jute and natural fibers within a 50 km radius — reducing carbon footprint while ensuring authentic, traceable craftsmanship.",
  },
  {
    title: "Eco-Friendly Production",
    desc: "Our looms run on clean energy and every fiber is biodegradable. Sustainability is not a trend for us — it's tradition.",
  },
  {
    title: "Global Export Expertise",
    desc: "Trusted by importers worldwide for transparent costing, SEDEX-SMETA compliance, and reliable logistics.",
  },
  {
    title: "Design Studio Collaboration",
    desc: "Our in-house CAD studio lets you co-create bespoke rug patterns and textures — MOQ as low as 50 sqm.",
  },
  {
    title: "Skilled Artisans",
    desc: "Generations of weavers bring unmatched precision to every weave — ensuring durability and timeless beauty.",
  },
  {
    title: "Shortest Lead Time",
    desc: "Integrated production and close-knit sourcing mean 35% faster FOB dispatch times than industry average.",
  },
];

const WhyUs = () => {
  return (
    <div className="min-h-screen bg-[#f8f5f2] text-[#3c2f2f] font-body">
      {/* SEO Metadata */}
      <Helmet>
        <title>Why Choose MKT Rugs | Sustainable Handmade Rugs</title>
        <meta
          name="description"
          content="Discover why MKT Rugs is the preferred choice for sustainable, handcrafted rugs. From eco-friendly production to skilled artisans, experience the MKT advantage."
        />
        <meta
          name="keywords"
          content="MKT Rugs, Sustainable Rugs, Handmade Rugs, Eco-Friendly Rugs, Artisan Rugs"
        />
        <link rel="canonical" href="https://www.mktrugs.com/why-us" />
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center min-h-[50vh] flex items-center justify-center"
        style={{ backgroundImage: "url('/images/Home_1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl sm:text-5xl font-heading text-white font-semibold drop-shadow-lg">
            Why Choose MKT Rugs
          </h1>
          <p className="mt-3 text-white/90 max-w-2xl mx-auto text-sm sm:text-base">
            Crafting sustainable, authentic rugs that bring nature into your
            living space.
          </p>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="max-w-6xl mx-auto py-20 px-6 sm:px-10">
        <h2 className="text-center text-2xl sm:text-3xl font-heading font-semibold mb-16 text-[#2b1d1d]">
          The MKT Rugs Advantage
        </h2>

        <div className="space-y-16">
          {advantages.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row items-start gap-8 ${
                index % 2 === 1
                  ? "sm:flex-row-reverse sm:items-center"
                  : "sm:items-center"
              }`}
            >
              {/* Number */}
              <div className="text-[#c49b63] text-5xl sm:text-6xl font-bold font-heading leading-none opacity-80 flex-shrink-0 sm:w-[100px] text-center">
                {(index + 1).toString().padStart(2, "0")}
              </div>

              {/* Content */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-heading text-lg sm:text-xl font-semibold mb-2 text-[#2b1d1d]">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#4a3a3a]/90 leading-relaxed max-w-xl mx-auto sm:mx-0">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <a
            href="/contact"
            className="inline-block bg-[#2b1d1d] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#c49b63] transition-colors duration-300"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Split Section with Image & Text */}
      <section className="flex flex-col md:flex-row items-center justify-center bg-[#e9ddd1]">
        <div className="md:w-1/2 w-full p-4">
          <img
            src="/images/Home_1.jpg"
            alt="Skilled artisan"
            className="w-full h-full object-cover rounded-lg scale-95 md:scale-90 mx-auto transition-transform duration-500"
          />
        </div>
        <div className="md:w-1/2 w-full py-12 px-8 md:px-12 text-[#2b1d1d] text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-heading font-semibold mb-4">
            Designed for Sustainable Living
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-[#4a3a3a]/90">
            Each MKT Rug is a story of nature, craft, and community. We empower
            artisans, preserve traditional techniques, and ensure your floors
            carry the warmth of purpose and authenticity.
          </p>
        </div>
      </section>

      {/* Optional Call-To-Action at Bottom */}
      <section className="bg-[#f3ebe3] py-16 text-center">
        <h4 className="text-xl sm:text-2xl font-semibold mb-6 text-[#2b1d1d]">
          Ready to Transform Your Space?
        </h4>
        <a
          href="/contact"
          className="inline-block bg-[#c49b63] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#2b1d1d] transition-colors duration-300"
        >
          Contact Us Today
        </a>
      </section>
    </div>
  );
};

export default WhyUs;



// src/pages/WhyUs.jsx
// -------------------------------------------------------------------------------
// import React from "react";
// import { Helmet } from "react-helmet";

// const advantages = [
//   {
//     title: "From Farm to Floor",
//     desc: "We source raw jute and natural fibers within a 50 km radius — reducing carbon footprint while ensuring authentic, traceable craftsmanship.",
//   },
//   {
//     title: "Eco-Friendly Production",
//     desc: "Our looms run on clean energy and every fiber is biodegradable. Sustainability is not a trend for us — it's tradition.",
//   },
//   {
//     title: "Global Export Expertise",
//     desc: "Trusted by importers worldwide for transparent costing, SEDEX-SMETA compliance, and reliable logistics.",
//   },
//   {
//     title: "Design Studio Collaboration",
//     desc: "Our in-house CAD studio lets you co-create bespoke rug patterns and textures — MOQ as low as 50 sqm.",
//   },
//   {
//     title: "Skilled Artisans",
//     desc: "Generations of weavers bring unmatched precision to every weave — ensuring durability and timeless beauty.",
//   },
//   {
//     title: "Shortest Lead Time",
//     desc: "Integrated production and close-knit sourcing mean 35% faster FOB dispatch times than industry average.",
//   },
// ];

// const WhyUs = () => {
//   return (
//     <div className="min-h-screen bg-[#f8f5f2] text-[#3c2f2f] font-body">
//       {/* SEO Metadata */}
//       <Helmet>
//         <title>Why Choose MKT Rugs | Sustainable Handmade Rugs</title>
//         <meta
//           name="description"
//           content="Discover why MKT Rugs is the preferred choice for sustainable, handcrafted rugs. From eco-friendly production to skilled artisans, experience the MKT advantage."
//         />
//         <meta
//           name="keywords"
//           content="MKT Rugs, Sustainable Rugs, Handmade Rugs, Eco-Friendly Rugs, Artisan Rugs"
//         />
//         <link rel="canonical" href="https://www.mktrugs.com/why-us" />
//       </Helmet>

//       {/* Hero Section */}
//       <section
//         className="relative bg-cover bg-center min-h-[50vh] flex items-center justify-center"
//         style={{ backgroundImage: "url('/images/Home_1.jpg')" }}
//       >
//         <div className="absolute inset-0 bg-black/50" />
//         <div className="relative z-10 text-center px-6">
//           <h1 className="text-3xl sm:text-5xl font-heading text-white font-semibold drop-shadow-lg">
//             Why Choose MKT Rugs
//           </h1>
//           <p className="mt-3 text-white/90 max-w-2xl mx-auto text-sm sm:text-base">
//             Crafting sustainable, authentic rugs that bring nature into your living space.
//           </p>
//         </div>
//       </section>

//       {/* Advantages Timeline Section */}
//       <section className="max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8 relative">
//         <h2 className="text-center text-2xl sm:text-3xl font-heading font-semibold mb-16">
//           The MKT Rugs Advantage
//         </h2>

//         {/* Vertical Line in Center */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 top-32 bottom-20 w-px bg-[#d4b07b] opacity-50 hidden sm:block z-0" />

//         <div className="space-y-16 relative z-10">
//           {advantages.map((item, index) => {
//             const isEven = index % 2 === 1;
//             return (
//               <div
//                 key={index}
//                 className={`flex flex-col sm:flex-row items-center justify-between gap-10 sm:gap-16 ${
//                   isEven ? "sm:flex-row-reverse" : ""
//                 }`}
//               >
//                 {/* Text */}
//                 <div className="sm:w-1/2 text-left">
//                   <h3 className="font-heading text-lg sm:text-xl font-semibold mb-2 text-[#2b1d1d]">
//                     {item.title}
//                   </h3>
//                   <p className="text-sm sm:text-base text-[#4a3a3a]/90 leading-relaxed max-w-xl">
//                     {item.desc}
//                   </p>
//                 </div>

//                 {/* Number Badge */}
//                 <div className="sm:w-1/2 flex justify-center sm:justify-start">
//                   <div className="bg-[#fef8f1] text-[#d4b07b] text-3xl sm:text-4xl font-bold font-heading rounded-full border-2 border-[#d4b07b] w-16 h-16 flex items-center justify-center shadow-sm">
//                     {(index + 1).toString().padStart(2, "0")}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* CTA */}
//         <div className="text-center mt-20">
//           <a
//             href="/contact"
//             className="inline-block bg-[#2b1d1d] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#c49b63] transition-colors duration-300"
//           >
//             Get Started
//           </a>
//         </div>
//       </section>

//       {/* Split Section with Image & Text */}
//       <section className="flex flex-col md:flex-row items-center justify-center bg-[#e9ddd1]">
//         <div className="md:w-1/2 w-full max-h-[400px] overflow-hidden">
//           <img
//             src="/images/Home_1.jpg"
//             alt="Skilled artisan"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="md:w-1/2 w-full py-12 px-8 md:px-12 text-[#2b1d1d]">
//           <h3 className="text-2xl sm:text-3xl font-heading font-semibold mb-4">
//             Designed for Sustainable Living
//           </h3>
//           <p className="text-sm sm:text-base leading-relaxed text-[#4a3a3a]/90">
//             Each MKT Rug is a story of nature, craft, and community. We empower artisans, preserve traditional techniques, and ensure your floors carry the warmth of purpose and authenticity.
//           </p>
//         </div>
//       </section>

//       {/* CTA Section at Bottom */}
//       <section className="bg-[#f3ebe3] py-16 text-center">
//         <h4 className="text-xl sm:text-2xl font-semibold mb-6 text-[#2b1d1d]">
//           Ready to Transform Your Space?
//         </h4>
//         <a
//           href="/contact"
//           className="inline-block bg-[#c49b63] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#2b1d1d] transition-colors duration-300"
//         >
//           Contact Us Today
//         </a>
//       </section>
//     </div>
//   );
// };

// export default WhyUs;

