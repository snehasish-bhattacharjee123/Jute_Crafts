// src/pages/WhyUs.jsx
import React from "react";
import { Helmet } from "react-helmet";

const problemSolutions = [
  {
    problem: "Late Shipments",
    solutionTitle: "From Farm to Floor",
    solutionDesc:
      "From Raw Fiber to making Hand made Braid, Hand spum yarn, Dying making all types of rugs all are made by us. So we are not defend on any vendors. We source only raw jute and natural fibers locally within a 150 km radius. Close sourcing and integrated production reduce delays — your rugs arrive on time.",
  },
  {
    problem: "Quality Doesn’t Match Samples",
    solutionTitle: "Consistent Craftsmanship",
    solutionDesc:
      "Every sample matches the final product. Skilled artisans ensure each rug reflects the design, texture, and quality you expect, With our 5 step Quality check process, we delivered quality products consistently.",
  },
  {
    problem: "Endless Wait for Replies",
    solutionTitle: "Responsive Support",
    solutionDesc:
      "After Every order you got assistance who update you in every steps, Our team provides prompt answers and regular updates — no more waiting endlessly for status updates.",
  },
  {
    problem: "Stale or Old Designs",
    solutionTitle: "Innovative Design Studio",
    solutionDesc:
      "Our in-house CAD studio collaborates with you to create fresh, unique rug designs — MOQ as low as 50 sqm.",
  },
  {
    problem: "Worries About Unethical Practices",
    solutionTitle: "Ethical & Transparent Production",
    solutionDesc:
      "We maintain strict social compliance (SEDEX/SMETA) and transparent costing — you can trust our processes.",
  },
  {
    problem: "Concerned About Sustainability",
    solutionTitle: "Eco-Friendly Production",
    solutionDesc:
      "Our looms run on clean energy and every fiber is biodegradable. Sustainability is not a trend — it’s tradition.",
  },
];

const WhyUs = () => {
  return (
    <div className="min-h-screen bg-bgGrey text-textDark font-body">
      {/* SEO Metadata */}
      <Helmet>
        <title>Why Choose MKT Rugs | Problem Solved Rugs</title>
        <meta
          name="description"
          content="Discover how MKT Rugs solves common rug industry problems — from late shipments to sustainability concerns — while providing authentic, handcrafted rugs."
        />
        <meta
          name="keywords"
          content="MKT Rugs, Handmade Rugs, Eco-Friendly Rugs, Artisan Rugs, Sustainable Rugs"
        />
        <link rel="canonical" href="https://www.mktrugs.com/why-us" />
      </Helmet>

      {/* Hero Section - Enhanced mobile responsiveness */}
      <section
        className="relative bg-cover bg-center h-[50vh] sm:h-[60vh] md:h-[65vh] lg:h-[70vh] min-h-[400px] sm:min-h-[500px] flex items-center justify-center overflow-hidden pt-[calc(var(--header-h,80px))]"
        style={{
          marginTop: "calc(var(--header-h, 0px) * -1)",
          backgroundImage: "url('/images/B_1.jpg')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
        <div className="relative z-10 text-center px-3 sm:px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading text-textLight font-semibold drop-shadow-2xl mb-3 sm:mb-4">
            Why Choose MKT Rugs
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-textLight/95 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            Solving common rug industry problems with sustainable, authentic
            craftsmanship.
          </p>
        </div>

        {/* Mobile optimized overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent sm:hidden" />
      </section>

      {/* Problem → Solution Section - Enhanced mobile spacing */}
      <section className="max-w-6xl mx-auto py-12 sm:py-16 md:py-20 px-3 sm:px-6 md:px-10">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-semibold mb-12 sm:mb-14 md:mb-16 text-textDark">
          How MKT Rugs Solves Your Problems
        </h2>

        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {problemSolutions.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row items-start gap-6 sm:gap-8 ${
                index % 2 === 1
                  ? "sm:flex-row-reverse sm:items-center"
                  : "sm:items-center"
              }`}
            >
              {/* Number - Mobile responsive sizing */}
              <div className="text-gold text-4xl sm:text-5xl md:text-6xl font-bold font-heading leading-none flex-shrink-0 sm:w-[80px] md:w-[100px] text-center opacity-80">
                {(index + 1).toString().padStart(2, "0")}
              </div>

              {/* Content - Enhanced mobile typography */}
              <div className="flex-1 text-center sm:text-left">
                <h4 className="text-xs sm:text-sm md:text-base text-red-600 font-semibold mb-1 sm:mb-1.5">
                  Problem: {item.problem}
                </h4>
                <h3 className="font-heading text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 text-textDark">
                  Solution: {item.solutionTitle}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-textDark/80 leading-relaxed max-w-xl mx-auto sm:mx-0">
                  {item.solutionDesc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-20">
          <a
            href="/contact"
            className="inline-block bg-[#2b1d1d] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#c49b63] transition-colors duration-300"
          >
            Get Started
          </a>
        </div> */}
      </section>

      {/* CTA Section - Enhanced mobile responsiveness */}
      <section className="bg-[#f3ebe3] py-12 sm:py-16 text-center">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6">
          <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-[#2b1d1d]">
            Ready to Transform Your Space?
          </h4>
          <a
            href="/contact"
            className="touch-target focus-enhanced inline-block bg-[#c49b63] text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base rounded-full hover:bg-[#2b1d1d] transition-colors duration-300 min-h-[44px] shadow-lg hover:shadow-xl"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
