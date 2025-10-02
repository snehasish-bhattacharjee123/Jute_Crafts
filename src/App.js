import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import BackToTop from "./components/BackToTop";

const AboutUs = lazy(() => import("./components/AboutUs"));
const Gallery = lazy(() => import("./components/Gallery"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Product = lazy(() => import("./components/Product"));
const Card = lazy(() => import("./components/Card"));
const Button = lazy(() => import("./components/Button"));
const Enquiry = lazy(() => import("./components/Enquiry"));

function App() {
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

  return (
    <Router>
      <div className="min-h-screen bg-bgGrey">
        <Header />
        {/* Spacer to account for fixed header height except over hero (hero compensates with negative margin) */}
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

                    <section id="about" className="py-12 md:py-16 bg-bgLight">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12 reveal">
                          <div className="inline-flex items-center gap-3 mb-3">
                            <span className="w-8 h-[2px] bg-gold"></span>
                            <span className="uppercase tracking-[0.3em] text-sm text-gold font-accent">
                              Our Craftsmanship
                            </span>
                          </div>
                          <h2 className="text-3xl sm:text-5xl font-heading font-semibold text-textDark">
                            From Farm to Floor — Integrated Platform
                          </h2>
                          <ul className="font-body text-base sm:text-lg text-textDark/80 max-w-3xl mx-auto mt-4 leading-relaxed grid gap-2 text-left list-disc list-inside">
                            <li>
                              Field-fed Banarasi jute and natural fibres within
                              150km supply chain
                            </li>
                            <li>
                              500MT monthly capacity with biomass steam power
                            </li>
                            <li>
                              Co-create SKUs with in-house CAD studio, MOQ as
                              low as 50 sqm
                            </li>
                            <li>
                              35% faster FOB dispatch through integrated
                              production
                            </li>
                          </ul>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start reveal">
                          <div className="grid grid-cols-2 gap-6">
                            <img
                              src="images/HOME_2.jpg"
                              alt="Rug texture"
                              className="w-full h-48 sm:h-56 object-cover rounded-lg shadow"
                            />
                            <img
                              src="/images/HOME_1.jpg"
                              alt="Artisan pouring beans"
                              className="w-full h-48 sm:h-56 object-cover rounded-lg shadow"
                            />
                            <img
                              src="/images/HOME_3.jpg"
                              alt="Geometric jute"
                              className="w-full h-48 sm:h-56 object-cover rounded-lg shadow"
                            />
                            <img
                              src="/images/HOME_4.jpg"
                              alt="Natural basket"
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
                                    d="M3 7h18M3 12h18M3 17h18"
                                  />
                                </svg>
                              </div>
                              <div>
                                <h3 className="text-xl font-heading text-textDark">
                                  Material Mastery
                                </h3>
                                <p className="text-textDark/80 font-body">
                                  Jute, banana, sea grass on soil. Cotton for
                                  softness, wool for volume, linen for finesse.
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
                                  Place of Origin Advantage
                                </h3>
                                <p className="text-textDark/80 font-body">
                                  150km farm supply chain that breathes local
                                  air and regulates price shocks.
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
                                  Smart Textiles & Certification
                                </h3>
                                <p className="text-textDark/80 font-body">
                                  NFC-tagged rugs, SEDEX-SMETA, ISO9001, and
                                  GOTS-aligned for global markets.
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
                                  Circular Runs & Artisan Funds
                                </h3>
                                <p className="text-textDark/80 font-body">
                                  Take-back programs and profit-share pools
                                  covering 1,000 rural weaving families by 2030.
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
                                  aria-label="Contact us"
                                >
                                  Contact
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section id="products" className="py-12 md:py-16 bg-bgGrey">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                          <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-textDark mb-4">
                            Our Product Collection
                          </h2>
                          <p className="font-body text-lg text-textDark max-w-2xl mx-auto leading-relaxed">
                            Discover our range of premium jute products designed
                            for modern living.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          <Link to="/products" className="block">
                            <Card
                              title="SISAL RUGS"
                              description="Durable and natural sisal fiber rugs that add texture and warmth to any space. Perfect for high-traffic areas with their stain-resistant properties."
                              image="/images/PRODUCTS_1.jpg"
                              badge="Editor’s Pick"
                              featured
                            />
                          </Link>
                          <Link to="/products" className="block">
                            <Card
                              title="JUTE RUGS"
                              description="Handwoven jute rugs featuring natural fibers and traditional craftsmanship. Eco-friendly and biodegradable with a unique rustic charm."
                              image="/images/PRODUCTS_2.jpg"
                              badge="Best Seller"
                              featured
                            />
                          </Link>
                          <Link to="/products" className="block">
                            <Card
                              title="JACQUARD RUGS"
                              description="Intricate jacquard woven rugs with detailed patterns and designs. Perfect for adding elegance and sophistication to your interior spaces."
                              image="/images/PRODUCTS_3.jpg"
                            />
                          </Link>
                          <Link to="/products" className="block">
                            <Card
                              title="WOOL RUGS"
                              description="Luxurious wool rugs that provide superior comfort and insulation. Naturally stain-resistant and available in various pile heights and textures."
                              image="/images/PRODUCTS_4.jpg"
                              badge="New"
                            />
                          </Link>
                          <Link to="/products" className="block">
                            <Card
                              title="Indoor/Outdoor Collection"
                              description="Versatile rugs designed for both indoor and outdoor use. Weather-resistant materials that maintain their beauty in any environment."
                              image="/images/PRODUCTS_5.jpg"
                              badge="Eco-Friendly"
                            />
                          </Link>
                          <Link to="/products" className="block">
                            <Card
                              title="DOOR MATS"
                              description="Functional and stylish door mats that protect your floors while welcoming guests. Available in various sizes and materials for every entryway."
                              image="/images/PRODUCTS_6.jpg"
                            />
                          </Link>
                        </div>

                        <div className="text-center mt-12">
                          <Link to="/products" className="inline-flex">
                            <Button variant="gold">View Full Collection</Button>
                          </Link>
                        </div>
                      </div>
                    </section>

                    <section
                      id="facilities"
                      className="py-12 md:py-16 bg-bgLight"
                    >
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row items-center">
                          <div className="w-full md:w-1/2 flex flex-col items-center justify-center mb-8 md:mb-0">
                            <div className="relative max-w-md mx-auto">
                              <img
                                src="/images/ABOUT US.jpg"
                                alt="Rolled mats in basket"
                                className="w-full h-80 md:h-96 object-contain rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                              />

                              <img
                                src="/images/02.jpg"
                                alt="Wooden cabinet with decor"
                                className="w-3/4 md:w-2/3 mt-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mx-auto"
                              />

                              <div className="absolute bottom-0 left-4 md:left-0 w-20 h-14 md:w-24 md:h-16 bg-secondary rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"></div>
                            </div>
                          </div>

                          <div className="w-full md:w-1/2 px-4 md:px-8 flex flex-col justify-center">
                            <h3 className="uppercase tracking-widest text-sm text-textDark text-center mb-4 font-accent">
                              IN HARMONY WITH NATURE
                            </h3>

                            <div className="flex items-center mb-6">
                              <div className="border-t border-primary w-1/4 md:w-1/3 mx-2"></div>
                              <h2 className="text-xl md:text-2xl font-semibold text-textDark text-center font-heading">
                                ABOUT MKT RUGS
                              </h2>
                              <div className="border-t border-primary w-1/4 md:w-1/3 mx-2"></div>
                            </div>

                            <p className="text-textDark leading-relaxed text-justify md:text-left mb-6 font-body">
                              MKT RUGS evolved from MAKATURBIDS, founded in 2008
                              by Mr. Prabir Sarkar on the banks of the Hooghly
                              River. What began with a single loom in Howrah has
                              grown into an integrated platform serving five
                              continents. We transform field-fed Banarasi jute
                              through biomass-powered facilities, delivering
                              premium natural fibre products with 35% faster FOB
                              dispatch to B2B clients worldwide.
                            </p>

                            <div className="mb-6 flex justify-center md:justify-start">
                              <Button
                                variant="secondary"
                                className="flex items-center space-x-2"
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

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                              <img
                                src="/images/03.jpg"
                                alt="Product thumbnail 1"
                                className="rounded-lg shadow-sm hover:shadow-md hover:scale-105 cursor-pointer transition-all duration-300"
                              />
                              <img
                                src="/images/04.jpg"
                                alt="Product thumbnail 2"
                                className="rounded-lg shadow-sm hover:shadow-md hover:scale-105 cursor-pointer transition-all duration-300"
                              />
                              <img
                                src="/images/05.jpg"
                                alt="Product thumbnail 3"
                                className="rounded-lg shadow-sm hover:shadow-md hover:scale-105 cursor-pointer transition-all duration-300"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section id="contact" className="py-12 md:py-16 bg-bgLight">
                      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-textDark mb-4">
                          Get In Touch
                        </h2>
                        <p className="font-body text-lg text-textDark mb-8 leading-relaxed">
                          Experience the journey from farm to floor. Connect
                          with our team for transparent costing, multiple labs
                          capability, and immediate market clearances across
                          five continents.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <button
                            type="button"
                            onClick={scrollToFooter}
                            className=" px-6 py-3 rounded-full bg-gold text-secondary font-body hover:bg-gold/90 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                            aria-label="Contact us"
                          >
                            Contact Us
                          </button>
                        </div>
                      </div>
                    </section>
                  </>
                }
              />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/products" element={<Product />} />
              <Route path="/enquiry" element={<Enquiry />} />
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
