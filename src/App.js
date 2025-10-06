// import React, { Suspense, lazy, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Footer from "./components/Footer";
// import ErrorBoundary from "./components/ErrorBoundary";
// import BackToTop from "./components/BackToTop";

// const AboutUs = lazy(() => import("./components/AboutUs"));
// const Gallery = lazy(() => import("./components/Gallery"));
// const ContactUs = lazy(() => import("./components/ContactUs"));
// const Product = lazy(() => import("./components/Product"));
// const Card = lazy(() => import("./components/Card"));
// const Button = lazy(() => import("./components/Button"));
// const Enquiry = lazy(() => import("./components/Enquiry"));
// const WhyUs = lazy(() => import("./components/whyUs"));
// const Blog = lazy(() => import("./components/Blog"));

// function App() {
//   useEffect(() => {
//     const io = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((e) => {
//           if (e.isIntersecting) {
//             e.target.classList.add("reveal-visible");
//             io.unobserve(e.target);
//           }
//         });
//       },
//       { threshold: 0.01, rootMargin: "0px 0px -10% 0px" }
//     );

//     const observeAll = () => {
//       document
//         .querySelectorAll(".reveal:not(.reveal-visible)")
//         .forEach((el) => io.observe(el));
//     };

//     const revealInViewportNow = () => {
//       document
//         .querySelectorAll(".reveal:not(.reveal-visible)")
//         .forEach((el) => {
//           const r = el.getBoundingClientRect();
//           if (r.top < window.innerHeight * 0.9) {
//             el.classList.add("reveal-visible");
//             io.unobserve(el);
//           }
//         });
//     };

//     observeAll();
//     revealInViewportNow();

//     const mo = new MutationObserver(() => {
//       observeAll();
//       revealInViewportNow();
//     });
//     mo.observe(document.body, { childList: true, subtree: true });

//     const onResizeScroll = () => revealInViewportNow();
//     window.addEventListener("load", onResizeScroll);
//     window.addEventListener("resize", onResizeScroll);
//     window.addEventListener("scroll", onResizeScroll, { passive: true });

//     return () => {
//       io.disconnect();
//       mo.disconnect();
//       window.removeEventListener("load", onResizeScroll);
//       window.removeEventListener("resize", onResizeScroll);
//       window.removeEventListener("scroll", onResizeScroll);
//     };
//   }, []);

//   const scrollToFooter = () => {
//     try {
//       const header = document.querySelector(".site-header.nav");
//       const headerH = header ? header.offsetHeight : 0;
//       const reduce =
//         window.matchMedia &&
//         window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//       const targets = ["#get-in-touch", "#contact", "#site-footer"];
//       let el = null;
//       for (const sel of targets) {
//         el = document.querySelector(sel);
//         if (el) break;
//       }
//       if (!el) return;
//       const top = el.getBoundingClientRect().top + window.scrollY - headerH - 8;
//       window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
//     } catch {
//       const el =
//         document.getElementById("get-in-touch") ||
//         document.getElementById("site-footer");
//       el?.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   return (
//     <Router>
//       <div className="min-h-screen bg-bgGrey">
//         <Header />
//         {/* Spacer to account for fixed header height except over hero (hero compensates with negative margin) */}
//         <div
//           aria-hidden="true"
//           className="header-spacer"
//           style={{ height: "var(--header-h)" }}
//         ></div>

//         <ErrorBoundary>
//           <Suspense
//             fallback={<div className="p-8 text-center">Loading...</div>}
//           >
//             <Routes>
//               <Route
//                 path="/"
//                 element={
//                   <>
//                     <Hero />

//                     <section id="about" className="py-12 md:py-16 bg-bgLight">
//                       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                         <div className="text-center mb-12 reveal">
//                           <div className="inline-flex items-center gap-3 mb-3">
//                             <span className="w-8 h-[2px] bg-gold"></span>
//                             <span className="uppercase tracking-[0.3em] text-sm text-gold font-accent">
//                               Our Craftsmanship
//                             </span>
//                           </div>
//                           <h2 className="text-3xl sm:text-5xl font-heading font-semibold text-textDark">
//                             From Farm to Floor — Integrated Platform
//                           </h2>
//                           <ul className="font-body text-base sm:text-lg text-textDark/80 max-w-3xl mx-auto mt-4 leading-relaxed grid gap-2 text-left list-disc list-inside">
//                             <li>
//                               Field-fed Banarasi jute and natural fibres within
//                               150km supply chain
//                             </li>
//                             <li>
//                               500MT monthly capacity with biomass steam power
//                             </li>
//                             <li>
//                               Co-create SKUs with in-house CAD studio, MOQ as
//                               low as 50 sqm
//                             </li>
//                             <li>
//                               35% faster FOB dispatch through integrated
//                               production
//                             </li>
//                           </ul>
//                         </div>

//                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start reveal">
//                           <div className="grid grid-cols-2 gap-6">
//                             <img
//                               src="images/HOME_2.jpg"
//                               alt="Rug texture"
//                               className="w-full h-48 sm:h-56 object-cover rounded-lg shadow"
//                             />
//                             <img
//                               src="/images/HOME_1.jpg"
//                               alt="Artisan pouring beans"
//                               className="w-full h-48 sm:h-56 object-cover rounded-lg shadow"
//                             />
//                             <img
//                               src="/images/HOME_3.jpg"
//                               alt="Geometric jute"
//                               className="w-full h-48 sm:h-56 object-cover rounded-lg shadow"
//                             />
//                             <img
//                               src="/images/HOME_4.jpg"
//                               alt="Natural basket"
//                               className="w-full h-48 sm:h-56 object-cover rounded-lg shadow"
//                             />
//                           </div>

//                           <div className="space-y-8">
//                             <div className="flex items-start gap-4 reveal">
//                               <div className="shrink-0 w-10 h-10 rounded-full bg-gold/20 text-secondary flex items-center justify-center">
//                                 <svg
//                                   className="w-5 h-5"
//                                   fill="none"
//                                   stroke="currentColor"
//                                   viewBox="0 0 24 24"
//                                 >
//                                   <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M3 7h18M3 12h18M3 17h18"
//                                   />
//                                 </svg>
//                               </div>
//                               <div>
//                                 <h3 className="text-xl font-heading text-textDark">
//                                   Material Mastery
//                                 </h3>
//                                 <p className="text-textDark/80 font-body">
//                                   Jute, banana, sea grass on soil. Cotton for
//                                   softness, wool for volume, linen for finesse.
//                                 </p>
//                               </div>
//                             </div>

//                             <div className="flex items-start gap-4 reveal">
//                               <div className="shrink-0 w-10 h-10 rounded-full bg-gold/20 text-secondary flex items-center justify-center">
//                                 <svg
//                                   className="w-5 h-5"
//                                   fill="none"
//                                   stroke="currentColor"
//                                   viewBox="0 0 24 24"
//                                 >
//                                   <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M12 8c-1.657 0-3 1.343-3 3 0 2.25 3 5 3 5s3-2.75 3-5c0-1.657-1.343-3-3-3z"
//                                   />
//                                 </svg>
//                               </div>
//                               <div>
//                                 <h3 className="text-xl font-heading text-textDark">
//                                   Place of Origin Advantage
//                                 </h3>
//                                 <p className="text-textDark/80 font-body">
//                                   150km farm supply chain that breathes local
//                                   air and regulates price shocks.
//                                 </p>
//                               </div>
//                             </div>

//                             <div className="flex items-start gap-4 reveal">
//                               <div className="shrink-0 w-10 h-10 rounded-full bg-gold/20 text-secondary flex items-center justify-center">
//                                 <svg
//                                   className="w-5 h-5"
//                                   fill="none"
//                                   stroke="currentColor"
//                                   viewBox="0 0 24 24"
//                                 >
//                                   <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M3 12l2-2 4 4 8-8 2 2-10 10z"
//                                   />
//                                 </svg>
//                               </div>
//                               <div>
//                                 <h3 className="text-xl font-heading text-textDark">
//                                   Smart Textiles & Certification
//                                 </h3>
//                                 <p className="text-textDark/80 font-body">
//                                   NFC-tagged rugs, SEDEX-SMETA, ISO9001, and
//                                   GOTS-aligned for global markets.
//                                 </p>
//                               </div>
//                             </div>

//                             <div className="flex items-start gap-4 reveal">
//                               <div className="shrink-0 w-10 h-10 rounded-full bg-gold/20 text-secondary flex items-center justify-center">
//                                 <svg
//                                   className="w-5 h-5"
//                                   fill="none"
//                                   stroke="currentColor"
//                                   viewBox="0 0 24 24"
//                                 >
//                                   <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M12 8v4l3 3"
//                                   />
//                                 </svg>
//                               </div>
//                               <div>
//                                 <h3 className="text-xl font-heading text-textDark">
//                                   Circular Runs & Artisan Funds
//                                 </h3>
//                                 <p className="text-textDark/80 font-body">
//                                   Take-back programs and profit-share pools
//                                   covering 1,000 rural weaving families by 2030.
//                                 </p>
//                               </div>
//                             </div>

//                             <div className="pt-2 reveal">
//                               <div className="flex flex-col sm:flex-row gap-3">
//                                 <Link to="/products" className="inline-flex">
//                                   <button className="px-5 py-3 rounded-full bg-gold text-secondary font-body hover:bg-gold/90 transition">
//                                     Explore Products
//                                   </button>
//                                 </Link>
//                                 <button
//                                   type="button"
//                                   onClick={scrollToFooter}
//                                   className="px-5 py-3 rounded-full border border-primary text-primary font-body hover:bg-primary/5 transition"
//                                   aria-label="Contact us"
//                                 >
//                                   Contact
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </section>

//                     <section id="products" className="py-12 md:py-16 bg-bgGrey">
//                       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                         <div className="text-center mb-12">
//                           <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-textDark mb-4">
//                             Our Product Collection
//                           </h2>
//                           <p className="font-body text-lg text-textDark max-w-2xl mx-auto leading-relaxed">
//                             Discover our range of premium jute products designed
//                             for modern living.
//                           </p>
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                           <Link to="/products" className="block">
//                             <Card
//                               title="SISAL RUGS"
//                               description="Durable and natural sisal fiber rugs that add texture and warmth to any space. Perfect for high-traffic areas with their stain-resistant properties."
//                               image="/images/PRODUCTS_1.jpg"
//                               badge="Editor’s Pick"
//                               featured
//                             />
//                           </Link>
//                           <Link to="/products" className="block">
//                             <Card
//                               title="JUTE RUGS"
//                               description="Handwoven jute rugs featuring natural fibers and traditional craftsmanship. Eco-friendly and biodegradable with a unique rustic charm."
//                               image="/images/PRODUCTS_2.jpg"
//                               badge="Best Seller"
//                               featured
//                             />
//                           </Link>
//                           <Link to="/products" className="block">
//                             <Card
//                               title="JACQUARD RUGS"
//                               description="Intricate jacquard woven rugs with detailed patterns and designs. Perfect for adding elegance and sophistication to your interior spaces."
//                               image="/images/PRODUCTS_3.jpg"
//                             />
//                           </Link>
//                           <Link to="/products" className="block">
//                             <Card
//                               title="WOOL RUGS"
//                               description="Luxurious wool rugs that provide superior comfort and insulation. Naturally stain-resistant and available in various pile heights and textures."
//                               image="/images/PRODUCTS_4.jpg"
//                               badge="New"
//                             />
//                           </Link>
//                           <Link to="/products" className="block">
//                             <Card
//                               title="Indoor/Outdoor Collection"
//                               description="Versatile rugs designed for both indoor and outdoor use. Weather-resistant materials that maintain their beauty in any environment."
//                               image="/images/PRODUCTS_5.jpg"
//                               badge="Eco-Friendly"
//                             />
//                           </Link>
//                           <Link to="/products" className="block">
//                             <Card
//                               title="DOOR MATS"
//                               description="Functional and stylish door mats that protect your floors while welcoming guests. Available in various sizes and materials for every entryway."
//                               image="/images/PRODUCTS_6.jpg"
//                             />
//                           </Link>
//                         </div>

//                         <div className="text-center mt-12">
//                           <Link to="/products" className="inline-flex">
//                             <Button variant="gold">View Full Collection</Button>
//                           </Link>
//                         </div>
//                       </div>
//                     </section>

//                     <section
//                       id="facilities"
//                       className="py-12 md:py-16 bg-bgLight"
//                     >
//                       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                         <div className="flex flex-col md:flex-row items-center">
//                           <div className="w-full md:w-1/2 flex flex-col items-center justify-center mb-8 md:mb-0">
//                             <div className="relative max-w-md mx-auto">
//                               <img
//                                 src="/images/ABOUT US.jpg"
//                                 alt="Rolled mats in basket"
//                                 className="w-full h-80 md:h-96 object-contain rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
//                               />

//                               <img
//                                 src="/images/02.jpg"
//                                 alt="Wooden cabinet with decor"
//                                 className="w-3/4 md:w-2/3 mt-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mx-auto"
//                               />

//                               <div className="absolute bottom-0 left-4 md:left-0 w-20 h-14 md:w-24 md:h-16 bg-secondary rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"></div>
//                             </div>
//                           </div>

//                           <div className="w-full md:w-1/2 px-4 md:px-8 flex flex-col justify-center">
//                             <h3 className="uppercase tracking-widest text-sm text-textDark text-center mb-4 font-accent">
//                               IN HARMONY WITH NATURE
//                             </h3>

//                             <div className="flex items-center mb-6">
//                               <div className="border-t border-primary w-1/4 md:w-1/3 mx-2"></div>
//                               <h2 className="text-xl md:text-2xl font-semibold text-textDark text-center font-heading">
//                                 ABOUT MKT RUGS
//                               </h2>
//                               <div className="border-t border-primary w-1/4 md:w-1/3 mx-2"></div>
//                             </div>

//                             <p className="text-textDark leading-relaxed text-justify md:text-left mb-6 font-body">
//                               MKT RUGS evolved from MAKATURBIDS, founded in 2008
//                               by Mr. Prabir Sarkar on the banks of the Hooghly
//                               River. What began with a single loom in Howrah has
//                               grown into an integrated platform serving five
//                               continents. We transform field-fed Banarasi jute
//                               through biomass-powered facilities, delivering
//                               premium natural fibre products with 35% faster FOB
//                               dispatch to B2B clients worldwide.
//                             </p>

//                             <div className="mb-6 flex justify-center md:justify-start">
//                               <Button
//                                 variant="secondary"
//                                 className="flex items-center space-x-2"
//                               >
//                                 <span>Download Brochure</span>
//                                 <svg
//                                   className="w-4 h-4"
//                                   fill="none"
//                                   stroke="currentColor"
//                                   viewBox="0 0 24 24"
//                                 >
//                                   <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                                   />
//                                 </svg>
//                               </Button>
//                             </div>

//                             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                               <img
//                                 src="/images/03.jpg"
//                                 alt="Product thumbnail 1"
//                                 className="rounded-lg shadow-sm hover:shadow-md hover:scale-105 cursor-pointer transition-all duration-300"
//                               />
//                               <img
//                                 src="/images/04.jpg"
//                                 alt="Product thumbnail 2"
//                                 className="rounded-lg shadow-sm hover:shadow-md hover:scale-105 cursor-pointer transition-all duration-300"
//                               />
//                               <img
//                                 src="/images/05.jpg"
//                                 alt="Product thumbnail 3"
//                                 className="rounded-lg shadow-sm hover:shadow-md hover:scale-105 cursor-pointer transition-all duration-300"
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </section>

//                     <section id="contact" className="py-12 md:py-16 bg-bgLight">
//                       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//                         <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-textDark mb-4">
//                           Get In Touch
//                         </h2>
//                         <p className="font-body text-lg text-textDark mb-8 leading-relaxed">
//                           Experience the journey from farm to floor. Connect
//                           with our team for transparent costing, multiple labs
//                           capability, and immediate market clearances across
//                           five continents.
//                         </p>
//                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                           <button
//                             type="button"
//                             onClick={scrollToFooter}
//                             className=" px-6 py-3 rounded-full bg-gold text-secondary font-body hover:bg-gold/90 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
//                             aria-label="Contact us"
//                           >
//                             Contact Us
//                           </button>
//                         </div>
//                       </div>
//                     </section>
//                   </>
//                 }
//               />
//               <Route path="/about" element={<AboutUs />} />
//               <Route path="/gallery" element={<Gallery />} />
//               <Route path="/contact" element={<ContactUs />} />
//               <Route path="/products" element={<Product />} />
//               <Route path="/enquiry" element={<Enquiry />} />
//               <Route path="/why-us" element={<WhyUs />} />
//               <Route path="/blog" element={<Blog />} />
//             </Routes>
//           </Suspense>
//         </ErrorBoundary>

//         <Footer />
//         <BackToTop />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import BackToTop from "./components/BackToTop";
import emailjs from "@emailjs/browser";

const AboutUs = lazy(() => import("./components/AboutUs"));
const Gallery = lazy(() => import("./components/Gallery"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Product = lazy(() => import("./components/Product"));
const Card = lazy(() => import("./components/Card"));
const Button = lazy(() => import("./components/Button"));
const Blog = lazy(() => import("./components/Blog"));
const WhyUs = lazy(() => import("./components/whyUs"));

function App() {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    business: "",
    interest: "",
    email: "",
  });

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px -10% 0px" }
    );

    const observeAll = () => {
      document
        .querySelectorAll(".reveal:not(.reveal-visible)")
        .forEach((el) => io.observe(el));
    };

    const revealInViewportNow = () => {
      document
        .querySelectorAll(".reveal:not(.reveal-visible)")
        .forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top < window.innerHeight * 0.9) {
            el.classList.add("reveal-visible");
            io.unobserve(el);
          }
        });
    };

    observeAll();
    revealInViewportNow();

    const mo = new MutationObserver(() => {
      observeAll();
      revealInViewportNow();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    const onResizeScroll = () => revealInViewportNow();
    window.addEventListener("load", onResizeScroll);
    window.addEventListener("resize", onResizeScroll);
    window.addEventListener("scroll", onResizeScroll, { passive: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      window.removeEventListener("load", onResizeScroll);
      window.removeEventListener("resize", onResizeScroll);
      window.removeEventListener("scroll", onResizeScroll);
    };
  }, []);

  const scrollToFooter = () => {
    try {
      const header = document.querySelector(".site-header.nav");
      const headerH = header ? header.offsetHeight : 0;
      const reduce =
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const targets = ["#get-in-touch", "#contact", "#site-footer"];
      let el = null;
      for (const sel of targets) {
        el = document.querySelector(sel);
        if (el) break;
      }
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - headerH - 8;
      window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
    } catch {
      const el =
        document.getElementById("get-in-touch") ||
        document.getElementById("site-footer");
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleDownload = (e) => {
    e.preventDefault();

    const serviceID = "service_l7jryqu"; // <-- replace with your actual Service ID
    const templateID = "template_0zitx77"; // <-- replace with your actual Template ID
    const publicKey = "NAS0PefIzYxrhtKz0"; // <-- replace with your actual Public Key

    emailjs
      .send(serviceID, templateID, form, publicKey)
      .then(() => {
        console.log("✅ Email sent successfully!");

        // Now trigger the brochure download
        const link = document.createElement("a");
        link.href = "/images/page3.pdf";
        link.download = "page3.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setShowModal(false);
        alert("Thank you! The brochure has been sent to your email.");
      })
      .catch((err) => {
        console.error("❌ Email failed:", err);
        alert(
          "Oops! Something went wrong while sending your details. Please try again."
        );
      });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Router>
      <div className="min-h-screen bg-bgGrey">
        <Header />
        <div
          aria-hidden="true"
          className="header-spacer"
          style={{ height: "var(--header-h)" }}
        ></div>

        <ErrorBoundary>
          <Suspense
            fallback={<div className="p-8 text-center">Loading...</div>}
          >
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />

                    {/* === EXPERIENCE THE JOURNEY SECTION === */}
                    <section id="journey" className="py-12 md:py-16 bg-bgLight">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12 reveal">
                          <div className="inline-flex items-center gap-3 mb-3">
                            <span className="w-8 h-[2px] bg-gold"></span>
                            <span className="uppercase tracking-[0.3em] text-sm text-gold font-accent">
                              Our Journey
                            </span>
                          </div>
                          <h2 className="text-3xl sm:text-5xl font-heading font-semibold text-textDark">
                            Experience the Journey: Where Tradition Weaves into
                            Timeless Art
                          </h2>
                          <p className="font-body text-base sm:text-lg text-textDark/80 max-w-3xl mx-auto mt-4 leading-relaxed">
                            Follow the complete process from raw natural fibers
                            to finished rugs, showcasing the authentic
                            craftsmanship that defines our heritage.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start reveal">
                          <div className="grid grid-cols-2 gap-6">
                            <img
                              src="images/HOME_2.jpg"
                              alt="Rug texture showing natural fiber craftsmanship"
                              className="w-full h-48 sm:h-56 object-cover rounded-lg shadow"
                            />
                            <img
                              src="/images/HOME_1.jpg"
                              alt="Artisan working with natural materials"
                              className="w-full h-48 sm:h-56 object-cover rounded-lg shadow"
                            />
                            <img
                              src="/images/HOME_3.jpg"
                              alt="Geometric jute patterns"
                              className="w-full h-48 sm:h-56 object-cover rounded-lg shadow"
                            />
                            <img
                              src="/images/HOME_4.jpg"
                              alt="Natural basket weaving process"
                              className="w-full h-48 sm:h-56 object-cover rounded-lg shadow"
                            />
                          </div>

                          <div className="space-y-8">
                            <div className="flex items-start gap-4 reveal">
                              <div className="shrink-0 w-10 h-10 rounded-full bg-gold/20 text-secondary flex items-center justify-center">
                                <svg
                                  className="w-5 h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                  />
                                </svg>
                              </div>
                              <div>
                                <h3 className="text-xl font-heading text-textDark">
                                  Natural Fiber Selection
                                </h3>
                                <p className="text-textDark/80 font-body">
                                  Carefully sourced jute, sisal, seagrass, and
                                  banana fibers from local farms, ensuring the
                                  highest quality raw materials for our
                                  handcrafted rugs.
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start gap-4 reveal">
                              <div className="shrink-0 w-10 h-10 rounded-full bg-gold/20 text-secondary flex items-center justify-center">
                                <svg
                                  className="w-5 h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8c-1.657 0-3 1.343-3 3 0 2.25 3 5 3 5s3-2.75 3-5c0-1.657-1.343-3-3-3z"
                                  />
                                </svg>
                              </div>
                              <div>
                                <h3 className="text-xl font-heading text-textDark">
                                  Traditional Weaving Heritage
                                </h3>
                                <p className="text-textDark/80 font-body">
                                  Over 100 skilled artisans in Gopalnagar, West
                                  Bengal, using traditional hand-spinning,
                                  hand-braiding, and hand-twisting techniques
                                  passed down through generations.
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start gap-4 reveal">
                              <div className="shrink-0 w-10 h-10 rounded-full bg-gold/20 text-secondary flex items-center justify-center">
                                <svg
                                  className="w-5 h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 12l2-2 4 4 8-8 2 2-10 10z"
                                  />
                                </svg>
                              </div>
                              <div>
                                <h3 className="text-xl font-heading text-textDark">
                                  Quality Assurance
                                </h3>
                                <p className="text-textDark/80 font-body">
                                  Rigorous quality control at every step, from
                                  fiber selection to final inspection, ensuring
                                  each rug meets our exacting standards for
                                  durability and beauty.
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start gap-4 reveal">
                              <div className="shrink-0 w-10 h-10 rounded-full bg-gold/20 text-secondary flex items-center justify-center">
                                <svg
                                  className="w-5 h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v4l3 3"
                                  />
                                </svg>
                              </div>
                              <div>
                                <h3 className="text-xl font-heading text-textDark">
                                  Global Reach
                                </h3>
                                <p className="text-textDark/80 font-body">
                                  From our workshops in West Bengal to homes
                                  across five continents, bringing authentic
                                  Indian craftsmanship to the world.
                                </p>
                              </div>
                            </div>

                            <div className="pt-2 reveal">
                              <div className="flex flex-col sm:flex-row gap-3">
                                <Link to="/products" className="inline-flex">
                                  <button className="px-5 py-3 rounded-full bg-gold text-secondary font-body hover:bg-gold/90 transition">
                                    Explore Products
                                  </button>
                                </Link>
                                <button
                                  type="button"
                                  onClick={scrollToFooter}
                                  className="px-5 py-3 rounded-full border border-primary text-primary font-body hover:bg-primary/5 transition"
                                >
                                  Contact
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* === ABOUT MKT RUGS SECTION === */}
                    <section id="about" className="py-12 md:py-16 bg-bgGrey">
                      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12 reveal">
                          <div className="inline-flex items-center gap-3 mb-3">
                            <span className="w-8 h-[2px] bg-gold"></span>
                            <span className="uppercase tracking-[0.3em] text-sm text-gold font-accent">
                              Our Story
                            </span>
                          </div>
                          <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-textDark mb-6">
                            About MKT Rugs
                          </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                          <div className="space-y-6 reveal">
                            <p className="font-body text-base text-textDark leading-relaxed">
                              Established in 2024, MKT Rugs specializes in
                              export operations from Gopalnagar, West Bengal,
                              India. We are powered by over 100 in-house
                              artisans and more than 1000 auxiliary workers. Our
                              journey began in 2008 as Maa Kali Traders, a
                              yarn-making company that evolved into an
                              integrated carpet manufacturing company in 2017.
                              We've proudly worked for India's top export
                              houses.
                            </p>
                            <p className="font-body text-base text-textDark leading-relaxed">
                              Our commitment to quality begins with sourcing raw
                              jute and other natural fibers like sisal,
                              seagrass, and banana fiber. Through hand-spun,
                              hand-braided, and hand-twisted yarn, we ensure
                              strict quality control, delivering beautiful,
                              high-quality natural carpets. This end-to-end
                              control, "From Farm To Floor," is our promise to
                              you.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                              <Link to="/products" className="inline-flex">
                                <Button variant="gold">
                                  View Our Products
                                </Button>
                              </Link>
                              <button
                                type="button"
                                onClick={scrollToFooter}
                                className="px-5 py-3 rounded-full border border-primary text-primary font-body hover:bg-primary/5 transition"
                              >
                                Contact Us
                              </button>
                            </div>
                          </div>
                          <div className="relative reveal">
                            <img
                              src="/images/ABOUT US.jpg"
                              alt="Traditional rug making process at MKT Rugs"
                              className="w-full h-96 object-cover rounded-lg shadow-lg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-lg"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                                <h4 className="font-heading text-lg text-textDark mb-2">
                                  From Farm to Floor
                                </h4>
                                <p className="font-body text-sm text-textDark/80">
                                  Complete control from raw fiber sourcing to
                                  finished product delivery.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* === PRODUCT COLLECTION SECTION === */}
                    <section id="products" className="py-8 md:py-12 bg-bgLight">
                      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-8">
                          <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-textDark mb-4">
                            Our Collections
                          </h2>
                          <p className="font-body text-base text-textDark max-w-2xl mx-auto leading-relaxed">
                            Discover our curated collections of authentic
                            handcrafted rugs.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <Link to="/products" className="block">
                            <Card
                              title="Bengal Folk Craft"
                              description="Traditional patterns inspired by West Bengal's rich cultural heritage."
                              image="/images/PRODUCTS_1.jpg"
                              badge="Heritage"
                              featured
                            />
                          </Link>
                          <Link to="/products" className="block">
                            <Card
                              title="Coastal Wave Collection"
                              description="Natural textures that capture the essence of coastal living."
                              image="/images/PRODUCTS_2.jpg"
                              badge="Popular"
                              featured
                            />
                          </Link>
                          <Link to="/products" className="block">
                            <Card
                              title="Banana Bloom Collection"
                              description="Eco-friendly rugs made from sustainable banana fiber."
                              image="/images/PRODUCTS_3.jpg"
                              badge="Eco-Friendly"
                            />
                          </Link>
                        </div>

                        <div className="text-center mt-8">
                          <Link to="/products" className="inline-flex">
                            <Button variant="gold">
                              Explore All Collections
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </section>

                    {/* === WHY US SECTION === */}
                    <section id="why-us" className="py-12 md:py-16 bg-bgLight">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12 reveal">
                          <div className="inline-flex items-center gap-3 mb-3">
                            <span className="w-8 h-[2px] bg-gold"></span>
                            <span className="uppercase tracking-[0.3em] text-sm text-gold font-accent">
                              Heritage Overseas
                            </span>
                          </div>
                          <h2 className="text-3xl sm:text-5xl font-heading font-semibold text-textDark">
                            Why Choose MKT Rugs?
                          </h2>
                          <p className="font-body text-base sm:text-lg text-textDark/80 max-w-3xl mx-auto mt-4 leading-relaxed">
                            We understand the challenges in sourcing authentic,
                            high-quality rugs. Here's how we solve your pain
                            points and deliver exceptional value.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                          <div className="space-y-8 reveal">
                            <div className="flex items-start gap-4">
                              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                <svg
                                  className="w-6 h-6"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </div>
                              <div>
                                <h3 className="text-xl font-heading text-textDark mb-2">
                                  End-to-End Quality Control
                                </h3>
                                <p className="text-textDark/80 font-body">
                                  No more inconsistent quality from multiple
                                  suppliers. We control every step from fiber
                                  selection to final inspection, ensuring 100%
                                  quality consistency across all orders.
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start gap-4">
                              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                <svg
                                  className="w-6 h-6"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </div>
                              <div>
                                <h3 className="text-xl font-heading text-textDark mb-2">
                                  Faster Delivery Times
                                </h3>
                                <p className="text-textDark/80 font-body">
                                  Eliminate long waiting periods. Our integrated
                                  production system delivers orders 35% faster
                                  than traditional supply chains, keeping your
                                  inventory moving.
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start gap-4">
                              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                <svg
                                  className="w-6 h-6"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                  />
                                </svg>
                              </div>
                              <div>
                                <h3 className="text-xl font-heading text-textDark mb-2">
                                  Flexible Minimum Orders
                                </h3>
                                <p className="text-textDark/80 font-body">
                                  No more large MOQ constraints. Our flexible
                                  production allows minimum orders as low as 50
                                  sqm, perfect for testing markets or smaller
                                  retail spaces.
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start gap-4">
                              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                <svg
                                  className="w-6 h-6"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                  />
                                </svg>
                              </div>
                              <div>
                                <h3 className="text-xl font-heading text-textDark mb-2">
                                  Authentic Heritage Craftsmanship
                                </h3>
                                <p className="text-textDark/80 font-body">
                                  Access to genuine traditional techniques. Our
                                  100+ skilled artisans preserve authentic
                                  hand-spinning, hand-braiding, and
                                  hand-twisting methods passed down through
                                  generations.
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start gap-4">
                              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                <svg
                                  className="w-6 h-6"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                                  />
                                </svg>
                              </div>
                              <div>
                                <h3 className="text-xl font-heading text-textDark mb-2">
                                  Custom Design Capabilities
                                </h3>
                                <p className="text-textDark/80 font-body">
                                  Stand out from generic offerings. Our in-house
                                  CAD studio works with you to co-create unique
                                  SKUs that reflect your brand identity and
                                  market preferences.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="relative reveal">
                            <img
                              src="/images/ABOUT US.jpg"
                              alt="Traditional rug making process"
                              className="w-full h-96 object-cover rounded-lg shadow-lg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-lg"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                                <h4 className="font-heading text-lg text-textDark mb-2">
                                  Proven Track Record
                                </h4>
                                <p className="font-body text-sm text-textDark/80">
                                  Serving five continents with over 1000
                                  auxiliary workers, we've built trust with
                                  India's top export houses.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="text-center mt-12 reveal">
                          <Button
                            variant="secondary"
                            className="flex items-center space-x-2 mx-auto"
                            onClick={() => setShowModal(true)}
                          >
                            <span>Download Brochure</span>
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                          </Button>
                        </div>
                      </div>
                    </section>

                    {/* === MODAL === */}
                    {showModal && (
                      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
                          <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-2 right-3 text-gray-500 hover:text-gray-700"
                          >
                            ✕
                          </button>
                          <h2 className="text-2xl font-heading text-center mb-6 text-textDark">
                            Download Brochure
                          </h2>
                          <form onSubmit={handleDownload} className="space-y-4">
                            <input
                              type="text"
                              name="name"
                              value={form.name}
                              onChange={handleChange}
                              placeholder="Your Name"
                              required
                              className="w-full border rounded-md p-2"
                            />
                            <input
                              type="text"
                              name="company"
                              value={form.company}
                              onChange={handleChange}
                              placeholder="Company Name"
                              required
                              className="w-full border rounded-md p-2"
                            />
                            <input
                              type="text"
                              name="business"
                              value={form.business}
                              onChange={handleChange}
                              placeholder="Line of Business"
                              className="w-full border rounded-md p-2"
                            />
                            <input
                              type="text"
                              name="interest"
                              value={form.interest}
                              onChange={handleChange}
                              placeholder="Special Interest"
                              className="w-full border rounded-md p-2"
                            />
                            <input
                              type="email"
                              name="email"
                              value={form.email}
                              onChange={handleChange}
                              placeholder="Email Address"
                              required
                              className="w-full border rounded-md p-2"
                            />
                            <Button
                              variant="gold"
                              type="submit"
                              className="w-full"
                            >
                              Download Now
                            </Button>
                          </form>
                        </div>
                      </div>
                    )}

                    {/* === CONTACT SECTION ===
                    <section id="contact" className="py-12 bg-bgLight">
                      <ContactUs />
                    </section> */}
                  </>
                }
              />

              <Route path="/about" element={<AboutUs />} />
              <Route path="/products" element={<Product />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/why-us" element={<WhyUs />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>

        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;

// -------------------------------------------------------------------------------------
// import React, { Suspense, lazy, useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Footer from "./components/Footer";
// import ErrorBoundary from "./components/ErrorBoundary";
// import BackToTop from "./components/BackToTop";

// const AboutUs = lazy(() => import("./components/AboutUs"));
// const Gallery = lazy(() => import("./components/Gallery"));
// const ContactUs = lazy(() => import("./components/ContactUs"));
// const Product = lazy(() => import("./components/Product"));
// const Card = lazy(() => import("./components/Card"));
// const Button = lazy(() => import("./components/Button"));
// const Enquiry = lazy(() => import("./components/Enquiry"));
// const WhyUs = lazy(() => import("./components/whyUs"));
// const Blog = lazy(() => import("./components/Blog"));

// function App() {
//   const [showModal, setShowModal] = useState(false);
//   const [form, setForm] = useState({
//     name: "",
//     company: "",
//     business: "",
//     interest: "",
//     email: "",
//   });

//   // === SCROLL ANIMATION LOGIC ===
//   useEffect(() => {
//     const io = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((e) => {
//           if (e.isIntersecting) {
//             e.target.classList.add("reveal-visible");
//             io.unobserve(e.target);
//           }
//         });
//       },
//       { threshold: 0.01, rootMargin: "0px 0px -10% 0px" }
//     );

//     const observeAll = () => {
//       document
//         .querySelectorAll(".reveal:not(.reveal-visible)")
//         .forEach((el) => io.observe(el));
//     };

//     const revealInViewportNow = () => {
//       document
//         .querySelectorAll(".reveal:not(.reveal-visible)")
//         .forEach((el) => {
//           const r = el.getBoundingClientRect();
//           if (r.top < window.innerHeight * 0.9) {
//             el.classList.add("reveal-visible");
//             io.unobserve(el);
//           }
//         });
//     };

//     observeAll();
//     revealInViewportNow();

//     const mo = new MutationObserver(() => {
//       observeAll();
//       revealInViewportNow();
//     });
//     mo.observe(document.body, { childList: true, subtree: true });

//     const onResizeScroll = () => revealInViewportNow();
//     window.addEventListener("load", onResizeScroll);
//     window.addEventListener("resize", onResizeScroll);
//     window.addEventListener("scroll", onResizeScroll, { passive: true });

//     return () => {
//       io.disconnect();
//       mo.disconnect();
//       window.removeEventListener("load", onResizeScroll);
//       window.removeEventListener("resize", onResizeScroll);
//       window.removeEventListener("scroll", onResizeScroll);
//     };
//   }, []);

//   // === CONTACT SCROLL ===
//   const scrollToFooter = () => {
//     try {
//       const header = document.querySelector(".site-header.nav");
//       const headerH = header ? header.offsetHeight : 0;
//       const reduce =
//         window.matchMedia &&
//         window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//       const targets = ["#get-in-touch", "#contact", "#site-footer"];
//       let el = null;
//       for (const sel of targets) {
//         el = document.querySelector(sel);
//         if (el) break;
//       }
//       if (!el) return;
//       const top = el.getBoundingClientRect().top + window.scrollY - headerH - 8;
//       window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
//     } catch {
//       const el =
//         document.getElementById("get-in-touch") ||
//         document.getElementById("site-footer");
//       el?.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   // === HANDLE FORM INPUT ===
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // === UPDATED DOWNLOAD LOGIC ===
//   const handleDownload = async (e) => {
//     e.preventDefault();

//     try {
//       // Step 1 — Send form data to backend or email API
//       const res = await fetch("/api/send-brochure", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       if (!res.ok) {
//         throw new Error("Failed to send brochure request");
//       }

//       // Step 2 — Trigger the brochure download
//       const link = document.createElement("a");
//       link.href = "/images/page3.pdf"; // Replace with actual brochure path
//       link.download = "MKT_RUGS_Brochure.pdf";
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);

//       // Step 3 — Close modal & alert user
//       setShowModal(false);
//       alert("✅ Thank you! Your details have been submitted. Brochure download started.");
//     } catch (err) {
//       console.error(err);
//       alert("❌ Failed to submit form. Please try again later.");
//     }
//   };

//   return (
//     <Router>
//       <div className="min-h-screen bg-bgGrey">
//         <Header />
//         <div aria-hidden="true" className="header-spacer" style={{ height: "var(--header-h)" }}></div>

//         <ErrorBoundary>
//           <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
//             <Routes>
//               <Route
//                 path="/"
//                 element={
//                   <>
//                     <Hero />

//                     {/* === CRAFTSMANSHIP SECTION === */}
//                     {/* (same content — unchanged) */}

//                     {/* === PRODUCT COLLECTION SECTION === */}
//                     {/* (same content — unchanged) */}

//                     {/* === FACILITIES SECTION + MODAL === */}
//                     <section id="facilities" className="py-12 md:py-16 bg-bgLight">
//                       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                         <div className="flex flex-col md:flex-row items-center">
//                           <div className="w-full md:w-1/2 flex flex-col items-center justify-center mb-8 md:mb-0">
//                             <div className="relative max-w-md mx-auto">
//                               <img
//                                 src="/images/ABOUT US.jpg"
//                                 alt="Rolled mats in basket"
//                                 className="w-full h-80 md:h-96 object-contain rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
//                               />
//                               <img
//                                 src="/images/02.jpg"
//                                 alt="Wooden cabinet with decor"
//                                 className="w-3/4 md:w-2/3 mt-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mx-auto"
//                               />
//                               <div className="absolute bottom-0 left-4 md:left-0 w-20 h-14 md:w-24 md:h-16 bg-secondary rounded-lg shadow-md"></div>
//                             </div>
//                           </div>

//                           <div className="w-full md:w-1/2 px-4 md:px-8 flex flex-col justify-center">
//                             <h3 className="uppercase tracking-widest text-sm text-textDark text-center mb-4 font-accent">
//                               IN HARMONY WITH NATURE
//                             </h3>
//                             <div className="flex items-center mb-6">
//                               <div className="border-t border-primary w-1/4 md:w-1/3 mx-2"></div>
//                               <h2 className="text-xl md:text-2xl font-semibold text-textDark text-center font-heading">
//                                 ABOUT MKT RUGS
//                               </h2>
//                               <div className="border-t border-primary w-1/4 md:w-1/3 mx-2"></div>
//                             </div>

//                             <p className="text-textDark leading-relaxed text-justify md:text-left mb-6 font-body">
//                               MKT RUGS evolved from MAKATURBIDS, founded in 2008 by Mr. Prabir Sarkar on the banks of
//                               the Hooghly River. What began with a single loom in Howrah has grown into an integrated
//                               platform serving five continents. We transform field-fed Banarasi jute through
//                               biomass-powered facilities, delivering premium natural fibre products with 35% faster FOB
//                               dispatch to B2B clients worldwide.
//                             </p>

//                             <div className="mb-6 flex justify-center md:justify-start">
//                               <Button
//                                 variant="secondary"
//                                 className="flex items-center space-x-2"
//                                 onClick={() => setShowModal(true)}
//                               >
//                                 <span>Download Brochure</span>
//                                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                   <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                                   />
//                                 </svg>
//                               </Button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </section>

//                     {/* === MODAL === */}
//                     {showModal && (
//                       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//                         <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
//                           <button
//                             onClick={() => setShowModal(false)}
//                             className="absolute top-2 right-3 text-gray-500 hover:text-gray-700"
//                           >
//                             ✕
//                           </button>
//                           <h2 className="text-2xl font-heading text-center mb-6 text-textDark">
//                             Download Brochure
//                           </h2>

//                           {/* === UPDATED FORM === */}
//                           <form onSubmit={handleDownload} className="space-y-4">
//                             <input
//                               type="text"
//                               name="name"
//                               value={form.name}
//                               onChange={handleChange}
//                               placeholder="Your Name"
//                               required
//                               className="w-full border rounded-md p-2"
//                             />
//                             <input
//                               type="text"
//                               name="company"
//                               value={form.company}
//                               onChange={handleChange}
//                               placeholder="Company Name"
//                               required
//                               className="w-full border rounded-md p-2"
//                             />
//                             <input
//                               type="text"
//                               name="business"
//                               value={form.business}
//                               onChange={handleChange}
//                               placeholder="Line of Business"
//                               className="w-full border rounded-md p-2"
//                             />
//                             <input
//                               type="text"
//                               name="interest"
//                               value={form.interest}
//                               onChange={handleChange}
//                               placeholder="Special Interest"
//                               className="w-full border rounded-md p-2"
//                             />
//                             <input
//                               type="email"
//                               name="email"
//                               value={form.email}
//                               onChange={handleChange}
//                               placeholder="Email Address"
//                               required
//                               className="w-full border rounded-md p-2"
//                             />
//                             <Button variant="gold" type="submit" className="w-full">
//                               Download Now
//                             </Button>
//                           </form>
//                         </div>
//                       </div>
//                     )}

//                     {/* === CONTACT SECTION === */}
//                     <section id="contact" className="py-12 bg-bgLight">
//                       <ContactUs />
//                     </section>
//                   </>
//                 }
//               />

//               <Route path="/about" element={<AboutUs />} />
//               <Route path="/products" element={<Product />} />
//               <Route path="/gallery" element={<Gallery />} />
//               <Route path="/contact" element={<ContactUs />} />
//               <Route path="/blog" element={<Blog />} />
//             </Routes>
//           </Suspense>
//         </ErrorBoundary>

//         <Footer />
//         <BackToTop />
//       </div>
//     </Router>
//   );
// }

// export default App;
